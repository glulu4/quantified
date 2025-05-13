import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {useThemeColor} from '@/hooks/useThemeColor';
import {ThemedText} from '@/components/ui/ThemedText';
import {SFSymbol} from 'react-native-sfsymbols';
import {EditedFood} from '../hooks/useSelectedFoods';
import {renderFoodDescription, renderFoodDetails} from '../utils/util';
import {ApiFood} from '@/services/foodDataApiTypes';
import {FoodListItem} from '@/types/food';
import {renderDetails} from '../../Form-Submit/utils/food-util';


interface FoodDeleteRowProps {
    item: EditedFood | FoodListItem;
    onDelete: (item: EditedFood | FoodListItem) => void
    onPress: (food: ApiFood | FoodListItem) => void
}

const FoodDeleteRow = ({item, onDelete, onPress}: FoodDeleteRowProps) => {

    console.log("item", item);


    const subtextColor = useThemeColor({}, "labelSecondary");


    function handleRenderFoodDescription(item: EditedFood | FoodListItem) {
        // its an api food . edited food
        if ("marketCountry" in item) {
            return renderFoodDescription(item)
        }
        else {
            return item.name;
        }
    }

    function handleRenderFoodDetails(item: EditedFood | FoodListItem) {
        // its an api food . edited food
        if ("marketCountry" in item) {
            return renderFoodDetails(item)
        }
        else {
            return renderDetails(item);
        }
    }

    // const foodDescription = "Item name"//item.name;

    return (
        <View >
            <View className='flex flex-row justify-between items-center '>
                <TouchableOpacity className='flex flex-col py-3 w-[70%]' onPress={() => onPress(item)}>
                    <ThemedText labelType='primary' type="headline" className='flex-row  flex-wrap '>
                        {handleRenderFoodDescription(item)}
                    </ThemedText>
                    <ThemedText labelType='tertiary' type="footnote" className='mt-2'>
                        {handleRenderFoodDetails(item)}
                    </ThemedText>
                    {/* </View> */}
                </TouchableOpacity>


                <TouchableOpacity
                    className='z-50 pr-6'
                    onPress={() => onDelete(item)}
                    hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} // Expands touch area

                >
                    <SFSymbol name="xmark" size={20} color={subtextColor} />
                </TouchableOpacity>
            </View>

            <View className='h-[0.5] my-3 bg-systemGray4-light dark:bg-systemGray4-dark' />
        </View>
    )
}

export default FoodDeleteRow;