import {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import {useState} from "react";


export function useMetaData() {

    const [submissionDate, setSubmissionDate] = useState<Date>(new Date())
    const [notes, setNotes] = useState<string>("");


    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || new Date();
        setSubmissionDate(currentDate);
    }

    return {
        submissionDate,
        handleDateChange,
        notes,
        setNotes
    }
}