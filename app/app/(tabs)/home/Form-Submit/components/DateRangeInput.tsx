import React, {useState} from "react";
import {useColorScheme, View} from "react-native";
import DateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import {differenceInDays} from "date-fns";
import ThemedView from "@/components/ThemedView";
import {ThemedText} from "@/components/ui/ThemedText";
import {MetricValueType} from "@/types/formdefinition";

interface DateRangeInputProps {
    setValue: (value: MetricValueType) => void;
}

export default function DateRangeInput({setValue}: DateRangeInputProps) {


    const colorTheme = useColorScheme() === "light" ? "light" : "dark";

    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(() => {
        const nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay;
    });

    function handleDateChange(event: DateTimePickerEvent, selectedDate?: Date, dateType: "start" | "end" = "start") {
        if (event.type === "set") {
            const currentDate = selectedDate || new Date();
            let days: number;

            if (dateType === "start") {
                setStartDate(currentDate);
                days = differenceInDays(endDate, currentDate);
            } else {
                setEndDate(currentDate);
                days = differenceInDays(currentDate, startDate);
            }

            setValue(days);
        }
    }

    return (
        <ThemedView backGroundLevel="bgTertiary" className="flex flex-1 flex-col gap-3">
            <View className="flex flex-1 flex-row justify-between items-center mx-4">
                <ThemedText emphasized type="headline" labelType="primary">
                    Start Date
                </ThemedText>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={startDate}
                    mode="date"
                    is24Hour={true}
                    onChange={(e, date) => handleDateChange(e, date, "start")}
                    style={{alignSelf: "flex-start"}}
                    textColor="red"
                    themeVariant={colorTheme}
                />
            </View>

            <View className="h-[0.5] my-1 bg-systemGray4-light dark:bg-systemGray4-dark" />

            <View className="flex flex-1 flex-row justify-between items-center mx-4">
                <ThemedText emphasized type="headline" labelType="primary">
                    End Date
                </ThemedText>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={endDate}
                    mode="date"
                    is24Hour={true}
                    onChange={(e, date) => handleDateChange(e, date, "end")}
                    themeVariant={colorTheme}
                />
            </View>
        </ThemedView>
    );
}