import {GraphHandle, GraphSettings} from "@/types/graph";
import {logErrorToSentry} from "@/utils/util";

/**
 * Hook to provide utilities for managing graph state
 * @param graphRef Reference to the graph component
 */
export function useGraphHandle(graphRef: React.RefObject<GraphHandle<any>>) {
    /**
     * Get the current state of the graph
     */
    const getLocalGraphState = (): GraphSettings | undefined => {
        try {
            const localState = graphRef?.current?.getState();
            if (!localState) throw new Error('Local state is null');
            return localState;
        } catch (error) {
            logErrorToSentry({
                error,
                functionName: 'getLocalGraphState',
                fileName: 'useGraphStateUtils.ts',
            });
            return undefined;
        }
    };

    return {
        getLocalGraphState
    };
}