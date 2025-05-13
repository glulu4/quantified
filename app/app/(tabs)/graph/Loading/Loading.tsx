// import {StyleSheet} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {CheckMark} from '@/components/CheckMark';
// import {uploadGraph} from '@/cloudfunctions/addFunctions';
// import {CommonActions, RouteProp, useRoute} from '@react-navigation/native';
// import {GraphStackNavigationType, GraphStackParamList, isALineGraph, OperationTypeGraph} from '../_layout';
// import {Graph, GraphData} from '@/types/graph';
// import {useNavigation} from 'expo-router';
// import {chartLog, firebaseLog} from '@/types/logger';
// import {useGraph} from '@/app/context/GraphContext';
// // import {getGraphDataByMetricIds, getGraphView, loadSecondaryDataSet} from '../utils/util';
// import {logErrorToSentry} from '@/utils/util';
// import {updateGraph, updateGraphViewStats} from '@/cloudfunctions/updateFunctions';
// import {LineGraphState} from '@/reducers/lineGraphReducer';
// import {XMark} from '@/components/XMark';
// import {ThemedText} from '@/components/ui/ThemedText';
// import {ActivityIndicator} from 'react-native-paper';
// import {Colors} from '@/constants/Colors';
// import ThemedView from '@/components/ThemedView';
// import {getMetricDefinitions} from '@/cloudfunctions/getFunctions';
// import {MetricDefinition} from '@/types/formdefinition';
// import {generateGraphDataFromMetricDefs} from '../utils/util';

// type LoadingRouteProp = RouteProp<GraphStackParamList, 'Loading/Loading'>;

// /**
//  * 
//  * set setSuccessfulOp(true) in functions that i want to render the check mark
//  */
// const Loading = () => {
//     const [loading, setLoading] = useState(true);
//     const {state, dispatch} = useGraph();
//     const route = useRoute<LoadingRouteProp>();
//     const navigation = useNavigation<GraphStackNavigationType>();
//     const operation = route.params.operation;
//     const [operationLoading, setOperationLoading] = useState<string | null>(null); // To track the current operation
//     const [error, setError] = useState<boolean>(false);
//     const [successfulOp, setSuccessfulOp] = useState(false);
//     const delayNavigation = async () => {
//         return new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 seconds delay for checkmark animation
//     };

//     const navigateToHome = async (): Promise<void> => {
//         setLoading(false);
//         dispatch({type: 'CLEAR_STATE'})
//         if (successfulOp) {
//             await delayNavigation();
//         }
//         navigation.dispatch(
//             CommonActions.reset({
//                 index: 0,
//                 routes: [{name: 'Index'}],
//             })
//         );
//     };

//     const handleNavigationError = async (error: any, functionName: string, fileName: string) => {
//         setLoading(false);

//         setError(true);
//         await delayNavigation()
//         console.error(`Error in ${functionName}:`, error);
//         logErrorToSentry({error, functionName, fileName});

//         navigation.goBack();
//     };



//     useEffect(() => {
//         console.log("loadin 1 ", loading);
//         setLoading(true)
//         const handleOperation = async () => {
//             try {
//                 if (operation) {
//                     switch (operation) {
//                         case OperationTypeGraph.DELETE_GRAPH:

//                             const graphId = route.params.graphId;

//                             await deleteGraphLoading(graphId as string);
//                             break;

//                         case OperationTypeGraph.UPLOAD_GRAPH:

//                             const graphToUpload: Graph = route.params.graph
//                             await uploadSavedGraph(graphToUpload as Graph);
//                             break;

//                         case OperationTypeGraph.LOAD_GRAPH:
//                             const graphToLoad: Graph = route.params.graph
//                             await loadSavedGraph(graphToLoad as Graph);
//                             break;

//                         case OperationTypeGraph.EDIT_GRAPH:

//                             const graphToEdit: Graph = route.params.graph
//                             await editGraph(graphToEdit as Graph);
//                             break;

//                         default:
//                             console.warn('Unknown operation type:', operation);
//                             break;
//                     }
//                 }
//             } catch (error) {

//                 console.log("error in useffect: ", error);

//             }
//         }

//         handleOperation()
//     }, [operation]); // Optimized dependency to only depend on operation

//     const editGraph = async (graph: Graph) => {

//         setOperationLoading('Editing graph...');
//         console.log('Editing graph with data:', graph);

//         try {
//             if (graph) {
//                 const success = await updateGraph(graph);
//                 if (!success) throw new Error('Error updating the graph');

//                 firebaseLog.info('Updated graph successfully:', success);
//                 setSuccessfulOp(true)
//                 navigateToHome();
//             }
//         } catch (error) {
//             handleNavigationError(error, 'editGraph', '/graph/Loading');
//         }
//     };

//     const loadSavedGraph = async (graph: Graph) => {



//         try {
//             setOperationLoading('Loading saved graph...');

//             // throw new Error("Test error");

//             if (graph) {

//                 console.log("loaded graph: ", JSON.stringify(graph, null, 2));


//                 // increment number and shit here
// const success = await updateGraphViewStats(graph);
// if (!success) throw new Error("Unable to update graph view stats")
// const metricDefIds: string[] = graph.metricDefinitions;

// const metricDefs: MetricDefinition[] = await getMetricDefinitions(metricDefIds)

// setOperationLoading('Grabbing Data...');

// const graphData: GraphData[] = await generateGraphDataFromMetricDefs(metricDefs, graph.graphType);
// let secondaryGraphData: GraphData[] = []
// // if (isALineGraph(graph.graphType)) {
// //     const secondaryData = await loadSecondaryDataSet(graph.graphSettings as LineGraphState, graph.graphType);
// //     secondaryGraphData = secondaryData
// // }

