import {View, StyleSheet, ScrollView} from 'react-native';
import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {ThemedText} from '@/components/ui/ThemedText';
import ThemedTextInput from '@/components/ui/ThemedTextInput';
import {Colors} from '@/constants/Colors';
import {RadioButton} from 'react-native-paper';
import {ApiFood} from '@/services/foodDataApiTypes';
import Arrow from '@/components/Arrow';
import Button from '@/components/Button';
import Counter from '@/components/Counter';
import {NutrientApiType, NutrientDisplay} from '@/services/foodDataApiTypes';
import {NutritionCoreMacro} from '@/types/nutritionTypes';
import {processNutrients, mapNutrientApiToCoreMacroWithValidation, searchFood, debounce} from '@/services/foodDataApi';
import {errorToast} from '@/utils/toastUtils';

interface FoodSearchModalProps {
    step: number;
    isVisible: boolean;
    checkedFood: ApiFood;
    countOfFood: number;
    setCountOfFood: React.Dispatch<React.SetStateAction<number>>;
    setCheckedFood: React.Dispatch<React.SetStateAction<ApiFood>>;
    onStepChange: (step: number) => void;
    onConfirm: (macros: Record<NutritionCoreMacro, number>) => void;
    onClose: () => void;
}

export const FoodSearchModal = ({
    step,
    isVisible,
    onStepChange,
    checkedFood,
    countOfFood,
    setCountOfFood,
    setCheckedFood,
    onConfirm,
    onClose,
}: FoodSearchModalProps) => {
    // Move state from parent into component
    const [foodItem, setFoodItem] = useState("");
    const [brand, setBrand] = useState("");
    const [foodData, setFoodData] = useState<ApiFood[]>([]);
    const [loadingFood, setLoadingFood] = useState(false);
    const [checkedFoodId, setCheckedFoodId] = useState("");


    useEffect(() => {

        if (!isVisible)
            resetModal()
    }, [isVisible])
    const fetchFoodData = async (query: string, brand: string) => {
        setLoadingFood(true);
        const foods = await searchFood(query, brand);
        setFoodData(foods);
        setLoadingFood(false);
    };

    const debouncedFetchFoodData = useCallback(
        debounce((query: string, brand: string) => {
            if (query.trim()) {
                fetchFoodData(query, brand);
            }
        }, 300),
        []
    );

    const handleFoodItemChange = (text: string) => {
        setFoodItem(text);
        debouncedFetchFoodData(text, brand);
    };

    const handleBrandChange = (text: string) => {
        setBrand(text);
        debouncedFetchFoodData(foodItem, text);
    };

    const createFoodItemText = (food: ApiFood) => {
        const desc = food.description;
        const brand = food.brandOwner || "";
        return `${formatFoodText(desc)} ${brand}`;
    };

    const formatFoodText = (text: string): string => {
        const lowerCasedText = text.toLowerCase();
        return lowerCasedText.charAt(0).toUpperCase() + lowerCasedText.slice(1);
    };

    const handleFoodCheck = (fdcId: string) => {
        setCheckedFoodId(fdcId);
        const selectedFood = foodData.find((fd) => fd.fdcId === Number(fdcId))!;
        setCheckedFood(selectedFood);
    };

    const goToNextStep = () => {
        if (!checkedFood || !checkedFoodId) {
            errorToast("Select a food");
            return;
        }
        onStepChange(2);
    };

    const handleConfirm = (currentFoodMacros: Record<NutritionCoreMacro, number>) => {
        onConfirm(currentFoodMacros);
        resetModal();
    };

    const resetModal = () => {
        setFoodItem("");
        setBrand("");
        setFoodData([]);
        setCheckedFoodId("");
        setCheckedFood({} as ApiFood);
        setCountOfFood(1);
        onClose();
        onStepChange(1);
    };

    const renderFoodItem = (item: ApiFood, index: number) => {
        return (
            <View
                key={index}
                style={[styles.foodItemRow, {borderBottomColor: Colors.light.icon}]}>
                <View style={{flex: 1}}>
                    <ThemedText
                        numberOfLines={3}
                        style={styles.foodText}
                    >
                        {createFoodItemText(item)}
                    </ThemedText>
                </View>

                <RadioButton.Android
                    value={item.fdcId.toString()}
                    status={Number(checkedFoodId) === item.fdcId ? "checked" : "unchecked"}
                    color={Colors.primary}
                />
            </View>
        );
    };

    const renderStep1 = () => (
        <>
            <ThemedText>Search for Food</ThemedText>
            <View style={{display: "flex", flexDirection: "column", gap: 10}}>
                <>
                    <View>
                        <ThemedText style={styles.label} type="defaultSemiBold">Item</ThemedText>
                        <ThemedTextInput
                            placeholder='Enter item name... '
                            value={foodItem}
                            onChangeText={handleFoodItemChange}
                        />
                    </View>
                    <View>
                        <ThemedText style={styles.label} type="defaultSemiBold">Brand</ThemedText>
                        <ThemedTextInput
                            placeholder='Enter brand... '
                            value={brand}
                            onChangeText={handleBrandChange}
                        />
                    </View>
                </>

                {loadingFood && <ThemedText>Loading...</ThemedText>}

                <RadioButton.Group
                    onValueChange={handleFoodCheck}
                    value={checkedFoodId}
                >
                    <ThemedText type="subtitle-small" style={{...styles.label, padding: 5}}>Foods</ThemedText>
                    <ScrollView scrollsToTop style={styles.foodListContainer} nestedScrollEnabled={true}>
                        {foodData.map((food, index) => renderFoodItem(food, index))}
                    </ScrollView>
                </RadioButton.Group>

                <View style={styles.rightArrow}>
                    <Arrow direction='right' size={40} pressFn={goToNextStep} color={Colors.primary} />
                </View>
            </View>
        </>
    );

    const renderStep2 = () => {
        const currentFoodMacros: Record<NutritionCoreMacro, number> = {
            [NutritionCoreMacro.CALORIES]: 0,
            [NutritionCoreMacro.PROTEIN]: 0,
            [NutritionCoreMacro.FAT]: 0,
            [NutritionCoreMacro.CARBS]: 0,
        };

        const iterator: MapIterator<[NutrientApiType, NutrientDisplay]> = processNutrients(checkedFood.foodNutrients).entries();

        const loadFoodMacroMap = (nutrientKey: NutrientApiType, nutrient: NutrientDisplay) => {
            const nutritionCoreMacro = mapNutrientApiToCoreMacroWithValidation(nutrientKey);
            let adjustedValueNutrientVal = Math.ceil(nutrient.value * countOfFood);
            const adjustedDv = nutrient.percentDailyValue ? (nutrient.percentDailyValue * countOfFood) : "-";

            if (nutrientKey === NutrientApiType.KCAL && nutrientKey.toLowerCase().includes("kj")) {
                adjustedValueNutrientVal /= 4.184
            }

            if (nutritionCoreMacro !== undefined) {
                if (currentFoodMacros[nutritionCoreMacro]) {
                    currentFoodMacros[nutritionCoreMacro]! += adjustedValueNutrientVal;
                } else {
                    currentFoodMacros[nutritionCoreMacro] = adjustedValueNutrientVal;
                }
            }

            return {adjustedValueNutrientVal, adjustedDv};
        };


        function safeText(value: number | string | undefined | null): number | string {
            return value || "";
        }
        function renderServingSizeAndDesc(checkedFood: ApiFood) {
            return `${safeText(checkedFood.servingSize)} ${safeText(checkedFood.servingSizeUnit)} ${safeText(checkedFood.description)}`
        }
        const displayValue = (adjustedValueNutrientVal: number, nutrient: NutrientDisplay) => {

            if (nutrient.unit.toLowerCase().includes("kj")) {
                const adjusted = adjustedValueNutrientVal / 4.184;
                return `${Math.ceil(adjusted)} Calories`
            }
            else {
                return `${Math.ceil(adjustedValueNutrientVal)} ${nutrient.unit}`
            }
        }
        return (
            <>
                <View style={{paddingVertical: 20}}>
                    <Arrow direction='left' size={30} pressFn={() => onStepChange(1)} color={Colors.primary} />
                </View>

                <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20}}>
                    <View style={{display: "flex", flexDirection: "column", flex: 1}}>
                        <ThemedText>{renderServingSizeAndDesc(checkedFood)}</ThemedText>
                        <ThemedText>
                            {safeText(checkedFood.brandOwner)}
                        </ThemedText>
                    </View>
                    <Counter value={countOfFood} onValueChange={setCountOfFood} />
                </View>

                <View style={{flex: 1}}>
                    {Array.from(iterator).map(([nutrientKey, nutrient]) => {
                        const {adjustedValueNutrientVal, adjustedDv} = loadFoodMacroMap(nutrientKey, nutrient);
                        return (
                            <View key={nutrientKey} style={styles.nutrientText}>
                                <ThemedText type="defaultSemiBold" style={{flex: 0.7}}>
                                    {nutrientKey}:
                                </ThemedText>
                                <ThemedText style={{flex: 0.3}}>
                                    {displayValue(adjustedValueNutrientVal, nutrient)}
                                    {`(${adjustedDv}% DV)`}
                                </ThemedText>
                            </View>
                        );
                    })}
                </View>
                <Button text="Confirm" onPress={() => {
                    console.log("currentFoodMacros: ", currentFoodMacros);

                    handleConfirm(currentFoodMacros)
                }} />
            </>
        );
    };

    return step === 1 ? renderStep1() : renderStep2();
};

const styles = StyleSheet.create({
    label: {
        paddingLeft: 5,
    },
    foodListContainer: {
        flexGrow: 1,
        maxHeight: 300,
        marginBottom: 10,
    },
    foodItemRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 0.4,
    },
    foodText: {
        fontSize: 16,
        lineHeight: 22,
        padding: 20
    },
    rightArrow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    nutrientText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        paddingVertical: 15,
    }
});