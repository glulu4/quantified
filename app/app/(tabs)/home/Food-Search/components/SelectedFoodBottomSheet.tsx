import React, {useMemo} from "react";
import {View, ScrollView, StyleSheet} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import {ThemedText} from "@/components/ui/ThemedText";
import {spacing} from '@/constants/Spacing';
import BottomSheetWrap from "@/components/BottomSheetWrap";
import {useThemeColor} from "@/hooks/useThemeColor";
import {EditedFood, useSelectedApiFoods} from "../hooks/useSelectedFoods";
import FoodDeleteRow from "./FoodDeleteRow";
import {SFSymbol} from "react-native-sfsymbols";
import {ApiFood} from "@/services/foodDataApiTypes";
import {FoodItem} from "@/types/food";

interface SelectedFoodsBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheet>;
    selectedApiFoods: EditedFood[];
    selectedFoodItems: FoodItem[];
    deleteApiFood: (food: EditedFood) => void;
    deleteFoodItem: (food: FoodItem) => void;
    snapPoints: string[];
    // handleOpenDetail(food: ApiFood | FoodItem): void
    packId: string;
    handleOpenFoodItemSheet: (item: FoodItem) => void;
    handleOpenApiFoodSheet: (item: ApiFood) => void;

}

const SelectedFoodsBottomSheet: React.FC<SelectedFoodsBottomSheetProps> = ({
    bottomSheetRef,
    selectedApiFoods,
    snapPoints,
    deleteApiFood,
    // handleOpenDetail,
    selectedFoodItems,
    deleteFoodItem,
    handleOpenFoodItemSheet,
    handleOpenApiFoodSheet,


}) => {
    const iconColor = useThemeColor({}, "labelPrimary");

    // const {toggleFood} = useSelectedApiFoods();

    function handleDeleteFn(item: EditedFood | FoodItem) {
        if ("marketCountry" in item) {
            // toggled food api item
            deleteApiFood(item);
        }
        else {
            // removing it from state so it doesnt matter what the status is
            deleteFoodItem(item);
        }

    }

    const allItems: (FoodItem | EditedFood)[] = [
        ...selectedApiFoods,
        ...selectedFoodItems
    ];

    function onFoodPress(item: EditedFood | FoodItem) {

        // "type" in item || 
        if ("uid" in item) {
            handleOpenFoodItemSheet(item);

        } else {
            handleOpenApiFoodSheet(item);
        }
    }

    return (
        <BottomSheetWrap bottomSheetRef={bottomSheetRef} snapPoints={snapPoints} >

            <View className="flex flex-col flex-1 mx-8">
                <View style={styles.header}>
                    <ThemedText labelType="primary" type="title1" emphasized>
                        Selected Foods
                    </ThemedText>
                </View>

                {allItems.length > 0 ? (
                    <ScrollView style={styles.bottomSheetScrollView}>
                        {allItems.map((food: EditedFood | FoodItem, idx: number) => (
                            <FoodDeleteRow
                                item={food}
                                key={idx}
                                onDelete={() => handleDeleteFn(food)}
                                onPress={onFoodPress}
                            />
                        ))}

                    </ScrollView>
                ) : (
                    <View
                        className="flex-1 flex-col items-center justify-center pb-5 gap-5"
                    >
                        <SFSymbol
                            weight='semibold'
                            name='takeoutbag.and.cup.and.straw'
                            size={40}
                            color={iconColor}
                        />
                        <ThemedText labelType="primary" className="py-3" type="headline">No foods selected</ThemedText>
                    </View>
                )}
            </View>
        </BottomSheetWrap>

    );
};

export default SelectedFoodsBottomSheet;

const styles = StyleSheet.create({
    bottomSheetContent: {
        flex: 1,
        padding: spacing["3xl"],
    },
    bottomSheetScrollView: {
        flex: 1,
        marginTop: spacing.xl,
    },
    header: {
        paddingTop: spacing["3xl"],
        marginBottom: spacing.xl,
        alignItems: "center",
    },
    noMetricsContainer: {
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        paddingBottom: spacing["4xl"],
    },
});
