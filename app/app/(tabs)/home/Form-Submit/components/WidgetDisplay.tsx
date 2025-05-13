import React, {useEffect, useMemo, useState} from "react";
import {generateGraphDataFromMetricDefs} from "@/app/(tabs)/graph/utils/util";
import {getMetricDefinitions} from "@/cloudfunctions/getFunctions";
import useRenderGraph from "@/hooks/useRenderGraph";
import {MetricDefinition, Widget, WidgetType} from "@/types/formdefinition";
import {GraphData, GraphStateEnum, GraphType, xAxisLabelTypes} from "@/types/graph";
import {View} from "react-native";
import {ThemedText} from "@/components/ui/ThemedText";
import CenteredSpinner from "@/components/CenteredSpinner";
import {LineGraphState} from "@/reducers/lineGraphReducer";
import LineGraphDemo from "@/components/demo-widgets/LineDemo";
import BarDemo from "@/components/demo-widgets/BarDemo";
import PieDemo from "@/components/demo-widgets/PieDemo";

// Helper function to convert widget type to graph type
function widgetTypeToGraphType(widgetType: WidgetType): GraphType {
    switch (widgetType) {
        case WidgetType.LINE:
            return GraphType.SmoothLineGraph;
        case WidgetType.BAR:
            return GraphType.BarGraph;
        case WidgetType.PIE:
            return GraphType.PieGraph;
        // case WidgetType.ORBIT:
        // return GraphType.ORBIT;
        // case WidgetType.PROGRESS_LINES:
        // return GraphType.PROGRESS_LINES;
        default:
            throw new Error("Invalid widget type");
    }
}

// Helper function to fetch graph data for a widget
async function getGraphData(widget: Widget): Promise<GraphData[]> {
    const metricDefs: MetricDefinition[] = await getMetricDefinitions(widget.metricDefinitionIds);
    const graphData: GraphData[] = await generateGraphDataFromMetricDefs(
        metricDefs,
        widgetTypeToGraphType(widget.widgetType)
    );
    return graphData;
}

interface WidgetDisplayProps {
    widget: Widget;
    className?: string;
}



const WidgetDisplay: React.FC<WidgetDisplayProps> = ({widget, className}) => {
    const [graphData, setGraphData] = useState<GraphData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [noDataDisplay, setNoDataDisplay] = useState<boolean>(false);

    // Fetch the data for this widget
    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const data: GraphData[] = await getGraphData(widget);



                if (data[0].metricSubmissions.length === 0) {
                    console.log("No data available for this widget");
                    setNoDataDisplay(true);
                    setIsLoading(false);
                    return;
                }
                if (isMounted) {
                    setGraphData(data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(`Failed to load widget data: ${err}`);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [widget]);

    // Render the graph with the appropriate type
    const graphType = widgetTypeToGraphType(widget.widgetType);
    const getGraphSettings = () => {
        switch (widget.widgetType) {
            case WidgetType.LINE:
                const defaultLineGraphSettings: LineGraphState = {

                    type: GraphStateEnum.LINE_GRAPH_STATE,
                    secondDataSetIds: [],
                    secondYAxis: false,
                    selectedXAxisLabel: xAxisLabelTypes.Date,
                    colors: []
                }
                return defaultLineGraphSettings;
            default:
                return undefined
        }
    }

    const renderedGraph = useRenderGraph(
        graphType,
        graphData,
        null,
        [],
        undefined,
        // getGraphSettings(), // Pass the graph settings here
        //undefined
    )



    // if (isLoading) {
    //     <CenteredSpinner />
    // }

    if (error) {
        return <View className={className}>
            <ThemedText>
                Error: {error}
            </ThemedText>
        </View>;
    }



    if (noDataDisplay) {
        return (
            <View className='rounded-xl p-1 py-3 m-3 overflow-hidden bg-quaternaryFill-light dark:bg-quaternaryFill-dark'
            >
                <ThemedText labelType="primary" type="subhead" className="text-center">
                    No data available for this widget
                </ThemedText>
                {widgetTypeToGraphType(widget.widgetType) === GraphType.SmoothLineGraph ?
                    <LineGraphDemo /> :
                    widgetTypeToGraphType(widget.widgetType) === GraphType.BarGraph ?
                        <BarDemo /> :
                        <PieDemo />
                }

            </View >
        );
    }

    return (
        <View className={`${className} flex-1 py-7`}>

            <ThemedText
                emphasized
                labelType="primary"
                type="title3"
                className="pl-2">{widget.title || 'Widget'}</ThemedText>
            {isLoading ?
                <CenteredSpinner /> :
                renderedGraph}
        </View>
    );
};

export default WidgetDisplay;