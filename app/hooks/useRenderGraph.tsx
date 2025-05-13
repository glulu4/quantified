import {RefObject, useMemo} from 'react';
import {GraphType, GraphData, GraphSettings, GraphHandle} from '@/types/graph';
import LineGraph from '@/components/graphs/LineGraph';
import BarGraph from '@/components/graphs/BarGraph';
import PieGraph from '@/components/graphs/PieGraph';
import {LineGraphState} from '@/reducers/lineGraphReducer';
import {BarGraphState} from '@/reducers/barGraphReducer';
import {PieGraphState} from '@/reducers/pieGraphReducer';

// export interface GraphHandle {
//   getState: () => GraphSettings // Replace `any` with the actual type of the state if known
// }

const useRenderGraph = <T,>(
  graphType: GraphType,
  graphData: GraphData[],
  graphRef: RefObject<GraphHandle<T>> | null, // if its null, useImperativeHandle will not work
  secondaryGraphData: GraphData[] = [],
  graphSettings: GraphSettings
) => {
  return useMemo(() => {
    switch (graphType) {
      case GraphType.BarGraph:
        return graphData.map((data, index) => (
          data.metricSubmissions && (
            <BarGraph
              key={index}
              ref={graphRef}
              graphData={graphData}
              graphSettings={graphSettings as BarGraphState}
            />
          )
        )).filter(Boolean); // Ensures we filter out any `null` or `undefined` results

      case GraphType.PieGraph:
        return graphData.map((data, index) => (
          data.metricSubmissions && (
            <PieGraph
              key={index}
              ref={graphRef}
              graphData={graphData}
              graphType={GraphType.PieGraph}
              graphSettings={graphSettings as PieGraphState}
            />
          )
        )).filter(Boolean);

      case GraphType.DonutGraph:
        return graphData.map((data, index) => (
          data.metricSubmissions && (
            <PieGraph
              key={index}
              ref={graphRef}
              graphData={graphData}
              graphType={GraphType.DonutGraph}
              graphSettings={graphSettings as PieGraphState}
            />
          )
        )).filter(Boolean);

      case GraphType.SmoothLineGraph:
      case GraphType.LineGraph:
      case GraphType.DotLineGraph:
        return [ // Wrap the single LineGraph in an array
          <LineGraph
            ref={graphRef}
            key="lineGraph"
            graphData={graphData}
            secondaryGraphData={secondaryGraphData}
            lineGraphType={graphType}
            graphSettings={graphSettings as LineGraphState}
          />
        ];

      default:
        return []; // Return an empty array instead of null
    }
  }, [graphType, graphData, graphSettings, secondaryGraphData]);
};

export default useRenderGraph;
