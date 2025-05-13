import {useReducer, useEffect, useState} from 'react';
import {GraphData} from '@/types/graph';
import {lineGraphReducer, initialState, LineGraphState} from '@/reducers/lineGraphReducer';
import {defaultGraphColors, GraphColor} from '@/constants/Colors';

/**
 * Custom hook to manage the state of the line graph
 * @param graphData The primary graph data
 * @param secondaryGraphData The secondary graph data
 * @param graphSettings Optional predefined graph settings
 * @returns State and dispatch function for the line graph
 */
export const useLineGraphState = (
    graphData: GraphData[],
    secondaryGraphData: GraphData[],
    graphSettings?: LineGraphState
) => {
    const [lineState, dispatch] = useReducer(lineGraphReducer, initialState);
    const [usedColors, setUsedColors] = useState<GraphColor[]>([]);

    // Initialize graph settings or generate colors
    useEffect(() => {
        if (graphSettings !== undefined) {
            // Use predefined settings if available
            dispatch({type: 'SET_COLORS', payload: graphSettings.colors});
            dispatch({type: 'TOGGLE_2ND_YAXIS', payload: graphSettings.secondYAxis});
            setUsedColors(graphSettings.colors);
        } else {
            // Generate colors if no settings provided
            const colors: GraphColor[] = getColors(graphData.length + secondaryGraphData.length);
            setUsedColors(colors);
            dispatch({type: 'SET_COLORS', payload: colors});
        }
    }, [graphData.length, secondaryGraphData.length, graphSettings]);

    return {lineState, dispatch, usedColors};
};

/**
 * Generates an array of colors for the graph
 * @param length Number of colors needed
 * @returns Array of GraphColor objects
 */
const getColors = (length: number): GraphColor[] => {
    const colorsArray: GraphColor[] = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * defaultGraphColors.length);
        colorsArray.push(defaultGraphColors[randomIndex]);
    }

    return colorsArray;
};