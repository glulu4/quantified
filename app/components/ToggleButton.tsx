import React from 'react';
import {TouchableOpacity, Text, StyleSheet, useColorScheme} from 'react-native';
import {ThemedText} from './ui/ThemedText';

interface ToggleButtonProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  size?: 'small' | 'medium' | 'large'; // Add size prop
}

const ToggleButton: React.FC<ToggleButtonProps> = ({label, isSelected, onPress, size = 'medium'}) => {

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {buttonStyle: styles.buttonSmall, fontSize: styles.fontSmall};
      case 'large':
        return {buttonStyle: styles.buttonLarge, fontSize: styles.fontLarge};
      default:
        return {buttonStyle: styles.buttonMedium, fontSize: styles.fontMedium}; // Default to medium
    }
  };
  const {buttonStyle, fontSize} = getSizeStyle();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isSelected ? styles.buttonSelected : styles.buttonUnselected,
        {borderColor: '#F49D37', borderWidth: 2},
        buttonStyle]}
      onPress={onPress}
    >
      <ThemedText style={fontSize} type="subhead">{label}</ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {

    margin: 5,
  },
  buttonSelected: {
    backgroundColor: '#F49D37', // Orange color for selected state
  },
  buttonUnselected: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  buttonSmall: {
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 15,
  },
  buttonMedium: {
    paddingVertical: 10,  // Same as your current setup
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonLarge: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  fontSmall: {
    fontSize: 14,
  },
  fontMedium: {
    fontSize: 16,  // Default font size for medium
  },
  fontLarge: {
    fontSize: 20,
  }
});

export default ToggleButton;
