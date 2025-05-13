import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {ThemedText} from './ui/ThemedText';
import {Colors} from '@/constants/Colors';
import {useColors} from '@/hooks/useColors';

type ButtonProps = {
    text: string;
    onPress: () => void;
    theme?: 'default' | 'submit' | 'primary';
}

const Button = ({text, onPress, theme = 'default'}: ButtonProps) => {
    let style = styles.button;
    let textStyle = styles.buttonLabel;
    const colors = useColors();
    let iconColor = '#fff'; // Default color for the icon

    // Apply color logic based on the theme prop
    if (theme === 'primary') {
        style = [style, {backgroundColor: Colors.primary, borderWidth: 4, borderColor: colors.general.blue, borderRadius: 18}];
        textStyle = [textStyle, {color: "#fff", textAlign: 'center', }];
        iconColor = '#fff'; // Icon color for primary theme
    } else if (theme === 'submit') {
        style = [style, {backgroundColor: Colors.red}];
        textStyle = [textStyle, {color: "#fff"}];
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={style} onPress={onPress}>
                {theme === 'primary' && (
                    <Ionicons name="add" size={18} color={iconColor} style={styles.buttonIcon} />
                )}
                <ThemedText type="headline" style={textStyle}>
                    {text}
                </ThemedText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#007bff', // Default button color (will be overridden if a theme is applied)
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Button;



