import {View, StyleSheet} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState, useEffect} from 'react';
import {PieChart} from 'react-native-gifted-charts';
import {GraphData, GraphType} from '@/types/graph';
import {PieGraphState} from '@/reducers/pieGraphReducer';
import {ThemedText} from '../ui/ThemedText';
import {useThemeColor} from '@/hooks/useThemeColor';
import GraphLegend from './GraphLegend';
import {usePieGraphState} from '@/hooks/graph/pie/usePieGraphState';
import {usePieGraphData} from '@/hooks/graph/pie/usePieGraphData';
import CenteredSpinner from '../CenteredSpinner';

interface PieGraphProps {
  graphData: GraphData[];
  graphType: GraphType;
  graphSettings?: PieGraphState;
}

const PieGraph = forwardRef(({graphData, graphType, graphSettings}: PieGraphProps, ref) => {
  const GRAPH_BACKGROUND_COLOR = useThemeColor({}, "tertiaryFill");
  const innerCirleColor = useThemeColor({}, "systemGray3");
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState<boolean>(false);

  // Use custom hooks for state and data management
  const {pieState, dispatch} = usePieGraphState(graphData, graphSettings);
  const {pieData, hasOptions, handlePress, } = usePieGraphData(graphData, pieState, dispatch);


  console.log('PieGraph pieData', pieData);

  // Forward ref methods to parent component
  useImperativeHandle(ref, () => ({
    getState: () => pieState,
    dispatch: (action: any) => dispatch(action)
  }));

  // Set component ready state when data is available
  useEffect(() => {
    if (!hasOptions) {
      setError("No options defined");
      return;
    }

    if (pieData.length > 0) {
      setReady(true);
    }
  }, [pieData, graphData, hasOptions]);

  // Render error state
  if (error) {
    return (
      <View>
        <ThemedText>{error}</ThemedText>
      </View>
    );
  }

  // Render loading state
  if (!ready) {
    return <CenteredSpinner />;
  }

  // Render graph
  return (
    <View >
      <View style={{...styles.graphContainer, backgroundColor: GRAPH_BACKGROUND_COLOR}}>
        <PieChart
          data={pieData}
          donut={graphType === GraphType.DonutGraph}
          showGradient
          focusOnPress
          sectionAutoFocus
          onPress={handlePress}
          radius={120}
          innerRadius={graphType === GraphType.DonutGraph ? 60 : 0}
          innerCircleColor={innerCirleColor}
          centerLabelComponent={() =>
            graphType === GraphType.DonutGraph && (
              <>
                <ThemedText style={{textAlign: 'center'}} type='caption'>
                  {pieData.find((d) => d.focused)?.percentage ?? ''}
                </ThemedText>
                <ThemedText style={{textAlign: 'center'}} type="default">
                  {pieData.find((d) => d.focused)?.label ?? ''}
                </ThemedText>
              </>
            )
          }
        />
        <GraphLegend
          colors={pieState.colors}
          graphData={graphData}
          secondaryGraphData={[]}
          pieData={pieData}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    // paddingVertical: 10,
  },
  graphContainer: {
    padding: 45,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10
  },
});

export default PieGraph;