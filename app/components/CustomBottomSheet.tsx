import {View, StyleSheet, Text, Button, useColorScheme} from 'react-native';
import React, {forwardRef, PropsWithChildren, useMemo} from 'react';
import BottomSheet, {useBottomSheet} from '@gorhom/bottom-sheet';
import {Colors} from '@/constants/Colors';
export type Ref = BottomSheet;

interface Props {
    title: string;
}

const CustomBottomSheet = forwardRef<Ref, PropsWithChildren>((props, ref) => {
    const snapPoints = useMemo(() => ["10%", '25%', "50%", "75%", "100%"], []);

    const bottomSheetColor = useColorScheme() === 'light' ? Colors.light.background : Colors.dark.background;
    const bottomInicatorColor = useColorScheme() === 'light' ? Colors.light.icon : Colors.dark.icon;


    return (
        <BottomSheet
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            handleIndicatorStyle={{backgroundColor: bottomInicatorColor}}
            backgroundStyle={{backgroundColor: bottomSheetColor, borderWidth: 1, borderColor: 'gray'}}
        >
            <View style={styles.contentContainer}>
                {props.children}
            </View>
        </BottomSheet>
    );
});

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        // alignItems: 'center'
    },
    containerHeadline: {
        fontSize: 24,
        fontWeight: '600',
        padding: 20,
        color: '#fff'
    }
});

export default CustomBottomSheet;
