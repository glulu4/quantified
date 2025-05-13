import {View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {RouteProp, useRoute} from '@react-navigation/native';
import {GraphType, GraphData, GraphIcon} from '@/types/graph';
import {useNavigation} from 'expo-router';
import {useGraph} from '@/app/context/GraphContext';
import {handleError} from '@/utils/util';
import {GraphStackNavigationType, GraphStackParamList, OperationTypeGraph} from '../_layout';
import {MetricDefinition} from '@/types/formdefinition';
import {generateGraphDataFromMetricDefs} from '../utils/util';
import ThemedView from '@/components/ThemedView';
import GraphList from './Components/GraphList';

type GraphSelectRouteProp = RouteProp<GraphStackParamList, "GraphSelect/GraphSelect">;

const GraphSelect = () => {

    const {state, dispatch} = useGraph();
    const route = useRoute<GraphSelectRouteProp>();
    const navigation = useNavigation<GraphStackNavigationType>();
    const metricDefinitions: MetricDefinition[] = route.params.selectedMetricDefs;

    /**
     * 
     * @param graphType selected grah type
     * creates graph data array and puts it in state 
     * navigates to graph creation and sets initial graph state
     */
    const createGraph = async (graphType: GraphType) => {

        navigation.navigate("Loading/Loading", {
            operation: OperationTypeGraph.CREATE_GRAPH,
            graphType: graphType,
            metricDefinitions: metricDefinitions,
            destination: "GraphCreate/GraphCreate",
        })

        try {
            if (metricDefinitions.length > 0) {

                const graphData: GraphData[] = await generateGraphDataFromMetricDefs(metricDefinitions, graphType);


                // Check if graphData submissions is not empty
                for (const graphD of graphData) {
                    if (graphD.metricSubmissions.length === 0) {
                        throw new Error("Graph data submissions is empty");
                    }
                }

                if (graphData && graphData.length > 0) {

                    dispatch({type: "SET_MODE", payload: "creation"})
                    dispatch({
                        type: 'SET_GRAPH_AND_GRAPH_TYPE_TITLE',
                        payload: {
                            graphType: graphType,
                            graphData: graphData,
                            title: "",
                        }
                    });

                    navigation.navigate("GraphCreate/GraphCreate", {})

                }
                else {
                    throw new Error("graphData or graphTitle are falsy");
                }


            }
        } catch (error) {

            handleError({
                error,
                msg: "Failed to create graph",
                fileName: 'GraphSelect',
                functionName: "createGraph"
            })
        }

    }

    return (
        <ThemedView className='flex flex-1 flex-col' >

            <View className='m-6'>

                <GraphList
                    createGraph={createGraph}
                />

            </View>

        </ThemedView>
    )
}

export default GraphSelect