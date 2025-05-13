import {View, Text} from 'react-native'
import React from 'react'
import CircleButton from './CircleButton'
import {useColors} from '@/hooks/useColors'



const CheckCircle = ({selected}: {selected: boolean}) => {
    const colors = useColors()
    return (
        <CircleButton selected={selected} color={colors.general.blue} iconName="checkmark" />

    )
}

export default CheckCircle;