// hooks/useGraphNavigation.ts
import {useNavigation} from 'expo-router';
import {GraphType} from '@/types/graph';
import {useGraph} from '@/app/context/GraphContext';
import {GraphStackNavigationType} from '../../_layout';

/**
 * Hook to manage graph navigation and type changes
 */
export function useGraphNavigation() {
    const navigation = useNavigation<GraphStackNavigationType>();
    const {dispatch} = useGraph();

    /**
     * Navigate to metrics selection screen to add a metric
     */
    const handleAddMetric = () => {
        navigation.navigate("SelectMetrics/SelectMetrics", {
            operation: 'adding-metric',
            sourceScreen: 'LineGraphCreate'
        });
    };

    /**
     * Navigate to metrics selection screen to add a second dataset
     */
    const handleAddSecondDataSet = () => {
        navigation.navigate("SelectMetrics/SelectMetrics", {
            operation: 'add-2nd-dataset',
            sourceScreen: 'LineGraphCreate'
        });
    };

    /**
     * Change the graph type in the global state
     */
    const handleChangeGraphType = (newType: GraphType) => {
        dispatch({type: 'SET_GRAPH_TYPE', payload: newType});
    };

    return {
        handleAddMetric,
        handleAddSecondDataSet,
        handleChangeGraphType
    };
}