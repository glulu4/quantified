import React, {useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle, Polyline} from 'react-native-svg';
import Animated, {Easing, useSharedValue, withTiming, useAnimatedProps} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPolyline = Animated.createAnimatedComponent(Polyline);

export const CheckMark = () => {
  const circleDashoffset = useSharedValue(1194);
  const tickDashoffset = useSharedValue(350);

  const animatedCircleProps = useAnimatedProps(() => ({
    strokeDashoffset: circleDashoffset.value,
  }));

  const animatedTickProps = useAnimatedProps(() => ({
    strokeDashoffset: tickDashoffset.value,
  }));

  useEffect(() => {
    circleDashoffset.value = withTiming(0, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });
    tickDashoffset.value = withTiming(0, {
      duration: 800,
      easing: Easing.out(Easing.ease),
      //   delay: 950,
    });
  }, [circleDashoffset, tickDashoffset]);

  return (
    <View>
      <Svg width="300" height="300" viewBox="0 0 400 400">
        <AnimatedCircle
          fill="none"
          stroke="#68E534"
          strokeWidth="20"
          cx="200"
          cy="200"
          r="190"
          strokeLinecap="round"
          transform="rotate(-90 200 200)"
          strokeDasharray="1194"
          animatedProps={animatedCircleProps}
        />
        <AnimatedPolyline
          fill="none"
          stroke="#68E534"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="88,214 173,284 304,138"
          strokeDasharray="350"
          animatedProps={animatedTickProps}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({

});

