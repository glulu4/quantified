import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native'
import React, {useRef, useState} from 'react'
import clsx from 'clsx';
import {ThemedText} from '@/components/ui/ThemedText';
import {useNavigation} from 'expo-router';
import {HomeStackNavigationType} from '../../../_layout';
import {usePackStatesStore} from '../../stores/useStore';
import {useThemeColor} from '@/hooks/useThemeColor';
import {List, Row} from 'react-native-ios-list';
import {SFSymbol} from 'react-native-sfsymbols';
import {addFoodCombo2PackState, gatherNutrients, removeFoodsFromState, renderFoodDetails} from '../../utils/food-util';
import {MetricPackDefinition} from '@/types/formdefinition';
import PlusCircle from '@/components/ui/PlusCircle';
import {getAllItems, getNewItems, StatusItem} from '@/types/status-item';
import BottomSheet from '@gorhom/bottom-sheet';
import {Portal} from 'react-native-paper';
import FoodBottomSheet from '../FoodBottomSheet';
import {NutritionState} from '../../../../../../types/store-types';
import ThemedView from '@/components/ThemedView';
import Selector from '@/components/ui/Selector';
import MealBottomSheet from '../MealBottomSheet';
import {Timestamp} from 'firebase/firestore';
import {useAuthenticatedUser} from '@/app/context/AuthContext';
import * as Crypto from 'expo-crypto';
import MixedFoodList from './MixedFoodList';
import {FoodItem, Food, FoodCombination, FoodItemType, MealTime, UserFood} from '@/types/food';
import {useNutritionPackState} from '../../hooks/useNutritionPackState';
import {MetricPackType} from '@/types/coremetric-pack';
// import FoodList, {FoodItem} from './FoodList';
export default function NutritionPack({
    pack
}: {
    pack: MetricPackDefinition
}) {

    const navigation = useNavigation<HomeStackNavigationType>();
    const packState = usePackStatesStore((state) =>
        state.packStates[pack.id] && state.packStates[pack.id].type === MetricPackType.Nutrition
            ? state.packStates[pack.id].data
            : undefined
    ) as NutritionState | undefined;

    const separatorColor = useThemeColor({}, "systemGray4");
    const backgroundColor = useThemeColor({}, "bgSecondary");
    const blue = useThemeColor({}, "blue");
    const [mealTime, setMealTime] = useState<string>(MealTime.Breakfast);
    const [bottomSheetItem, setBottomSheetItem] = useState<FoodItem | null>(null);
    const foodDetailBottomSheetRef = useRef<BottomSheet>(null);
    const mealTimeBottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = ['80%'];
    const user = useAuthenticatedUser()

    const {deleteItem, updateItem} = useNutritionPackState(pack.id);


    if (!packState) {
        return null;
    }

    const packStateData = packState;
    const foodsMap: Map<string, StatusItem<Food>> = packStateData.foods;
    const userFoodsMap: Map<string, StatusItem<UserFood>> = packStateData.userFoods;
    const foodCombinationsMap: Map<string, StatusItem<FoodCombination>> = packStateData.foodCombinations;
    const updatePackState = usePackStatesStore.getState().updatePackState;

    /**
     * Get all the foods, userFoods, and foodCombinations
     * Nothing in here because we just initialized the maps
     */
    const foods = getAllItems(foodsMap);
    const userFoods = getAllItems(userFoodsMap);
    const foodCombinations = getAllItems(foodCombinationsMap);
    console.log("foods: ", foods);
    console.log("foodCombinations: ", foodCombinations);
    console.log("userFoods: ", JSON.stringify(userFoods, null, 2));

    const allItems: FoodItem[] = [...foodCombinations, ...foods, ...userFoods];


    function handleMealTimeChange(selected: string) {
        setMealTime(selected);
        mealTimeBottomSheetRef.current?.close();

        updatePackState(pack.id, {
            ...packState,
            mealTime: selected as MealTime,
        });


    }

    function handleCreateCombo() {
        Alert.prompt(
            'Create Food Combo',
            'Enter a name for the food combo',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: (input) => {
                        if (!input) {
                            return;
                        }
                        // Retrieve fresh food data from the store
                        const foods: Map<string, StatusItem<Food>> = usePackStatesStore.getState().getFoods(pack.id);
                        const userFoods: Map<string, StatusItem<UserFood>> = usePackStatesStore.getState().getUserFoods(pack.id);

                        const foodArray = getAllItems(foods);
                        const userFoodArray = getAllItems(userFoods);

                        const totalNutrients = gatherNutrients(foodArray, userFoodArray);
                        const newFoodCombination: FoodCombination = {
                            id: Crypto.randomUUID(),
                            uid: user.uid,
                            name: input,
                            foods: foodArray,
                            userFoods: userFoodArray,
                            type: FoodItemType.FoodCombination,
                            mealTime: packStateData.mealTime,
                            totalNutrition: totalNutrients,
                            createdAt: Timestamp.now(),
                            updatedAt: null,
                            deletedAt: null,
                            timesUsed: 0,
                            favorite: false,
                        };

                        console.log("newFoodCombination: ", newFoodCombination);

                        /**
                         * Add food combo to state, 
                         * remove the foods and user foods from state
                         */
                        // Continue with updating the state or any other processing needed
                        addFoodCombo2PackState(pack.id, newFoodCombination);
                        removeFoodsFromState(pack.id, foodArray, userFoodArray);

                    },
                },
            ],
            'plain-text'
        );
    }
    const openBottomSheet = (item: FoodItem) => {
        console.log("openning bottom sheet");
        setBottomSheetItem(item);
        foodDetailBottomSheetRef.current?.expand();
    }

    function renderUI() {
        return (
            <View
                className="flex flex-1 flex-col gap-8 p-3 justify-between"
            >

                <View className="flex flex-1">
                    <TouchableOpacity onPress={() => mealTimeBottomSheetRef.current?.expand()}>
                        <Selector

                            value={mealTime}
                        />

                    </TouchableOpacity>
                </View>

                {(foods.length === 0 && userFoods.length === 0 && foodCombinations.length === 0) ?
                    noFoodView
                    :
                    <>
                        <MixedFoodList
                            scrollEnabled={false}
                            items={allItems}
                            onPressItem={openBottomSheet}
                            backgroundColor={backgroundColor}
                            dividerColor={separatorColor}
                        />

                        <TouchableOpacity
                            onPress={handleCreateCombo}
                            className="p-5 pt-7"
                        >
                            <ThemedText type="callout" className="text-blue-light dark:text-blue-dark">
                                Create Combo
                            </ThemedText>
                        </TouchableOpacity>
                    </>
                }
            </View >
        )
    }

    const goToFoodSearch = () => navigation.navigate('Food-Search/FoodSearch', {packId: pack.id});
    // if there are no foods selected, show the add food button

    const noFoodView = (
        <TouchableOpacity
            onPress={goToFoodSearch}
        >
            <View
                className={clsx('min-h-[70px] flex flex-row items-center justify-center rounded-xl ',
                    "bg-tintedButtonFill-light dark:bg-tintedButtonFill-dark ",

                )}
            >
                <ThemedText emphasized className='text-blue-light dark:text-blue-dark'>
                    Add food
                </ThemedText>
            </View>
        </TouchableOpacity>
    )
    return (
        <View className='py-4 flex flex-col'>
            <View className='mb-4 ml-2 flex flex-row justify-between items-end'>
                <ThemedText labelType='primary' type='title3' emphasized>
                    {pack.title}
                </ThemedText>
                <TouchableOpacity
                    onPress={goToFoodSearch}
                    className='pr-2'
                >
                    <PlusCircle color={blue} selected={true} />
                </TouchableOpacity>
            </View>
            <ThemedView className='flex p-2 rounded-xl mb-3' backGroundLevel='bgSecondary'>
                {renderUI()}
            </ThemedView>
            <Portal>
                <FoodBottomSheet
                    handleDelete={deleteItem}
                    handleEdit={updateItem}
                    item={bottomSheetItem}
                    bottomSheetRef={foodDetailBottomSheetRef}
                    snapPoints={snapPoints}
                    packId={pack.id}
                    showDelete={true}
                    showEdit={false}

                />
            </Portal>


            <Portal>
                <MealBottomSheet
                    bottomSheetRef={mealTimeBottomSheetRef}
                    snapPoints={snapPoints}
                    options={Object.values(MealTime)}
                    handleSelect={(selected) => {
                        handleMealTimeChange(selected);
                    }}
                />
            </Portal>
        </View>

    )
}