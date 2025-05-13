import {GraphData} from '@/types/graph';
import {defaultGraphColors, GraphColor} from '@/constants/Colors';

/**
 * Checks if data is suitable for a specific graph type
 * @param data Graph data to validate
 * @param validationFn Function to validate data for a specific graph type
 * @returns True if data is valid for the specified graph type
 */
export const isGraphDataValid = (
    data: GraphData[],
    validationFn: (data: GraphData) => boolean
): boolean => {
    return data.every(validationFn);
};

/**
 * 
 * @param graphData raw data, validates if data is suitable for a bar chart
 * @returns true if data is able to graph on a bar graph
 */
export const doesDataContainsOptions = (graphData: GraphData[]): boolean => {
    return graphData.every((data: GraphData) => "dropdownOptions" in data.metricDefinition && data.metricDefinition.dropdownOptions !== undefined)
}


/**
 * Generates random colors for graph elements
 * @param length Number of colors needed
 * @returns Array of color strings
 */
export const generateGraphColors = (length: number): GraphColor[] => {
    const colorsArray: GraphColor[] = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * defaultGraphColors.length);
        colorsArray.push(defaultGraphColors[randomIndex]);
    }

    return colorsArray;
};

/**
 * Calculates scale values for graph axes
 * @param values Array of numeric values to scale
 * @param marginFactor Optional margin factor for padding (default: 1)
 * @returns Object containing maxValue, stepValue, and numSections
 */
export const calculateGraphScale = (
    values: number[],
    marginFactor: number = 1
): {maxValue: number; stepValue: number; numSections: number} => {
    const filteredValues = values.filter(value => isFinite(value) && value >= 0);

    if (filteredValues.length === 0) {
        return {maxValue: 0, stepValue: 0, numSections: 0};
    }

    const maxValueFromData = Math.max(...filteredValues);

    if (isNaN(maxValueFromData) || maxValueFromData <= 0) {
        return {maxValue: 10, stepValue: 1, numSections: 10}; // Default values
    }

    let stepValue = Math.pow(10, Math.floor(Math.log10(maxValueFromData)));
    let numSections = Math.ceil(maxValueFromData / stepValue);
    let maxValue = numSections * stepValue * marginFactor;

    return {
        maxValue,
        stepValue,
        numSections
    };
};