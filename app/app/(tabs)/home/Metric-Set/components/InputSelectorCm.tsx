import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect, useMemo, useRef, useState} from 'react'
import {DropdownMetricDefinition, MetricDefinition} from '@/types/formdefinition';
import {ThemedText} from '@/components/ui/ThemedText';
import BottomSheet from '@gorhom/bottom-sheet';
import {Portal} from 'react-native-paper';

import DropDownSelector from './DropDownSelector';
import InputBottomSheet from './InputBottomSheet';
import Selector from '@/components/ui/Selector';
import {useForm} from '@/app/context/FormContext';
import {StatusItem} from '@/types/status-item';
import {CoreInputType} from '@/types/core-input';
import {CoreMetric} from '@/types/coremetric';
import {CoreUnitType} from '@/types/core-unit';
import {inputToUnits} from '@/utils/unitInputHelpers';

interface InputSelectorProps {
    coreMetric: CoreMetric;
    updateMetricDef(cmId: string, updates: Partial<MetricDefinition> | Partial<DropdownMetricDefinition>): void
}

const InputSelectorCm = ({coreMetric, updateMetricDef}: InputSelectorProps) => {

    const inputs: CoreInputType[] = coreMetric.inputTypes;


    const [selectedInput, setSelectedInput] = useState<string>(inputs[0]);

    const [dropdownOptions, setDropdownOptions] = useState<string[]>(["Option 1", "Option 2", "Option 3"]);

    const bottomSheetRef = useRef<BottomSheet>(null);
    // const snapPoints = useMemo(() => ['50%'], []);
    const snapPoints = useMemo(() => ['60%'], []);


    const {state} = useForm();

    useEffect(() => {


        const hasCm = state.metricDefMap.has(coreMetric.id);
        if (hasCm) {

            const mdStatusItem = state.metricDefMap.get(coreMetric.id)!;

            setSelectedInput(mdStatusItem.value.inputType);

            if ("dropdownOptions" in mdStatusItem.value) {
                setDropdownOptions(mdStatusItem.value.dropdownOptions as string[])
            }
        }

    }, [coreMetric]);


    function openBottomSheet() {
        bottomSheetRef.current?.expand();
    }

    function handleSelect(selected: string) {
        setSelectedInput(selected);

        const updates: Partial<MetricDefinition> | Partial<DropdownMetricDefinition> = {
            inputType: selected as CoreInputType,
            dropdownOptions: dropdownOptions,
        };

        const units = inputToUnits(selected as CoreInputType);
        if (units.length > 0) {
            (updates as Partial<MetricDefinition>).unitType = units[0];
        }

        updateMetricDef(coreMetric.id, updates);
        bottomSheetRef.current?.close();
    }

    useEffect(() => {
        updateMetricDef(coreMetric.id, {dropdownOptions: dropdownOptions});
    }, [dropdownOptions])



    function handleDropdownUpdate(index: number, newValue: string) {
        setDropdownOptions((prevOptions) =>
            prevOptions.map((option, i) => (i === index ? newValue : option))
        );
    }

    function addOption() {
        setDropdownOptions((prevOptions) => [...prevOptions, "Edit..."]);
    }

    function removeOption(index: number) {
        setDropdownOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
    }

    return (
        <View className='pt-4'>
            <ThemedText labelType='primary' className='py-2 pl-1' type='headline' emphasized>Input</ThemedText>

            {selectedInput !== CoreInputType.MULTISELECT ? (
                <TouchableOpacity onPress={openBottomSheet}>
                    <Selector
                        value={selectedInput}
                    />
                </TouchableOpacity>
            ) : (


                <DropDownSelector
                    selected={selectedInput}
                    openBottomSheet={openBottomSheet}
                    options={dropdownOptions}
                    onUpdate={handleDropdownUpdate}
                    addOption={addOption}
                    removeOption={removeOption}

                />
            )}



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

export default InputSelectorCm