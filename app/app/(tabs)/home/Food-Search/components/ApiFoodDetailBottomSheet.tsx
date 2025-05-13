import React, {useEffect, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {EditedFood} from '../hooks/useSelectedFoods';
import {DAILY_VALUES, extractCoreNutrition, getHouseholdServing, percentDV, renderFoodDescription} from '../utils/util';
import {useThemeColor} from '@/hooks/useThemeColor';
import FoodBottomSheetBase from '@/components/FoodBottomSheetBase';

interface FoodDetailBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string[];
    food: EditedFood | null;
    onSave: (edits: Partial<EditedFood>) => void;
}

export default function ApiFoodDetailBottomSheet({
    bottomSheetRef,
    snapPoints,
    food,
    onSave,
}: FoodDetailBottomSheetProps) {
    if (!food) return null;

    console.log("ApiFoodDetailBottomSheet: food: ", food);


    const [currentFood, setCurrentFood] = useState<EditedFood>({
        ...food,
        numServings: food.numServings || 1 // Ensure we always have a default
    });

    // Update local state when prop changes
    useEffect(() => {
        setCurrentFood({
            ...food,
            numServings: food.numServings || 1
        });
    }, [food]);

    // Handle serving changes
    const handleServingsChange = (value: number) => {
        const updatedFood = {...currentFood, numServings: value};
        setCurrentFood(updatedFood);
        onSave({numServings: value}); // Save immediately to hook
    };

    const nutrientsMap = extractCoreNutrition(food);

    function prepareMacroData() {
        let res = [];
        if (food) {
            const keys = ["protein", "total_fat", "total_carbohydrates"];
            const red = useThemeColor({}, 'red');
            const yellow = useThemeColor({}, 'yellow');
            const orange = useThemeColor({}, 'orange');
            const colors = [red, yellow, orange];

            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const color = colors[i];
                const nutrient = nutrientsMap[key];
                const dv = percentDV(nutrient.value, key as keyof typeof DAILY_VALUES);

                let displayName = "";
                switch (key) {
                    case "protein":
                        displayName = "Protein";
                        break;
                    case "total_fat":
                        displayName = "Fat";
                        break;
                    case "total_carbohydrates":
                        displayName = "Carbs";
                        break;
                    default:
                        displayName = key;
                }

                res.push({
                    dv: dv * (currentFood.numServings || 1),
                    displayName,
                    color,
                });
            }
        }
        return res;
    }

    return (
        <FoodBottomSheetBase
            bottomSheetRef={bottomSheetRef}
            snapPoints={snapPoints}
            title={renderFoodDescription(food)}
            subtitle={`${nutrientsMap["calories"].value * (currentFood.numServings || 1)} cal`}
            servingSize={getHouseholdServing(food)}
            numServings={currentFood.numServings || 1}
            macroData={prepareMacroData()}
            onServingsChange={handleServingsChange}
            showDelete={false}
            contentScrollable={true}
        />
    );
}