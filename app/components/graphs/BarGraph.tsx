// import {View, Text, useColorScheme, Dimensions, ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native'
// import React, {forwardRef, useEffect, useImperativeHandle, useReducer, useState} from 'react'
// import {BarChart} from "react-native-gifted-charts";
// import {GraphData} from '@/types/graph';
// import {color} from 'react-native-elements/dist/helpers';
// import {Colors, defaultGraphColors, GraphColor} from '@/constants/Colors';
// import {barGraphReducer, BarGraphState, initialBarGraphState} from '@/reducers/barGraphReducer';
// import {ThemedText} from '../ui/ThemedText';
// import {AXES_COLOR, GRAPH_WIDTH} from '@/constants/graphConstants';
// import {barDataItem} from 'react-native-gifted-charts';
// import {renderDot} from './utils/legend';
// import {useThemeColor} from '@/hooks/useThemeColor';
// import CenteredSpinner from '../CenteredSpinner';
// import ThemedView from '../ThemedView';
// import GraphLegend from './GraphLegend';
// import {DropdownMetricDefinition} from '@/types/formdefinition';
// // https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts/blob/master/docs/BarChart/BarChartProps.md
// interface BarGraphProps {
//     // metricSubmissions: MetricSubmission[];
//     // metricDefinition:MetricDefinition;
//     graphData: GraphData[]
//     graphSettings?: BarGraphState;
// }


// // interface stackData


// const BarGraph = forwardRef(({graphData, graphSettings}: BarGraphProps, ref) => {

//     const textColor = useThemeColor({}, "labelPrimary");
//     const [barState, dispatch] = useReducer(barGraphReducer, initialBarGraphState);
//     const [barData, setBarData] = useState<barDataItem[]>([])
//     const [error, setError] = useState<string>("")
//     const [maxValue, setMaxVal] = useState<number>(0);
//     const [stepValue, setStepValue] = useState<number>(0);
//     const [numSections, setNumSections] = useState<number>(0);
//     const [ready, setReady] = useState<boolean>(false);
//     const GRAPH_BACKGROUND_COLOR = useThemeColor({}, "tertiaryFill")

//     useImperativeHandle(ref, () => ({
//         getState: () => barState,  // Expose the current state to the parent
//         dispatch: (action: any) => dispatch(action)
//     }));

//     useEffect(() => {

//         if (!isDataValid(graphData)) {
//             setError("No user options for all data");
//             return;
//         }

//         // const prepData = (graphData: GraphData[]): barDataItem[] => {

//             // const combinedMetrics: barDataItem[] = [];
//             // const maxOptionsLength = Math.max(...graphData.map(data =>
//             //     (data.metricDefinition as DropdownMetricDefinition).dropdownOptions
//             //         ? (data.metricDefinition as DropdownMetricDefinition).dropdownOptions.length
//             //         : 0
//             // ));

//             // for (let i = 0; i < maxOptionsLength; i++) {
//             //     graphData.forEach((data, dataIndex) => {
//             //         const metricSubs = data.metricSubmissions;
//             //         const option = (data.metricDefinition as DropdownMetricDefinition).dropdownOptions?.[i] || '';
//             //         const count = metricSubs?.filter(submission => submission.value === option).length || 0;

//             //         if (option) {
//             //             combinedMetrics.push({
//             //                 value: count,
//             //                 label: option,  // Use the option as the label
//             //                 frontColor: barState.colors[dataIndex % barState.colors.length].colorValue, // Assign a color per GraphData item
//             //                 spacing: (dataIndex % 2 === 0) ? undefined : 16 // Set alternating spacing for every other bar
//             //             });
//             //         }
//             //     });
//             // }

//             // return combinedMetrics;
//         // };



//         const data: barDataItem[] = prepData(graphData);
//         setBarData(data)

//         if (data.length === 0) return;

//         setScale(data);
//         setReady(true);

//     }, [graphData, barState.colors]);  // You should add graphData as a dependency to rerun the effect if it changes



//     // useEffect(() => {

//     //     if (graphSettings !== undefined) {
//     //         console.log("graphSettings, ", JSON.stringify(graphSettings, null, 2));
//     //         // make a dispath to load graph settings
//     //         dispatch({type: 'SET_COLORS', payload: graphSettings.colors});

//     //     } else {
//     //         const colors: GraphColor[] = generateRandomColors(graphData.length);
//     //         dispatch({type: 'SET_COLORS', payload: colors});

//     //     }
//     // }, [graphData.length, graphSettings]);




