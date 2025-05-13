import {useCallback, useMemo, useRef, useState} from 'react';
import {ApiFood} from '@/services/foodDataApiTypes';
import {Food, FoodItem, UserFood} from '@/types/food';
import {ApiFoodManager} from './useFoodSearchScreen';
import BottomSheet from '@gorhom/bottom-sheet';

export function useFoodBottomSheetManager(apiFoodManager: ApiFoodManager) {
    const [foodItem, setFoodItem] = useState<FoodItem | null>(null);
    const [currentEditFoodItem, setCurrentEditFoodItem] = useState<UserFood | Food | undefined>(undefined);


    const apiFoodBSRef = useRef<BottomSheet>(null);
    const foodItemBSRef = useRef<BottomSheet>(null);
    const selectedFoodBSRef = useRef<BottomSheet>(null);
    const userFoodBottomSheetRef = useRef<BottomSheet>(null);

    const handleOpenFoodItemSheet = useCallback(
        (item: FoodItem) => {
            setFoodItem(item);
            foodItemBSRef.current?.expand();
        },
        []
    );

    const handleOpenApiFoodSheet = useCallback(
        (food: ApiFood) => {
            apiFoodManager.openApiFoodDetail(food);
            apiFoodBSRef.current?.expand();
        },
        [apiFoodManager]
    );



    const handleUserFoodBottomSheet = useCallback(
        (item: UserFood | Food | undefined) => {
            setCurrentEditFoodItem(item);
            userFoodBottomSheetRef.current?.expand();
        },
        []
    );

    const clearFood = useCallback(() => {
        setCurrentEditFoodItem(undefined);
    }, []);

    const bottomSheetRefs = useMemo(() => ({
        apiFoodBSRef,
        foodItemBSRef,
        selectedFoodBSRef,
        userFoodBottomSheetRef,
    }), []);


    return {
        foodItem,
        setFoodItem,
        currentEditFoodItem,
        setCurrentEditFoodItem,
        handleOpenFoodItemSheet,
        handleOpenApiFoodSheet,
        handleUserFoodBottomSheet,
        clearFood,

        bottomSheetRefs
    };
}
