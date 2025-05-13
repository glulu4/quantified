import {View, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import {useThemeColor} from '@/hooks/useThemeColor';
import {SFSymbol} from 'react-native-sfsymbols';
import OptionSelectorBottomSheet from '@/components/ui/OptionSelectorBottomSheet';
import {MealTime} from '@/types/food';

interface MealBottomSheetProps {
    options: string[];
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string[];
    handleSelect: (selected: string) => void;

}

export default function MealBottomSheet({
    options,
    bottomSheetRef,
    snapPoints,
    handleSelect


}: MealBottomSheetProps) {

    const breakfast = useThemeColor({}, "yellow");
    const lunchColor = useThemeColor({}, "orange");
    const dinnerColor = useThemeColor({}, "red");
    const snackColor = useThemeColor({}, "purple");


    function getInputIcon(meal: MealTime) {
        switch (meal) {
            case MealTime.Breakfast:
                return (
                    <View className='self-center pt-1'>
                        <SFSymbol
                            name="sun.horizon"
                            weight="regular"
                            scale="large"
                            color={breakfast}
                            size={32}
                            resizeMode="center"
                            multicolor={false}
                            style={{width: 50, height: 50}}
                        />

                    </View>

                )
            case MealTime.Lunch:
                return (
                    <SFSymbol
                        name="cloud.sun"
                        weight="regular"
                        scale="large"
                        color={lunchColor}
                        size={32}
                        resizeMode="center"
                        multicolor={false}
                        style={{width: 50, height: 50}}
                    />
                )
            case MealTime.Dinner:
                return (
                    <SFSymbol
                        name="sun.haze"
                        weight="regular"
                        scale="large"
                        color={dinnerColor}
                        size={32}
                        resizeMode="center"
                        multicolor={false}
                        style={{width: 50, height: 50}}
                    />
                )
            case MealTime.Snack:
                return (
                    <SFSymbol
                        name="sun.min"
                        weight="regular"
                        scale="large"
                        color={snackColor}
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
            renderIcon={(option) => getInputIcon(option as MealTime)}
        />
    )
}
