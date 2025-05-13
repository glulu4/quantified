import {GraphData, GraphType, xAxisLabelTypes} from '@/types/graph';
import {prepareData} from './formatData';
import {lineDataItem, DataSet} from 'react-native-gifted-charts';
import {GraphColor} from '@/constants/Colors';
import {chartLog} from '@/types/logger';

/**
 * Prepares data sets for line graph rendering
 * @param graphData Primary graph data
 * @param lineGraphType Type of line graph
 * @param selectedXAxisLabel Selected X-axis label type
 * @param colors Array of colors for the graph
 * @param isSecondary Flag to indicate if this is secondary data
 * @param startColorIndex Starting index for colors for secondary data
 * @returns DataSet array ready for chart rendering
 */
export const prepareLineGraphData = (
    graphData: GraphData[],
    lineGraphType: GraphType,
    selectedXAxisLabel: xAxisLabelTypes,
    colors: GraphColor[],
    isSecondary: boolean = false,
    startColorIndex: number = 0
): DataSet[] => {
    return graphData.map((rawData: GraphData, index: number) => {
        if (rawData.metricSubmissions) {
            let metricSubmissions = rawData.metricSubmissions;

            // const data: lineDataItem[] =
            //     getInputType(rawData) === 'fraction'
            //         ? prepareFractionData(metricSubmissions, selectedXAxisLabel)
            //         : prepareData(metricSubmissions, selectedXAxisLabel);

            const data: lineDataItem[] = prepareData(metricSubmissions, selectedXAxisLabel);
            if (data.length === 0) {
                throw new Error('Invalid data');
            }

            const colorIndex = (index + startColorIndex) % colors.length;
            const color = colors[colorIndex];

            return {
                data,
                color: lineGraphType === GraphType.DotLineGraph ? '#00000000' : color.colorValue,
                dataPointsColor: color.colorValue,
                startFillColor: color.colorValue,
                endFillColor: color.colorValue,
                isSecondary: isSecondary,
            };
        } else {
            chartLog.error("rawData.metricSubmissions is falsy");
            return {data: [], isSecondary};
        }
    });
};

/**
 * Checks if all data in the graph is fraction type
 */
export const onlyFraction = (graphData: GraphData[]): boolean => {
    return graphData.every((data: GraphData) =>
        getInputType(data) === 'fraction'
    );
};

/**
 * Gets the input type from graph data
 */
export const getInputType = (rawData: GraphData): string => {
    return rawData.metricDefinition.inputType.toLowerCase();
};

/**
 * Calculates the scale values for graph axes
 */
export const calculateScales = (
    dataSets: DataSet[],
    marginFactor: number = 1.5
): {maxValue: number; stepValue: number; numSections: number} => {
    const allValues = dataSets.flatMap(dataset =>
        dataset.data.map((item: lineDataItem) => item.value)
    );

    const maxValueFromData = Math.max(
        ...allValues.filter((value): value is number => value !== undefined)
    );

    let stepValue = Math.pow(10, Math.floor(Math.log10(maxValueFromData)));
    let noOfSections = Math.ceil(maxValueFromData / stepValue);

    // Calculate the maxValue and add the margin
    let maxValue = noOfSections * stepValue;
    maxValue *= marginFactor; // Apply margin

    // Recalculate noOfSections and stepValue after applying margin
    stepValue = maxValue / noOfSections;

    return {
        maxValue,
        stepValue,
        numSections: noOfSections
    };
};