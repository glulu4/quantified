import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect, useMemo, useRef, useState} from 'react'
import {MetricPackDefinition} from '@/types/formdefinition';
import {CoreInputType, CoreMetricPack, } from '@/types/core-metric';
import {ThemedText} from '@/components/ui/ThemedText';
import BottomSheet from '@gorhom/bottom-sheet';
import {Portal} from 'react-native-paper';
import InputBottomSheet from './InputBottomSheet';
import Selector from '@/components/ui/Selector';
import {StatusItem} from '@/types/status-item';
import {useForm} from '@/app/context/FormContext';

interface InputSelectorProps {
    coreMetricPack: CoreMetricPack;
    updateMetricPackDef: (cmpId: string, updates: Partial<MetricPackDefinition>) => void
}

const InputSelectorCp = ({coreMetricPack, updateMetricPackDef}: InputSelectorProps) => {
    const {state} = useForm();


    const inputs: CoreInputType[] = coreMetricPack.inputTypes;


    const [selectedInput, setSelectedInput] = useState<string>(inputs[0]);

    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['60%'], []);


    useEffect(() => {

        const hasCmp = state.metricPackDefMap.has(coreMetricPack.id);
        if (hasCmp) {
            // const globalDef: MetricPackDefinition = globalDefEntry.value;
            const packStatusItem = state.metricPackDefMap.get(coreMetricPack.id)!;
            setSelectedInput(packStatusItem.value.inputType);

        }
    }, [coreMetricPack]);



    function openBottomSheet() {
        bottomSheetRef.current?.expand();
    }

    function handleSelect(selected: string) {
        setSelectedInput(selected);

        updateMetricPackDef(coreMetricPack.id, {
            inputType: selected as CoreInputType,

        });
        bottomSheetRef.current?.close();
    }


    return (
        <View className='pt-4'>
            <ThemedText labelType='primary' className='py-2 pl-1' type='headline' emphasized>Input</ThemedText>


            <TouchableOpacity onPress={openBottomSheet}>
                <Selector
                    value={selectedInput}
                />
            </TouchableOpacity>

            <Portal>
                <InputBottomSheet
                    options={inputs}
                    bottomSheetRef={bottomSheetRef}
                    snapPoints={snapPoints}
                    handleSelect={handleSelect}
                />
            </Portal>


        </View>


    )
}

export default InputSelectorCp;