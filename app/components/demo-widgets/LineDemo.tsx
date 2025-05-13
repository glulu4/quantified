

import React from 'react';
import {Canvas, Path, Skia} from '@shopify/react-native-skia';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useThemeColor} from '@/hooks/useThemeColor';

interface LineGraphProps {
    padding?: number;
    lineColor?: string;
}

const LineGraphDemo = ({
    padding = 1,
    lineColor = useThemeColor({}, 'orange'),
}: LineGraphProps) => {

    const backgroundColor = useThemeColor({}, 'secondaryFill');
    const height = 200;
    // Example data points (x, y coordinates) - replace with your data from your other library
    const data = [
        {x: 0, y: 180},
        {x: 50, y: 150},
        {x: 100, y: 100},
        {x: 150, y: 120},
        {x: 200, y: 80},
        {x: 250, y: 140},
        {x: 300, y: 180},
        {x: 350, y: 189},
        {x: 400, y: 210},
        {x: 450, y: 250},

    ];

    // Create a smooth path using cubic Bezier curves
    const path = Skia.Path.Make();
    path.moveTo(data[0].x, data[0].y);

    for (let i = 1; i < data.length; i++) {
        const prev = data[i - 1];
        const curr = data[i];
        // Control points for smoothing
        const cp1x = prev.x + (curr.x - prev.x) * 0.3; // Midpoint-ish for control point 1
        const cp1y = prev.y;
        const cp2x = curr.x - (curr.x - prev.x) * 0.3; // Midpoint-ish for control point 2
        const cp2y = curr.y;

        path.cubicTo(cp1x, cp1y, cp2x, cp2y, curr.x, curr.y);
    }

    const {width: deviceWidth} = Dimensions.get('window');
    const fullWidth = deviceWidth * padding;



    return (
        <Canvas

            style={{width: fullWidth, height: height, }}
        >
            <Path
                path={path}
                style="stroke"
                strokeWidth={6}
                color={lineColor}

            />
        </Canvas>

    );
};



export default LineGraphDemo;