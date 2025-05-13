import {MealTime} from "@/types/food";
import {NutritionState} from "../../../../../types/store-types";

export const initialNutritionState: NutritionState = {

    foods: new Map(),
    userFoods: new Map(),
    foodCombinations: new Map(),
    mealTime: MealTime.Breakfast,
}

export const initialSleepState = {
    hours: 0,
    quality: 0,
};


