import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import ThemedView from '@/components/ThemedView';
import Search from '@/components/Search';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import InputButtonRow from './components/InputButtonRow';
import FoodList from './components/FoodList';
import {useFoodApi} from './hooks/useFoodApi';
import {useNavigation} from 'expo-router';
import {HomeStackNavigationType, HomeStackParamList} from '../_layout';
import {ThemedText} from '@/components/ui/ThemedText';
import {SFSymbol} from 'react-native-sfsymbols';
import SelectedFoodsBottomSheet from './components/SelectedFoodBottomSheet';
import {useThemeColor} from '@/hooks/useThemeColor';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useAuthenticatedUser} from '@/app/context/AuthContext';
import ApiFoodDetailBottomSheet from './components/ApiFoodDetailBottomSheet';
import FoodBottomSheet from '../Form-Submit/components/FoodBottomSheet';
import UserFoodBottomSheet from './components/UserFoodBottomSheet';
import {useFoodSearchScreen} from './hooks/useFoodSearchScreen';
import {useFoodBottomSheetManager} from './hooks/useFoodBottomSheetManager';

type FoodSearchRouteProp = RouteProp<HomeStackParamList, "Food-Search/FoodSearch">;

export default function FoodSearch() {
    const controlOptions = ['Search', 'My Foods'];
    const [segmentedIndex, setSegmentedIndex] = useState(0);
    const snapPoints = ["60%", '80%'];
    const navigation = useNavigation<HomeStackNavigationType>();
    const {searchValue, setSearchValue, foodResults, loading: loadingApiFoods} = useFoodApi();
    const iconColor = useThemeColor({}, 'blue');

    const route = useRoute<FoodSearchRouteProp>();
    const {packId} = route.params as {packId: string};
    const user = useAuthenticatedUser();

    const {apiFoodManager, foodItemManager, syncStateWithPackStore} = useFoodSearchScreen(user.uid, packId);


    const {
        foodItem,
        currentEditFoodItem,
        handleOpenFoodItemSheet,
        handleOpenApiFoodSheet,
        handleUserFoodBottomSheet,
        clearFood,
        bottomSheetRefs
    } = useFoodBottomSheetManager(apiFoodManager);



    function handleAddBtnPress() {
        syncStateWithPackStore();
        navigation.goBack();
    }

    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <View
                    className='flex-row items-center justify-between w-28'
                >
                    {/* Chart Icon */}
                    <TouchableOpacity
                        hitSlop={10}
                        onPress={() => {
                            bottomSheetRefs.selectedFoodBSRef.current?.expand();

                        }}>
                        <SFSymbol
                            weight='semibold'
                            name='takeoutbag.and.cup.and.straw'
                            size={20}
                            color={iconColor}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleAddBtnPress}>
                        <ThemedText type="headline" className=' text-blue-light dark:text-blue-dark'>
                            Add
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            ),
        });

        // add anything else here that we need to send back to submisson screen.
    }, [apiFoodManager.selectedApiFoods, foodItemManager.allSelectedFoodItems]);


    // makes segmented control the food one when the user searches
    useEffect(() => {
        if (segmentedIndex === 0) return
        setSegmentedIndex(0);
    }, [searchValue])


    return (
        <ThemedView backGroundLevel="bgPrimary" className="flex-1">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />

            <View className="m-3">
                <SegmentedControl
                    values={controlOptions}
                    selectedIndex={segmentedIndex}
                    onChange={({nativeEvent}) => setSegmentedIndex(nativeEvent.selectedSegmentIndex)}
                />
            </View>

            <InputButtonRow
                openQuickAddFood={handleUserFoodBottomSheet}
                packId={packId}
            />

            <FoodList
                apifoods={foodResults}
                foodItemManager={foodItemManager}
                apiFoodManager={apiFoodManager}
                loadingApiFoods={loadingApiFoods}
                segmentedControlIndex={segmentedIndex}
                handleOpenFoodItemSheet={handleOpenFoodItemSheet}
                handleOpenApiFoodSheet={handleOpenApiFoodSheet}
                packId={packId}
            />

            {/* Api food details */}
            <ApiFoodDetailBottomSheet
                bottomSheetRef={bottomSheetRefs.apiFoodBSRef}
                snapPoints={snapPoints}
                food={apiFoodManager.detailApiFood}
                onSave={(editedFood) => apiFoodManager.updateApiFoodDetail(editedFood)}
            />

            {/* Bottom sheet that shows food item bottom sheet details */}
            <FoodBottomSheet
                bottomSheetRef={bottomSheetRefs.foodItemBSRef}
                snapPoints={snapPoints}
                item={foodItem}
                packId={packId}
                showEdit={true}
                showDelete={false}
                handleDelete={foodItemManager.removeFoodItem}
                handleEdit={foodItemManager.updateFoodItem}
                onEdit={handleUserFoodBottomSheet}
            />


            <SelectedFoodsBottomSheet
                selectedApiFoods={apiFoodManager.selectedApiFoods}
                selectedFoodItems={foodItemManager.allSelectedFoodItems}
                deleteFoodItem={foodItemManager.removeFoodItem}
                bottomSheetRef={bottomSheetRefs.selectedFoodBSRef}
                deleteApiFood={apiFoodManager.toggleApiFood}
                snapPoints={snapPoints}
                // handleOpenDetail={handleApiOpenDetail}

                handleOpenFoodItemSheet={handleOpenFoodItemSheet}
                handleOpenApiFoodSheet={handleOpenApiFoodSheet}

                packId={packId}
            />


            {/* Bottom sheet for adding a user food and editing a previosu food */}
            <UserFoodBottomSheet
                packId={packId}
                bottomSheetRef={bottomSheetRefs.userFoodBottomSheetRef}
                snapPoints={snapPoints}
                food={currentEditFoodItem}
                clearFood={clearFood}
                addFoodItem={foodItemManager.addFoodItem}
                updateItem={foodItemManager.updateFoodItem}

            />

        </ThemedView>
    );
}
