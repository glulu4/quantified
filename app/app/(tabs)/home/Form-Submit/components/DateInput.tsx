import React, {useState} from "react";
import {useColorScheme, View} from "react-native";
import DateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import {differenceInDays} from "date-fns";
import ThemedView from "@/components/ThemedView";
import {ThemedText} from "@/components/ui/ThemedText";
import {MetricValueType} from "@/types/formdefinition";
import InputRow from "@/components/ui/InputRow";

interface DateInputProps {
    setValue: (value: MetricValueType) => void;
}

export default function DateInput({setValue}: DateInputProps) {


    const colorTheme = useColorScheme() === "light" ? "light" : "dark";

    const [date, setDate] = useState<Date>(new Date());

    function handleDateChange(event: DateTimePickerEvent, selectedDate?: Date) {
        if (event.type === "set") {
            const currentDate = selectedDate || new Date();
            setValue(currentDate);
            setDate(currentDate);
        }
    }

    return (
        <InputRow backGroundLevel="bgTertiary" className="" >
            <View className="flex flex-1 flex-row justify-between items-center">
                <ThemedText emphasized type="headline" labelType="primary">
                    Enter Date
                </ThemedText>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    onChange={(e, date) => handleDateChange(e, date)}
                    style={{alignSelf: "flex-start"}}
                    textColor="red"
                    themeVariant={colorTheme}
                />
            </View>

        </InputRow>
    );
}