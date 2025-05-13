import {View, Text, Alert} from 'react-native'
import React from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {EvilIcons, Feather} from '@expo/vector-icons';
import {Colors} from '@/constants/Colors';


interface TrashButtonProps {
    pressFn: () => void;
    size?: number
}
const TrashButton = ({pressFn, size}: TrashButtonProps) => {

    const handleDelete = () => {
        Alert.alert(
            "Confirm Delete", // Title
            "Are you sure you want to delete this item?", // Message
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("canceled"),
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => pressFn(),
                    style: "destructive" // iOS-only: indicates destructive action
                }
            ],
            {cancelable: true} // Dismiss alert by tapping outside (Android-only)
        );
    };

    return (
        <TouchableOpacity onPress={handleDelete}>
            <EvilIcons name="trash" size={size || 50} color={Colors.warning} />
        </TouchableOpacity>
    )
}

export default TrashButton;