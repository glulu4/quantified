import {useForm} from "@/app/context/FormContext";
import {MetricDefinition, Widget, WidgetType} from "@/types/formdefinition";
import {getAllItems, StatusItem} from "@/types/status-item";
import * as Crypto from 'expo-crypto';
import {Timestamp} from 'firebase/firestore';


export const useWidgets = () => {

    const {state, dispatch} = useForm();
    // const w = state.widgets;

    const pack2MetricDefMap = state.packId2MetricDefMap;
    const widgetMap = state.widgetMap; // Now a Map<string, StatusItem<Widget>>
    const widgets = getAllItems(widgetMap);

    function addWidget(metricDef: MetricDefinition, widgetType: WidgetType) {
        // Create a new widget object
        const newWidget: Widget = {
            title: metricDef.metricTitle,
            formDefinitionId: "",
            id: Crypto.randomUUID(),
            metricDefinitionIds: [metricDef.id],
            widgetType: widgetType,
            createdAt: Timestamp.now(),
            updatedAt: null,
            deletedAt: null,
        };

        // Create a StatusItem (customize status as needed, e.g., "new")
        const newStatusItem: StatusItem<Widget> = {value: newWidget, status: "new"};

        // Create a new Map to update state immutably
        const newWidgetMap = new Map<string, StatusItem<Widget>>(widgetMap);
        newWidgetMap.set(newWidget.id, newStatusItem);

        dispatch({type: "SET_WIDGETS", payload: newWidgetMap});
    }

    function removeWidget(widgetId: string) {
        const newWidgetMap = new Map(widgetMap);

        const statusItem = newWidgetMap.get(widgetId);

        if (statusItem) {
            // if we removed an old widget, save it to deleted list
            if (statusItem.status === "old") {
                const updatedList = state.removedWidgets;
                updatedList.push(statusItem.value);
                dispatch({type: "SET_REMOVED_WIDGETS", payload: updatedList});
            }

            newWidgetMap.delete(widgetId);
            dispatch({type: "SET_WIDGETS", payload: newWidgetMap});

        }

    }


    function isWidgetSelected(metricDef: MetricDefinition, widgetType: WidgetType) {
        const widgets = getAllItems(widgetMap);
        return widgets.some((widget) => widget.metricDefinitionIds.includes(metricDef.id) && widget.widgetType === widgetType);

    }

    return {
        isWidgetSelected,
        addWidget,
        pack2MetricDefMap,
        removeWidget,
        widgets
    }
}