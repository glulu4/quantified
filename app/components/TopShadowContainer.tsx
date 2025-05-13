import {View, Text, StyleSheet, useColorScheme} from 'react-native'
import React, {PropsWithChildren} from 'react'
import {ThemedView} from './ThemedView'
import {Colors} from '@/constants/Colors'

const TopShadowContainer = ({children}: PropsWithChildren) => {
    const backgroundColor = useColorScheme() === 'light' ? Colors.light.background : Colors.dark.background;
    const shadow = useColorScheme() === 'light' ? "black" : "white"

    return (
        <ThemedView style={{overflow: 'hidden', paddingBottom: 5}}>
            <ThemedView style={{...styles.shadowBox, backgroundColor: backgroundColor, shadowColor: shadow}}>
                {children}
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    shadowBox: {
        // backgroundColor: '#fff',

        // shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
})

export default TopShadowContainer;