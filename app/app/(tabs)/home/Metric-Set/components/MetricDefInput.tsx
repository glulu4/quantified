import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {DropdownMetricDefinition, MetricDefinition} from '@/types/formdefinition';
import ThemedView from '@/components/ThemedView';
import {ThemedText} from '@/components/ui/ThemedText';
import {CoreMetric} from '@/types/core-metric';
import UnitSelector from './UnitSelector';
import InputSelectorCm from './InputSelectorCm';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import {useForm} from '@/app/context/FormContext';


interface MetricDefInputProps {
    coreMetric: CoreMetric;
    removeMetricDef: ({id, save}: {id: string, save: boolean}) => void
    updateMetricDef(cmId: string, updates: Partial<MetricDefinition> | Partial<DropdownMetricDefinition>): void

}
/**
 * 
 * @param param0 
 * @returns 
 */
const MetricDefInput = ({coreMetric, updateMetricDef, removeMetricDef}: MetricDefInputProps) => {

    const red = useThemeColor({}, "red");
    const {state} = useForm();


    function isMetricDefOld(cmId: string) {

        const statusItem = state.metricDefMap.get(cmId);
        return statusItem?.status === 'old';
        // return !newCoreMetrics.in(cmId);
    }
    function handleDelete(cmId: string) {


        if (isMetricDefOld(cmId)) {
            Alert.alert(
                "Delete Metric", // Title
                "Are you sure you want to delete this item? It has associated data", // Message
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("canceled"),
                        style: "cancel"
                    },
                    {
                        text: "Delete",
                        onPress: () => removeMetricDef({
                            id: cmId,
                            save: true,
                        }),
                        style: "destructive" // iOS-only: indicates destructive action
                    }
                ],
                {cancelable: true} // Dismiss alert by tapping outside (Android-only)
            );
        }
        else {
            removeMetricDef({
                id: cmId,
                save: false,
            });
        }

    }

    return (
        <View className='py-4 flex flex-col flex-1'>

            {/* <View className='mb-4 ml-2'> */}
            <View className='flex flex-1 flex-row items-center justify-between mb-3 '>
                <ThemedText labelType='primary' type='title3' emphasized>
                    {coreMetric.defaultTitle}
                </ThemedText>


                {state.mode === "edit" && <TouchableOpacity
                    onPress={() => handleDelete(coreMetric.id)}
                    className='pr-8'
                    hitSlop={10}
                >
                    <SFSymbol name="minus.circle" size={20} color={red} />

                </TouchableOpacity>}

            </View>
            <View className='flex flex-1 p-2 rounded-xl mb-3 bg-bgSecondary-light dark:bg-bgSecondary-dark'>

                <View
                    className="flex flex-1 flex-col p-3 justify-between "
                >
                    <View className='flex-[0.5]'>
                        <UnitSelector updateMetricDef={updateMetricDef} coreMetric={coreMetric} />

                    </View>
                    <View className='flex-[0.5]'>
                        <InputSelectorCm updateMetricDef={updateMetricDef} coreMetric={coreMetric} />

                    </View>
                </View>
            </View>
        </View>

    );
};

export default MetricDefInput;

