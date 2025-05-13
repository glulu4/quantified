// useOperation.ts
import {useState, useEffect} from 'react';
import {GraphStackNavigationType, GraphStackParamList, OperationTypeGraph} from '../../_layout';
import {apiService} from "../Api-Service/api-service"
import {CommonActions} from '@react-navigation/native';
import {useNavigation} from 'expo-router';
import {logErrorToSentry} from '@/utils/util';
import {Graph} from '@/types/graph';
import {useGraph} from '@/app/context/GraphContext';

export const useOperation = (params: GraphStackParamList['Loading/Loading']) => {
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState(false);


    const {state, dispatch} = useGraph()


    // Delay to allow for checkmark animation or final message before navigating.


    // Handles the specified operation based on params.operation
    const handleOperation = async () => {

        try {
            if (params.operation) {

                let success = false;
                switch (params.operation) {

                    case OperationTypeGraph.CREATE_GRAPH: {
                        // const graphData = params.graphData as Graph;
                        setStatus('Creating graph...');
                        success = await apiService.createGraph(params.graphType, params.metricDefinitions, dispatch);

                        // this does not need to send data, its put in state
                        break;
                    }

                    case OperationTypeGraph.DELETE_GRAPH: {
                        const graphId = params.graphId as string;
                        setStatus('Deleting graph...');
                        success = await apiService.deleteGraphLoading(graphId);
                        break;
                    }
                    case OperationTypeGraph.UPLOAD_GRAPH: {
                        const graphToUpload = params.graph as Graph;
                        setStatus('Uploading graph...');
                        success = await apiService.uploadSavedGraph(graphToUpload);
                        break;
                    }
                    case OperationTypeGraph.LOAD_GRAPH: {
                        const graphToLoad = params.graph as Graph;
                        setStatus('Loading graph...');
                        success = await apiService.loadSavedGraph(graphToLoad, dispatch);
                        break;
                    }
                    case OperationTypeGraph.EDIT_GRAPH: {
                        const graphToEdit = params.graph as Graph;
                        setStatus('Editing graph...');
                        success = await apiService.editGraph(graphToEdit);
                        break;
                    }
                    default:
                        throw new Error('Unknown operation type: ' + params);
                }
                setStatus('Operation completed');
                setSuccess(success);
                // await handleNavigate(params)
                // await navigateToHome();
            }
        } catch (err) {
            setError(err as Error);
            logErrorToSentry({
                error: err,
                functionName: 'handleOperation',
                fileName: '/hooks/useOperation.ts',
            });
            setSuccess(false);
            setStatus('Something happened');
            // setLoading(false);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (params.operation) {
            handleOperation();
        }
        // We depend on params.operation only.
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [params.operation]);

    return {loading, status, error, success};
};
