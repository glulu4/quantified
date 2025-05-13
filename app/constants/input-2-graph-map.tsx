import {CoreInputType} from "@/types/core-metric";
import {WidgetType} from "@/types/formdefinition";
import {GraphType} from "@/types/graph";





export const input2GraphMap: Record<CoreInputType, GraphType[]> = {
    [CoreInputType.NUMBER]: [GraphType.LineGraph, GraphType.BarGraph, GraphType.DotLineGraph, GraphType.SmoothLineGraph],
    [CoreInputType.TEXT]: [GraphType.PieGraph, GraphType.DonutGraph],
    [CoreInputType.DATE_RANGE]: [GraphType.PieGraph, GraphType.DonutGraph],
    [CoreInputType.DATE]: [GraphType.PieGraph, GraphType.DonutGraph],
    [CoreInputType.FOOD_DB]: [GraphType.LineGraph, GraphType.BarGraph, GraphType.DotLineGraph, GraphType.SmoothLineGraph],
    [CoreInputType.SCALE]: [GraphType.LineGraph, GraphType.BarGraph, GraphType.DotLineGraph, GraphType.SmoothLineGraph],
    [CoreInputType.MULTISELECT]: [GraphType.PieGraph, GraphType.DonutGraph],
    [CoreInputType.FRACTION]: [GraphType.LineGraph, GraphType.BarGraph, GraphType.DotLineGraph, GraphType.SmoothLineGraph],
    [CoreInputType.TIME]: [GraphType.LineGraph, GraphType.BarGraph, GraphType.DotLineGraph, GraphType.SmoothLineGraph],
}


export const input2WidgetMap: Record<CoreInputType, WidgetType[]> = {
    [CoreInputType.NUMBER]: [WidgetType.LINE, WidgetType.BAR, WidgetType.ORBIT, WidgetType.PROGRESS_LINES],
    [CoreInputType.TEXT]: [WidgetType.PIE, WidgetType.BAR],
    [CoreInputType.DATE_RANGE]: [WidgetType.PIE, WidgetType.BAR],
    [CoreInputType.DATE]: [WidgetType.PIE, WidgetType.BAR],
    [CoreInputType.FOOD_DB]: [WidgetType.LINE, WidgetType.BAR, WidgetType.ORBIT, WidgetType.PROGRESS_LINES],
    [CoreInputType.SCALE]: [WidgetType.LINE, WidgetType.BAR, WidgetType.ORBIT, WidgetType.PROGRESS_LINES],
    [CoreInputType.MULTISELECT]: [WidgetType.PIE, WidgetType.BAR],
    [CoreInputType.FRACTION]: [WidgetType.LINE, WidgetType.BAR, WidgetType.ORBIT, WidgetType.PROGRESS_LINES],
    [CoreInputType.TIME]: [WidgetType.LINE, WidgetType.BAR, WidgetType.ORBIT, WidgetType.PROGRESS_LINES],
}

