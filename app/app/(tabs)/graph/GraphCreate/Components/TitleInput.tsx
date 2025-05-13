import {View, Text} from 'react-native'
import React from 'react'
import {ThemedText} from '@/components/ui/ThemedText'
import ThemedView from '@/components/ThemedView'
import ThemedTextInput from '@/components/ui/ThemedTextInput'
import clsx from 'clsx'

interface TitleInputProps {
    title: string;
    setTitle: (title: string) => void;
    className?: string;
}

export default function TitleInput({
    title,
    setTitle,
    className,
}: TitleInputProps) {
    return (
        <View className={clsx(' flex flex-col flex-1', className)}>
            <ThemedText
                labelType='primary'
                type='headline'
                emphasized
                className='text-left py-2'
            >
                Graph Title
            </ThemedText>
            <ThemedView
                backGroundLevel='bgSecondary'
                className='px-6 min-h-[70px] flex flex-row items-center justify-between rounded-xl overflow-hidden'

            >
                <ThemedTextInput
                    className="flex-1"
                    labelType="primary"
                    value={title}
                    onChangeText={setTitle}
                    placeholder='Enter name' />
            </ThemedView>

        </View>
    )
}