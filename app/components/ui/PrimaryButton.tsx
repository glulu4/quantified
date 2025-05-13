// components/PrimaryButton.tsx
import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import {ThemedText} from './ThemedText';

type Props = {
    title: string;
    onPress: () => void;
    outline?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    backgroundColor?: string;
    textColor?: string;
};

export const PrimaryButton = ({
    title,
    onPress,
    outline,
    style,
    textStyle,
    backgroundColor = '#E94444', // Default background color
    textColor = 'white', // Default text color
}: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}

            className={`w-full py-4 rounded-full ${outline ? '' : ''}`}
            style={[
                style,
                {
                    backgroundColor: outline ? 'transparent' : backgroundColor,
                    borderColor: backgroundColor,
                    borderWidth: 2,
                },
            ]}
        >
            <ThemedText
                type="body"
                emphasized
                className={`text-center`}
                style={[
                    textStyle,
                    {
                        color: outline ? backgroundColor : textColor,
                    },
                ]}
            >
                {title}
            </ThemedText>
        </TouchableOpacity>
    );
};