// if (graphData.length === 0) throw new Error("Error creating graph data")


// setOperationLoading('Building Graph...');

// console.log("graphData ", graphData);
// console.log("secondaryGraphData: ", secondaryGraphData);

// // also sets original data sets and secodary ids
// dispatch({
//     type: 'LOAD_SAVED_GRAPH',
//     payload: {
//         graphType: graph.graphType,
//         title: graph.graphTitle,
//         graphSettings: graph.graphSettings,
//         graphData: graphData,
//         secondaryGraphData: secondaryGraphData,
//     },
// });

// // Navigate to the appropriate graph view
// navigation.navigate("GraphView", {selectedGraph: graph})


//                 // const graphView: 'LineGraphView' | 'PieGraphView' | 'BarGraphView' | null = getGraphView(graph.graphType);
//                 // if (graphView) {
//                 //     setLoading(false);
//                 //     navigation.navigate(graphView, {selectedGraph: graph});
//                 // }
//             } else {
//                 throw new Error('Invalid graph data provided for loading');
//             }
//         } catch (error) {
//             handleNavigationError(error, 'loadSavedGraph', 'Loading');
//         }
//     };

//     const deleteGraphLoading = async (graphId: string) => {
//         setOperationLoading('Deleting graph...');
//         console.log('Deleting graph with ID:', graphId);

//         try {
//             if (!graphId) throw new Error('Graph ID is invalid');

//             const success = await deleteGraphLoading(graphId);
//             firebaseLog.info('Deleted graph successfully:', success);
//             setSuccessfulOp(true)
//             navigateToHome();
//         } catch (error) {
//             handleNavigationError(error, 'deleteGraphLoading', 'Loading');
//         }
//     };

//     const uploadSavedGraph = async (graph: Graph) => {
//         setOperationLoading('Uploading graph...');
//         console.log('Uploading graph:', graph);

//         try {
//             if (!graph) throw new Error('Invalid graph for upload');

//             const success = await uploadGraph(graph);
//             firebaseLog.info('Uploaded graph successfully:', success);
//             navigateToHome();
//         } catch (error) {
//             handleNavigationError(error, 'uploadSavedGraph', 'Loading');
//         }
//     };



//     if (loading) {
//         return (
//             <ThemedView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//                 <ActivityIndicator size={30} color={Colors.primary} />
//                 <ThemedText type="subhead" >{operationLoading}</ThemedText>
//             </ThemedView>
//         );
//     }

//     if (error) {
//         return (
//             <ThemedView style={styles.screen}>
//                 <XMark />
//             </ThemedView>
//         )

//     }

//     return (
//         <ThemedView style={styles.screen}>
//             <CheckMark />
//         </ThemedView>
//     );
// };

// export default Loading;

// const styles = StyleSheet.create({
//     screen: {display: 'flex', flex: 1, justifyContent: 'center', padding: 100, alignItems: 'center'}
// })





// Loading.tsx
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {useOperation} from "./Hooks/useOperation"
import {ThemedText} from '@/components/ui/ThemedText';
import ThemedView from '@/components/ThemedView';
import {Colors} from '@/constants/Colors';
import {XMark} from '@/components/XMark';
import {CheckMark} from '@/components/CheckMark';
import {useRoute} from '@react-navigation/native';
import {GraphStackNavigationType, GraphStackParamList} from '../_layout';

import {RouteProp} from '@react-navigation/native';
import {useNavigation} from 'expo-router';
import {Graph} from '@/types/graph';

type LoadingRouteProp = RouteProp<GraphStackParamList, 'Loading/Loading'>;

const Loading = () => {
    const route = useRoute<LoadingRouteProp>();
    const {loading, status, error, success} = useOperation(route.params);
    const navigation = useNavigation<GraphStackNavigationType>();


    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


    const goBack = async () => {
        // await delay(1500); // 1.5-second animation delay

        navigation.goBack();
    };


    async function handleNavigate(params: GraphStackParamList['Loading/Loading']) {
        await delay(1500);

        const destination = params.destination;

        switch (destination) {
            case "GraphCreate/GraphCreate":

                navigation.navigate("GraphCreate/GraphCreate", {})
                break;

            case "GraphView/GraphView":
                const selectedGraph = params.graph as Graph;
                navigation.navigate("GraphView/GraphView", {
                    selectedGraph: selectedGraph,
                });
                break;

            case "Index/Index":
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{name: 'Index/Index'}],
                    })
                );
                break;
            default:
                console.log("Unknown destination:", destination);
                break;
        }

    }


    useEffect(() => {

        console.log("loading: ", loading);
        console.log("success: ", success);

        if (!loading) {
            if (success) {
                console.log("successfully navigating");

                handleNavigate(route.params);
            } else {
                goBack();
            }
        }

    }, [success, loading]);

    if (loading) {
        return (
            <ThemedView style={styles.centered}>
                <ActivityIndicator size={30} color={Colors.primary} />
                <ThemedText labelType='primary' type="subhead">{status}</ThemedText>
            </ThemedView>
        );
    }

    if (error) {
        return (
            <ThemedView style={styles.centered}>
                <XMark />
                <ThemedText type="subhead">An error occurred. Please try again.</ThemedText>
            </ThemedView>
        );
    }

    if (success) {
        return (
            <ThemedView style={styles.centered}>
                <CheckMark />
            </ThemedView>
        );
    }

    return null;
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loading;
