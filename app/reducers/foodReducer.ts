// foodReducer.tsx
import {Food, UserFood, FoodCombination} from "@/services/foodDataApiTypes";
import React, {createContext, useContext, useReducer, ReactNode} from "react";

// --- State Types ---

export const initialState: FoodState = {
    foods: [],
    userFoods: [],
    foodCombinations: []
}

export type FoodState = {
    foods: Food[];
    userFoods: UserFood[];
    foodCombinations: FoodCombination[];
};


export type SleepState = {
    hours: number;
    quality: number;
};

// --- Action Types ---
export type FoodAction =
    | {type: "ADD_FOOD"; payload: Food}
    | {type: "REMOVE_FOOD"; payload: {id: string}}
    | {type: "UPDATE_FOOD_QUANTITY"; payload: {id: string; quantity: number}}
    | {type: "CLEAR_FOODS"}
    | {type: "ADD_USER_FOOD"; payload: UserFood}
    | {type: "REMOVE_USER_FOOD"; payload: {id: string}}
    | {type: "ADD_COMBINATION"; payload: FoodCombination}
    | {type: "REMOVE_COMBINATION"; payload: {id: string}}
    | {type: "UPDATE_COMBINATION"; payload: FoodCombination}
    | {type: "CLEAR_ALL"};

// --- Reducer ---
export function foodReducer(state: FoodState, action: FoodAction): FoodState {
    switch (action.type) {
        case "ADD_FOOD":
            return {...state, foods: [...state.foods, action.payload]};
        case "REMOVE_FOOD":
            return {...state, foods: state.foods.filter(f => f.id !== action.payload.id)};
        case "UPDATE_FOOD_QUANTITY":
            return {
                ...state,
                foods: state.foods.map(f =>
                    f.id === action.payload.id ? {...f, quantity: action.payload.quantity} : f
                )
            };
        case "CLEAR_FOODS":
            return {...state, foods: []};

        case "ADD_USER_FOOD":
            return {...state, userFoods: [...state.userFoods, action.payload]};
        case "REMOVE_USER_FOOD":
            return {...state, userFoods: state.userFoods.filter(f => f.id !== action.payload.id)};

        case "ADD_COMBINATION":
            return {...state, foodCombinations: [...state.foodCombinations, action.payload]};
        case "REMOVE_COMBINATION":
            return {
                ...state,
                foodCombinations: state.foodCombinations.filter(c => c.id !== action.payload.id)
            };
        case "UPDATE_COMBINATION":
            return {
                ...state,
                foodCombinations: state.foodCombinations.map(c =>
                    c.id === action.payload.id ? action.payload : c
                )
            };
        case "CLEAR_ALL":
            return {foods: [], userFoods: [], foodCombinations: []};

        default:
            return state;
    }
}

