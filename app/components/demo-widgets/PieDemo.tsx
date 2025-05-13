import React from 'react';
import {Canvas, Path, Skia} from '@shopify/react-native-skia';
import {View, Dimensions, StyleSheet} from 'react-native';
import {useThemeColor} from '@/hooks/useThemeColor';
import {defaultGraphColors} from '@/constants/Colors';
import clsx from 'clsx';
interface PieDemoProps {
    padding?: number;
    height?: number;

}

const PieDemo = ({
    padding = 1,
    height = 200,

}: PieDemoProps) => {
    const backgroundColor = useThemeColor({}, 'secondaryFill');


    // Mock data (values represent slice sizes)
    const data = [
        {value: 120, color: useThemeColor({}, 'blue')},
        {value: 80, color: useThemeColor({}, 'purple')},
        {value: 140, color: useThemeColor({}, 'cyan')},
        // {value: 180, color: useThemeColor({}, 'pink')},


    ];

    // Canvas dimensions
    const {width: deviceWidth} = Dimensions.get('window');
    const fullWidth = deviceWidth * padding;
    const adjustedHeight = height;

    // Calculate total value for percentage conversion
    const totalValue = data.reduce((sum, item) => sum + item.value, 0);

    // Determine pie chart size (use smaller dimension to fit circle)
    const paddingFactor = 0.1; // 10% padding around the pie
    const maxRadius = Math.min(fullWidth, adjustedHeight) * (1 - paddingFactor) / 2;
    const centerX = fullWidth / 2;
    const centerY = adjustedHeight / 2;

    // Helper function to create a pie slice path
    const createPieSlice = (startAngle: number, sweepAngle: number, color: string) => {
        const path = Skia.Path.Make();
        // const endAngle = startAngle + sweepAngle;

        // Move to center
        // path.moveTo(centerX - 20, centerY);

        // Starting point on the circle
        // const startX = centerX + maxRadius * Math.cos(startAngle);
        // const startY = centerY + maxRadius * Math.sin(startAngle);
        // path.lineTo(startX, startY);

        // Add arc for the slice
        path.addArc(
            {
                x: centerX - maxRadius,
                y: centerY - maxRadius,
                width: maxRadius * 2,
                height: maxRadius * 2
            }, // Oval bounds
            startAngle * (180 / Math.PI), // Start angle in degrees
            sweepAngle * (180 / Math.PI)  // Sweep angle in degrees
        );

        // Close the path back to center
        path.lineTo(centerX, centerY);
        path.close();

        return {path, color};
    };

    // Generate pie slices
    let currentAngle = 0;
    const slices = data.map((item) => {
        const sweepAngle = (item.value / totalValue) * 2 * Math.PI; // Convert to radians
        const slice = createPieSlice(currentAngle, sweepAngle, item.color);
        currentAngle += sweepAngle;
        return slice;
    });

    return (

        <Canvas style={{width: fullWidth, height: adjustedHeight}}>
            {slices.map((slice, index) => (
                <Path
                    key={index}
                    path={slice.path}
                    color={slice.color}
                    style="fill"
                />
            ))}
        </Canvas>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PieDemo;