import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useMetricSelectLogic} from './hooks/useMetricSelectLogic';
import ThemedView from '@/components/ThemedView';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import FilterBar from './components/FilterBar';
import {ThemedText} from '@/components/ui/ThemedText';
import LeftDrawer from '@/components/LeftDrawer';
import MetricList from './components/MetricList';
import {useNavigation} from 'expo-router';
import {HomeStackNavigationType, HomeStackParamList} from '../_layout';
import ClipBoard from '@/components/icons/ClipBoard';
import BottomSheet from '@gorhom/bottom-sheet';
import DrawerContent from './components/DrawerContent';
import MetricBottomSheet from './components/MetricBottomSheet';
import {useFilters} from './hooks/useFilters';
import {useForm} from '@/app/context/FormContext';
import Search from '@/components/Search';
import {useThemeColor} from '@/hooks/useThemeColor';


export default function MetricSelect() {

    const controlOptions = ['Health Metrics', 'Metric Packs'];
    const [segmentedControlIndex, setSegmentedControlIndex] = useState<number>(0);
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
    const navigation = useNavigation<HomeStackNavigationType>();

    const {
        toggleMetric,
        toggleMetricPack,
        isMetricSelected,
        isMetricPackSelected,
        next,
        metricMap,
        metricPackMap,
        handleDelete
    } = useMetricSelectLogic();

    const {
        selectedFilters,
        searchValue,
        setSearchValue,
        toggleFilter,
        isFilterSelected,

        filteredMetrics,
        defaultFilters,
    } = useFilters();


    const {state} = useForm();

    const bottomSheetRef = useRef<BottomSheet>(null);
    const iconColor = useThemeColor({}, "labelPrimary");
    const snapPoints = ['50%'];

    useEffect(() => {

        if (state.mode === "add") {
            navigation.setOptions({
                headerRight: () => (
                    <View
                        className='flex-row items-center justify-between gap-[60]'
                    >
                        {/* Chart Icon */}
                        <TouchableOpacity onPress={() => {
                            bottomSheetRef.current?.expand();
                        }}>
                            <ThemedText>
                                <ClipBoard color={iconColor} size={22} />
                            </ThemedText>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={next}>
                            <ThemedText type="headline" className=' text-blue-light dark:text-blue-dark'>
                                Next
                            </ThemedText>
                        </TouchableOpacity>
                    </View>
                ),
            });
        }
        else {
            navigation.setOptions({
                headerRight: () => (
                    <></>
                ),
            });
        }

    }, [navigation, metricMap, metricPackMap,]);




    return (
        <ThemedView className='flex-1 flex-col '>


            <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <View className='m-3'>
                <SegmentedControl
                    values={controlOptions}
                    selectedIndex={segmentedControlIndex}
                    onChange={(event) => {
                        setSegmentedControlIndex(event.nativeEvent.selectedSegmentIndex);
                    }}
                />
            </View>

            <FilterBar
                selectedFilters={selectedFilters}
                setDrawerOpen={setDrawerOpen}
                toggleFilter={toggleFilter}
                isFilterSelected={isFilterSelected}
                defaultFilters={defaultFilters}
            />

            <MetricList
                segmentedControlIndex={segmentedControlIndex}
                isMetricPackSelected={isMetricPackSelected}
                isMetricSelected={isMetricSelected}
                toggleMetric={toggleMetric}
                toggleMetricPack={toggleMetricPack}
                filteredMetrics={filteredMetrics}

            />


            {
                isDrawerOpen && (
                    <LeftDrawer isVisible={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
                        <DrawerContent
                            isFilterSelected={isFilterSelected}
                            toggleFilter={toggleFilter}
                        />
                    </LeftDrawer>
                )
            }



            <MetricBottomSheet
                bottomSheetRef={bottomSheetRef}
                snapPoints={snapPoints}
                handleDelete={handleDelete}
            />

        </ThemedView >
    );
}

