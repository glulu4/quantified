import {ApiFood} from "../services/foodDataApiTypes";
import {CoreMetric} from "./core-metric";
import {Timestamp} from '@google-cloud/firestore';
import {FormDefinition, MetricDefinition, MetricSubmission} from "./formdefinition";


export interface NutritionFormDefinition extends FormDefinition {
    todaysSubmissions: MetricSubmission[];
}

export interface NutritionMetricDefinition extends Omit<MetricDefinition, "dropdownOptions"> {
    metricTitle: NutritionCoreMacro;
    target: number;
}

export interface NutritionCoreMetric extends CoreMetric {
    defaultTitle: NutritionCoreMacro;
    defaultTarget: number;
}

export enum NutritionCoreMacro {
    CALORIES = "Calories",
    PROTEIN = "Protein",
    FAT = "Fat",
    CARBS = "Carbs"
}

export type FoodItem = {
    food: Pick<ApiFood, "fdcId" | "servingSize" | "servingSizeUnit" | "description" | "brandOwner">;
    count: number;
    macros: Record<NutritionCoreMacro, number>; // macros already adjusted for serving size
};

export type Meal = {
    uid: string;
    id: string;
    title: string;
    foods: FoodItem[];
    createdAt: Timestamp;
    deletedAt?: Timestamp;

}
