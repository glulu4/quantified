import {View, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetWrap from '@/components/BottomSheetWrap';
import {ThemedText} from '@/components/ui/ThemedText';
import {spacing} from '@/constants/Spacing';
import {useThemeColor} from '@/hooks/useThemeColor';
import {CoreInputType} from '@/types/core-metric';
import {SFSymbol} from 'react-native-sfsymbols';
import Fraction from '@/components/icons/Fraction';
import Slider from '@/components/icons/Slider';
import OptionSelectorBottomSheet from '@/components/ui/OptionSelectorBottomSheet';

interface InputBottomSheetProps {
    options: string[];
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string[];
    handleSelect: (selected: string) => void;

}

export default function InputBottomSheet({
    options,
    bottomSheetRef,
    snapPoints,
    handleSelect


}: InputBottomSheetProps) {

    const iconTextColor = useThemeColor({}, "labelPrimary");
    const sliderIconColor = useThemeColor({}, "indigo");
    const foodIconColor = useThemeColor({}, "orange");
    const calendarIconColor = useThemeColor({}, "green");
    const multiSelectIconColor = useThemeColor({}, "brown");
    const clockColor = useThemeColor({}, "blue");

    function getInputIcon(inputType: CoreInputType) {
        switch (inputType) {
            case CoreInputType.SCALE:
                return (
                    <View className='self-center pt-1'>
                        <Slider size={40} color={sliderIconColor} />

                    </View>

                )

            case CoreInputType.TEXT:
                return (
                    <SFSymbol
                        name="character.textbox"
                        weight="regular"
                        scale="large"
                        color={iconTextColor}
                        size={32}
                        resizeMode="center"
                        multicolor={false}
                        style={{width: 50, height: 50}}
                    />
                )

            case CoreInputType.DATE:
            case CoreInputType.DATE_RANGE:
                return (
                    <SFSymbol
                        name="calendar"
                        weight="regular"
                        scale="large"
                        color={calendarIconColor}
                        size={32}
                        resizeMode="center"
                        multicolor={false}
                        style={{width: 50, height: 50}}
                    />
                )

            case CoreInputType.NUMBER:
                return (
                    <SFSymbol
                        name="textformat.numbers"
                        weight="regular"
                        scale="large"
                        color={iconTextColor}
                        size={32}
                        resizeMode="center"
                        multicolor={false}
                        style={{width: 50, height: 50}}
                    />
                )

            case CoreInputType.FRACTION:
                return <Fraction size={25} color={iconTextColor} />
            case CoreInputType.FOOD_DB:
                return (
                    <SFSymbol
                        name="carrot"
                        weight="regular"
                        scale="large"
                        color={foodIconColor}
                        size={32}
                        resizeMode="center"
                        multicolor={false}
                        style={{width: 50, height: 50}}
                    />
                )
            case CoreInputType.MULTISELECT:
                return (
                    <SFSymbol
                        name="filemenu.and.selection"
                        weight="regular"
                        scale="large"
                        color={multiSelectIconColor}
                        size={32}
                        resizeMode="center"
                        multicolor={false}
                        style={{width: 50, height: 50}}
                    />
                )

            case CoreInputType.TIME:
                return (
                    <SFSymbol
                        name="clock"
                        weight="regular"
                        scale="large"
                        color={clockColor}
                        size={32}
                        resizeMode="center"
                        multicolor={false}
                        style={{width: 50, height: 50}}
                    />
                )
            default:
                break;
        }
    }

    return (

        <OptionSelectorBottomSheet
            options={options}
            bottomSheetRef={bottomSheetRef}
            snapPoints={snapPoints}
            handleSelect={handleSelect}
            renderIcon={(option) => getInputIcon(option as CoreInputType)}
        />
    )
}
