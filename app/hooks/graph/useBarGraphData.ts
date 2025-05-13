import {useState, useEffect} from 'react';
import {GraphData} from '@/types/graph';
import {barDataItem} from 'react-native-gifted-charts';
import {BarGraphState} from '@/reducers/barGraphReducer';
import {DropdownMetricDefinition} from '@/types/formdefinition';
import {GraphColor} from '@/constants/Colors';
import {doesDataContainsOptions} from '@/components/graphs/utils/bar-util';

/**
 * Custom hook to prepare and manage bar chart data
 * @param graphData Array of graph data
 * @param barState Current bar graph state
 * @returns Prepared data and scale values for the bar chart
 */
export const useBarGraphData = (
    graphData: GraphData[],
    barState: BarGraphState
) => {
    const [barData, setBarData] = useState<barDataItem[]>([]);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [stepValue, setStepValue] = useState<number>(0);
    const [numSections, setNumSections] = useState<number>(0);

    // Prepare bar chart data
    useEffect(() => {
        if (!doesDataContainsOptions(graphData)) {
            return;
        }

        try {
            const preparedData = prepareBarData(graphData);
            setBarData(preparedData);

            if (preparedData.length > 0) {
                calculateScale(preparedData);
            }
        } catch (error) {
            console.error('Error preparing bar chart data:', error);
        }
    }, [graphData, barState.colors]);


    /**
     * Prepares data for bar chart rendering
     */
    const prepareBarData = (data: GraphData[]): barDataItem[] => {

        const combinedMetrics: barDataItem[] = [];
        const maxOptionsLength = Math.max(...data.map(data =>
            (data.metricDefinition as DropdownMetricDefinition).dropdownOptions
                ? (data.metricDefinition as DropdownMetricDefinition).dropdownOptions.length
                : 0
        ));

        for (let i = 0; i < maxOptionsLength; i++) {
            data.forEach((data, dataIndex) => {
                const metricSubs = data.metricSubmissions;
                const option = (data.metricDefinition as DropdownMetricDefinition).dropdownOptions?.[i] || '';
                const count = metricSubs?.filter(submission => submission.value === option).length || 0;

                if (option) {
                    combinedMetrics.push({
                        value: count,
                        label: option,  // Use the option as the label
                        frontColor: barState.colors?.[dataIndex % barState.colors.length]?.colorValue || '#000000', // Assign a color per GraphData item or default to black
                        spacing: (dataIndex % 2 === 0) ? undefined : 16 // Set alternating spacing for every other bar
                    });
                }
            });
        }

        return combinedMetrics;
    };

    /**
     * Calculates scale values for the chart
     */
    const calculateScale = (data: barDataItem[]) => {
        if (data.length === 0) {
            return; // No data to calculate scale
        }

        // Extract values from stacks inside the data array
        const allValues = data
            .flatMap(item => item.value) // Access the values inside each stack
            .filter((value): value is number => value !== undefined && isFinite(value) && value >= 0); // Filter out undefined, Infinity, -Infinity, NaN, and negative values

        const maxValueFromData = Math.max(...allValues);

        if (isNaN(maxValueFromData) || maxValueFromData <= 0) {
            console.warn('Invalid maxValueFromData:', maxValueFromData);
            return; // Avoid setting invalid scale values
        }

        // Define a margin percentage to add padding to the graph (e.g., 10%)
        const marginFactor = 1;

        let stepValue = Math.pow(10, Math.floor(Math.log10(maxValueFromData))); // Base step value
        let noOfSections = Math.ceil(maxValueFromData / stepValue); // Number of sections to cover the original max value

        // Calculate the maxValue and add the margin
        let maxValue = noOfSections * stepValue;
        maxValue *= marginFactor; // Apply margin

        if (isNaN(stepValue) || isNaN(noOfSections)) {
            console.warn('Invalid stepValue or noOfSections:', stepValue, noOfSections);
            return; // Avoid setting invalid values
        }

        setStepValue(stepValue);
        setNumSections(noOfSections);
        setMaxValue(maxValue); // Set max value with margin
    };

    return {
        barData,
        maxValue,
        stepValue,
        numSections,
        doesDataContainsOptions
    };
};