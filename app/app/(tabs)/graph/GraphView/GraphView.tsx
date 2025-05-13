import React, {useEffect, useState} from 'react'
import {useGraph} from '@/app/context/GraphContext';
import {CommonActions, RouteProp, useRoute} from '@react-navigation/native';
import {GraphStackNavigationType, GraphStackParamList, isALineGraph, OperationTypeGraph} from '../_layout';
import {useNavigation} from 'expo-router';
import {Graph} from '@/types/graph';
import useRenderGraph from '@/hooks/useRenderGraph';
import Toast from 'react-native-toast-message';
import {useGraphRefs} from '@/hooks/graph/useGraphRefs';
import StatsDisplay from './Components/StatsDisplay';
import {useGraphStats} from './Hooks/useGraphStats';
import ThemedView from '@/components/ThemedView';
import CommonGraphView from './Components/CommonGraphView';
import {ThemedText} from '@/components/ui/ThemedText';
import {TouchableOpacity, View} from 'react-native';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {useGraphTimeFilters} from './Hooks/useGraphTimeFilters';
import {ScrollView} from 'react-native-gesture-handler';



const GraphView = () => {

  type GraphRouteProp = RouteProp<GraphStackParamList, "GraphView/GraphView">;

  const {state, dispatch} = useGraph();
  const route = useRoute<GraphRouteProp>();
  const selectedGraph: Graph = route.params.selectedGraph;
  const navigation = useNavigation<GraphStackNavigationType>();
  const {graphRef} = useGraphRefs(state.graphType);
  console.log("ref: ", graphRef);

  // const controlOptions = Object.values(GraphFilterOptions);
  // const [segmentedIndex, setSegmentedIndex] = useState(0);
  const blue = useThemeColor({}, "blue");
  const bg = useThemeColor({}, "bgPrimary");

  // const blue = "#007AFF";


  const {
    segmentedIndex,
    filterOptions,
    handleSegmentChange
  } = useGraphTimeFilters(graphRef);


  const renderedGraph: React.JSX.Element[] = useRenderGraph(state.graphType, state.graphData, graphRef, state.secondaryGraphData, state.graphSettings);


  useEffect(() => {
    navigation.setOptions({
      headerTitle: state.graphTitle,

      headerLeft: () => (
        <TouchableOpacity onPress={() => {
          navigation.dispatch(state => {
            const routes = state.routes.slice(0, -2); // remove the last two routes
            return CommonActions.reset({
              ...state,
              routes,
              index: routes.length - 1,
            });
          });

        }}>
          <View className='flex-row items-center gap-4'>
            <SFSymbol
              name='chevron.left'
              scale="medium"
              size={22}
              weight="semibold"
              style={{alignSelf: 'center'}}
              color={blue}
            />
            <ThemedText type="headline" className=' text-blue-light dark:text-blue-dark'>
              Back
            </ThemedText>
          </View>

        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          className='flex-row items-center justify-between px-5'
        // style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 60}}
        >
          {/* Chart Icon */}
          <TouchableOpacity
            hitSlop={10}
            onPress={editGraph}>
            <SFSymbol
              name='square.and.pencil'
              weight='regular'
              size={20}
              color={blue}

            />
          </TouchableOpacity>


        </View>
      ),

    });
    // needs these maps here so that the nett function contains an up-to-date version of the maps
  }, [navigation]);


  const handleDeleteGraph: () => Promise<void> = async () => {
    navigation.navigate("Loading/Loading", {
      operation: OperationTypeGraph.DELETE_GRAPH,
      graphId: selectedGraph.id,
      destination: "Index/Index"
    })
  }

  const editGraph = () => {
    dispatch({
      type: "SET_MODE_AND_GRAPH_2_EDIT", payload: {
        mode: 'editing',
        graphToEdit: selectedGraph,
      }
    })
    navigation.navigate("GraphCreate/GraphCreate", {})
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor: bg}}>
      <ThemedView className='flex flex-1 flex-col'>

        <ThemedText labelType='primary' type='largeTitle' emphasized className='p-10'>
          {selectedGraph.graphTitle}
        </ThemedText>


        <View className='p-3'>
          <SegmentedControl
            values={filterOptions}
            selectedIndex={segmentedIndex}
            onChange={({nativeEvent}) => handleSegmentChange(nativeEvent.selectedSegmentIndex)}

          />
        </View>


        <CommonGraphView
          graphId={selectedGraph.id}
          renderedGraph={renderedGraph[0]}
          handleDeleteGraph={handleDeleteGraph}
          graphRef={graphRef}
          editGraph={editGraph}
        />

        <StatsDisplay />

        <Toast />

      </ThemedView>

    </ScrollView>
  )
}


export default GraphView;