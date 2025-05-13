import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {ThemedText} from '@/components/ui/ThemedText';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import clsx from 'clsx';
import {Food, UserFood} from '@/types/food';

interface InputButtonRowProps {
    openQuickAddFood: (item: UserFood | Food | undefined) => void;
    packId: string;
}

export default function InputButtonRow({openQuickAddFood}: InputButtonRowProps) {


    const blue = useThemeColor({}, 'blue');
    const orange = useThemeColor({}, 'orange');

    // const snapPoints = ['80%'];

    function handleScanBarcode() {

    }

    function handleQuickAddFood() {
        openQuickAddFood(undefined);
        // userFoodBottomSheetRef.current?.expand();
    }

    const buttonOptions = [
        {
            text: 'Scan a Barcode',
            icon: 'barcode.viewfinder',
            color: blue,
            fn: handleScanBarcode,
        },
        {
            text: 'Quick add food',
            icon: "carrot",
            color: orange,
            fn: handleQuickAddFood,
        }
    ];

    type ButtonOption = typeof buttonOptions[number];
    return (
        <View
            className={clsx("bg-bgSecondary-light dark:bg-bgSecondary-dark",
                'px-6 min-h-[110px] flex flex-row items-center justify-between rounded-xl m-3')}

        >
            <View className='flex flex-1 flex-row justify-around gap-3 mx-auto'>
                {buttonOptions.map((buttonOption: ButtonOption, idx) => {
                    return (
                        <TouchableOpacity
                            onPress={buttonOption.fn}
                            key={idx}
                            className='bg-bgTertiary-light dark:bg-bgTertiary-dark min-h-[90px] min-w-[150px] rounded-xl'
                        >
                            <View
                                key={idx}
                                className='flex flex-1 flex-col items-center justify-around '

                            >

                                <SFSymbol
                                    style={{marginTop: 15}}
                                    name={buttonOption.icon}
                                    color={buttonOption.color} size={30} />
                                <ThemedText labelType='primary' emphasized type='subhead' className='text-center'>
                                    {buttonOption.text}
                                </ThemedText>
                            </View>

                        </TouchableOpacity>

                    )
                })}
            </View>



        </View>
    )
}