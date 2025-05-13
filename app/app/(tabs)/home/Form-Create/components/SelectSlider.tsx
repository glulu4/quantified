import {View, Text, ScrollView} from 'react-native'
import React, {Dispatch, SetStateAction} from 'react'
import {ThemedText} from '@/components/ui/ThemedText'
import Circle from './Circle';
import {remapProps} from 'nativewind';
import {FormColor, FormIcon, useFormStyle} from '@/hooks/useFormStyle';


interface SelectSliderProps {
    data: FormIcon[] | FormColor[];
    title: string;
    type: "icon" | "color";
    selectedItem: string;
    setSelectedItem: Dispatch<SetStateAction<string>>;
}

export default function SelectSlider({
    data,
    title,
    type,
    selectedItem,
    setSelectedItem
}: SelectSliderProps) {


    function isSelected(itemName: string) {
        return itemName === selectedItem;
    }

    function renderCircles() {

        if (type === "icon") {
            const circleData = data as FormIcon[];

            return circleData.map((iconObj: FormIcon, index) => (
                <View className='px-2' key={index}>
                    <Circle
                        icon={iconObj.icon}
                        selected={isSelected(iconObj.name)}
                        onPress={() => setSelectedItem(iconObj.name)}
                    />
                </View>
            ))
        }

        else {

            const circleColorData = data as FormColor[];

            return circleColorData.map((colorObj: FormColor, index) => (
                <View className='px-2' key={index}>
                    <Circle
                        color={colorObj.color}
                        selected={isSelected(colorObj.color)}
                        onPress={() => setSelectedItem(colorObj.color)}
                    />
                </View>
            ))
        }
    }

    return (
        <View className='px-8 flex flex-col flex-1'>
            <View className='flex flex-row gap-4 items-center'>
                <ThemedText
                    labelType='primary'
                    type='headline'
                    emphasized
                    className='text-left py-2'
                >
                    {title}
                </ThemedText>
                <ThemedText labelType='secondary' type='subhead'>optional</ThemedText>
            </View>

            <View className='pt-4 flex-1'>
                <ScrollView
                    horizontal

                    contentContainerClassName='pt-10'
                >
                    {renderCircles()}
                </ScrollView>
            </View>


        </View>
    )
}