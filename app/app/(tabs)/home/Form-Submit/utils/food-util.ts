import {usePackStatesStore} from "../stores/useStore";
import {NutritionPackState} from "../../../../../types/store-types";
import {Food, FoodCombination, FoodItemType, Nutrient, UserFood} from "@/types/food";
import {MetricPackType} from "@/types/coremetric-pack";



export function addFoodCombo2PackState(packId: string, newCombo: FoodCombination) {
    const store = usePackStatesStore.getState();
    const currentPack = store.getPackState<NutritionPackState>(packId, MetricPackType.Nutrition);
    if (!currentPack) return;

    // Clone the existing Map to avoid mutating state directly.
    const updatedFoodCombos = new Map(currentPack.data.foodCombinations);

    // Add the new food combination to the Map
    updatedFoodCombos.set(newCombo.id, {value: newCombo, status: "new"});

    // Update only the foods field of the pack state
    store.updatePackState(packId, {foodCombinations: updatedFoodCombos});
}

export function removeFoodsFromState(packId: string, foods: Food[], userFoods: UserFood[]) {
    const store = usePackStatesStore.getState();
    const currentPack = store.getPackState<NutritionPackState>(packId, MetricPackType.Nutrition);
    if (!currentPack) return;

    // Clone the existing Maps to avoid mutating state directly.
    const updatedFoods = new Map(currentPack.data.foods);
    const updatedUserFoods = new Map(currentPack.data.userFoods);

    // Remove the foods from the Map
    foods.forEach(food => updatedFoods.delete(food.id));
    userFoods.forEach(userFood => updatedUserFoods.delete(userFood.id));

    // Update only the foods field of the pack state
    store.updatePackState(packId, {foods: updatedFoods, userFoods: updatedUserFoods});
}


export function gatherNutrients(foods: Food[], userFoods: UserFood[], foodCombos?: FoodCombination[]): Record<string, Nutrient> {
    const totalNutrients: Record<string, Nutrient> = {};

    // Helper function to add a nutrient to the totalNutrients accumulator.
    function addNutrient(nutrient: Nutrient, multiplier: number) {
        const key = nutrient.coreMetricId;
        const adjustedValue = nutrient.value * multiplier;
        if (totalNutrients[key]) {
            totalNutrients[key].value += adjustedValue;
            // Optionally, you might choose to average or otherwise combine percentDailyValue
            // For now, we'll leave it as the initial value.
        } else {
            // Clone nutrient and apply the multiplier to value.
            totalNutrients[key] = {...nutrient, value: adjustedValue};
        }
    }

    // Process the Food items
    foods.forEach(food => {
        const multiplier = food.numServings || 1;
        Object.values(food.nutrients).forEach(nutrient => {
            addNutrient(nutrient, multiplier);
        });
    });

    // Process the UserFood items (note that UserFood nutrients are Partial)
    userFoods.forEach(userFood => {
        const multiplier = userFood.numServings || 1;
        if (userFood.nutrients) {
            Object.values(userFood.nutrients).forEach(nutrient => {
                if (nutrient) {
                    addNutrient(nutrient, multiplier);
                }
            });
        }
    });

    // Process the FoodCombination items if provided
    if (foodCombos) {
        foodCombos.forEach(combo => {
            // const multiplier = combo. || 1;
            Object.values(combo.totalNutrition).forEach(nutrient => {
                if (nutrient) {
                    addNutrient(nutrient, 1);
                }
            });
        });
    }

    return totalNutrients;
}


export function getProtein(nutrient: Record<string, Nutrient> | Partial<Record<string, Nutrient>>) {
    return nutrient["protein"]?.value ?? 0;
}

export function getCarbs(nutrient: Record<string, Nutrient> | Partial<Record<string, Nutrient>>) {
    return nutrient["total_carbohydrates"]?.value ?? 0;
}
export function getFat(nutrient: Record<string, Nutrient> | Partial<Record<string, Nutrient>>) {
    console.log("in getFat");
    console.log('nutrient["total_fat"]?.value: ', nutrient["total_fat"]?.value);
    return nutrient["total_fat"]?.value ?? 0;
}


export function renderDetails(item: Food | UserFood | FoodCombination) {
    if (item.type === FoodItemType.Food) {
        return renderFoodDetails(item);
    } else if (item.type === FoodItemType.UserFood) {
        return renderUserFoodDetails(item);
    } else if (item.type === FoodItemType.FoodCombination) {
        return renderFoodComboDetails(item);
    }
    return "";
}

export function renderFoodDetails(food: Food) {

    // core metric id -> nutrient
    const nutrients: Record<string, Nutrient> = food.nutrients;
    const kcal: Nutrient = nutrients["calories"];
    const val = kcal.value * food.numServings;
    return `${val} cal, ${food.servingSize}`;
}

export function renderUserFoodDetails(food: UserFood) {
    // core metric id -> nutrient
    const nutrients: Partial<Record<string, Nutrient>> = food.nutrients;
    let kcal: Nutrient | undefined = nutrients["calories"];

    if (!kcal) {
        return "No calories";
    }
    const val = kcal.value * food.numServings;
    return `${val} cal, ${food.servingSize ?? ''}`;
}

export function renderFoodComboDetails(combo: FoodCombination) {
    // core metric id -> nutrient
    const nutrients: Partial<Record<string, Nutrient>> = combo.totalNutrition;
    let kcal: Nutrient | undefined = nutrients["calories"];

    if (!kcal) {
        return "No calories";
    }
    return `${kcal.value} cal`;
}
