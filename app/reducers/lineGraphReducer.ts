import {GraphColor} from '../constants/Colors';
import {xAxisLabelTypes, GraphStateEnum} from '../types/graph';

export type LineGraphState = {
  type: GraphStateEnum;
  colors: GraphColor[];
  selectedXAxisLabel: xAxisLabelTypes;
  secondYAxis: boolean;
  secondDataSetIds: string[];
};

// Define the types of actions
export type LineGraphActions =
  {type: 'SET_COLORS'; payload: GraphColor[]}
  | {type: 'SET_X_AXIS_LABEL'; payload: xAxisLabelTypes}
  | {type: 'TOGGLE_2ND_YAXIS'; payload: boolean}
  | {type: "ADD_SECOND_DATA_SET_IDS"; payload: string[]}

// Define action types


// Define the initial state
export const initialState = {
  type: GraphStateEnum.LINE_GRAPH_STATE,
  colors: [],
  selectedXAxisLabel: xAxisLabelTypes.Index,
  secondYAxis: false,
  secondDataSetIds: [],
};

// Define the reducer function
export function lineGraphReducer(state: LineGraphState, action: LineGraphActions) {
  switch (action.type) {
    case 'SET_COLORS':
      return {
        ...state,
        colors: action.payload,
      };

    case 'ADD_SECOND_DATA_SET_IDS':
      return {
        ...state,
        secondDataSetIds: action.payload,
      };
    case 'SET_X_AXIS_LABEL':
      return {
        ...state,
        selectedXAxisLabel: action.payload,
      };
    case 'TOGGLE_2ND_YAXIS':
      return {
        ...state,
        secondYAxis: action.payload,
      };
    default:
      return state;
  }
}
