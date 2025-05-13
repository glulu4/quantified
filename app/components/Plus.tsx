import {View, Text} from 'react-native'
import React from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {useThemeColor} from '@/hooks/useThemeColor';
import {AntDesign, Feather} from '@expo/vector-icons';


interface PlusButtonProps {
    pressFn: () => void;
    size?: number;
    color?: string;
}
const Plus = ({pressFn, size, color}: PlusButtonProps) => {

    const iconColor = color ?? useThemeColor({}, "icon")

    return (
        <TouchableOpacity onPress={pressFn}>
            <AntDesign name='plus' size={size || 30} color={iconColor} />
        </TouchableOpacity>
    )
}

export default Plus