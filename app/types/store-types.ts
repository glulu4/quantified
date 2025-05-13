import {StatusItem} from "./status-item";
import {MetricPackType} from "./core-metric";
import {Food, FoodCombination, MealTime, UserFood} from "./food";


export interface NutritionState {
    foods: Map<string, StatusItem<Food>>;
    userFoods: Map<string, StatusItem<UserFood>>;
    foodCombinations: Map<string, StatusItem<FoodCombination>>;
    mealTime: MealTime
}

export type NutritionPackItems = {
    foods: Food[];
    userFoods: UserFood[];
    foodCombinations: FoodCombination[];
};

// Demo state, not real
export interface SleepState {
    hours: number;
    quality: number;
}

export interface NutritionPackState {
    type: MetricPackType.Nutrition;
    data: NutritionState;
}

export interface SleepPackState {
    type: MetricPackType.Sleep;
    data: SleepState;
}

export type PackState = NutritionPackState | SleepPackState;
export type PackStatesRecord = Record<string, PackState>;