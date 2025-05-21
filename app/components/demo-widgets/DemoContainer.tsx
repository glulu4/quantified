import {View, Text} from 'react-native'
import React from 'react'
import clsx from 'clsx';
import {ThemedText} from '../ui/ThemedText';

interface DemoContainerProps {
    bgLevel: "bgPrimary" | "bgSecondary" | "bgTertiary";
    children: React.ReactNode;
    showDisabled: boolean;
    comingSoon?: boolean;
}

export default function DemoContainer({bgLevel, children, showDisabled, comingSoon}: DemoContainerProps) {
    return (
        <View className="relative flex flex-col justify-center items-center w-full h-full">
            {comingSoon && <ThemedText labelType='secondary' className="z-50 absolute flex text-center justify-center items-center">
                Coming Soon
            </ThemedText>}
            <View className={
                clsx('rounded-xl  p-5 justify-center items-center',

                    bgLevel === 'bgPrimary' ? 'bg-bgPrimary-light dark:bg-bgPrimary-dark' : "",
                    bgLevel === 'bgSecondary' ? 'bg-bgSecondary-light dark:bg-bgSecondary-dark' : "",
                    bgLevel === 'bgTertiary' ? 'bg-bgTertiary-light dark:bg-bgTertiary-dark' : "",
                    showDisabled ? 'opacity-50 ' : ""
                )}>
                {children}
            </View>
            {showDisabled && (
                <View
                    // style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}} // 50% opacity

                    className="absolute top-0 left-0 w-full h-full bg-black opacity-35 dark:bg-gray-800  rounded-xl flex justify-center items-center">
                    {/* <Text className="text-white font-semibold">Selected</Text> */}
                </View>
            )}
        </View>

    )
}