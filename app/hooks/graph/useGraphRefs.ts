// hooks/useGraphRefs.ts
import {RefObject, useRef} from 'react';
import {GraphType, GraphHandle} from '@/types/graph';
import {LineGraphState} from '@/reducers/lineGraphReducer';
import {BarGraphState} from '@/reducers/barGraphReducer';
import {PieGraphState} from '@/reducers/pieGraphReducer';
import {isABarGraph, isALineGraph, isAPieGraph} from '@/app/(tabs)/graph/GraphCreate/Util/graph-type-util';




/**
 * Hook to manage graph references based on graph type
 */
export function useGraphRefs(graphType: GraphType) {
    const lineGraphRef = useRef<GraphHandle<LineGraphState>>(null);
    const barGraphRef = useRef<GraphHandle<BarGraphState>>(null);
    const pieGraphRef = useRef<GraphHandle<PieGraphState>>(null);

    const getGraphRef = (graphType: GraphType) => {

        if (isALineGraph(graphType)) {
            return lineGraphRef;
        }
        if (isABarGraph(graphType)) {
            return barGraphRef;
        }
        if (isAPieGraph(graphType)) {
            return pieGraphRef;
        }

        return lineGraphRef; // Default fallback

    };

    const graphRef = getGraphRef(graphType);

    return {
        graphRef
        // lineGraphRef,
        // barGraphRef,
        // pieGraphRef,
        // getGraphRef
    };
}





// import {useRef, useMemo} from 'react';
// import {GraphType, GraphHandle} from '@/types/graph';
// import {LineGraphState} from '@/reducers/lineGraphReducer';
// import {BarGraphState} from '@/reducers/barGraphReducer';
// import {PieGraphState} from '@/reducers/pieGraphReducer';


// type AllGraphStates = LineGraphState | BarGraphState | PieGraphState;

// export type GraphRef = React.RefObject<GraphHandle<AllGraphStates>>;


// export function useGraphRefs(graphType: GraphType): {graphRef: GraphRef} {
//     // Create refs for each graph type.
//     const refs = useMemo(() => ({
//         // If you have multiple line graph variants, they share the same type if they behave similarly.
//         [GraphType.LineGraph]: useRef<GraphHandle<LineGraphState>>(null),
//         [GraphType.DotLineGraph]: useRef<GraphHandle<LineGraphState>>(null),
//         [GraphType.SmoothLineGraph]: useRef<GraphHandle<LineGraphState>>(null),
//         [GraphType.BarGraph]: useRef<GraphHandle<BarGraphState>>(null),
//         [GraphType.PieGraph]: useRef<GraphHandle<PieGraphState>>(null),
//         [GraphType.DonutGraph]: useRef<GraphHandle<PieGraphState>>(null),
//         [GraphType.NONE]: useRef<GraphHandle<LineGraphState>>(null), // Default ref for no graph type
//     }), []);

//     // Return the ref corresponding to the given graphType.
//     // Fallback to a default ref, e.g., for a line graph, if the provided type isn’t present.
//     return {graphRef: refs[graphType] ?? refs[GraphType.LineGraph]};
// }