//     // const generateRandomColors = (length: number) => {
//     //     const colorsArray = [];
//     //     for (let i = 0; i < length; i++) {

//     //         const randomIndex = Math.floor(Math.random() * defaultGraphColors.length);
//     //         colorsArray.push(defaultGraphColors[randomIndex])
//     //     }
//     //     return colorsArray;
//     // };

//     // /**
//     //  * 
//     //  * @param graphData raw data, validates if data is suitable for a bar chart
//     //  * @returns true if data is able to graph on a bar graph
//     //  */
//     // const isDataValid = (graphData: GraphData[]): boolean => {
//     //     return graphData.every((data: GraphData) => "dropdownOptions" in data.metricDefinition && data.metricDefinition.dropdownOptions !== undefined)
//     // }

//     /**
//      * 
//      * @param data to be graphed
//      * @returns void; sets scale for maxvalue, num of sections, step size
//      */
//     const setScale = (data: barDataItem[]) => {
//         if (data.length === 0) {
//             return; // No data to calculate scale
//         }

//         // Extract values from stacks inside the data array
//         const allValues = data
//             .flatMap(item => item.value) // Access the values inside each stack
//             .filter((value): value is number => value !== undefined && isFinite(value) && value >= 0); // Filter out undefined, Infinity, -Infinity, NaN, and negative values

//         const maxValueFromData = Math.max(...allValues);

//         if (isNaN(maxValueFromData) || maxValueFromData <= 0) {
//             console.warn('Invalid maxValueFromData:', maxValueFromData);
//             return; // Avoid setting invalid scale values
//         }

//         // Define a margin percentage to add padding to the graph (e.g., 10%)
//         const marginFactor = 1;

//         let stepValue = Math.pow(10, Math.floor(Math.log10(maxValueFromData))); // Base step value
//         let noOfSections = Math.ceil(maxValueFromData / stepValue); // Number of sections to cover the original max value

//         // Calculate the maxValue and add the margin
//         let maxValue = noOfSections * stepValue;
//         maxValue *= marginFactor; // Apply margin

//         if (isNaN(stepValue) || isNaN(noOfSections)) {
//             console.warn('Invalid stepValue or noOfSections:', stepValue, noOfSections);
//             return; // Avoid setting invalid values
//         }

//         setStepValue(stepValue);
//         setNumSections(noOfSections);
//         setMaxVal(maxValue); // Set max value with margin
//     };



//     const barProps = {
//         data: barData,
//         barWidth: 13,
//         initialSpacing: 50,
//         spacing: 50,
//         roundedTop: true,
//         roundedBottom: true,
//         disableScroll: false,
//         showScrollIndicator: true,
//         animateOnDataChange: true,
//         width: GRAPH_WIDTH - 50,
//         rulesType: 'dashed',
//         dashGap: 10,
//         yAxisTextStyle: {color: textColor},
//         yAxisThickness: 1,
//         xAxisThickness: 1,
//         xAxisColor: AXES_COLOR,
//         yAxisColor: AXES_COLOR,
//         // rotateLabel:true,
//         labelsDistanceFromXaxis: 15,
//         xAxisLabelTextStyle: {

//             color: textColor,
//             transform: [{rotate: '45deg'}],  // Rotates the labels by 45 degrees
//             // yOffset: 10,

//         },
//         labelsExtraHeight: 50, // spac under x axis
//         noOfSections: numSections,
//         maxValue: maxValue,
//         stepValue: stepValue,
//         backgroundColor: GRAPH_BACKGROUND_COLOR,
//         yAxisLabelContainerStyle: {
//             marginLeft: 8, // Shifts the Y-axis labels 10 units to the left
//         },

//     }



//     // const renderLegendComponent = () => {



//     //     return (
//     //         <View style={{
//     //             flexDirection: 'row',
//     //             justifyContent: 'center',
//     //             flexWrap: 'wrap',
//     //             marginBottom: 10,
//     //             marginTop: 30,
//     //         }}>
//     //             {graphData?.map((data: GraphData, index: number) => (
//     //                 <View key={index} style={{
//     //                     flexDirection: 'row',
//     //                     justifyContent: 'center',
//     //                     alignItems: 'center',
//     //                     marginHorizontal: 10,
//     //                     marginBottom: 5,
//     //                 }}>
//     //                     {renderDot(barState.colors[index % barState.colors.length])}
//     //                     <ThemedText style={{marginLeft: 5}}>{graphData[index].metricDefinition.metricTitle}</ThemedText>
//     //                 </View>
//     //             ))}
//     //         </View>
//     //     );
//     // };

