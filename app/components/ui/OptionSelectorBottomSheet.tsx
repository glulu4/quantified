import {View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetWrap from '@/components/BottomSheetWrap';
import {ThemedText} from '@/components/ui/ThemedText';
import {spacing} from '@/constants/Spacing';
import {useThemeColor} from '@/hooks/useThemeColor';
import {MealTime} from '@/services/foodDataApiTypes';

interface OptionSelectorBottomSheetProps {
    options: string[];
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string[];
    handleSelect: (selected: string) => void;
    renderIcon: (option: string) => React.ReactNode;
}

export default function OptionSelectorBottomSheet({
    options,
    bottomSheetRef,
    snapPoints,
    handleSelect,
    renderIcon,
}: OptionSelectorBottomSheetProps) {
    const iconTextColor = useThemeColor({}, "labelPrimary");

    return (
        <BottomSheetWrap bottomSheetRef={bottomSheetRef} snapPoints={snapPoints} className="p-8">
            <View className="p-3">
                <ThemedText labelType="primary" type="title1" emphasized>
                    Select Option
                </ThemedText>
            </View>
            <View className="flex flex-1">
                <ScrollView
                    contentContainerStyle={{
                        padding: spacing.lg,
                        paddingBottom: spacing["3xl"],
                    }}
                    className="pt-3"
                >
                    {options.map((option) => (
                        <TouchableOpacity key={option} onPress={() => handleSelect(option)}>
                            <View className="bg-bgTertiary-light dark:bg-bgTertiary-dark px-5 flex flex-row items-center justify-between min-h-[70] rounded-xl my-2">
                                <ThemedText labelType="primary" type="title3">
                                    {option}
                                </ThemedText>
                                {renderIcon(option)}
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </BottomSheetWrap>
    );
}
