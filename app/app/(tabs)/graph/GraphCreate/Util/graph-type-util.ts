// utils/graphTypeUtils.ts
import {GraphType, GraphSettings, GraphStateEnum} from '@/types/graph';
import {LineGraphState} from '@/reducers/lineGraphReducer';

/**
 * Determine if the graph type is a line graph
 */
export function isALineGraph(graphType: GraphType): boolean {
    return graphType === GraphType.LineGraph ||
        graphType === GraphType.DotLineGraph ||
        graphType === GraphType.SmoothLineGraph;
}

/**
 * Determine if the graph type is a bar graph
 */
export function isABarGraph(graphType: GraphType): boolean {
    return graphType === GraphType.BarGraph;
}

/**
 * Determine if the graph type is a pie graph
 */
export function isAPieGraph(graphType: GraphType): boolean {
    return graphType === GraphType.PieGraph || graphType === GraphType.DonutGraph;
}

/**
 * Type guard to check if a graph setting is a LineGraphState
 */
export function isALineGraphState(graphSettings: any): graphSettings is LineGraphState {
    if (graphSettings) {
        return graphSettings.type === GraphStateEnum.LINE_GRAPH_STATE;
    }
    return false;
}