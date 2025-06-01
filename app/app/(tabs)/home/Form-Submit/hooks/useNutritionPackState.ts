import {usePackStatesStore} from "../../Form-Submit/stores/useStore";
import {NutritionPackState} from "../../../../../types/store-types";
import {StatusItem} from "@/types/status-item";
import {useCallback} from "react";
import {FoodItem, Food, FoodCombination, FoodItemType, UserFood, FoodItemStatus} from "@/types/food";
import {MetricPackType} from "@/types/coremetric-pack";

export function useNutritionPackState(packId: string) {
    // Subscribe to the current nutrition pack state
    const nutritionPackState = usePackStatesStore((state) =>
        state.getPackState<NutritionPackState>(packId, MetricPackType.Nutrition)
    );

    // Also get the update function in a reactive way.
    const updatePackState = usePackStatesStore((state) => state.updatePackState);



    const updateItem = useCallback(
        (item: FoodItem) => {
            if (!nutritionPackState) return;

            // Get the current status from the existing item
            // let currentStatus: FoodItemStatus = "new";

            switch (item.type) {
                case FoodItemType.Food: {
                    const updatedFoods = new Map(nutritionPackState.data.foods);
                    const existingItem = updatedFoods.get(item.id);
                    if (existingItem) {
                        updatedFoods.set(item.id, {value: item, status: "updated"} as StatusItem<Food>);
                        updatePackState(packId, {foods: updatedFoods});
                    }
                    break;
                }
                case FoodItemType.UserFood: {
                    const updatedUserFoods = new Map(nutritionPackState.data.userFoods);
                    const existingItem = updatedUserFoods.get(item.id);
                    if (existingItem) {
                        updatedUserFoods.set(item.id, {value: item as UserFood, status: "updated"} as StatusItem<UserFood>);
                        updatePackState(packId, {userFoods: updatedUserFoods});
                    }
                    break;
                }
                case FoodItemType.FoodCombination: {
                    const updatedFoodCombos = new Map(nutritionPackState.data.foodCombinations);
                    const existingItem = updatedFoodCombos.get(item.id);
                    if (existingItem) {
                        updatedFoodCombos.set(item.id, {value: item, status: "updated"} as StatusItem<FoodCombination>);
                        updatePackState(packId, {foodCombinations: updatedFoodCombos});
                    }
                    break;
                }
                default:
                    console.error("Unknown item type in updateItem");
            }
        },
        [nutritionPackState, packId, updatePackState]
    );


    // Append items to the current pack state. This function now uses the fresh, subscribed pack.
    const appendItems = useCallback(
        (items: FoodItem[], status: FoodItemStatus) => {
            if (!nutritionPackState || items.length === 0) return;

            switch (items[0].type) {
                case FoodItemType.Food: {
                    const updatedFoods = new Map(nutritionPackState.data.foods);
                    items.forEach((item) => {
                        updatedFoods.set(item.id, {value: item, status} as StatusItem<Food>);
                    });
                    updatePackState(packId, {foods: updatedFoods});
                    break;
                }
                case FoodItemType.UserFood: {
                    const updatedUserFoods = new Map(nutritionPackState.data.userFoods);
                    items.forEach((item) => {
                        updatedUserFoods.set(item.id, {value: item, status} as StatusItem<UserFood>);
                    });
                    updatePackState(packId, {userFoods: updatedUserFoods});
                    break;
                }
                case FoodItemType.FoodCombination: {
                    const updatedFoodCombos = new Map(nutritionPackState.data.foodCombinations);
                    items.forEach((item) => {
                        updatedFoodCombos.set(item.id, {value: item, status} as StatusItem<FoodCombination>);
                    });
                    updatePackState(packId, {foodCombinations: updatedFoodCombos});
                    break;
                }
                default:
                    console.error("Unknown item type in appendItems");
            }
        },
        [nutritionPackState, packId, updatePackState]
    );
    const toggleItem = useCallback(
        (item: FoodItem, status: FoodItemStatus) => {
            if (!nutritionPackState) return;
            switch (item.type) {
                case FoodItemType.Food: {
                    const updatedFoods = new Map(nutritionPackState.data.foods);
                    updatedFoods.has(item.id)
                        ? updatedFoods.delete(item.id)
                        : updatedFoods.set(item.id, {value: item, status});
                    updatePackState(packId, {foods: updatedFoods});
                    break;
                }
                case FoodItemType.UserFood: {
                    const updatedUserFoods = new Map(nutritionPackState.data.userFoods);
                    updatedUserFoods.has(item.id)
                        ? updatedUserFoods.delete(item.id)
                        : updatedUserFoods.set(item.id, {value: item, status});
                    updatePackState(packId, {userFoods: updatedUserFoods});
                    break;
                }
                case FoodItemType.FoodCombination: {
                    const updatedCombos = new Map(nutritionPackState.data.foodCombinations);
                    updatedCombos.has(item.id)
                        ? updatedCombos.delete(item.id)
                        : updatedCombos.set(item.id, {value: item, status});
                    updatePackState(packId, {foodCombinations: updatedCombos});
                    break;
                }
                default:
                    console.error("Unknown item type in toggleItem");
            }
        },
        [nutritionPackState, packId, updatePackState]
    );

    // Check if an item is present in the pack state
    const isItemInState = useCallback(
        (item: FoodItem): boolean => {
            if (!nutritionPackState) return false;
            switch (item.type) {
                case FoodItemType.Food:
                    return nutritionPackState.data.foods.has(item.id);
                case FoodItemType.UserFood:
                    return nutritionPackState.data.userFoods.has(item.id);
                case FoodItemType.FoodCombination:
                    return nutritionPackState.data.foodCombinations.has(item.id);
                default:
                    console.error("Unknown item type in isItemInState");
                    return false;
            }
        },
        [nutritionPackState]
    );


    const deleteItem = useCallback((item: FoodItem) => {
        if (!nutritionPackState) return
        const {foods, userFoods, foodCombinations} = nutritionPackState.data
        const cloneMap = (m: Map<string, any>) => new Map(m)
        switch (item.type) {
            case FoodItemType.Food:
                const fmap = cloneMap(foods)
                fmap.delete(item.id)
                updatePackState(packId, {foods: fmap})
                break
            case FoodItemType.UserFood:
                const ufmap = cloneMap(userFoods)
                ufmap.delete(item.id)
                updatePackState(packId, {userFoods: ufmap})
                break
            case FoodItemType.FoodCombination:
                const cfmap = cloneMap(foodCombinations)
                cfmap.delete(item.id)
                updatePackState(packId, {foodCombinations: cfmap})
                break
        }
    }, [nutritionPackState, packId, updatePackState])

    return {appendItems, toggleItem, isItemInState, nutritionPackState, updateItem, deleteItem};
}
