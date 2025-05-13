import {View, Text} from 'react-native'
import React from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {useThemeColor} from '@/hooks/useThemeColor';
import {AntDesign, Feather} from '@expo/vector-icons';


interface ArrowButtonProps {
    pressFn: () => void;
    size?: number;
    color?: string;
    direction: "right" | "left";
}
const Arrow = ({pressFn, size, color, direction}: ArrowButtonProps) => {

    const iconColor = color ?? useThemeColor({}, "icon")

    return (
        <TouchableOpacity onPress={pressFn}>
            <AntDesign name={`arrow${direction}`} size={size || 30} color={iconColor} />
        </TouchableOpacity>
    )
}

export default Arrow