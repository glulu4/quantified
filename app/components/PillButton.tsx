import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {ThemedText} from './ui/ThemedText';
import clsx from 'clsx';

interface PillButtonProps {
    text: string;
    selected: boolean;
    onPress: () => void;
    className?: string;
}

const PillButton = ({text, selected, onPress, className}: PillButtonProps) => {

    return (
        <TouchableOpacity
            className={clsx(
                `flex items-center justify-center mx-2 rounded-2xl px-4`,
                selected ? `bg-blue-light dark:bg-blue-dark` : `bg-tintedBlue`,
                className,
            )}
            onPress={onPress}
        >
            <ThemedText
                type="callout"
                className={clsx(

                    selected ? `text-white` : `text-blue-light`,
                )}
            >
                {text}
            </ThemedText>
        </TouchableOpacity>
    );
};


export default PillButton;
