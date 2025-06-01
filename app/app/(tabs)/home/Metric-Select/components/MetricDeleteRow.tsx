import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {useThemeColor} from '@/hooks/useThemeColor';
import {ThemedText} from '@/components/ui/ThemedText';
import {SFSymbol} from 'react-native-sfsymbols';
import {CoreMetric, CoreMetricPack} from '@/types/core-metric';

interface MetricDeleteRowProps {
    item: CoreMetric | CoreMetricPack;
    onDelete: (item: CoreMetric | CoreMetricPack) => void
}

const MetricDeleteRow = ({item, onDelete}: MetricDeleteRowProps) => {
    const subtextColor = useThemeColor({}, "labelSecondary");

    const title = 'defaultTitle' in item ? item.defaultTitle : item.title;
    const subtitle = 'subtitle' in item ? item.subtitle : "Health Metric";

    return (
        <View >
            <View className='flex flex-row justify-between items-center'>
                <View className='flex flex-col py-3'>
                    <ThemedText labelType='primary' type="headline">
                        {title}
                    </ThemedText>
                    <ThemedText labelType='secondary' type="footnote" className='mt-2'>
                        {subtitle}
                    </ThemedText>
                </View>

                <TouchableOpacity
                    className='z-50 pr-8'
                    onPress={() => onDelete({} as CoreMetric | CoreMetricPack)}
                    hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} // Expands touch area

                >
                    <SFSymbol name="xmark" size={20} color={subtextColor} />
                </TouchableOpacity>
            </View>

            <View className='h-[0.5] my-3 bg-systemGray4-light dark:bg-systemGray4-dark' />
        </View>
    )
}

export default MetricDeleteRow;