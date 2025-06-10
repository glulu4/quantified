import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetWrap from '@/components/BottomSheetWrap';
import {ThemedText} from '@/components/ui/ThemedText';
import {coreNutritionMetrics} from '@/list/nutritionpack';
import * as Crypto from 'expo-crypto';
import {ScrollView} from 'react-native-gesture-handler';
import ThemedView from '@/components/ThemedView';
import ThemedTextInput from '@/components/ui/ThemedTextInput';
import {useAuthenticatedUser} from '@/app/context/AuthContext';
import {Timestamp} from 'firebase/firestore';
import {UserNutrient, FoodItemType, UserFood, Nutrient, USDANutrient, Food, FoodItem, FoodItemStatus} from '@/types/food';


interface UserFoodBottomSheetProps {
    packId: string;
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string[];
    food?: UserFood | Food | undefined; // Optional food for editing mode
    onComplete?: (food: UserFood) => void; // Optional callback when operation is complete
    clearFood: () => void; // Optional callback to clear food
    addFoodItem: (food: FoodItem, status: FoodItemStatus) => void;
    updateItem: (food: FoodItem) => void;
}

/**
 * UserFoodBottomSheet component for adding or editing user food items.
 * If no food is provided, it will be in add mode.
 * If food is provided, it will be in edit mode.
 */
