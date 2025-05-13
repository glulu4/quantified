// hooks/useGraphOperations.ts
import {useState} from 'react';
import {Graph, GraphType, GraphSettings} from '@/types/graph';
import {Timestamp} from 'firebase/firestore';
import * as Crypto from 'expo-crypto';
import {useNavigation} from 'expo-router';
import {useGraph} from '@/app/context/GraphContext';
import {handleError} from '@/utils/util';
import {GraphStackNavigationType, OperationTypeGraph} from '../../_layout';
import {isALineGraphState} from '../Util/graph-type-util';

type GraphOperationsProps = {
    graphRef: React.RefObject<any>;
    getLocalGraphState: () => GraphSettings | undefined;
    graphTitle: string;
    userId: string;
};

/**
 * Hook to manage graph save and edit operations
 */
export function useGraphOperations({
    graphRef,
    getLocalGraphState,
    graphTitle,
    userId
}: GraphOperationsProps) {
    const navigation = useNavigation<GraphStackNavigationType>();
    const {state} = useGraph();

    /**
     * Handle editing an existing graph
     */
    const handleEdit = () => {
        try {
            if (graphRef.current) {
                let graphSettings: GraphSettings = getLocalGraphState();
                if (!graphSettings) throw new Error("Falsy graph state");

                if (isALineGraphState(graphSettings)) {
                    graphSettings.secondDataSetIds = state.secondaryGraphDataIds;
                }

                const editedGraph: Graph = {
                    ...state.graphToEdit,
                    graphTitle: graphTitle,
                    graphType: state.graphType,
                    graphSettings: graphSettings,
                    metricDefinitions: state.graphData.map((data) => data.metricDefinition.id),
                    version: (state.graphToEdit.version || 0) + 1,
                    updatedAt: Timestamp.now(),
                };

                navigation.navigate("Loading/Loading", {
                    operation: OperationTypeGraph.EDIT_GRAPH,
                    graph: editedGraph,
                    destination: "Index/Index",
                });
            }
        } catch (error) {
            handleError({
                error,
                functionName: 'handleEdit',
                fileName: 'useGraphOperations.ts',
                msg: "Error trying to edit graph"
            });
        }
    };

    /**
     * Handle saving a new graph
     */
    const handleSave = () => {
        try {
            if (graphRef.current) {
                let graphSettings: GraphSettings = getLocalGraphState();
                if (!graphSettings) throw new Error("Falsy graph state");

                if (isALineGraphState(graphSettings)) {
                    graphSettings.secondDataSetIds = state.secondaryGraphDataIds;
                }

                const graph: Graph = {
                    id: Crypto.randomUUID(),
                    uid: userId,
                    graphTitle: graphTitle,
                    graphType: state.graphType,
                    graphSettings: graphSettings,
                    metricDefinitions: state.graphData.map((data) => data.metricDefinition.id),
                    viewCount: 0,
                    version: 1,
                    createdAt: Timestamp.now()
                };

                console.log("Graph to save:", graph);
                // return


                navigation.navigate("Loading/Loading", {
                    operation: OperationTypeGraph.UPLOAD_GRAPH,
                    graph: graph,
                    destination: "Index/Index",
                });
            }
        } catch (error) {
            handleError({
                error,
                functionName: 'handleSave',
                fileName: 'useGraphOperations.ts',
                msg: "Error trying to save graph"
            });
        }
    };

    return {
        handleEdit,
        handleSave
    };
}