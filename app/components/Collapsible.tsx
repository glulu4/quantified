// import Ionicons from '@expo/vector-icons/Ionicons';
// import {PropsWithChildren, useCallback, useRef, useState} from 'react';
// import {StyleSheet, TouchableOpacity, View, Animated, LayoutAnimation, useColorScheme} from 'react-native';
// import {ThemedText} from '@/components/ui/ThemedText';
// import {Colors} from '@/constants/Colors';
// import {spacing} from '@/constants/Spacing';
// import {Entypo} from '@expo/vector-icons';
// import {useTheme} from 'react-native-paper';
// import {useThemeColor} from '@/hooks/useThemeColor';

// interface CollapsibleProps {
//   title: string;
//   onToggle?: (isOpen: boolean) => void;
//   textType?:
//   | 'default'
//   | 'largeTitle'
//   | 'title1'
//   | 'title2'
//   | 'title3'
//   | 'headline'
//   | 'body'
//   | 'callout'
//   | 'subhead'
//   | 'footnote'
//   | 'caption'
//   | 'caption2'
//   | 'link' | undefined;
// }

// export function Collapsible({children, title, onToggle, textType}: PropsWithChildren<CollapsibleProps>) {
//   const [isOpen, setIsOpen] = useState(false);
//   const theme = useColorScheme() ?? 'light';
//   const animation = useRef(new Animated.Value(0)).current;

//   const iconColor = useThemeColor({}, 'labelPrimary');

//   const handleToggle = () => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     const newIsOpen = !isOpen;
//     setIsOpen(newIsOpen);
//     if (onToggle) {
//       onToggle(newIsOpen);
//     }

//     Animated.timing(animation, {
//       toValue: newIsOpen ? 1 : 0,
//       duration: 300,
//       useNativeDriver: false, // Must be false for height animations
//     }).start();
//   };

//   const heightInterpolation = animation.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 400], // Adjust max height as needed
//   });
//   const rotationAnimation = useRef(new Animated.Value(0)).current;
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const openMenu = useCallback(() => {
//     setIsOpen(true);
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//     Animated.timing(rotationAnimation, {
//       toValue: 180,
//       duration: 200,
//       useNativeDriver: true,
//     }).start();
//   }, [fadeAnim, rotationAnimation]);

//   const closeMenu = useCallback(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => setIsOpen(false));
//     Animated.timing(rotationAnimation, {
//       toValue: 0,
//       duration: 200,
//       useNativeDriver: true,
//     }).start();
//   }, [fadeAnim, rotationAnimation]);

//   const renderArrow = useCallback(
//     () => (
//       <Animated.View
//         style={{
//           transform: [
//             {
//               rotate: rotationAnimation.interpolate({
//                 inputRange: [0, 180],
//                 outputRange: ['0deg', '180deg'],
//               }),
//             },
//           ],
//         }}
//       >
//         <Entypo color="black" name="chevron-small-down" size={20} />
//       </Animated.View>
//     ),
//     [rotationAnimation]
//   );

//   return (
//     <View >
//       <TouchableOpacity
//         style={styles.heading}
//         onPress={handleToggle}
//         activeOpacity={0.8}
//       >
//         {/* <Entypo
//           name={isOpen ? 'minus' : 'plus'}
//           size={18}
//           color={iconColor}
//         /> */}
//         {renderArrow()}
//         <ThemedText labelType='primary' type={textType}>{title}</ThemedText>
//       </TouchableOpacity>
//       {isOpen && (
//         // <View style={styles.content}>

//         <Animated.View style={[styles.content, {height: heightInterpolation, overflow: 'hidden'}]}>
//           {children}

//         </Animated.View>

//         // </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   heading: {
//     flexDirection: 'row-reverse',
//     alignItems: 'center',
//     justifyContent: "space-between",

//     // gap: 6,
//     // marginHorizontal: spacing["4xl"],
//     overflow: 'visible'
//   },
//   content: {

//     marginTop: 6,
//     // marginLeft: 24,
//     position: 'relative', // Ensures content doesn't push other components down
//   },
// });
import Ionicons from '@expo/vector-icons/Ionicons';
import {PropsWithChildren, useCallback, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Animated, LayoutAnimation, useColorScheme} from 'react-native';
import {ThemedText} from '@/components/ui/ThemedText';
import {Colors} from '@/constants/Colors';
import {spacing} from '@/constants/Spacing';
import {Entypo} from '@expo/vector-icons';
import {useTheme} from 'react-native-paper';
import {useThemeColor} from '@/hooks/useThemeColor';

interface CollapsibleProps {
  title: string;
  onToggle?: (isOpen: boolean) => void;
  textType?:
  | 'default'
  | 'largeTitle'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'headline'
  | 'body'
  | 'callout'
  | 'subhead'
  | 'footnote'
  | 'caption'
  | 'caption2'
  | 'link' | undefined;
}

export function Collapsible({children, title, onToggle, textType}: PropsWithChildren<CollapsibleProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';
  const animation = useRef(new Animated.Value(0)).current;
  const rotationAnimation = useRef(new Animated.Value(0)).current;
  const iconColor = useThemeColor({}, 'blue');

  const handleToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (onToggle) {
      onToggle(newIsOpen);
    }

    // Content height animation
    Animated.timing(animation, {
      toValue: newIsOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: false, // Must be false for height animations
    }).start();

    // Arrow rotation animation
    Animated.timing(rotationAnimation, {
      toValue: newIsOpen ? 180 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400], // Adjust max height as needed
  });

  const renderArrow = () => (
    <Animated.View
      style={{
        transform: [
          {
            rotate: rotationAnimation.interpolate({
              inputRange: [0, 180],
              outputRange: ['0deg', '180deg'],
            }),
          },
        ],
      }}
    >
      <Entypo color={iconColor} name="chevron-small-down" size={23} />
    </Animated.View>
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.heading}
        onPress={handleToggle}
        activeOpacity={0.8}
      >
        {renderArrow()}
        <ThemedText labelType='primary' type={textType}>{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && (
        <Animated.View style={[styles.content, {height: heightInterpolation, overflow: 'hidden'}]}>
          {children}
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: "space-between",
    overflow: 'visible'
  },
  content: {
    marginTop: 6,
    position: 'relative', // Ensures content doesn't push other components down
  },
});