import {View, Text, useColorScheme} from 'react-native'
import React from 'react'
import ThemedView from '@/components/ThemedView';
import {ThemedText} from '@/components/ui/ThemedText';
import DateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import ThemedTextInput from '@/components/ui/ThemedTextInput';

interface SubmitHeaderProps {
    formTitle: string;
    notes: string;
    submissionDate: Date;
    setNotes: (notes: string) => void;
    handleDateChange: (event: DateTimePickerEvent, date?: Date) => void;
}
export default function SubmitHeader({
    formTitle,
    notes,
    submissionDate,
    setNotes,
    handleDateChange
}: SubmitHeaderProps) {


    const colorTheme = useColorScheme() === "light" ? "light" : "dark";

    return (

        // <DateRangeInput setValue={(value: MetricValueType) => {}} />
        <ThemedView backGroundLevel="bgSecondary" className="flex flex-col rounded-xl p-4 gap-0">
            <ThemedView backGroundLevel='bgTertiary'
                style={{borderTopLeftRadius: 12, borderTopRightRadius: 12}}
                className='px-6 min-h-[70px] max-h-[70px] flex flex-row items-center justify-between'
            >
                <ThemedText emphasized type="headline" labelType="primary">
                    Date
                </ThemedText>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={submissionDate}
                    mode="date"
                    is24Hour={true}
                    onChange={(e, date) => handleDateChange(e, date)}
                    style={{alignSelf: "center"}}
                    textColor="red"
                    themeVariant={colorTheme}
                />
            </ThemedView>

            <View className="h-[0.5] bg-systemGray4-light dark:bg-systemGray4-dark" />

            <ThemedView backGroundLevel='bgTertiary'
                className='px-6 min-h-[70px] flex flex-row items-center justify-between rounded-b-xl'
            >
                <ThemedText emphasized type="headline" labelType="primary">
                    Notes
                </ThemedText>
                <ThemedTextInput
                    value={notes}
                    onChangeText={setNotes}
                    placeholder="Enter notes"
                // className="flex-1"
                />
            </ThemedView>
        </ThemedView>

    )
}