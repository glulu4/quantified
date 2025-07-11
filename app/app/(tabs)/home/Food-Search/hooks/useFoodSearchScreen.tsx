import {useMemo, useCallback, useState, Dispatch, SetStateAction, useEffect} from "react";
import {useFoodApi} from "./useFoodApi";
import {getAllItems, StatusItem} from "@/types/status-item";
import {Food, FoodCombination, FoodItemStatus, FoodItemType, FoodItem, UserFood} from "@/types/food";
import {EditedFood, useSelectedApiFoods} from "./useSelectedFoods";
import {useNutritionItems} from "@/hooks/useNutritionItems";
import {ApiFood} from "@/services/foodDataApiTypes";
import {convertApiFood2Food} from "../utils/util";
import {usePackStatesStore} from "../../Form-Submit/stores/useStore";
import {NutritionPackState, NutritionState} from "@/types/store-types";
import {MetricPackType} from "@/types/coremetric-pack";


export type ApiFoodManager = {
    selectedApiFoods: EditedFood[];
    isApiFoodSelected: (food: ApiFood) => boolean;
    toggleApiFood: (food: ApiFood) => void;
    detailApiFood: EditedFood | null;
    openApiFoodDetail: (food: ApiFood) => void;
    updateApiFoodDetail: (patch: Partial<EditedFood>) => void;
    // editedMap: Record<string, EditedFood>;
}


export type FoodItemManager = {
    foodMap: Map<string, StatusItem<Food>>;
    userFoodMap: Map<string, StatusItem<UserFood>>;
    foodCombinationMap: Map<string, StatusItem<FoodCombination>>;

    addFoodItem: (item: FoodItem, status: FoodItemStatus) => void;
    removeFoodItem: (item: FoodItem) => void;
    updateFoodItem: (item: FoodItem) => void;
    toggleFoodItem: (item: FoodItem, status?: FoodItemStatus) => void;

    isFoodItemSelected: (item: FoodItem) => boolean;

    allSelectedFoodItems: FoodItem[];

    // optional: if you’re using editing support too
    openFoodItemDetail?: (item: FoodItem) => void;
    updateFoodItemDetail?: (patch: Partial<FoodItem>) => void;
    detailFoodItem?: FoodItem | null;
    userQueriedFoodItemsLoading: boolean;
    // allQueriedFoodItems: FoodItem[];
    allFoodsItems: FoodItem[];
}


type MapSetter<T> = Dispatch<SetStateAction<Map<string, StatusItem<T>>>>;

function addToMap<T extends FoodItem>(
    map: Map<string, StatusItem<T>>,
    setMap: MapSetter<T>,
    item: T,
    status: FoodItemStatus
) {

    setMap((prev) => {
        const next = new Map(prev);
        next.set(item.id, {value: item, status});
        return next;
    });
}

function removeFromMap<T extends FoodItem>(
    map: Map<string, StatusItem<T>>,
    setMap: MapSetter<T>,
    item: T
) {
    setMap((prev) => {
        const next = new Map(prev);
        next.delete(item.id);
        return next;
    });
}

function updateInMap<T extends FoodItem>(
    map: Map<string, StatusItem<T>>,
    setMap: MapSetter<T>,
    item: T
) {
    setMap((prev) => {
        const next = new Map(prev);
        const existing = next.get(item.id);
        if (existing) {
            next.set(item.id, {value: item, status: "updated"});
        }
        return next;
    });
}



