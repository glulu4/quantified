import React from 'react';
import {useColorScheme, View} from 'react-native';
import ThemedTextInput from './ui/ThemedTextInput';
import {ThemedText} from './ui/ThemedText';
import DateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import {format} from 'date-fns';



interface TextInputWithLabelProps {
    label: string;
    value: Date;
    setValue: (value: Date) => void;
    className?: string;
}


const DateInputWithLabel = ({label, value, setValue, className}: TextInputWithLabelProps) => {


    const colorTheme = useColorScheme() === "light" ? "light" : "dark";

    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || new Date();
        setValue(currentDate);
    }

    return (
        <View className={`${className} py-4`}>
            <ThemedText
                type="headline"
                emphasized
                labelType="primary"
                className="pl-1 pb-2"
            >
                {label}
            </ThemedText>
            <View className="flex flex-1 flex-row items-center justify-between bg-bgSecondary-light dark:bg-bgSecondary-dark py-5 rounded-xl px-3">

                <ThemedText labelType='secondary' type='default' emphasized>
                    {format(value, "MMM d, yyyy")}
                </ThemedText>

                <View className="">
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={value}
                        mode="date"
                        is24Hour={true}
                        onChange={(e, date) => handleDateChange(e, date)}
                        style={{alignSelf: "center"}}
                        textColor="red"
                        themeVariant={colorTheme}
                    />

                </View>
            </View>

        </View>
    );
};

export default DateInputWithLabel;