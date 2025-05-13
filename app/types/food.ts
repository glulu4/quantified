import {Timestamp} from "firebase/firestore";

export type FoodItem = Food | UserFood | FoodCombination;



export type FoodItemStatus = "new" | "updated" | "old";



export interface Nutrient {
    name: string; // e.g., "Protein"
    coreMetricId: string; // e.g., "protein"
    value: number; // Nutrient value
    unit: string; // e.g., "G", "MG"
}

export interface USDANutrient extends Nutrient {
    usdaId: number;             // e.g., 1003
    percentDailyValue: number;  // %DV, useful for labels
    indentLevel: number;        // For hierarchical nutrients (e.g., total fat → saturated fat)
    rank: number;               // Relative importance/order from USDA
}

export interface UserNutrient extends Nutrient {
    id: string;                // Unique ID for the nutrient
}

export enum FoodItemType {
    Food = "food",
    UserFood = "userFood",
    FoodCombination = "foodCombination",
}


export type Food = {
    id: string; // Unique food ID (your own UUID)
    uid: string; // optional if you're storing per-user
    fdcId: number; // USDA FDC ID
    name: string; // Display name (from USDA's `description`)
    brandOwner?: string; // Optional (only for branded foods)

    // Serving info
    servingSize: string;
    numServings: number; // number of servings logged by user

    // Context
    mealIds: string[]; // which meals this food is part of (e.g. breakfast, lunch)

    type: FoodItemType.Food; // "food", "userFood", "foodCombination"
    // Nutritional breakdown (filtered and mapped)
    nutrients: Record<string, USDANutrient>; // key is coreMetricId (e.g., protein, fat)
    createdAt: Timestamp;
    updatedAt: Timestamp | null;
    deletedAt: Timestamp | null;
};


export enum MealTime {
    Breakfast = "Breakfast",
    Lunch = "Lunch",
    Dinner = "Dinner",
    Snack = "Snack", // optional: add "snack" if needed
}


export type FoodCombination = {
    id: string;
    uid: string;
    name: string;
    foods: Food[];
    type: FoodItemType.FoodCombination;
    userFoods: UserFood[];
    mealTime: MealTime;
    createdAt: Timestamp;
    updatedAt: Timestamp | null;
    deletedAt: Timestamp | null;

    // Optional additions
    timesUsed: number;
    favorite: boolean;
    totalNutrition: Record<string, Nutrient>;
    // portionMultiplier?: number;
    // tags?: string[];
    // visibility?: "private" | "shared";
    // thumbnailUrl?: string;
};


export type UserFood = {
    id: string;           // UUID
    uid: string;          // Who created it
    name: string;         // "Grilled Chicken"
    servingSize?: string; // Optional
    servingSizeUnit?: string; // "g", "oz", etc.
    quantity?: number;    // Default to 1
    type: FoodItemType.UserFood;
    numServings: number; // number of servings logged by user

    nutrients: Partial<Record<string, Nutrient>>; // e.g., { protein: { ... }, calories: { ... } }

    createdAt: Timestamp;
    updatedAt: Timestamp | null;
    deletedAt: Timestamp | null;

};
