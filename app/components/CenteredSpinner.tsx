import {View, ViewStyle} from 'react-native'
import React from 'react'
import {ActivityIndicator} from 'react-native-paper'
import {Colors} from '@/constants/Colors'
interface CenteredSpinnerProps {
    style?: ViewStyle
}

const CenteredSpinner = ({style}: CenteredSpinnerProps) => {
    return (
        <View style={[{display: 'flex', alignItems: "center", justifyContent: 'center', margin: 5, flex: 1}, style]}>
            <ActivityIndicator color={Colors.primary} size={30} />
        </View>
    )
}

export default CenteredSpinner
