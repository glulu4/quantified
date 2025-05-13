import {CoreInputType, CoreUnitType, Fraction, MetricDefinition, MetricValueType} from "@/types/graph";
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {useEffect, useState} from "react";
import {Keyboard, StyleSheet, TextInput, useColorScheme, View, ViewStyle} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {ThemedText} from "../ui/ThemedText";
import FractionInput from "../FractionInput";
import DropDown from "../DropDown";
import {ThemedTextInput} from "../ui/ThemedTextInput";
import Slider from '@react-native-community/slider';
import {differenceInDays} from "date-fns";

type MetricDataInputProps = {
    item: MetricDefinition;
    onMetricChange: (id: string, value: MetricValueType) => void;
    style?: ViewStyle;
}
const MetricDataInput = ({item, onMetricChange, style, }: MetricDataInputProps) => {
    const [value, setValue] = useState<MetricValueType>(0); // this can be type from value
    const [date, setDate] = useState<Date>(new Date());
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [inputType, setInputType] = useState<string>(item.inputType);
    const colorScheme = useColorScheme() === "light" ? "light" : "dark"
    const sliderTrackColor = useColorScheme() === "light" ? Colors.light.tint : Colors.light.tint

    useEffect(() => {
        if (inputType === CoreInputType.DATE_RANGE) {

            let datDif = dateDifferenceInDays(startDate, endDate)

            onMetricChange(item.id, datDif);
        }
        else {
            onMetricChange(item.id, value);
        }
    }, [value, startDate, endDate, inputType]);


    function dateDifferenceInDays(startDate: Date, endDate: Date): number {
        return differenceInDays(endDate, startDate) + 1;  // Automatically calculates and returns the difference in whole days
    }

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {

        switch (event.type) {
            case 'set':
                const currentDate = selectedDate || date;
                setValue(currentDate);
                break;
            case 'dismissed':

                break;
            default:
                break;
        }


    };


    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date, isStart = true) => {
        if (event.type === 'set') {
            const currentDate = selectedDate || new Date();
            if (isStart) {
                setStartDate(currentDate);
            } else {
                setEndDate(currentDate);
            }
        }
    };
    const handleDropDownSelect = (option: string) => {
        console.log("option: ", option);

        setValue(option);
        onMetricChange(item.id, option);
    };

    const handleFractionChange = (numerator: number, denominator: number) => {
        const fraction: Fraction = {
            numerator,
            denominator
        }
        setValue(fraction);
    };



    switch (inputType) {

        case CoreInputType.SCALE:
            return (
                <Slider
                    style={[styles.slider, style]}
                    minimumValue={1}
                    maximumValue={100}
                    minimumTrackTintColor={sliderTrackColor}
                    maximumTrackTintColor={sliderTrackColor}

                    onValueChange={(number: number) => {
                        setValue(number);
                    }}
                    step={1}
                />
            )

        case CoreInputType.DATE:
            return (
                <View style={[{display: 'flex', flexDirection: 'row'}, style]}>

                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        onChange={onChange}
                        style={{}}
                        textColor="red"
                        themeVariant={colorScheme}

                    />
                </View>
            );
        case CoreInputType.NUMBER:
            return (
                <ThemedTextInput

                    style={[style]}
                    placeholder="Enter value"
                    placeholderTextColor={useColorScheme() === "light" ? Colors.light.text : Colors.dark.text}
                    value={value?.toString() || ""}
                    onChangeText={(text) => {

                        if (isNaN(Number(text))) {
                            setValue(0)
                        }
                        else {
                            setValue(Number(text));
                        }

                    }}
                    keyboardType="numeric"

                />
            )

        case CoreInputType.TEXT:
            return (
                <ThemedTextInput

                    style={[style]}
                    placeholder="Enter value"
                    placeholderTextColor="lightblue"
                    value={value?.toString() || ""}
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                />
            )
        case CoreInputType.DATE_RANGE:
            return (
                <View style={[styles.dateRange, style]}>

                    <View style={styles.dateRangeInputView}>
                        <ThemedText type="subtitle-small" style={{textAlign: "left"}}>Start</ThemedText>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={startDate}
                            mode='date'
                            is24Hour={true}
                            onChange={(e, date) => handleDateChange(e, date, true)}
                            textColor="red"
                            themeVariant={colorScheme}
                        />

                    </View>


                    <View style={styles.dateRangeInputView}>
                        <ThemedText style={{textAlign: "left"}} type="subtitle-small">End</ThemedText>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={endDate}
                            mode='date'
                            is24Hour={true}
                            onChange={(e, date) => handleDateChange(e, date, false)}
                            style={{}}
                            textColor="red"
                            themeVariant={colorScheme}
                        />

                    </View>

                </View>
            )

        case CoreInputType.FRACTION:
            return (
                <FractionInput
                    outerStyle={{marginLeft: 10, marginTop: 10}}
                    onChange={handleFractionChange}

                />
            )

        case CoreInputType.MULTISELECT:
            return (

                <DropDown
                    options={item.dropdownOptions || []}
                    onSelect={handleDropDownSelect}



                />
            )
        default:
            return <></>



    }
}
const styles = StyleSheet.create({
    metricInputDrop: {
        height: 50,
        // flex: 0.5,
        marginRight: 10,
    },
    slider: {
        marginRight: 10,
    },
    dateRange: {
        flexDirection: 'column',
        alignItems: "flex-start",
        paddingLeft: 15,
        gap: 20,
        paddingTop: 10
    },
    dateRangeInputView: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})
export default MetricDataInput;