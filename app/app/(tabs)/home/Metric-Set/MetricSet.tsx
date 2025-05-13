import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import {useForm} from '@/app/context/FormContext';
import {useDefinitions} from './hooks/useDefinitions';
import ThemedView from '@/components/ThemedView';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackNavigationType, HomeStackParamList} from '../_layout';
import {ScrollView} from 'react-native';
import {spacing} from '@/constants/Spacing';
import MetricDefInput from './components/MetricDefInput';
import MetricPackInput from './components/MetricPackInput';
import {useFocusEffect, useNavigation} from 'expo-router';
import {ThemedText} from '@/components/ui/ThemedText';
import {Portal} from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import WidgetBottomSheet from './components/WidgetBottomSheet';
import {SFSymbol} from 'react-native-sfsymbols';
import WidgetDisplay from './components/WidgetDisplay';
import {useWidgets} from './hooks/useWidgets';
import {stat} from 'fs';
import FloatingActionButton from './components/FAB';
import CustomFAB from './components/FAB';
import {useThemeColor} from '@/hooks/useThemeColor';
import ClipBoard from '@/components/icons/ClipBoard';

export type MetricSetRouteProp = RouteProp<HomeStackParamList, "Metric-Set/MetricSet">;


export default function MetricSet() {
    const {state, dispatch} = useForm();

    const {
        allCoreMetrics,
        updateMetricDef,
        allMetricDefs,
        allCoreMetricPacks,
        updateMetricPackDef,
        metricDefMap,
        metricPackDefMap,
        allMetricPackDefs,
        removeMetricDef,
        removeMetricPackDef
    } = useDefinitions();

    const {isWidgetSelected, addWidget, widgets, pack2MetricDefMap, removeWidget} = useWidgets()
    const navigation = useNavigation<HomeStackNavigationType>();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['60%'], []);
    const hasOpenedModal = useRef(false);
    const fabBgColor = useThemeColor({}, 'bgSecondary');
    const iconToggleColor = useThemeColor({}, 'blue');

    const shouldOpenWidgetPrompt = useMemo(() => {
        return state.showedWidgetPrompt && !hasOpenedModal.current && state.mode !== "edit";
    }, [state.showedWidgetPrompt, state.mode, hasOpenedModal.current]);


    function openWidgetBottomSheet() {
        bottomSheetRef.current?.expand();
    }
    // useFocusEffect
    useFocusEffect(() => {
        if (shouldOpenWidgetPrompt) {
            openWidgetBottomSheet();
            hasOpenedModal.current = true; // ✅ Ensures modal opens only once
        }
    });

    function goNext() {

        if (state.mode === "edit") {
            navigation.navigate("Form-Create/FormCreate", {})
        }

        else if (state.showedWidgetPrompt) {
            navigation.navigate("Form-Create/FormCreate", {})

        } else {
            navigation.navigate("WidgetPrompt", {})
        }
    }


    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View className='flex-row items-center justify-between gap-[60]'>
                    <TouchableOpacity onPress={goNext}>
                        <ThemedText type="headline" className=' text-blue-light dark:text-blue-dark'>
                            Next
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            ),

        });
        // needs these maps here so that the nett function contains an up-to-date version of the maps
    }, [navigation, metricDefMap, metricPackDefMap, widgets, state.mode]);



    const widgetIcon = () => (
        <View style={{alignSelf: 'center'}}>
            <SFSymbol
                scale="small"
                name="widget.small.badge.plus"
                size={23}
                color={iconToggleColor}
            />
        </View>
    );

    const metricIcon = () => (
        <View style={{alignSelf: 'center'}}>
            <ClipBoard size={22} color={iconToggleColor} />
        </View>
    );

    // Define the actions
    const actions = [
        {
            icon: metricIcon(),
            label: 'Add Metric',
            onPress: () => navigation.navigate('Metric-Select/MetricSelect', {}),
        },
        {
            icon: widgetIcon(),
            label: 'Add Widget',
            onPress: openWidgetBottomSheet,
        },
    ];


    return (
        <ThemedView backGroundLevel="bgPrimary" className='flex-1 flex'>

            <ScrollView
                style={{
                    flex: 1, margin: spacing['3xl']
                }}
            >
                {allCoreMetrics.map((cm, idx) => (
                    <MetricDefInput
                        removeMetricDef={removeMetricDef}

                        updateMetricDef={updateMetricDef} key={idx} coreMetric={cm} />
                ))}



                {allCoreMetricPacks.map((cp, idx) => (
                    <MetricPackInput
                        key={idx}
                        coreMetricPack={cp}
                        updateMetricPackDef={updateMetricPackDef}
                        removeMetricPackDef={removeMetricPackDef}
                    />
                ))}

                {widgets.map((widget, index) => (
                    <WidgetDisplay removeWidget={removeWidget} key={index} widget={widget} />
                ))}





            </ScrollView>

            <Portal>
                <WidgetBottomSheet
                    metricDefs={allMetricDefs}
                    metricPacks={allMetricPackDefs}
                    bottomSheetRef={bottomSheetRef}
                    snapPoints={snapPoints}
                    addWidget={addWidget}
                    isWidgetSelected={isWidgetSelected}
                    pack2MetricDefMap={pack2MetricDefMap}
                />
            </Portal>



            {(state.showedWidgetPrompt && state.mode !== "edit") && (

                <TouchableOpacity className='absolute bottom-10 right-10' onPress={openWidgetBottomSheet}>
                    <ThemedView backGroundLevel='bgSecondary' className='shadow-md w-16 h-16 p-3 rounded-full flex justify-center items-center'>
                        <SFSymbol scale="small" style={{paddingLeft: 1}} name="widget.small.badge.plus" size={30} />

                    </ThemedView>
                </TouchableOpacity>
            )}

            {state.mode === "edit" &&

                // <Portal.Host>
                // <FloatingActionButton
                //     openWidgetBottomSheet={openWidgetBottomSheet}
                // />


                <CustomFAB
                    actions={actions}
                    fabBgColor={fabBgColor}
                />
                // </Portal.Host>


            }





        </ThemedView>
    );
};


