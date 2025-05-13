import {LineGraphState} from '../reducers/lineGraphReducer'
import {BarGraphState} from '../reducers/barGraphReducer';
import {PieGraphState} from '../reducers/pieGraphReducer';
import {Timestamp} from '@google-cloud/firestore';
import {MetricDefinition, MetricSubmission} from './formdefinition';
import {RefObject} from 'react';



export type GraphIcon = {
  icon: React.ReactElement; // Type for the icon
  type: GraphType;
};

export enum GraphType {
  LineGraph = 'Line Graph',
  BarGraph = 'Bar Graph',
  PieGraph = 'Pie Graph',
  SmoothLineGraph = 'Smooth Line Graph',
  DotLineGraph = 'Line Dot Graph',
  DonutGraph = 'Donut Graph',
  NONE = 'none'
}

export enum xAxisLabelTypes {
  Index = 'index',
  Date = "Date",
  Weekday = "Week Day",
  Month = "Month",
  Hour = "Hour",
  None = 'none',
}

export enum filterByEnum {
  MONTH = "Month",
  PAST_WEEK = "Past Week",
  ALL_TIME = "All Data"
}
export enum GraphStateEnum {
  PIE_GRAPH_STATE = 'PieGraph',
  BAR_GRAPH_STATE = 'BarGraph',
  DONUT_GRAPH_STATE = 'DonutGraph',
  LINE_GRAPH_STATE = 'LineGraph'
}

export type GraphSettings = LineGraphState | PieGraphState | BarGraphState | undefined;


export interface Graph {
  uid: string;
  id: string;
  graphTitle: string;
  graphType: GraphType;
  graphSettings?: GraphSettings;
  metricDefinitions: string[];
  viewCount: number;
  lastView?: Timestamp;
  version: number;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

export interface GraphData {
  metricDefinition: MetricDefinition;
  metricSubmissions: MetricSubmission[];
  graphType: GraphType;
}

export interface GraphHandle<T> {
  getState: () => T;
  dispatch: (action: any) => void;
}


export type GraphRef<T> = RefObject<GraphHandle<T>>
