import {generateGraphDataFromMetricDefs} from "@/app/(tabs)/graph/utils/util";
import {getMetricDefinitions} from "@/cloudfunctions/getFunctions";
import {useGraphRefs} from "@/hooks/graph/useGraphRefs";
import useRenderGraph from "@/hooks/useRenderGraph";
import {MetricDefinition, Widget, WidgetType} from "@/types/formdefinition";
import {GraphData, GraphType} from "@/types/graph";
import {useEffect, useState} from "react";


async function getGraphData(widget: Widget) {
    const metricDefs: MetricDefinition[] = await getMetricDefinitions(widget.metricDefinitionIds);
    const graphData: GraphData[] = await generateGraphDataFromMetricDefs(
        metricDefs,
        widgetTypeToGraphType(widget.widgetType)
    );
    return graphData;
}

function widgetTypeToGraphType(widgetType: WidgetType): GraphType {
    switch (widgetType) {
        case WidgetType.LINE:
            return GraphType.SmoothLineGraph;
        case WidgetType.BAR:
            return GraphType.BarGraph;
        case WidgetType.PIE:
            return GraphType.PieGraph;
        // case WidgetType.ORBIT:
        //     return GraphType.ORBIT;
        // case WidgetType.PROGRESS_LINES:
        //     return GraphType.PROGRESS_LINES;
        default:
            throw new Error("Invalid widget type");
    }
}

export const useWidgets = (widgets: Widget[]) => {
    const [graphDatas, setGraphDatas] = useState<{widget: Widget; data: GraphData[]}[]>([]);

    useEffect(() => {
        let isMounted = true;

        async function buildData() {
            const result: {widget: Widget; data: GraphData[]}[] = [];

            for (const widget of widgets) {
                const graphData = await getGraphData(widget);
                result.push({widget, data: graphData});
            }

            if (isMounted) setGraphDatas(result);
        }

        if (widgets.length > 0) {
            buildData();
        }

        return () => {
            isMounted = false;
        };
    }, [widgets]);

    // ✅ This part is now hook-safe
    const graphs = graphDatas.map(({widget, data}, index) => {
        const type = widgetTypeToGraphType(widget.widgetType);
        return useRenderGraph(
            type,
            data,
            null, // no ref needed
            [],
            undefined
        );
    }).flat(); // flatten in case useRenderGraph returns multiple graphs

    return graphs;
};