//     if (error) {
//         return (
//             <ThemedView>
//                 <ThemedText type='subhead'>No user options defined</ThemedText>
//             </ThemedView>
//         )
//     }


//     if (!ready) {
//         return (
//             <CenteredSpinner />
//         );
//     }
//     return (
//         <View style={{padding: 20}}>
//             <View style={{...styles.graphContainer, backgroundColor: GRAPH_BACKGROUND_COLOR}}>
//                 <BarChart
//                     {...barProps}
//                 />
//                 <GraphLegend
//                     dataSets={[]}
//                     colors={barState.colors}
//                     graphData={graphData}
//                     secondaryGraphData={[]}
//                 />
//             </View>

//         </View>
//     )
// })
// const styles = StyleSheet.create({
//     centered: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     graphContainer: {
//         display: "flex",
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: "center",
//         borderRadius: 10,
//         paddingTop: 30,
//     },
// }
// );
// export default BarGraph



import {View, StyleSheet} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {BarChart} from "react-native-gifted-charts";
import {GraphData} from '@/types/graph';
import {BarGraphState} from '@/reducers/barGraphReducer';
import {ThemedText} from '../ui/ThemedText';
import {AXES_COLOR, GRAPH_WIDTH} from '@/constants/graphConstants';
import {useThemeColor} from '@/hooks/useThemeColor';
import CenteredSpinner from '../CenteredSpinner';
import GraphLegend from './GraphLegend';
import {useBarGraphState} from '@/hooks/graph/useBarGraphState';
import {useBarGraphData} from '@/hooks/graph/useBarGraphData';
import ThemedView from '../ThemedView';

interface BarGraphProps {
    graphData: GraphData[];
    graphSettings?: BarGraphState;
}

const BarGraph = forwardRef(({graphData, graphSettings}: BarGraphProps, ref) => {
    const textColor = useThemeColor({}, "labelPrimary");
    const GRAPH_BACKGROUND_COLOR = useThemeColor({}, "tertiaryFill");

    const [error, setError] = useState<string>("");
    const [ready, setReady] = useState<boolean>(false);

    // Use custom hooks for state and data management
    const {barState, dispatch} = useBarGraphState(graphData, graphSettings);
    const {barData, maxValue, stepValue, numSections, doesDataContainsOptions} = useBarGraphData(graphData, barState);

    // Forward ref methods to parent component
    useImperativeHandle(ref, () => ({
        getState: () => barState,
        dispatch: (action: any) => dispatch(action)
    }));

    // Set component ready state when data is available
    React.useEffect(() => {
        if (!doesDataContainsOptions(graphData)) {
            setError("No user options for all data");
            return;
        }

        if (barData.length > 0) {
            setReady(true);
        }
    }, [barData, graphData, doesDataContainsOptions]);

    // Configure bar chart props
    const barProps = {
        data: barData,
        barWidth: 13,
        initialSpacing: 50,
        spacing: 50,
        roundedTop: true,
        roundedBottom: true,
        disableScroll: false,
        showScrollIndicator: true,
        animateOnDataChange: true,
        width: GRAPH_WIDTH - 50,
        rulesType: 'dashed',
        dashGap: 10,
        yAxisTextStyle: {color: textColor},
        yAxisThickness: 1,
        xAxisThickness: 1,
        xAxisColor: AXES_COLOR,
        yAxisColor: AXES_COLOR,
        labelsDistanceFromXaxis: 15,
        xAxisLabelTextStyle: {
            color: textColor,
            transform: [{rotate: '45deg'}],
        },
        labelsExtraHeight: 50, // space under x axis
        noOfSections: numSections,
        maxValue: maxValue,
        stepValue: stepValue,
        // backgroundColor: GRAPH_BACKGROUND_COLOR,
        yAxisLabelContainerStyle: {
            marginLeft: 8,
        },
    };

    // Render error state
    if (error) {
        return (
            <ThemedView>
                <ThemedText type='subhead'>No user options defined</ThemedText>
            </ThemedView>
        );
    }

    // Render loading state
    if (!ready) {
        return <CenteredSpinner />;
    }

    // Render graph
    return (
        <View
            className='flex flex-col justify-center items-center rounded-xl pt-8'
            style={{backgroundColor: GRAPH_BACKGROUND_COLOR}}>
            <BarChart {...barProps} />
            <GraphLegend
                colors={barState.colors}
                graphData={graphData}
                secondaryGraphData={[]}
            />
        </View>
    );
});

export default BarGraph;