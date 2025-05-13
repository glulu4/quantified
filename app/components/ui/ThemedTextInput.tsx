// import React from 'react';
// import {TextInput, type TextInputProps, StyleSheet, Keyboard} from 'react-native';
// import {useThemeColor} from '@/hooks/useThemeColor';
// import {Colors} from '@/constants/Colors';

// export type ThemedTextInputProps = TextInputProps & {
//   lightColor?: string;
//   darkColor?: string;
//   type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'customInput';
// };


// export function ThemedTextInput({
//   style,
//   lightColor = Colors.light.text,
//   darkColor = Colors.dark.text,
//   type = 'default',
//   ...rest
// }: ThemedTextInputProps) {
//   const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');
//   const backgroundColor = useThemeColor(
//     {light: Colors.light.background, dark: Colors.dark.background},
//     'background'
//   );

//   return (
//     <TextInput
//       style={[
//         {color, backgroundColor, },
//         styles.default,
//         type === 'default' ? styles.default : undefined,
//         type === 'title' ? styles.title : undefined,
//         type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
//         type === 'subtitle' ? styles.subtitle : undefined,
//         type === 'link' ? styles.link : undefined,
//         style,
//       ]}
//       placeholderTextColor={color} // Ensure placeholder color matches the theme
//       onSubmitEditing={Keyboard.dismiss}
//       {...rest}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   default: {
//     height: 50,
//     padding: 10,
//     borderRadius: 8,
//     borderWidth: 0,
//     borderColor: '#ccc',
//     backgroundColor: 'rgba(151, 151, 151, 0.25)', // Fixed space after rgba

//   },
//   defaultSemiBold: {
//     fontSize: 16,
//     lineHeight: 24,
//     fontWeight: '600',

//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     lineHeight: 32,

//   },
//   subtitle: {
//     fontSize: 25, // was 20
//     fontWeight: 'bold',

//   },
//   link: {
//     lineHeight: 30,
//     fontSize: 16,
//     color: '#0a7ea4',

//   },

// });

// export default ThemedTextInput;
import React from 'react';
import {TextInput, type TextInputProps, Keyboard} from 'react-native';
import clsx from 'clsx';
import {useThemeColor} from '@/hooks/useThemeColor';
import {Colors} from '@/constants/Colors';

export type ThemedTextInputProps = TextInputProps & {
  type?:
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
  | 'link';
  emphasized?: boolean;
  labelType?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  className?: string;
};



export function ThemedTextInput({
  style,
  labelType,
  type = 'default',
  emphasized = false,
  className,
  ...rest
}: ThemedTextInputProps) {

  const labelColor = labelType ? {
    primary: 'text-labelPrimary-light dark:text-labelPrimary-dark',
    secondary: 'text-labelSecondary-light dark:text-labelSecondary-dark',
    tertiary: 'text-labelTertiary-light dark:text-labelTertiary-dark',
    quaternary: 'text-labelQuaternary-light dark:text-labelQuaternary-dark',
  }[labelType] : "";


  // Get dynamic text and background colors from theme

  return (
    <TextInput
      className={clsx(
        labelColor,
        textStyles[type] || textStyles.body,
        emphasized ? 'font-bold' : 'font-normal',
        className,

      )}
      style={[style, textStyles[type] || textStyles.body]}
      {...rest}
      onSubmitEditing={Keyboard.dismiss}
    />
  );
}

export default ThemedTextInput;

const textStyles = {
  default: {fontSize: 17, lineHeight: 22},
  largeTitle: {fontSize: 34, lineHeight: 41},
  title1: {fontSize: 28, lineHeight: 34},
  title2: {fontSize: 22, lineHeight: 28},
  title3: {fontSize: 20, lineHeight: 25},
  headline: {fontSize: 17, lineHeight: 22},
  body: {fontSize: 17, lineHeight: 22},
  callout: {fontSize: 16, lineHeight: 21},
  subhead: {fontSize: 15, lineHeight: 20},
  footnote: {fontSize: 13, lineHeight: 18},
  caption: {fontSize: 12, lineHeight: 16},
  caption2: {fontSize: 11, lineHeight: 13},
  link: {fontSize: 16, lineHeight: 21, textDecorationLine: 'underline'},
};
