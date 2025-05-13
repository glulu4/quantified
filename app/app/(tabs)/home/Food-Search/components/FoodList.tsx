import {View, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import {List, Row} from 'react-native-ios-list'
import {useThemeColor} from '@/hooks/useThemeColor'
import CheckCircle from '@/components/ui/CheckCircle'
import {ThemedText} from '@/components/ui/ThemedText'
import {ApiFood} from '@/services/foodDataApiTypes';
import ThemedView from '@/components/ThemedView'
import CenteredSpinner from '@/components/CenteredSpinner'
import {SFSymbol} from 'react-native-sfsymbols'
import {renderFoodDescription, renderFoodDetails} from '../utils/util'
import MixedFoodList from '../../Form-Submit/components/packs/MixedFoodList'
import {useAuthenticatedUser} from '@/app/context/AuthContext'
import {FoodItem, FoodItemStatus} from '@/types/food'
import {ApiFoodManager, FoodItemManager} from '../hooks/useFoodSearchScreen'


interface FoodListProps {
    segmentedControlIndex: number;
    apifoods: ApiFood[];
    loadingApiFoods: boolean;
    packId: string;
    foodItemManager: FoodItemManager;
    apiFoodManager: ApiFoodManager;
    handleOpenFoodItemSheet: (item: FoodItem) => void;
    handleOpenApiFoodSheet: (item: ApiFood) => void;


}

const FoodList = ({
    // isApiFoodSelected,
    // toggleApiFood,
    segmentedControlIndex,
    apifoods,
    loadingApiFoods,

    // isFoodItemSelected,
    apiFoodManager,
    foodItemManager,

    handleOpenApiFoodSheet,
    handleOpenFoodItemSheet,
}: FoodListProps) => {

    const separatorColor = useThemeColor({}, "systemGray4");
    const backgroundColor = useThemeColor({}, "bgSecondary");
    const [num, setNum] = React.useState(0);
    const textColorSecondary = useThemeColor({}, "labelSecondary");
    const user = useAuthenticatedUser();

    // hook for getting saved user foods
    // const {toggleItem: toggleItemInState, isItemInState} = useNutritionPackState(packId);


    const rightDetailArrow = (item: ApiFood) => (
        <TouchableOpacity style={{zIndex: 100}} onPress={() => handleOpenApiFoodSheet(item)}>
            <View className='flex flex-row items-center justify-center pr-2 gap-4'>
                <ThemedText labelType='secondary' className='text-right'>
                    Details
                </ThemedText>
                <SFSymbol name='chevron.right' size={15} color={textColorSecondary} />
            </View>
        </TouchableOpacity>

    );
    const renderApiFoods = () => {

        if (apifoods.length === 0) {
            return (
                // render recents here
                <ThemedView backGroundLevel='bgSecondary' className='flex-1 flex-col items-center justify-start  rounded-xl'>
                    <ThemedText labelType='primary' type='title3' className='text-center mt-8'>
                        No foods found
                    </ThemedText>
                </ThemedView>
            )
        }



        return (
            <List style={{borderRadius: 12}} backgroundColor={backgroundColor} dividerColor={separatorColor} sideBar >
                <FlatList
                    data={apifoods}
                    keyExtractor={(item) => String(item.fdcId)}
                    renderItem={({item}) => (

                        <Row
                            leading={
                                <TouchableOpacity
                                    onPress={() => apiFoodManager.toggleApiFood(item)}
                                >
                                    <CheckCircle selected={apiFoodManager.isApiFoodSelected(item)} />

                                </TouchableOpacity>
                            }
                            trailing={rightDetailArrow(item)}
                        >
                            <View className='flex flex-row flex-1'>
                                <View className='flex flex-col flex-1'>
                                    <ThemedText labelType='primary' className='py-3 flex-1 flex-wrap'>
                                        {renderFoodDescription(item)}
                                    </ThemedText>
                                    <ThemedText labelType='secondary' type='footnote' className=''>
                                        {renderFoodDetails(item)}
                                    </ThemedText>
                                </View>
                            </View>
                        </Row>
                    )}
                />
            </List>)



    };


    function renderUserFoodItems() {


        if (foodItemManager.userQueriedFoodItemsLoading) {
            return (
                <ThemedView backGroundLevel='bgSecondary' className='flex-1 flex-col'>
                    <CenteredSpinner />
                </ThemedView>
            )
        }


        return (
            <MixedFoodList
                scrollEnabled={true}
                dividerColor={separatorColor}
                backgroundColor={backgroundColor}
                items={foodItemManager.allFoodsItems}
                onPressItem={(item) => handleOpenFoodItemSheet(item)}
                renderLeading={(item) => (
                    <TouchableOpacity
                        onPress={() => {
                            foodItemManager.toggleFoodItem(item)
                        }}
                    >
                        <CheckCircle selected={foodItemManager.isFoodItemSelected(item)} />
                    </TouchableOpacity>
                )}
            />
        )
    }

    // Function to render Metric Pack List
    if (loadingApiFoods) {
        return (

            <ThemedView backGroundLevel='bgSecondary' className='flex-1 flex-col'>
                <CenteredSpinner />
            </ThemedView>
        )
    }



    return (
        <View className='flex flex-1 mb-4 m-3 '>
            {segmentedControlIndex === 0 ? renderApiFoods() : renderUserFoodItems()}
        </View>
    )
}

export default FoodList;



