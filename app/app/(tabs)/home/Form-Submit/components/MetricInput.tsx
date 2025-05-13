import {View, Text, useColorScheme} from 'react-native'
import React, {useState} from 'react'
import ThemedView from '@/components/ThemedView';
import {CoreInputType, CoreUnitType} from '@/types/core-metric';
import InputRow from '@/components/ui/InputRow';
import ThemedTextInput from '@/components/ui/ThemedTextInput';
import {ThemedText} from '@/components/ui/ThemedText';
import {DropdownMetricDefinition, MetricDefinition, MetricValueType} from '@/types/formdefinition';
import ContextMenu from 'react-native-context-menu-view';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import Slider from '@react-native-community/slider';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker'
import FractionInput from './FractionInput';
import DateRangeInput from './DateRangeInput';
import DateInput from './DateInput';
import TimeInput from './TimeInput';

interface MetricInputProps {
    // inputType: CoreInputType;
    // unit: CoreUnitType;
    metricDef: MetricDefinition;
    value: MetricValueType;
    setValue: (value: MetricValueType) => void;
}

export default function MetricInput({
    metricDef,
    value,
    setValue
}: MetricInputProps) {

    const blue = useThemeColor({}, "blue");

    const colorTheme = useColorScheme() === "light" ? "light" : "dark";
    function renderInput(inputType: CoreInputType) {


        switch (inputType) {
            case CoreInputType.TEXT:
                return (
                    <InputRow backGroundLevel='bgTertiary'>
                        <ThemedTextInput
                            labelType='primary'
                            value={String(value)}
                            onChangeText={setValue}
                            placeholder='Enter value'
                        >

                        </ThemedTextInput>

                        <ThemedText>
                            {metricDef.unitType}
                        </ThemedText>
                    </InputRow>
                )

            case CoreInputType.FOOD_DB:
                return (
                    <ThemedText>
                        Food DB
                    </ThemedText>
                )
            case CoreInputType.DATE:
                return (
                    <DateInput
                        setValue={setValue}
                    />
                )

            case CoreInputType.TIME:
                return (
                    <TimeInput
                        setValue={setValue}
                    />
                )
            case CoreInputType.FRACTION:
                return (
                    <InputRow backGroundLevel='bgTertiary'>
                        <FractionInput
                            onChange={setValue}
                        />

                        <ThemedText labelType='secondary'>
                            {metricDef.unitType}
                        </ThemedText>
                    </InputRow>

                )

            case CoreInputType.NUMBER:
                return (

                    <InputRow backGroundLevel='bgTertiary'>
                        <ThemedTextInput
                            labelType='primary'
                            value={String(value)}
                            onChangeText={setValue}
                            placeholder='Enter value'
                        >

                        </ThemedTextInput>

                        <ThemedText type="callout" labelType='secondary'>
                            {metricDef.unitType}
                        </ThemedText>
                    </InputRow>
                )

            case CoreInputType.MULTISELECT:
                const dropdown = metricDef as DropdownMetricDefinition;
                return (

                    <ContextMenu
                        dropdownMenuMode={true}
                        actions={dropdown.dropdownOptions.map((unit) => ({
                            title: unit, // Show unit options
                        }))}
                        onPress={(e) => {
                            const selected: string = e.nativeEvent.name;
                            if (selected) {
                                setValue(selected);
                            }

                        }}
                    >
                        <InputRow backGroundLevel='bgTertiary'>


                            <ThemedText type='body' labelType='primary' emphasized>
                                {value === "" ? "Select" : value as string}
                            </ThemedText>

                            <View >
                                <SFSymbol
                                    name="chevron.right"
                                    size={16}
                                    weight="semibold"
                                    color={blue}
                                />
                            </View>
                        </InputRow>
                    </ContextMenu>

                )
                break;


            case CoreInputType.SCALE:
                return (
                    <InputRow backGroundLevel='bgTertiary'>
                        <Slider
                            value={Number(value)}
                            onValueChange={(setValue)}
                            style={{flex: 1}}
                            minimumValue={0}
                            maximumValue={200}
                        />
                    </InputRow>
                )

            case CoreInputType.DATE_RANGE:
                return (
                    <DateRangeInput
                        setValue={setValue}
                    />
                )
            default:
                return (
                    <ThemedText type="callout" labelType='secondary'>
                        Not supported
                    </ThemedText>
                )

        }

    }
    return (
        <View
            className='rounded-xl p-2 bg-bgTertiary-light dark:bg-bgTertiary-dark'>

            {renderInput(metricDef.inputType as CoreInputType)}

        </View>
    )
}