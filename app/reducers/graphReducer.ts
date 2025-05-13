import {GraphType, GraphSettings, GraphData, Graph} from '@/types/graph';

export type GraphState = {
  graphType: GraphType;
  graphTitle: string;
  graphData: GraphData[]; // whats graphed
  secondaryGraphData: GraphData[]  // whats graphed
  secondaryGraphDataIds: string[];  // whats stored
  graphSettings?: GraphSettings;

  originalGraphData: GraphData[];           // Original unfiltered data
  originalSecondaryGraphData: GraphData[]; // Original unfiltered data

  mode: "creation" | "editing";
  graphToEdit: Graph;
  shouldRefetch: boolean;
};

export const initialState: GraphState = {
  graphType: GraphType.NONE, // Use a valid GraphType as the default value
  graphTitle: "",
  graphData: [],
  secondaryGraphData: [],
  secondaryGraphDataIds: [],
  graphSettings: undefined,
  originalGraphData: [],            // Store original data
  originalSecondaryGraphData: [],
  mode: "creation",
  graphToEdit: {} as Graph,
  shouldRefetch: false,
};

// Define the types of actions
export type GraphAction =
  | {type: 'SET_GRAPH_TYPE'; payload: GraphType}
  | {type: 'ADD_METRIC'; payload: GraphData[]}
  | {type: 'SET_GRAPH_DATA'; payload: GraphData[]}
  | {type: 'SET_SECONDARY_DATA_IDS'; payload: string[]}
  | {type: 'CLEAR_STATE'}
  | {
    type: 'SET_MODE_AND_GRAPH_2_EDIT'; payload: {
      mode: "creation" | "editing",
      graphToEdit: Graph,
    }
  }
  | {type: 'SET_MODE'; payload: "creation" | "editing"}
  | {type: 'CLEAR_SECONDARY_DATA'}
  | {type: 'SET_SECONDARY_DATA'; payload: GraphData[]}
  | {type: 'SET_SECONDARY_AND_PRIMARY_DATA'; payload: {primary: GraphData[], secondary: GraphData[]}}
  | {type: 'SET_GRAPH_AND_GRAPH_TYPE_TITLE'; payload: {graphType: GraphType; graphData: GraphData[], title: string}}
  | {type: 'SET_ORIGINAL_GRAPH_DATA'; payload: {originalGraphData: GraphData[], originalSecondaryGraphData: GraphData[]}}
  | {type: 'SET_GRAPH_STATE'; payload: GraphState}
  | {type: 'SET_GRAPH_TITLE'; payload: string}
  | {
    type: 'LOAD_SAVED_GRAPH'; payload: {
      graphType: GraphType;
      title: string;
      graphSettings: GraphSettings;
      graphData: GraphData[];
      secondaryGraphData: GraphData[];
    }

  }
  | {type: 'SET_SHOULD_REFETCH'; payload: boolean};


export function graphReducer(state: GraphState, action: GraphAction): GraphState {
  switch (action.type) {
    case 'SET_GRAPH_TYPE':
      return {
        ...state,
        graphType: action.payload as GraphType,
      };

    case 'SET_GRAPH_TITLE':
      return {
        ...state,
        graphTitle: action.payload,
      };

    case 'ADD_METRIC':
      return {
        ...state,
        graphData: action.payload,  // Overwrite the existing data
      };

    case 'SET_GRAPH_DATA':
      return {
        ...state,
        graphData: action.payload,
      };
    case 'SET_SECONDARY_DATA_IDS':
      return {
        ...state,
        secondaryGraphDataIds: action.payload,
      };
    case 'SET_SECONDARY_DATA':
      return {
        ...state,
        secondaryGraphData: action.payload,
      };
    case 'SET_GRAPH_AND_GRAPH_TYPE_TITLE':
      return {
        ...state,
        graphType: action.payload.graphType,
        graphData: action.payload.graphData,
        graphTitle: action.payload.title,
      };

    case 'SET_ORIGINAL_GRAPH_DATA':
      return {
        ...state,
        originalGraphData: action.payload.originalGraphData,
        originalSecondaryGraphData: action.payload.originalSecondaryGraphData,
      };

    case "SET_SECONDARY_AND_PRIMARY_DATA":
      return {
        ...state,
        graphData: action.payload.primary,
        secondaryGraphData: action.payload.secondary,
      }
    case 'LOAD_SAVED_GRAPH':
      return {
        ...state,
        graphType: action.payload.graphType,
        graphTitle: action.payload.title,
        graphSettings: action.payload.graphSettings,
        graphData: action.payload.graphData,
        secondaryGraphData: action.payload.secondaryGraphData,
        secondaryGraphDataIds: action.payload.secondaryGraphData.map(gd => gd.metricDefinition.id),
        originalGraphData: action.payload.graphData, // on first load its the same
        originalSecondaryGraphData: action.payload.secondaryGraphData, // on first load its the same
      };

    case "SET_MODE_AND_GRAPH_2_EDIT":
      return {
        ...state,
        mode: action.payload.mode,
        graphToEdit: action.payload.graphToEdit,
      }

    case "SET_MODE":
      return {
        ...state,
        mode: action.payload
      }
    case 'CLEAR_SECONDARY_DATA':
      return {
        ...state,
        secondaryGraphData: [],
        secondaryGraphDataIds: [],
        originalSecondaryGraphData: [],
      };

    case "SET_SHOULD_REFETCH":
      return {
        ...state,
        shouldRefetch: action.payload
      }
    case "CLEAR_STATE":
      return {
        ...initialState,
        shouldRefetch: state.shouldRefetch, // Keep the current shouldRefetch value
      };

    default:
      return state;
  }
}
