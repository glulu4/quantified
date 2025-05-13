import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {LineChart} from 'react-native-gifted-charts';
import {GraphData, GraphType} from '@/types/graph';
import {ThemedText} from '../ui/ThemedText';
// import {useLineGraphState} from '@/hooks/useLineGraphState';
// import {useGraphScales} from '@/hooks/useGraphScales';
// import {prepareLineGraphData} from './utils/dataTransformers';
import {LineGraphState} from '@/reducers/lineGraphReducer';
import {GRAPH_WIDTH, AXES_COLOR} from '@/constants/graphConstants';
import {useThemeColor} from '@/hooks/useThemeColor';
import ThemedView from '../ThemedView';
import GraphLegend from './GraphLegend';
import {useGraphScales} from '@/hooks/graph/useGraphScales';
import {useLineGraphState} from '@/hooks/graph/useLineGraphState';
import CenteredSpinner from '../CenteredSpinner';

interface LineGraphProps {
  graphData: GraphData[];
  secondaryGraphData: GraphData[];
  lineGraphType: GraphType;
  graphSettings?: LineGraphState;
}

const LineGraph = forwardRef(({graphData, secondaryGraphData, lineGraphType, graphSettings}: LineGraphProps, ref) => {
  const textColor = useThemeColor({}, "labelPrimary");
  const xAxisLabelColor = useThemeColor({}, "labelSecondary");
  const GRAPH_BACKGROUND_COLOR = useThemeColor({}, "quaternaryFill");
  const rulesColor = useThemeColor({}, "systemGray5");

  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState<boolean>(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Use custom hooks for state management
  const {lineState, dispatch, usedColors} = useLineGraphState(graphData, secondaryGraphData, graphSettings);

  // Use custom hook for data preparation
  const {
    dataSets,
    maxValue,
    stepValue,
    numSections,
    secondMaxValue,
    secondStepValue,
    secondNumSections,
    onlyFraction
  } = useGraphScales(graphData, secondaryGraphData, lineGraphType, lineState);

  // Forward ref methods to parent component
  useImperativeHandle(ref, () => ({
    getState: () => lineState,
    dispatch: (action: any) => dispatch(action)
  }));

  // Handle data preparation effects
  React.useEffect(() => {
    try {
      if (dataSets.length > 0) {
        setReady(true);
        setRefreshKey(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error in LineGraph component:', error);
      setError('An error occurred while preparing the chart data.');
    }
  }, [dataSets]);

  // Create chart props
  const chartProps = {
    dataSet: dataSets,
    isAnimated: true,
    initialSpacing: 20,
    spacing: onlyFraction ? 80 : 100,
    textColor: textColor,
    xAxisThickness: 0,
    yAxisThickness: 0,
    showScrollIndicator: true,
    animateOnDataChange: true,
    xAxisColor: AXES_COLOR,
    yAxisColor: AXES_COLOR,
    xAxisLabelTextStyle: {color: xAxisLabelColor, fontSize: 12},
    yAxisTextStyle: {color: textColor},
    textShiftY: -6,
    textFontSize: 12,
    focusEnabled: true,
    showFractionalValues: onlyFraction,
    scrollAnimation: true,
    curved: lineGraphType === GraphType.SmoothLineGraph,
    areaChart: lineGraphType === GraphType.SmoothLineGraph,
    startOpacity: 0.5,
    endOpacity: 0.1,
    thickness: 5,
    dataPointsRadius: lineGraphType === GraphType.DotLineGraph ? 5 : 2,
    maxValue: maxValue,
    stepValue: stepValue,
    noOfSections: numSections,
    width: GRAPH_WIDTH,

    // Add secondary Y axis if secondary data exists
    ...(secondaryGraphData.length !== 0 ? {
      secondaryYAxis: {
        formatYLabel: (label: string) => {
          if (Number(label) > 1) {
            return String(Math.trunc(Number(label)));
          } else if (Number(label) === 0) {
            return "0";
          } else {
            return label;
          }
        },
        maxValue: secondMaxValue,
        noOfSections: secondNumSections,
        stepValue: secondStepValue,
        yAxisColor: AXES_COLOR,
        yAxisLabelContainerStyle: {
          marginLeft: -8,
        },
      },
    } : {}),
  };

  // Render error state
  if (error) {
    return (
      <ThemedView style={styles.errorView}>
        <ThemedText type="subhead">{error}</ThemedText>
      </ThemedView>
    );
  }

  // Render loading state
  if (!ready) {
    return <CenteredSpinner />
  }

  // Render no data state
  if (dataSets.length === 0) {
    return <ThemedText type="subhead">No data available for line graph</ThemedText>;
  }

  // Render graph
  return (
    <View className='py-3'>
      <View
        className='rounded-xl p-1 py-3 m-3 overflow-hidden'
        style={{backgroundColor: GRAPH_BACKGROUND_COLOR}}
      >
        <LineChart
          // xAxisThickness={3}
          rulesType='solid'
          rulesThickness={1}
          rulesColor={rulesColor}
          horizontalRulesStyle={{
            horzontilPadding: 10
          }}
          thickness1={5}
          key={refreshKey}
          {...chartProps}
        />
        <GraphLegend
          dataSets={dataSets}
          colors={lineState.colors}
          graphData={graphData}
          secondaryGraphData={secondaryGraphData}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorView: {
    margin: 50
  }
});

export default LineGraph;