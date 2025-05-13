import {View, Text, TouchableOpacity, useColorScheme, StyleSheet} from 'react-native'
import React from 'react'
import {FontAwesome6} from '@expo/vector-icons'
import {useThemeColor} from '@/hooks/useThemeColor'
import {ThemedText} from './ui/ThemedText';

interface RemovableProps {
    pressFn: () => void;
    text: string;
}
const Removable = ({text, pressFn}: RemovableProps) => {
    const iconColor = useThemeColor({}, "icon")

    return (
        <TouchableOpacity onPress={pressFn}>
            <View style={styles.selectedMetricView}>
                <FontAwesome6 name="xmark" color={iconColor} />
                <ThemedText>{text}</ThemedText>
            </View>
        </TouchableOpacity>
    )
}

export default Removable;

const styles = StyleSheet.create({
    selectedMetricView: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }

})