import React from 'react';
import {View} from 'react-native';
import {ThemedText} from '../ui/ThemedText';
import {renderDot} from './utils/legend';
import {GraphData} from '@/types/graph';
import {DataSet} from 'react-native-gifted-charts';
import {GraphColor} from '@/constants/Colors';
import {Timestamp} from 'firebase/firestore';
import {convertTimeStampObj2Date, SerializedTimestamp} from '@/utils/util';
import {format, max, min} from 'date-fns';
import {PieData} from '@/hooks/graph/pie/usePieGraphData';

interface GraphLegendProps {
    colors: GraphColor[];
    graphData: GraphData[];
    secondaryGraphData: GraphData[];
    dataSets?: DataSet[]; // Optional for bar chart rendering
    pieData?: PieData[]
}

const GraphLegend = ({colors, graphData, secondaryGraphData, dataSets, pieData}: GraphLegendProps) => {
    const combinedGraphData: GraphData[] = [...graphData, ...secondaryGraphData];


    // console.log('GraphLegend combinedGraphData', combinedGraphData);

    // Helper to handle different color format types
    const getColor = (index: number): GraphColor => {
        return colors[index % colors.length];
    };


    function dataRangeText() {

        const allDataSubmissions: Date[] = combinedGraphData
            .map(data => data.metricSubmissions)
            .flat()
            .map(submission => convertTimeStampObj2Date(submission.createdAt as unknown as SerializedTimestamp));

        const minDate = min(allDataSubmissions);
        const maxDate = max(allDataSubmissions);
        const dateRangeText = `${format(minDate, 'MMM d, yyyy')} - ${format(maxDate, 'MMM d, yyyy')}`;
        return dateRangeText;
    }

    function renderDots() {
        if (!pieData) {
            return (
                combinedGraphData.map((data, index) => (
                    <View key={index} style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                        marginBottom: 5,
                    }}>
                        {renderDot(getColor(index))}
                        <ThemedText labelType='primary' style={{marginLeft: 5}}>
                            {data.metricDefinition.metricTitle}
                        </ThemedText>
                    </View>
                ))
            )

        }
        else {
            return (
                pieData.map((data, index) => (
                    <View key={index} style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                        marginBottom: 5,
                    }}>
                        {renderDot(getColor(index))}
                        <ThemedText labelType='primary' style={{marginLeft: 5}}>
                            {data.label}
                        </ThemedText>
                    </View>
                ))
            )
        }
    }

    return (
        <View className='flex flex-col'>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: 10,
                marginTop: 30,
            }}>
                {renderDots()}
            </View>
            <ThemedText className='text-center' labelType='secondary'>{dataRangeText()}</ThemedText>
        </View>

    );
};

export default GraphLegend;