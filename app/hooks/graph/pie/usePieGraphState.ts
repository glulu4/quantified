import {useReducer, useEffect} from 'react';
import {GraphData} from '@/types/graph';
import {initialPieGraphState, pieGraphReducer, PieGraphState} from '@/reducers/pieGraphReducer';
import {defaultPieGraphColors, GraphColor} from '@/constants/Colors';
import {getNumUniqueSubmissions} from '@/app/(tabs)/graph/utils/util';

export const usePieGraphState = (graphData: GraphData[], graphSettings?: PieGraphState) => {
    const [pieState, dispatch] = useReducer(pieGraphReducer, initialPieGraphState);

    // Initialize state from settings
    useEffect(() => {

        // Set initial state from graph data
        if (graphSettings?.colors) {
            dispatch({type: 'SET_COLORS', payload: graphSettings.colors});
        } else {
            const usedColors = new Set<string>();
            const colors: GraphColor[] = [];

            // const options = graphData.map((data) => {
            //     if ('dropdownOptions' in data.metricDefinition) {

            //         console.log(data.metricSubmissions);

            //         if (data.metricSubmissions.length > 0)
            //             return ""
            //         //return (data.metricDefinition as any).dropdownOptions;
            //     }
            //     return [];
            // }).flat();
            // const uniqueOptions = new Set<string>();

            // graphData.forEach((data) => {
            //     if ('dropdownOptions' in data.metricDefinition) {
            //         data.metricSubmissions.forEach((submission) => {
            //             if (typeof submission.value === 'string') {
            //                 uniqueOptions.add(submission.value);
            //             }
            //         });
            //     }
            // });
            const uniqueOptions = getNumUniqueSubmissions(graphData);

            for (let i = 0; i < uniqueOptions; i++) {
                let color;
                do {
                    color = defaultPieGraphColors[Math.floor(Math.random() * defaultPieGraphColors.length)];
                } while (usedColors.has(color.colorLabel) && usedColors.size < defaultPieGraphColors.length);

                if (!usedColors.has(color.colorLabel)) {
                    usedColors.add(color.colorLabel);
                    colors.push(color);
                }
            }

            dispatch({type: 'SET_COLORS', payload: colors});
            console.log('PieGraph colors', colors);
        }
    }, [graphSettings]);

    return {
        pieState,
        dispatch
    };
};