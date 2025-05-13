import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import {GraphIcon, GraphType} from '@/types/graph';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import {ThemedText} from '@/components/ui/ThemedText';

export default function GraphList({
    createGraph
}: {
    createGraph: (graphType: GraphType) => void;
}) {

    const ICON_SIZE: number = 40;
    const lineGraphColor = useThemeColor({}, 'red');
    const lineGraphColor2 = useThemeColor({}, 'blue');
    const barGraphColor = useThemeColor({}, 'orange');
    const pieGraphColor = useThemeColor({}, 'teal');
    const iconColor = useThemeColor({}, "labelSecondary");

    const graphIcons: GraphIcon[] = [

        {
            icon: <SFSymbol
                name="chart.dots.scatter"
                size={ICON_SIZE}
                color={lineGraphColor2} />,
            type: GraphType.DotLineGraph,
        },

        {
            icon: <SFSymbol
                name="chart.xyaxis.line"
                size={ICON_SIZE}
                color={lineGraphColor} />,
            type: GraphType.LineGraph,
        },
        {
            icon: <SFSymbol
                name="chart.bar.fill"
                size={ICON_SIZE}
                color={barGraphColor} />,
            type: GraphType.BarGraph,
        },
        {
            icon: <SFSymbol
                name="chart.pie"
                size={ICON_SIZE}
                color={pieGraphColor} />,
            type: GraphType.PieGraph,
        },
    ];


    return (

        <ScrollView>
            {
                graphIcons.map((graphObject, index) => (
                    <TouchableOpacity
                        onPress={() => createGraph(graphObject.type)}
                        key={index} className='bg-bgSecondary-light dark:bg-bgSecondary-dark rounded-xl w-full flex flex-1 flex-row px-10 justify-between items-center py-10 my-3'>

                        <View className='flex gap-16 flex-row items-center justify-between'>
                            <View >
                                {graphObject.icon}
                            </View>
                            <ThemedText labelType='primary' emphasized type='title3'>{graphObject.type}</ThemedText>
                        </View>

                        <SFSymbol
                            name='chevron.right'
                            size={20}
                            color={iconColor}
                        />

                    </TouchableOpacity>
                ))
            }
        </ScrollView>



    )
}