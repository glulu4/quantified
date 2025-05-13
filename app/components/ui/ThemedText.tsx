import {Text, type TextProps} from 'react-native';
import {useColorScheme} from 'nativewind';
import clsx from 'clsx';

export type ThemedTextProps = TextProps & {
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

export function ThemedText({
  style,
  type = 'default',
  emphasized = false,
  labelType,
  className,
  ...rest
}: ThemedTextProps) {

  const labelColor = labelType ? {
    primary: 'text-labelPrimary-light dark:text-labelPrimary-dark',
    secondary: 'text-labelSecondary-light dark:text-labelSecondary-dark',
    tertiary: 'text-labelTertiary-light dark:text-labelTertiary-dark',
    quaternary: 'text-labelQuaternary-light dark:text-labelQuaternary-dark',
  }[labelType] : "";

  return (
    <Text
      className={clsx(
        labelColor,
        textStyles[type] || textStyles.body,
        emphasized ? 'font-bold' : 'font-normal',
        className,

      )}
      style={[style, textStyles[type] || textStyles.body]}
      {...rest}
    />
  );
}
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
