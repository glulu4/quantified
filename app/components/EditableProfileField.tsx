import React from 'react';
import { View } from 'react-native';
import ThemedTextInput from './ui/ThemedTextInput';
import { ThemedText } from './ui/ThemedText';
import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

interface EditableProfileFieldProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  editable?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
  className?: string;
}

const EditableProfileField = ({
  label,
  value,
  onChange,
  editable = true,
  keyboardType = 'default',
  className,
}: EditableProfileFieldProps) => {
  const lockColor = useThemeColor({}, 'labelSecondary');
  return (
    <View className={className}>
      <ThemedText type="headline" labelType="primary" emphasized className="pl-1 pb-2">
        {label}
      </ThemedText>
      <View className="flex-row items-center bg-bgSecondary-light dark:bg-bgSecondary-dark rounded-xl px-3 py-5">
        {editable ? (
          <ThemedTextInput
            value={value}
            onChangeText={onChange}
            keyboardType={keyboardType}
            className="flex-1"
            autoCapitalize="none"
          />
        ) : (
          <>
            <ThemedText type="body" labelType="primary" className="flex-1">
              {value}
            </ThemedText>
            <Feather name="lock" size={16} color={lockColor} />
          </>
        )}
      </View>
    </View>
  );
};

export default EditableProfileField;
