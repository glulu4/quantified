import React, {useEffect} from 'react';
import {View} from 'react-native';
import Svg, {Polyline} from 'react-native-svg';
import Animated, {Easing, useSharedValue, withTiming, useAnimatedProps} from 'react-native-reanimated';
import {Colors} from '@/constants/Colors';

const AnimatedPolyline = Animated.createAnimatedComponent(Polyline);

export const XMark = () => {
    const line1Dashoffset = useSharedValue(350);  // First line of the X (top-left to bottom-right)
    const line2Dashoffset = useSharedValue(350);  // Second line of the X (bottom-left to top-right)

    const animatedLine1Props = useAnimatedProps(() => ({
        strokeDashoffset: line1Dashoffset.value,
    }));

    const animatedLine2Props = useAnimatedProps(() => ({
        strokeDashoffset: line2Dashoffset.value,
    }));

    useEffect(() => {
        // Animate the first line
        line1Dashoffset.value = withTiming(0, {
            duration: 500,
            easing: Easing.out(Easing.ease),
        });

        setTimeout(() => {
            line2Dashoffset.value = withTiming(0, {
                duration: 500,
                easing: Easing.out(Easing.ease),
            });
        }, 500);  // Delay of 800ms
    }, [line1Dashoffset, line2Dashoffset]);

    return (
        <View>
            <Svg width="300" height="300" viewBox="0 0 400 400">
                {/* First diagonal line of the X (top-left to bottom-right) */}
                <AnimatedPolyline
                    fill="none"
                    stroke={Colors.warning}
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="100,100 300,300"
                    strokeDasharray="350"
                    animatedProps={animatedLine1Props}
                />
                {/* Second diagonal line of the X (bottom-left to top-right) */}
                <AnimatedPolyline
                    fill="none"
                    stroke={Colors.warning}
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="300,100 100,300"
                    strokeDasharray="350"
                    animatedProps={animatedLine2Props}
                />
            </Svg>
        </View>
    );
};
