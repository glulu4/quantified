// import {GraphColor} from '@/constants/Colors';
import {GraphColor} from '../constants/Colors';
import {GraphStateEnum} from '../types/graph';

// Define the state type specific to a bar graph
export type BarGraphState = {
  type: GraphStateEnum;
  colors: GraphColor[];
};

// Define the types of actions
export type BarGraphActions =
  {type: 'SET_COLORS'; payload: GraphColor[]};

// Define the initial state for the bar graph
export const initialBarGraphState: BarGraphState = {
  type: GraphStateEnum.BAR_GRAPH_STATE,
  colors: [],
};

// Define the reducer function
export function barGraphReducer(state: BarGraphState, action: BarGraphActions): BarGraphState {
  switch (action.type) {
    case 'SET_COLORS':
      return {
        ...state,
        colors: action.payload,
      };
    default:
      return state;
  }
}