export function useFoodSearchScreen(uid: string, packId: string) {
    // 1) Search API
    // const {searchValue, setSearchValue, foodResults: apiFoods, loading: apiLoading} = useFoodApi();

    // 2) “In‑flight” API‐food selection + edits
    const {
        selectedFoods: selectedApiFoods,
        isApiFoodSelected,
        toggleFood: toggleApiFood,
        detailFood: detailApiFood,
        openDetail: openApiFoodDetail,
        updateDetail: updateApiFoodDetail,
    } = useSelectedApiFoods();



    const [foodMap, setFoodMap] = useState<Map<string, StatusItem<Food>>>(new Map());
    const [userFoodMap, setUserFoodMap] = useState<Map<string, StatusItem<UserFood>>>(new Map());
    const [foodCombinationMap, setFoodCombinationMap] = useState<Map<string, StatusItem<FoodCombination>>>(new Map());


    const {nutritionItems: queriedUserFoodItems, error, loading: userQueriedFoodItemsLoading} = useNutritionItems(uid);
    const [editedQueriedFoodItemsMap, setEditedQueriedFoodItemsMap] = useState<Record<string, FoodItem>>({});


    const [deletedFoodItemIds, setDeletedFoodItemIds] = useState<Set<string>>(new Set<string>());

    useEffect(() => {

        if (!userQueriedFoodItemsLoading) {
            const foods = queriedUserFoodItems?.foods || [];
            const userFoods = queriedUserFoodItems?.userFoods || [];
            const foodCombinations = queriedUserFoodItems?.foodCombinations || [];

            const combinedItems = [
                ...foods,
                ...userFoods,
                ...foodCombinations,
            ];

            combinedItems.forEach(item => {
                setEditedQueriedFoodItemsMap(prev => ({
                    ...prev,
                    [item.id]: item,
                }));
            });

        }

    }, [userQueriedFoodItemsLoading])

    // load queried foods into the map


    // store the queired foods, 
    const updateQueriedFoodItem = useCallback((item: FoodItem) => {
        setEditedQueriedFoodItemsMap(prev => ({
            ...prev,
            [item.id]: item,
        }));
    }, []);


    // Syncs the stores nutrition pack state with the local state
    useEffect(() => {

        console.log("Syncing pack state with local state on mount");

        const packState = usePackStatesStore.getState().getPackState<NutritionPackState>(packId, MetricPackType.Nutrition);
        if (packState) {
            const {foods, userFoods, foodCombinations} = packState.data;
            console.log("Data to be loaded into state: ");
            console.log("Foods: ", foods);
            console.log("User Foods: ", userFoods);
            console.log("Food Combinations: ", foodCombinations);

            setFoodMap(foods);
            setUserFoodMap(userFoods);
            setFoodCombinationMap(foodCombinations);
        }

    }, [])

    function syncStateWithPackStore() {

        console.log("Syncing state with pack store on exit");

        const apiFoods: Food[] = convertApiFood2Food(apiFoodManager.selectedApiFoods, uid);

        for (const food of apiFoods) {
            addToMap(foodMap, setFoodMap, food, "new");
        }

        // creating a new map because setting state directly is async, inititalizing it with the current state
        const localFoodMap: Map<string, StatusItem<Food>> = new Map(foodMap);
        apiFoods.forEach((food, idx) => {
            localFoodMap.set(food.id, {value: food, status: "new"});
        });


        const updatedNutritionState: Partial<NutritionState> = {
            foods: localFoodMap,
            userFoods: new Map(userFoodMap),
            foodCombinations: new Map(foodCombinationMap),
        };
        usePackStatesStore.getState().updatePackState(packId, updatedNutritionState);
        console.log("Pack state updated with foods");
    }
    // 1. Get all items from the store


    const addFoodItem = useCallback(
        (item: FoodItem, status: FoodItemStatus) => {
            switch (item.type) {
                case FoodItemType.Food:

                    console.log("in add food, Adding food item ", item.name);
                    addToMap(foodMap, setFoodMap, item as Food, status);
                    break;
                case FoodItemType.UserFood:
                    addToMap(userFoodMap, setUserFoodMap, item as UserFood, status);
                    break;
                case FoodItemType.FoodCombination:
                    addToMap(foodCombinationMap, setFoodCombinationMap, item as FoodCombination, status);
                    break;
            }
        },
        [foodMap, userFoodMap, foodCombinationMap]
    );

    const removeFoodItem = useCallback(
        (item: FoodItem) => {
            console.log("Removing food item:", item.name, "of type:", item.type);

            // Check if this item is in the maps (committed items)
            const isInMaps = foodMap.has(item.id) || userFoodMap.has(item.id) || foodCombinationMap.has(item.id);

            if (isInMaps) {
                // Remove from maps as before
                switch (item.type) {
                    case FoodItemType.Food:
                        removeFromMap(foodMap, setFoodMap, item as Food);
                        break;
                    case FoodItemType.UserFood:
                        removeFromMap(userFoodMap, setUserFoodMap, item as UserFood);
                        break;
                    case FoodItemType.FoodCombination:
                        removeFromMap(foodCombinationMap, setFoodCombinationMap, item as FoodCombination);
                        break;
                }
            } else {
                // This is a queried item - add to removed set
                console.log("Adding queried item to removed set:", item.id);
                setDeletedFoodItemIds(prev => new Set(prev).add(item.id));

                // Also remove from edited map if it exists there
                setEditedQueriedFoodItemsMap(prev => {
                    const next = {...prev};
                    delete next[item.id];
                    return next;
                });
            }
        },
        [foodMap, userFoodMap, foodCombinationMap]
    );



    const updateFoodItem = useCallback((item: FoodItem) => {
        switch (item.type) {
            case FoodItemType.Food:
                updateInMap(foodMap, setFoodMap, item as Food);
                break;
            case FoodItemType.UserFood:
                updateInMap(userFoodMap, setUserFoodMap, item as UserFood);
                break;
            case FoodItemType.FoodCombination:
                updateInMap(foodCombinationMap, setFoodCombinationMap, item as FoodCombination);
                break;
        }

        // update the queried food item
        updateQueriedFoodItem(item);
    }, [foodMap, userFoodMap, foodCombinationMap]);

    const toggleFoodItem = useCallback(
        (item: FoodItem, status?: FoodItemStatus) => {

            console.log("Toggling food item:", item.id, "with status:", status);

            console.log("item type:", item.type);



            switch (item.type) {
                case FoodItemType.Food: {
                    const exists = foodMap.has(item.id);
                    if (exists) {
                        // remove if already present
                        removeFoodItem(item as Food);
                    } else {
                        // reuse old status if somehow in map, else provided status, else "new"
                        const old = foodMap.get(item.id)?.status;
                        const s = status ?? old ?? "new";

                        console.log("Adding food item ", item.name);
                        addFoodItem(item as Food, s);
                    }
                    break;
                }
                case FoodItemType.UserFood: {
                    const exists = userFoodMap.has(item.id);
                    if (exists) {
                        removeFoodItem(item as UserFood);
                    } else {
                        const old = userFoodMap.get(item.id)?.status;
                        const s = status ?? old ?? "new";
                        addFoodItem(item as UserFood, s);
                    }
                    break;
                }
                case FoodItemType.FoodCombination: {
                    const exists = foodCombinationMap.has(item.id);
                    if (exists) {
                        removeFoodItem(item as FoodCombination);
                    } else {
                        const old = foodCombinationMap.get(item.id)?.status;
                        const s = status ?? old ?? "new";
                        addFoodItem(item as FoodCombination, s);
                    }
                    break;
                }
            }
        },
        [
            foodMap,
            userFoodMap,
            foodCombinationMap,
            addFoodItem,
            removeFoodItem,
        ]
    );

    // — NEW: isFoodItemSelected — checks presence in the right map —
    const isFoodItemSelected = useCallback(
        (item: FoodItem): boolean => {


            if (deletedFoodItemIds.has(item.id)) {
                return false;
            }
            switch (item.type) {
                case FoodItemType.Food:
                    return foodMap.has(item.id);
                case FoodItemType.UserFood:
                    return userFoodMap.has(item.id);
                case FoodItemType.FoodCombination:
                    return foodCombinationMap.has(item.id);
                default:
                    return false;
            }
        },
        [foodMap, userFoodMap, foodCombinationMap]
    );

    const apiFoodManager: ApiFoodManager = useMemo(() => {
        return {
            selectedApiFoods,
            isApiFoodSelected,
            toggleApiFood,
            detailApiFood,
            openApiFoodDetail,
            updateApiFoodDetail,
        };
    }, [
        selectedApiFoods.length,
        isApiFoodSelected,
        toggleApiFood,
        detailApiFood,
        openApiFoodDetail,
        updateApiFoodDetail,
    ]);

    const allSelectedFoodItems = useMemo(() => {
        return [
            ...getAllItems(foodMap),
            ...getAllItems(userFoodMap),
            ...getAllItems(foodCombinationMap),
        ];
    }, [foodMap.size, userFoodMap.size, foodCombinationMap.size]);


    const allFoodsItems = useMemo(() => {
        const queriedItems = [
            ...(queriedUserFoodItems?.foods || []),
            ...(queriedUserFoodItems?.userFoods || []),
            ...(queriedUserFoodItems?.foodCombinations || []),
        ];



        const mergedMap = new Map<string, FoodItem>();

        // 1. Add committed items from Zustand state maps
        getAllItems(foodMap).forEach((item) => mergedMap.set(item.id, item));
        getAllItems(userFoodMap).forEach((item) => mergedMap.set(item.id, item));
        getAllItems(foodCombinationMap).forEach((item) => mergedMap.set(item.id, item));

        // 2. Add any session edits
        Object.entries(editedQueriedFoodItemsMap).forEach(([id, item]) => {
            mergedMap.set(id, item);
        });

        // 3. Fill in remaining from backend query
        queriedItems.forEach((item) => {

            // Only add if not already in mergedMap and not deleted
            if (!mergedMap.has(item.id) && !deletedFoodItemIds.has(item.id)) {

                console.log("Adding queried item to merged map:", item.id, item.name);

                mergedMap.set(item.id, item);
            }
        });

        return Array.from(mergedMap.values());
    }, [
        foodMap.size,
        userFoodMap.size,
        foodCombinationMap.size,
        editedQueriedFoodItemsMap,
        queriedUserFoodItems
    ]);




    const foodItemManager: FoodItemManager = {
        foodMap,
        userFoodMap,
        foodCombinationMap,
        addFoodItem,
        removeFoodItem,
        updateFoodItem,
        toggleFoodItem,
        isFoodItemSelected,
        allSelectedFoodItems,
        userQueriedFoodItemsLoading,
        allFoodsItems,
    }

    // const foodItemManager: FoodItemManager = useMemo(() => {
    //     return {
    //         foodMap,
    //         userFoodMap,
    //         foodCombinationMap,
    //         addFoodItem,
    //         removeFoodItem,
    //         updateFoodItem,
    //         toggleFoodItem,
    //         isFoodItemSelected,
    //         allSelectedFoodItems,
    //         userQueriedFoodItemsLoading,
    //         allFoodsItems,
    //     };
    // }
    //     , [
    //         foodMap.size,
    //         userFoodMap.size,
    //         foodCombinationMap.size,
    //         addFoodItem,
    //         removeFoodItem,
    //         updateFoodItem,
    //         toggleFoodItem,
    //         isFoodItemSelected,
    //         allSelectedFoodItems.length,
    //         userQueriedFoodItemsLoading,
    //         allFoodsItems.length,

    //     ]);




    return {
        apiFoodManager,
        foodItemManager,
        syncStateWithPackStore
    };
}


