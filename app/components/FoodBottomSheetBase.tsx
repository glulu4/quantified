import React, {ReactNode} from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetWrap from '@/components/BottomSheetWrap';
import {ThemedText} from '@/components/ui/ThemedText';
import {useThemeColor} from '@/hooks/useThemeColor';
import {ScrollView} from 'react-native-gesture-handler';
import OrbitProgress from '@/components/progress-widgets/Orbit';
import InputRow from '@/components/ui/InputRow';
import NumberInput from '@/components/ui/NumberInput';
import {SFSymbol} from 'react-native-sfsymbols';

// Interface for the macro data structure
interface MacroData {
    displayName: string;
    dv: number;
    color: string;
}

// Props for the reusable component
interface FoodBottomSheetBaseProps {
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string[];
    title: string;
    subtitle: string;
    servingSize?: string;
    numServings: number;
    macroData: MacroData[];
    onServingsChange?: (value: number) => void;
    onDelete?: () => void;
    showDelete?: boolean;
    showEdit?: boolean;
    onEdit?: () => void;
    contentScrollable?: boolean;
    lowerContent?: ReactNode;
}

// Shadow style object used by both components
export const shadowStyle = Platform.OS === 'ios'
    ? {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: -3},
        shadowOpacity: 0.3,
        shadowRadius: 8,
    }
    : {
        elevation: 6,
    };

// Reusable component
export default function FoodBottomSheetBase({
    bottomSheetRef,
    snapPoints,
    title,
    subtitle,
    servingSize,
    numServings,
    macroData,
    onServingsChange,
    onDelete,
    showDelete = false,
    showEdit = false,
    onEdit,
    contentScrollable = true,
    lowerContent,
}: FoodBottomSheetBaseProps) {
    const bgPrimary = useThemeColor({}, 'bgPrimary');
    const redDelete = useThemeColor({}, 'red');
    const blueEdit = useThemeColor({}, 'blue');

    // Content for the lower section of the bottom sheet
    const renderLowerContent = () => {
        // If custom content is provided, use it
        if (lowerContent) {
            return lowerContent;
        }

        // Otherwise, render the default serving size and number of servings UI
        const content = (
            <>
                {servingSize && (
                    <View className="flex-1 flex-col">
                        <ThemedText labelType='primary' emphasized type='headline' className="mt-4 mb-2 ml-1">
                            Serving Size
                        </ThemedText>
                        <InputRow backGroundLevel='bgTertiary'>
                            <ThemedText labelType='primary'>
                                Serving Size
                            </ThemedText>
                            <ThemedText labelType='secondary'>
                                {servingSize}
                            </ThemedText>
                        </InputRow>
                    </View>
                )}

                <View className="flex-1 flex-col">
                    <ThemedText labelType='primary' emphasized type='headline' className="mt-4 mb-2 ml-1">
                        Number of Servings
                    </ThemedText>
                    <InputRow backGroundLevel='bgTertiary'>
                        <ThemedText labelType='primary'>
                            Number of Servings
                        </ThemedText>
                        <NumberInput
                            value={numServings}
                            onChange={onServingsChange || (() => {})}
                            min={1}
                        />
                    </InputRow>
                </View>
            </>
        );

        // If content should be scrollable, wrap it in a ScrollView
        if (contentScrollable) {
            return (
                <ScrollView contentContainerStyle={{flex: 1, flexGrow: 1, padding: 16}}>
                    {content}
                </ScrollView>
            );
        }

        // Otherwise, wrap it in a View with padding
        return (
            <View className="flex-1 p-4">
                {content}
            </View>
        );
    };

    return (
        <BottomSheetWrap
            bottomSheetRef={bottomSheetRef}
            snapPoints={snapPoints}
            backgroundColor={bgPrimary}
        >
            <View
                style={shadowStyle}
                className="flex flex-col shadow-md bg-bgPrimary-light dark:bg-bgPrimary-dark w-full p-4 h-fit"
            >
                <View className="flex-row flex items-center justify-between">
                    <View className="flex-1">
                        <ThemedText labelType="primary" type="title3" emphasized className="text-xl font-bold">
                            {title}
                        </ThemedText>
                        <ThemedText type="subhead" labelType="secondary" className="mt-3">
                            {subtitle}
                        </ThemedText>
                    </View>

                    {showDelete && onDelete && (
                        <TouchableOpacity onPress={onDelete} className="pr-6" hitSlop={10}>
                            <SFSymbol name="trash" size={25} color={redDelete} />
                        </TouchableOpacity>
                    )}

                    {showEdit && onEdit && (
                        <TouchableOpacity onPress={onEdit} className="pr-6" hitSlop={10}>

                            <SFSymbol name="square.and.pencil" size={25} color={blueEdit} />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Macronutrient Circles using OrbitProgress */}
                <View className="flex-row flex justify-around pt-8 flex-wrap">
                    {macroData.map((macro, index) => (
                        <View key={index} className="flex-1 flex flex-col items-center justify-between gap-5">
                            <OrbitProgress
                                size={110}
                                progress={macro.dv / 100}
                                color={macro.color}
                                padding={1}
                            />
                            <View className="flex">
                                <ThemedText labelType='primary' className="mt-2 text-sm text-center">
                                    {macro.displayName} {'\n'} {Math.round(macro.dv)}%
                                </ThemedText>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            <View className="flex-1 flex bg-bgSecondary-light dark:bg-bgSecondary-dark -z-30">
                {renderLowerContent()}
            </View>
        </BottomSheetWrap>
    );
}