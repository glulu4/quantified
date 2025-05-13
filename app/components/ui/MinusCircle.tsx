import React from 'react'
import CircleButton from './CircleButton'
import {useColors} from '@/hooks/useColors'



const MinusCircle = ({selected}: {selected: boolean}) => {
    const colors = useColors()
    return (
        <CircleButton selected={selected} color={colors.general.red} iconName="minus" />

    )
}

export default MinusCircle;