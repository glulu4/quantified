import {View, Text, useColorScheme} from 'react-native'
import React, {useState} from 'react'
import {MetricValueType} from '@/types/formdefinition'
import {ThemedText} from '@/components/ui/ThemedText'
import DateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import InputRow from '@/components/ui/InputRow';

export default function TimeInput({
    setValue,
}:
    {setValue: (value: MetricValueType) => void}
) {


    const colorTheme = useColorScheme() === "light" ? "light" : "dark";
    const [time, setTime] = useState<Date>(new Date());


    function handleTimeChange(event: DateTimePickerEvent, selectedTime?: Date) {
        if (event.type === "set") {
            const currentTime = selectedTime || new Date();
            setValue(currentTime);
            setTime(currentTime);
        }
    }
    return (
        <InputRow backGroundLevel="bgTertiary" className="" >
            <View className="flex flex-1 flex-row justify-between items-center">
                <ThemedText emphasized type="headline" labelType="primary">
                    Enter Time
                </ThemedText>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={time}
                    mode="time"
                    is24Hour={true}
                    onChange={(e, date) => handleTimeChange(e, date)}
                    style={{alignSelf: "flex-start"}}
                    textColor="red"
                    themeVariant={colorTheme}
                />
            </View>

        </InputRow>
    )
}