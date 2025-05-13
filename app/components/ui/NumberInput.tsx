import {useThemeColor} from '@/hooks/useThemeColor';
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {SFSymbol} from 'react-native-sfsymbols';

interface NumberInputProps {
    value: number;
    onChange: (newValue: number) => void;
    min?: number;
    max?: number;
    step?: number;
}

/**
 * A simple numeric stepper with SF Symbols (minus | plus).
 * Renders a pill-shaped control allowing decrement/increment of a numeric value.
 */
export default function NumberInput({value, onChange, min = 1, max = Infinity, step = 1}: NumberInputProps) {
    const decrement = () => {
        const newValue = Math.max(min, value - step);
        if (newValue !== value) onChange(newValue);
    };

    const increment = () => {
        const newValue = Math.min(max, value + step);
        if (newValue !== value) onChange(newValue);
    };

    const color = useThemeColor({}, 'labelPrimary');
    return (
        <View
            className='flex flex-row items-center justify-around rounded-lg py-2 bg-tertiaryFill-light dark:bg-tertiaryFill-dark'
        // style={styles.container}
        >
            <View className='flex flex-row items-center  mx-3'>
                <TouchableOpacity onPress={decrement}
                    className='p-4 mx-auto'
                    accessibilityLabel="Decrease">
                    <SFSymbol size={12} color={color} name="minus" weight="semibold" scale="large" />
                </TouchableOpacity>
            </View>



            {/* <View
                style={{width: 1, height: '100%'}}
                className=' bg-labelTertiary-light dark:bg-labelTertiary-dark'
            /> */}
            <View className="w-px h-6 bg-labelTertiary-light dark:bg-labelTertiary-dark mx-1" />

            <View className='flex flex-row items-center  mx-3'>
                <TouchableOpacity onPress={increment} className='p-4 mx-auto' accessibilityLabel="Increase">
                    <SFSymbol size={12} color={color} name="plus" weight="semibold" scale="large" />
                </TouchableOpacity>
            </View>

        </View>
    );
}
