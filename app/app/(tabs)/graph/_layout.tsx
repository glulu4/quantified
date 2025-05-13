import {Stack} from "expo-router";
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useColorScheme} from '@/hooks/useColorScheme';
import {NavigationProp} from "@react-navigation/native";
import {GraphData, Graph, GraphType} from "@/types/graph";
import GraphProvider from "@/app/context/GraphContext";
import Toast from "react-native-toast-message";
import {MetricDefinition} from "@/types/formdefinition";

export enum OperationTypeGraph {
  CREATE_GRAPH = "create-graph",
  UPLOAD_GRAPH = "upload-graph",
  DELETE_GRAPH = "delete-graph",
  LOAD_GRAPH = "load-saved-graph",
  EDIT_GRAPH = "edit-graph",
}

export type GraphStackParamList = {

  "GraphCreate/GraphCreate": {},
  "GraphView/GraphView": {selectedGraph: Graph},
  "SelectMetrics/SelectMetrics": {
    operation: "adding-metric" | "new-graph" | 'add-2nd-dataset';
    sourceScreen?: "LineGraphCreate" | "BarGraphCreate" | "PieGraphCreate";
  }

  "GraphSelect/GraphSelect": {
    selectedMetricDefs: MetricDefinition[]
  }
  'Loading/Loading':
  |
  {
    operation: OperationTypeGraph.CREATE_GRAPH;
    graphType: GraphType;
    metricDefinitions: MetricDefinition[];
    destination: 'GraphCreate/GraphCreate';
  }
  | {
    operation: OperationTypeGraph.DELETE_GRAPH
    graphId: string;
    destination: "Index/Index";
  }
  |
  {
    operation: OperationTypeGraph.EDIT_GRAPH
    graph: Graph;
    destination: "Index/Index";
  }
  | {
    operation: OperationTypeGraph.LOAD_GRAPH
    graph: Graph;
    destination: "GraphView/GraphView";
  }
  | {
    operation: OperationTypeGraph.UPLOAD_GRAPH;
    graph: Graph;
    destination: "Index/Index";

  }

  ViewAllModal: {
    graphs: Graph[];
  }
  "Index/Index": {}

};


export const isALineGraph = (selectedGraphType: GraphType): boolean => {
  return [GraphType.DotLineGraph, GraphType.LineGraph, GraphType.SmoothLineGraph].includes(selectedGraphType);
}

export const isAPieGraph = (selectedGraphType: GraphType): boolean => {
  return [GraphType.PieGraph, GraphType.DonutGraph].includes(selectedGraphType)
}


export const isABarGraph = (selectedGraphType: GraphType): boolean => {
  return selectedGraphType === GraphType.BarGraph
}


export type GraphStackNavigationType = NavigationProp<GraphStackParamList>;

const GraphStackLayout = () => {

  const colorScheme = useColorScheme();

  return (
    <GraphProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="Index/Index" options={{headerShown: false, headerTitle: 'Graph'}} />
          <Stack.Screen name="SelectMetrics/SelectMetrics" options={{headerShown: true, headerTitle: 'Select Metrics'}} />
          <Stack.Screen name="GraphSelect/GraphSelect" options={{headerShown: true, headerTitle: 'Select Graph'}} />


          <Stack.Screen name="GraphCreate/GraphCreate" options={{headerShown: true, headerTitle: 'GraphCreate'}} />

          <Stack.Screen name='Loading/Loading' options={{headerShown: false, headerTitle: 'loading'}} />
          <Stack.Screen name="GraphView/GraphView" options={{headerShown: true, headerTitle: 'GraphView'}} />

          <Stack.Screen
            name="ViewAllModal"
            options={{
              presentation: 'modal',
              title: 'View All',
              // animation: 'fade',

            }} ></Stack.Screen>
        </Stack>
        <Toast />
      </ThemeProvider>
    </GraphProvider>
  )
}
export default GraphStackLayout;

