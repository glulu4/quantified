import React, {useEffect, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {useThemeColor} from '@/hooks/useThemeColor';
import {getCarbs, getFat, getProtein, renderDetails} from '../utils/food-util';
import MixedFoodList from './packs/MixedFoodList';
import {Food, FoodCombination, FoodItemType, FoodItem, Nutrient, UserFood} from '@/types/food';
import FoodBottomSheetBase from '@/components/FoodBottomSheetBase';
import {View} from 'react-native';

interface FoodBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string[];
    item: FoodItem | null;
    packId: string;
    showEdit: boolean;
    showDelete: boolean;
    onEdit?: (item: UserFood | Food) => void;

    handleEdit: (item: FoodItem) => void;
    handleDelete: (item: FoodItem) => void;
}

export default function FoodBottomSheet({
    bottomSheetRef,
    snapPoints,
    item,
    packId,
    showEdit,
    showDelete,
    onEdit,
    handleDelete,
    handleEdit,
}: FoodBottomSheetProps) {
    if (!item) return null;

    const bgPrimary = useThemeColor({}, 'bgPrimary');
    const [localItem, setLocalItem] = useState<FoodItem>(item);

    // ensures local item is updated when the item prop changes
    useEffect(() => {
        setLocalItem(item);
    }, [item]);

    function deleteItem() {

        handleDelete(localItem);
        // Close the bottom sheet after deleting
        bottomSheetRef.current?.close();
    }

    function prepareMacroData() {
        const colors = [
            useThemeColor({}, 'red'),
            useThemeColor({}, 'yellow'),
            useThemeColor({}, 'orange')
        ];
        let protein;
        let carbs;
        let fats;
        let res = [];

        switch (localItem.type) {
            case FoodItemType.Food:
                const foodNutrients: Record<string, Nutrient> = localItem.nutrients;
                protein = getProtein(foodNutrients);
                carbs = getCarbs(foodNutrients);
                fats = getFat(foodNutrients);
                break;

            case FoodItemType.UserFood:
                const userFoodNutrients: Partial<Record<string, Nutrient>> = localItem.nutrients;
                protein = getProtein(userFoodNutrients);
                carbs = getCarbs(userFoodNutrients);
                fats = getFat(userFoodNutrients);
                break;

            case FoodItemType.FoodCombination:
                const comboNutrients: Record<string, Nutrient> = localItem.totalNutrition;
                protein = getProtein(comboNutrients);
                carbs = getCarbs(comboNutrients);
                fats = getFat(comboNutrients);
                break;
        }

        // for food combos we set it to one, 
        const numberOfServings = 'numServings' in localItem ? localItem.numServings : 1;

        res.push({
            displayName: "Protein",
            dv: protein * numberOfServings,
            color: colors[0]
        });

        res.push({
            displayName: "Carbs",
            dv: carbs * numberOfServings,
            color: colors[1]
        });

        res.push({
            displayName: "Fat",
            dv: fats * numberOfServings,
            color: colors[2]
        });

        return res;
    }

    function renderTitle(item: FoodItem) {
        switch (item.type) {
            case FoodItemType.Food:
                return item.name;
            case FoodItemType.UserFood:
                return item.name;
            case FoodItemType.FoodCombination:
                return item.name;
        }
    }

    // function renderSubtitle() {
    //     return renderDetails(localItem);
    // }

    function handleServingsChange(value: number) {
        if (!localItem) return;

        const updatedItem = {
            ...localItem,
            numServings: value,
        };
        setLocalItem(updatedItem);
        handleEdit(updatedItem);
    }

    function onPressEdit() {
        // Close the bottom sheet
        bottomSheetRef.current?.close();

        // does not work for food combinations
        if (localItem.type === FoodItemType.FoodCombination) {
            return;
        }
        onEdit?.(localItem);
    }

    // Special content for food combinations
    const foodCombinationContent = localItem.type === FoodItemType.FoodCombination ? (
        <View className='flex-1 flex-col p-5'>
            <MixedFoodList
                scrollEnabled={false}
                items={[...localItem.userFoods, ...localItem.foods]}
                onPressItem={() => {
                    console.log("Item pressed");

                    // Handle item press if needed
                }}
                backgroundColor={bgPrimary}
                dividerColor={bgPrimary}
            />
        </View>
    ) : undefined;

    return (
        <FoodBottomSheetBase
            bottomSheetRef={bottomSheetRef}
            snapPoints={snapPoints}
            title={renderTitle(localItem)}
            subtitle={renderDetails(localItem)}
            servingSize={'servingSize' in localItem ? localItem.servingSize : undefined}
            numServings={'numServings' in localItem ? localItem.numServings : 1}
            macroData={prepareMacroData()}
            onServingsChange={handleServingsChange}
            onDelete={deleteItem}
            showDelete={showDelete}
            showEdit={showEdit}
            onEdit={onPressEdit}
            contentScrollable={localItem.type !== FoodItemType.FoodCombination}
            lowerContent={foodCombinationContent}
        />
    );
}