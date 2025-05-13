import React from 'react'
import CircleButton from './CircleButton'
import {useColors} from '@/hooks/useColors'
import {useThemeColor} from '@/hooks/useThemeColor'



const PlusCircle = ({selected, color}: {selected: boolean, color?: string}) => {

    const plusColor = color || useThemeColor({}, 'green')
    return (
        <CircleButton selected={selected} color={plusColor} iconName="plus" />

    )
}

export default PlusCircle;