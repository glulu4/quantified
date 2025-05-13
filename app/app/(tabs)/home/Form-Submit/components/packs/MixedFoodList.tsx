// FoodList.tsx
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {ThemedText} from '@/components/ui/ThemedText';
import {List, Row} from 'react-native-ios-list';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import {ApiFood, } from '@/services/foodDataApiTypes';
import {renderDetails, renderFoodDetails} from '../../utils/food-util';
import {FoodItem, Food, FoodCombination, FoodItemType, UserFood} from '@/types/food';
import {SwipeToDelete} from '@/components/SwipeToDelete';
// import SwipeToDelete from 'react-swipe-to-delete-ios'

// export type FoodItem = Food | UserFood | FoodCombination;

interface MixedFoodListFoodListProps {
    items: FoodItem[];
    onPressItem: (item: FoodItem) => void;
    backgroundColor?: string;
    dividerColor?: string;
    renderLeading?: (item: FoodItem) => React.ReactElement
    scrollEnabled: boolean;
}

const MixedFoodList: React.FC<MixedFoodListFoodListProps> = ({items, onPressItem, backgroundColor, dividerColor, renderLeading, scrollEnabled}) => {
    const textColorSecondary = useThemeColor({}, "labelSecondary");

    const renderItem = ({item}: {item: FoodItem}) => (

        <SwipeToDelete onDelete={() => {}}>
            <Row
                leading={renderLeading ? renderLeading(item) : undefined}
                trailing={
                    <TouchableOpacity style={{zIndex: 100}} onPress={() => onPressItem(item)}>
                        <View className='flex flex-row items-center justify-center pr-2 gap-4'>
                            <ThemedText labelType='secondary' className='text-right'>
                                Details
                            </ThemedText>
                            <SFSymbol name='chevron.right' size={15} color={textColorSecondary} />
                        </View>
                    </TouchableOpacity>
                }
            >
                <View style={{flexDirection: 'row', flex: 1}}>
                    <View style={{flex: 1}}>
                        <ThemedText labelType="primary" style={{paddingVertical: 12, flexWrap: 'wrap'}}>
                            {item.name}
                        </ThemedText>
                        <ThemedText labelType="secondary" type="footnote">
                            {renderDetails(item)}
                        </ThemedText>
                    </View>
                </View>
            </Row>
        </SwipeToDelete>

    );

    return (
        <List backgroundColor={backgroundColor} dividerColor={dividerColor} style={{borderRadius: 12}} >
            <FlatList
                scrollEnabled={scrollEnabled}
                data={items}
                keyExtractor={(item) =>
                    item.type === FoodItemType.Food ? String(item.fdcId) : item.id
                }
                renderItem={renderItem}
            />
        </List>
    );
};

export default MixedFoodList;
