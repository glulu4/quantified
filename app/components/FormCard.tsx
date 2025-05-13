import {View, Text, StyleSheet, TouchableOpacity, useColorScheme, Alert, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {ThemedText} from './ui/ThemedText';
import {Colors} from '@/constants/Colors';
import Checkbox from 'expo-checkbox';
import {useThemeColor} from '@/hooks/useThemeColor';
import ContextMenu from 'react-native-context-menu-view';
import ThemedView from './ThemedView';
import {FormDefDisplaySetting} from '@/types/formdefinition';
import {useFormStyle} from '@/hooks/useFormStyle';
import clsx from 'clsx';

interface FormCardProps {
    title: string;
    description?: string;
    color?: string; // Optional prop for custom card color
    handlePress?: () => void;
    selectable?: boolean;
    isSelected?: boolean;
    onSelect?: (selected: boolean) => void;
    deleteFunc?: () => void;
    formStyleSettings: FormDefDisplaySetting
    className?: string;
}

const FormCard = (props: FormCardProps) => {


    const {icons, formColors} = useFormStyle();
    const defaultFormColor = useThemeColor({}, "primaryFill");

    function getIcon() {
        return icons.find((icon) => icon.name === props.formStyleSettings.icon);
    }



    const handlePress = () => {
        if (props.selectable && props.onSelect) {
            props.onSelect(!props.isSelected);
        }
        if (props.handlePress) {
            props.handlePress();
        }
    };

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
                    onPress: () => props.deleteFunc && props.deleteFunc(),
                    style: "destructive" // iOS-only: indicates destructive action
                }
            ],
            {cancelable: true} // Dismiss alert by tapping outside (Android-only)
        );
    };

    return (
        <View className={clsx(props.className)}>
            {props.selectable && (
                <Checkbox
                    className='absolute top-[10] left-[-2] z-10 rounded-10 h-20 w-20 bg-lightgray'
                    value={props.isSelected}
                    onValueChange={(value) => props.onSelect && props.onSelect(value)}
                />
            )}

            <ContextMenu
                title="Options"

                onPress={(e) => {

                    if (e.nativeEvent.name === "Edit") {
                        console.log("edit");
                    }
                    else if (e.nativeEvent.name === "Delete") {
                        handleDelete()
                    }
                }}
                actions={[
                    {
                        title: 'Edit',
                        systemIcon: 'pencil',
                    },
                    {
                        title: 'Delete',
                        systemIcon: 'trash',
                        destructive: true,
                    },
                ]}
            >

                <TouchableOpacity onPress={handlePress}>

                    <View
                        style={{backgroundColor: props.formStyleSettings.color || defaultFormColor, width: "90%"}} // Default blue background
                        className={clsx(

                            "self-center",
                            " mx-8 h-[150px] rounded-xl flex flex-row items-center justify-between shadow-md"
                        )}
                    >
                        <ThemedText
                            labelType='primary'
                            emphasized type="title2"
                            className="absolute top-8 left-8">
                            {props.title}
                        </ThemedText>

                        {/* Display Selected Icon */}
                        {props.formStyleSettings.icon ? (
                            <View className="absolute bottom-8 right-8">
                                {getIcon()?.icon}
                            </View>
                        ) : null}
                    </View>
                </TouchableOpacity>
            </ContextMenu>
        </View>
    );
};


export default FormCard;

