import {GraphColor} from '../constants/Colors';
import {GraphStateEnum} from '../types/graph';

// Define the state type specific to a pie graph
export type PieGraphState = {
  type: GraphStateEnum;
  colors: GraphColor[];
  showLabels: boolean;
};

// Define the types of actions for a pie graph
export type PieGraphActions =
  {type: 'SET_COLORS'; payload: GraphColor[]}
  | {type: 'TOGGLE_LABELS'; payload: boolean};

// Define the initial state for the pie graph
export const initialPieGraphState: PieGraphState = {
  type: GraphStateEnum.PIE_GRAPH_STATE,
  colors: [],
  showLabels: true, // Default to showing labels
};

// Define the reducer function for the pie graph
export function pieGraphReducer(state: PieGraphState, action: PieGraphActions): PieGraphState {
  switch (action.type) {
    case 'SET_COLORS':
      return {
        ...state,
        colors: action.payload,
      };
    case 'TOGGLE_LABELS':
      return {
        ...state,
        showLabels: action.payload,
      };
    default:
      return state;
  }
}
