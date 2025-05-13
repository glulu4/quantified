import {View, Text} from 'react-native'
import React from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {useThemeColor} from '@/hooks/useThemeColor';
import {Feather} from '@expo/vector-icons';


interface EditButtonProps {
  pressFn: () => void;
  size?: number
}
const EditButton = ({pressFn, size}: EditButtonProps) => {

  const iconColor = useThemeColor({}, "tertiaryFill")

  return (
    <TouchableOpacity onPress={pressFn}>
      <Feather name='edit' size={size || 30} color={iconColor} />
    </TouchableOpacity>
  )
}

export default EditButton