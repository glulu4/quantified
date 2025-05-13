import {usdaNutrientToMetricMap} from "@/constants/api-nutrient-2-metricdef";
import {EditedFood} from "../hooks/useSelectedFoods";
import * as Crypto from 'expo-crypto';
import {Timestamp} from 'firebase/firestore';
import {ApiFood, FoodNutrient} from "@/services/foodDataApiTypes";
import {Food, FoodItemType, USDANutrient} from "@/types/food";


export function convertApiFood2Food(apiFoods: EditedFood[], uid: string): Food[] {


    const res: Food[] = apiFoods.map(apiFood => {
        const nutrients = extractCoreNutrition(apiFood);

        return {
            id: Crypto.randomUUID(),
            fdcId: apiFood.fdcId,
            uid: uid,
            name: renderFoodDescription(apiFood),
            brandOwner: apiFood?.brandOwner ?? '',
            mealIds: [],
            type: FoodItemType.Food,
            nutrients,
            numServings: apiFood.numServings ?? 1, // default to 1
            servingSize: getHouseholdServing(apiFood),
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
            deletedAt: null,

        } //as Food;
    })
    return res;
}

/**
 * 
 * @param apiFood food to extract core nutrition from
 * 
 * @returns record of core metric id -> nutrient
 */
export function extractCoreNutrition(apiFood: ApiFood): Record<string, USDANutrient> {


    console.log("in extractCoreNutrition");

    const nutrients: Record<string, USDANutrient> = {};

    for (const nutrient of apiFood.foodNutrients) {

        // if this nutrinet exist in the mapping, we want it, if it doesn't we don't
        const coreMetricId = usdaNutrientToMetricMap[nutrient.nutrientId];
        if (coreMetricId) {

            nutrients[coreMetricId] = {
                coreMetricId,
                usdaId: nutrient.nutrientId,
                name: nutrient.nutrientName,
                value: nutrient.value,
                unit: nutrient.unitName,
                percentDailyValue: nutrient.percentDailyValue,
                indentLevel: nutrient.indentLevel,
                rank: nutrient.rank,
            };

        }
    }

    return nutrients;
}

export function getHouseholdServing(apiFood: ApiFood): string {
    const text = apiFood.householdServingFullText;

    if (!text) {
        return '';
    }
    return text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function renderFoodDetails(food: ApiFood) {

    const nutrients = food.foodNutrients;
    // From map
    const kcal: FoodNutrient | undefined = nutrients.find(n => n.nutrientId === 1008);

    if (kcal) {
        return `${kcal.value} cal ${getHouseholdServing(food)}`;
    }

}

export function renderFoodDescription(food: ApiFood) {
    const brand = food.brandOwner;
    // const ds = food.dataSource;
    const description = food.description.charAt(0).toUpperCase() + food.description.slice(1).toLowerCase();

    if (brand) {
        return `${(description)} (${brand})`;
    }
    else {
        return description;
    }
}

// "protein", "total_fat", "total_carbohydrates"

export const DAILY_VALUES = {
    protein: 50,
    total_carbohydrates: 275,
    total_fat: 78,
};

export function percentDV(grams: number = 0, nutrient: keyof typeof DAILY_VALUES): number {
    return +(grams / DAILY_VALUES[nutrient] * 100).toFixed(1);
}






