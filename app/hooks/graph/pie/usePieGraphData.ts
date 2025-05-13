import {useState, useEffect, useMemo, Dispatch} from 'react';
import {GraphData} from '@/types/graph';
import {GraphColor} from '@/constants/Colors';
import {defaultPieGraphColors} from '@/constants/Colors';
import {DropdownMetricDefinition} from '@/types/formdefinition';
import {PieGraphActions, PieGraphState} from '@/reducers/pieGraphReducer';

export interface PieData {
    value: number;
    label: string;
    percentage: string;
    color: string;
    focused: boolean;
}

export const usePieGraphData = (graphData: GraphData[], pieState: PieGraphState, dispatch: Dispatch<PieGraphActions>) => {
    const [pieData, setPieData] = useState<PieData[]>([]);

    // Check if data contains dropdown options
    const hasOptions = useMemo(() => {
        return graphData.some(data =>
            'dropdownOptions' in data.metricDefinition
        );
    }, [graphData]);

    // Process graph data and generate pie data
    useEffect(() => {
        if (!hasOptions) return;

        const processedData: PieData[] = [];
        // const usedColors = new Set<GraphColor>();
        // const colorSource = pieState.colors.length > 0 ?
        //     pieState.colors :
        //     defaultPieGraphColors;
        const colorSource = pieState.colors;

        if (colorSource.length === 0) {
            return;
        }


        // Process each graph data item
        graphData.forEach(data => {
            if (!('dropdownOptions' in data.metricDefinition)) return;

            const options = (data.metricDefinition as DropdownMetricDefinition).dropdownOptions;
            const validSubmissions = data.metricSubmissions.filter(
                submission => submission.value !== null
            ).length;

            options.forEach((option, optionIndex) => {
                const count = data.metricSubmissions.filter(
                    submission => submission.value === option
                ).length;

                if (count <= 0) return;

                const percentage = validSubmissions > 0 ?
                    ((count / validSubmissions) * 100).toFixed(1) :
                    '0';

                // Select color for this data point
                const color = colorSource[optionIndex % colorSource.length];
                // usedColors.add(color);

                processedData.push({
                    value: count,
                    label: option,
                    percentage,
                    color: color.colorValue,
                    focused: false,
                });
            });
        });

        const filteredData = processedData.filter(metric => metric.value > 0);
        setPieData(filteredData);
        // Update colors in state

    }, [graphData, hasOptions, pieState.colors]);

    // Function to handle press on pie chart sections
    const handlePress = (item: any) => {
        setPieData(prevData =>
            prevData.map(data => ({
                ...data,
                focused: data.label === item.label ? !data.focused : false,
            }))
        );
    };

    return {
        pieData,
        hasOptions,
        handlePress,
    };
};