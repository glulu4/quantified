// apiService.ts
import {Graph, GraphData, GraphType} from "@/types/graph";
import {uploadGraph} from "@/cloudfunctions/addFunctions";
import {MetricDefinition} from "@/types/formdefinition";
import {generateGraphDataFromMetricDefs, loadSecondaryDataSet} from "../../utils/util";
import {Dispatch} from "react";
import {GraphAction} from "@/reducers/graphReducer";
import {handleError} from "@/utils/util";
import {deleteGraph} from "@/cloudfunctions/deleteFunctions";
import {updateGraph, updateGraphViewStats} from "@/cloudfunctions/updateFunctions";
import {getMetricDefinitions} from "@/cloudfunctions/getFunctions";
import {isALineGraph} from "../../GraphCreate/Util/graph-type-util";
import {LineGraphState} from "@/reducers/lineGraphReducer";
// import {deleteGraph, loadGraph, editGraph} from "@/cloudfunctions/updateFunctions";

export const apiService = {


    async createGraph(
        graphType: GraphType,
        metricDefinitions: MetricDefinition[],
        dispatch: Dispatch<GraphAction>,
    ) {
        try {
            if (metricDefinitions.length > 0) {

                const graphData: GraphData[] = await generateGraphDataFromMetricDefs(metricDefinitions, graphType);


                // Check if graphData submissions is not empty
                for (const graphD of graphData) {
                    if (graphD.metricSubmissions.length === 0) {

                        throw new Error("Graph data submissions is empty");
                    }
                }
                console.log("graphData", graphData);

                if (graphData && graphData.length > 0) {

                    dispatch({type: "SET_MODE", payload: "creation"})
                    dispatch({
                        type: 'SET_GRAPH_AND_GRAPH_TYPE_TITLE',
                        payload: {
                            graphType: graphType,
                            graphData: graphData,
                            title: "Graph Title",
                        }
                    });
                }
                else {
                    throw new Error("graphData or graphTitle are falsy");
                }


            }
        } catch (error) {

            handleError({
                error,
                msg: "Failed to create graph",
                fileName: 'loading api-service',
                functionName: "apiService.createGraph"
            })
            return false
        }
        return true;
    },

    async deleteGraphLoading(graphId: string) {
        const success = await deleteGraph(graphId);
        return success;
    },

    async uploadSavedGraph(graph: Graph) {
        const success = await uploadGraph(graph);
        if (!success) throw new Error('Graph upload failed');
        return true;
    },

    async loadSavedGraph(graph: Graph, dispatch: Dispatch<GraphAction>) {



        try {
            const successfulGraphDataUpdate = await updateGraphViewStats(graph);
            if (!successfulGraphDataUpdate)
                console.error("Failed to update graph view stats");
            const metricDefIds: string[] = graph.metricDefinitions;

            const metricDefs: MetricDefinition[] = await getMetricDefinitions(metricDefIds)

            // setOperationLoading('Grabbing Data...');

            const graphData: GraphData[] = await generateGraphDataFromMetricDefs(metricDefs, graph.graphType);
            let secondaryGraphData: GraphData[] = []
            if (isALineGraph(graph.graphType)) {
                const secondaryData = await loadSecondaryDataSet(graph.graphSettings as LineGraphState, graph.graphType);
                secondaryGraphData = secondaryData
            }

            if (graphData.length === 0) throw new Error("Error creating graph data")



            dispatch({
                type: 'LOAD_SAVED_GRAPH',
                payload: {
                    graphType: graph.graphType,
                    title: graph.graphTitle,
                    graphSettings: graph.graphSettings,
                    graphData: graphData,
                    secondaryGraphData: secondaryGraphData,
                },
            });

            return true;
        } catch (error) {
            handleError({
                error,
                msg: "Failed to load graph",
                fileName: 'loading api-service',
                functionName: "apiService.loadSavedGraph"
            })
            return false;
        }
    },

    async editGraph(graph: Graph) {
        // const success = await editGraph(graph);
        const success = await updateGraph(graph);
        // if (!success) throw new Error('Graph editing failed');
        return success;
    }
};
