import React from 'react';
import {Canvas, RoundedRect} from '@shopify/react-native-skia';
import {View, Dimensions, StyleSheet} from 'react-native';
import {useThemeColor} from '@/hooks/useThemeColor';

interface BarDemoProps {
    padding?: number;
    barColor?: string;
    height?: number;
}

const BarDemo = ({
    padding = 1,
    barColor = useThemeColor({}, 'indigo'),
    height = 200,
}: BarDemoProps) => {
    const data = [
        // {x: 0, y: 180},
        // {x: 50, y: 150},
        // {x: 100, y: 100},
        {x: 150, y: 120},
        {x: 200, y: 80},
        {x: 250, y: 140},
        {x: 300, y: 180},
        {x: 350, y: 189},
        {x: 400, y: 210},
        {x: 450, y: 250},
    ];

    const paddingBetweenBars = 0.1;
    // Extract y values for height scaling
    const yValues = data.map(point => point.y);
    const minY = 0; // Bars start from bottom
    const maxY = Math.max(...yValues); // 250
    const dataHeight = maxY - minY; // 250

    // Canvas dimensions
    const {width: deviceWidth} = Dimensions.get('window');
    const fullWidth = deviceWidth * padding;
    const adjustedHeight = height;

    // Number of bars
    const barCount = data.length;

    // Calculate bar width and spacing
    const totalSpacing = fullWidth * paddingBetweenBars; // 10% of width for spacing (adjustable)
    let barWidth = (fullWidth - totalSpacing) / barCount; // Evenly divide remaining space
    if (barWidth > 50) {
        barWidth = 40;
    }
    let gap = totalSpacing / (barCount - 1 || 1); // Space between bars (avoid division by 0)


    if (gap > 10) {
        gap = 10;
    }

    // Scale y values to fit canvas height
    const scaleY = adjustedHeight / dataHeight;

    // group of bars width, including gaps
    let totalGroupWidth = (barWidth * barCount) + (gap * (barCount - 1))
    let xOffset = (fullWidth - totalGroupWidth) / 2


    return (
        <Canvas style={{width: fullWidth, height: adjustedHeight}}>
            {data.map((point, index) => {
                // Position bars evenly across the width
                const x = index * (barWidth + gap) + xOffset;
                const barHeight = point.y * scaleY; // Scale height
                const y = adjustedHeight - barHeight; // Invert y (start from bottom)

                return (
                    <RoundedRect
                        r={5}
                        key={index}
                        x={x}
                        y={y}
                        width={barWidth}
                        height={barHeight}
                        color={barColor}
                    />
                );
            })}
        </Canvas>
    );
};



export default BarDemo;