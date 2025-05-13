import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemedText} from './ui/ThemedText';
import {Colors} from '@/constants/Colors';
import Checkbox from 'expo-checkbox';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';
import {useThemeColor} from '@/hooks/useThemeColor';

interface TileProps {
    title: string;
    handlePress?: () => void;
    selectable?: boolean;
    isSelected?: boolean;
    onSelect?: (selected: boolean) => void;
}
export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};
const Tile = (props: TileProps) => {
    // rgb(255, 255, 255)
    const tileColor = useThemeColor({light: Colors.light.card, dark: Colors.dark.card}, 'card');

    const borderColor = useThemeColor({light: Colors.light.card, dark: Colors.dark.card}, 'border');
    // When the tile is selected, use props.isSelected instead of managing internal state
    const handlePress = () => {
        if (props.selectable && props.onSelect) {
            props.onSelect(!props.isSelected);
        }

        if (props.handlePress) {
            props.handlePress();
        }
    };

    return (
        <View>
            {props.selectable && (
                <Checkbox
                    style={styles.checkbox}
                    value={props.isSelected}
                    onValueChange={(value) => props.onSelect && props.onSelect(value)}
                />
            )}
            <TouchableOpacity onPress={handlePress}>
                <View style={[styles.card, {
                    backgroundColor: tileColor, borderColor: borderColor,
                }]}>
                    <ThemedText type='subtitle-small'>{props.title}</ThemedText>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 150,
        display: "flex",
        flexDirection: "column",
        padding: 15,
        borderRadius: 20,
        height: 150,
        borderWidth: 3,
        marginTop: 15,
    },
    checkbox: {
        position: 'absolute',
        top: 10,
        left: -2,
        zIndex: 1,
        borderRadius: 10,
        height: 20,
        backgroundColor: "lightgray",
        width: 20,
    },
});

export default Tile;
