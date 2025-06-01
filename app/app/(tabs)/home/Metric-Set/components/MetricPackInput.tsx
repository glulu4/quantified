import {View, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import ThemedView from '@/components/ThemedView';
import {ThemedText} from '@/components/ui/ThemedText';

import InputSelectorCp from './InputSelectorCp';
import {MetricPackDefinition} from '@/types/formdefinition';
import {useForm} from '@/app/context/FormContext';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import {CoreMetricPack} from '@/types/coremetric-pack';


interface MetricPackInputProps {
    coreMetricPack: CoreMetricPack;
    updateMetricPackDef: (cmpId: string, updates: Partial<MetricPackDefinition>) => void
    removeMetricPackDef: ({id, save}: {id: string, save: boolean}) => void

}
/**
 * 
 * @param param0 
 * @returns 
 */
const MetricPackInput = ({coreMetricPack, updateMetricPackDef, removeMetricPackDef}: MetricPackInputProps) => {


    const {state} = useForm();
    const red = useThemeColor({}, "red");


    function isMetricPackOld(cmpId: string) {

        const statusItem = state.coreMetricPackMap.get(cmpId);
        return statusItem?.status === 'old';
    }
    function handleDelete(cmpId: string) {


        if (isMetricPackOld(cmpId)) {
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
                        onPress: () => removeMetricPackDef({
                            id: cmpId,
                            save: true,
                        }),
                        style: "destructive" // iOS-only: indicates destructive action
                    }
                ],
                {cancelable: true} // Dismiss alert by tapping outside (Android-only)
            );
        }
        else {
            removeMetricPackDef({
                id: cmpId,
                save: false
            });
        }

    }


    return (
        <View className='py-4 flex flex-col flex-1'>

            <View className='flex flex-1 flex-row items-center justify-between mb-3 '>
                <ThemedText labelType='primary' type='title3' emphasized>
                    {coreMetricPack.title}
                </ThemedText>


                {state.mode === "edit" && <TouchableOpacity
                    onPress={() => handleDelete(coreMetricPack.id)}
                    className='pr-8'
                    hitSlop={10}
                >
                    <SFSymbol name="minus.circle" size={20} color={red} />

                </TouchableOpacity>}

            </View>
            <ThemedView className='flex flex-1 p-2 rounded-xl mb-3' backGroundLevel='bgSecondary'>

                <View
                    className="flex flex-1 flex-col px-3 pb-3 justify-between "
                >

                    <View >
                        <InputSelectorCp updateMetricPackDef={updateMetricPackDef} coreMetricPack={coreMetricPack} />
                    </View>
                </View>
            </ThemedView>
        </View>

    );
};

export default MetricPackInput;

