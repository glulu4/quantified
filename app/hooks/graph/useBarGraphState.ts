import {useReducer, useEffect} from 'react';
import {GraphData} from '@/types/graph';
import {barGraphReducer, initialBarGraphState, BarGraphState} from '@/reducers/barGraphReducer';
import {defaultGraphColors} from '@/constants/Colors';

/**
 * Custom hook to manage bar graph state
 * @param graphData Array of graph data
 * @param graphSettings Optional predefined graph settings
 * @returns State and dispatch function for the bar graph
 */
export const useBarGraphState = (
    graphData: GraphData[],
    graphSettings?: BarGraphState
) => {
    const [barState, dispatch] = useReducer(barGraphReducer, initialBarGraphState);

    // Initialize graph settings or generate colors
    useEffect(() => {
        if (graphSettings !== undefined) {
            // Use predefined settings if available
            dispatch({type: 'SET_COLORS', payload: graphSettings.colors});
        } else {
            // Generate colors if no settings provided
            const colors = generateRandomColors(graphData.length);
            dispatch({type: 'SET_COLORS', payload: colors});
        }
    }, [graphData.length, graphSettings]);

    return {barState, dispatch};
};

/**
 * Generates colors for graph bars
 * @param length Number of colors needed
 * @returns Array of color strings
 */

const generateRandomColors = (length: number) => {
    const colorsArray = [];
    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * defaultGraphColors.length);
        colorsArray.push(defaultGraphColors[randomIndex])
    }
    return colorsArray;
};
