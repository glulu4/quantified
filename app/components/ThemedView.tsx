import React from 'react';
import {KeyboardAvoidingView, Platform, ViewProps, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import clsx from 'clsx';

export type ThemedViewProps = ViewProps & {
  backGroundLevel?:

  | 'bgPrimary'
  | 'bgSecondary'
  | 'bgTertiary'
  | 'bgQuaternary';
  className?: string;
};


function ThemedView({
  style,
  backGroundLevel = 'bgPrimary',
  className,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColors = {
    bgPrimary: 'bg-bgPrimary-light dark:bg-bgPrimary-dark',
    bgSecondary: 'bg-bgSecondary-light dark:bg-bgSecondary-dark',
    bgTertiary: 'bg-bgTertiary-light dark:bg-bgTertiary-dark',
    bgQuaternary: 'bg-bgQuaternary-light dark:bg-bgQuaternary-dark',
  };



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1'
    >
      <View
        className={clsx(
          `${backgroundColors[backGroundLevel]} ${className}`
        )}
        style={style}
        {...otherProps}
      />
    </KeyboardAvoidingView>
  );
}

export default ThemedView;