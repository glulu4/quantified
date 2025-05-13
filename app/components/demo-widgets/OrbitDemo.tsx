import {View, Text} from 'react-native'
import React from 'react'
import OrbitProgress from '../progress-widgets/Orbit'
import {useThemeColor} from '@/hooks/useThemeColor';
import clsx from 'clsx';

interface OrbitDemoProps {
    padding: number;

}

export default function OrbitDemo({padding}: OrbitDemoProps) {
    const lineColor = useThemeColor({}, "indigo");

    return (

        <OrbitProgress
            size={200}
            progress={0.75}
            color={lineColor}
            text="75%"
            padding={padding}
        />
    )
}