export default function UserFoodBottomSheet({
    bottomSheetRef,
    snapPoints,
    addFoodItem,
    updateItem,
    food,
    onComplete,
    clearFood
}: UserFoodBottomSheetProps) {
    const isEditMode = !!food;

    const coreNutrients: UserNutrient[] = React.useMemo(() => {
        return coreNutritionMetrics.map((metric) => {
            return {
                coreMetricId: metric.id,
                id: Crypto.randomUUID(),
                name: metric.defaultTitle,
                unit: metric.unitTypes[0],
                value: 0,
            };
        });
    }, []);

    const defaultSelectedNutrients = React.useMemo(() =>
        coreNutrients.filter((nutrient) =>
            ['calories', 'total_carbohydrates', 'protein', 'total_fat'].includes(nutrient.coreMetricId)
        ), [coreNutrients]);

    const [foodName, setFoodName] = useState<string>('');
    const [selectedNutrients, setSelectedNutrients] = useState<UserNutrient[]>([]);

    const user = useAuthenticatedUser();
    // const {appendItems, updateItem} = useNutritionPackState(packId);




    useEffect(() => {
        if (!food) return;

        setFoodName(food.name);

        const nutrients: Partial<Record<string, Nutrient>> | Record<string, USDANutrient> = food.nutrients;
        const nutrientArray: UserNutrient[] = [];

        Object.keys(nutrients).forEach(metricId => {
            const nutrient = nutrients[metricId];
            if (nutrient) {
                nutrientArray.push({
                    coreMetricId: metricId,
                    id: Crypto.randomUUID(),
                    name: nutrient.name,
                    unit: nutrient.unit,
                    value: nutrient.value,
                });
            }
        });

        // Ensure core nutrients exist
        defaultSelectedNutrients.forEach(defaultNutrient => {
            if (!nutrientArray.some(n => n.coreMetricId === defaultNutrient.coreMetricId)) {
                nutrientArray.push(defaultNutrient);
            }
        });

        setSelectedNutrients(nutrientArray);
    }, [food]);


    function handleValueChange(value: string, currentNutrient: UserNutrient) {
        // Remove any non-numeric characters (allowing a decimal point)
        const numericValue = value.replace(/[^0-9.]/g, '');
        const parsedValue = parseFloat(numericValue) || 0;

        const newNutrients = selectedNutrients.map((nutrient) => {
            if (nutrient.id === currentNutrient.id) {
                return {...nutrient, value: parsedValue};
            }
            return nutrient;
        });
        setSelectedNutrients(newNutrients);
    }

    function createNutrientRecord(nutrients: UserNutrient[]) {
        const res: Record<string, UserNutrient> = {}
        nutrients.forEach((nutrient) => {
            res[nutrient.coreMetricId] = {
                id: nutrient.id,
                coreMetricId: nutrient.coreMetricId,
                value: nutrient.value,
                unit: nutrient.unit,
                name: nutrient.name,
            }
        });
        return res;
    }

    function saveFood() {
        if (foodName.length === 0) {
            return;
        }
        if (selectedNutrients.length === 0) {
            return;
        }

        if (isEditMode && food) {
            // Update existing food

            let updatedFood: UserFood;
            if (food.type === FoodItemType.UserFood) {
                updatedFood = {
                    ...food,
                    name: foodName,
                    nutrients: createNutrientRecord(selectedNutrients),
                    updatedAt: Timestamp.now(),
                };
            }
            // 
            else {
                updatedFood = {
                    id: food.id,
                    uid: food.uid,
                    type: FoodItemType.UserFood,
                    numServings: food.numServings,
                    createdAt: food.createdAt,
                    name: foodName,
                    nutrients: createNutrientRecord(selectedNutrients),
                    deletedAt: null,
                    updatedAt: Timestamp.now(),
                };
            }
            updateItem(updatedFood);


        } else {
            // Create new food
            const newFood: UserFood = {
                name: foodName,
                nutrients: createNutrientRecord(selectedNutrients),
                id: Crypto.randomUUID(),
                uid: user.uid,
                type: FoodItemType.UserFood,
                numServings: 1,
                createdAt: Timestamp.now(),
                updatedAt: null,
                deletedAt: null,
            };

            addFoodItem(newFood, "new");
            if (onComplete) {
                onComplete(newFood);
            }

        }

        // if (onComplete) {
        //     onComplete(newFood);
        // }
        bottomSheetRef.current?.close();
    }

    function clearState() {
        setFoodName('');
        setSelectedNutrients(defaultSelectedNutrients);
    }
    return (
        <BottomSheetWrap
            onChange={(index) => {
                if (index === -1) {
                    console.log("Closing bottom sheet");

                    clearFood();
                    clearState();
                }
            }}
            bottomSheetRef={bottomSheetRef} snapPoints={snapPoints}>
            <View className='p-5'>
                <View className='absolute top-0 right-0 p-5 z-20'>
                    <TouchableOpacity onPress={saveFood} className='p-5'>
                        <ThemedText className='text-blue-light dark:text-blue-dark' type="callout">
                            {isEditMode ? 'Edit' : 'Save'}
                        </ThemedText>
                    </TouchableOpacity>
                </View>
                <ThemedText labelType='primary' emphasized type='title2' className='text-left p-5 mb-5'>
                    {isEditMode ? 'Edit Food' : 'Add Food'}
                </ThemedText>

                <ScrollView style={{marginBottom: 100}}>
                    <View className='flex flex-1 flex-col items-start justify-start gap-2 mb-6'>
                        <ThemedText labelType='primary' type='headline' className='pl-1'>
                            Food Name
                        </ThemedText>
                        <ThemedView backGroundLevel='bgTertiary'
                            className='shadow-sm px-6 min-h-[70px] flex flex-row items-center justify-between rounded-xl w-full'
                        >
                            <ThemedTextInput
                                className="flex-1"
                                labelType="primary"
                                value={foodName}
                                onChangeText={setFoodName}
                                placeholder='Enter food name'
                            />
                        </ThemedView>
                    </View>
                    {selectedNutrients.map((nutrient) => (
                        <View key={nutrient.id} className='flex flex-1 flex-col items-start justify-start gap-2 mb-6'>
                            <ThemedText labelType='primary' type='headline' className='pl-1'>
                                {nutrient.name}
                            </ThemedText>
                            <ThemedView
                                backGroundLevel='bgTertiary'
                                className='shadow-sm px-6 min-h-[70px] flex flex-row items-center justify-between rounded-xl w-full'
                            >
                                <ThemedTextInput
                                    className="flex-1"
                                    labelType="primary"
                                    value={nutrient.value.toString()}
                                    onChangeText={(value) => handleValueChange(value, nutrient)}
                                    placeholder='Enter value'
                                    keyboardType='numeric'
                                />
                            </ThemedView>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </BottomSheetWrap>
    );
}