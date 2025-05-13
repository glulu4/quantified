import React from 'react';
import {View} from 'react-native';
import ThemedTextInput from './ui/ThemedTextInput';
import {ThemedText} from './ui/ThemedText';



interface TextInputWithLabelProps {
    label: string;
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    className?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'decimal-pad' | 'number-pad';
}
/**
 * TextInputWithLabel component
 * @param {string} label - The label for the text input
 * @param {string} value - The current value of the text input
 * @param {function} setValue - Function to update the value of the text input
 * @param {string} placeholder - Placeholder text for the text input
 * @param {boolean} secureTextEntry - Whether the text input is for password entry
 * @param {string} autoCapitalize - Auto-capitalization setting for the text input
 */

const TextInputWithLabel = ({label, value, setValue, placeholder, secureTextEntry = false, autoCapitalize = 'none', keyboardType = "default", className}: TextInputWithLabelProps) => {
    return (
        <View className={`${className}`}>
            <ThemedText
                type="headline"
                emphasized
                labelType="primary"
                className="pl-1 pb-2"
            >
                {label}
            </ThemedText>
            <View className="bg-bgSecondary-light dark:bg-bgSecondary-dark py-6 rounded-xl">
                <ThemedTextInput
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeholder}
                    className="pl-3"
                    labelType="primary"
                    secureTextEntry={secureTextEntry}
                    autoCapitalize={autoCapitalize}
                    keyboardType={keyboardType}
                />
            </View>
        </View>
    );
};

export default TextInputWithLabel;