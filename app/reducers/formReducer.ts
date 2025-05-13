import {CoreMetric, CoreMetricPack} from "@/types/core-metric";
import {FormDefinition, MetricDefinition, MetricPackDefinition, Widget} from "@/types/formdefinition";
import {StatusItem} from "@/types/status-item";


export type FormState = {
    mode: "add" | "edit";
    formDefinition: FormDefinition;

    showedWidgetPrompt: boolean;

    initializedMaps: boolean;

    // Map between core metric id and core metric
    coreMetricMap: Map<string, StatusItem<CoreMetric>>;

    // Map between core metric pack id and core metric pack
    coreMetricPackMap: Map<string, StatusItem<CoreMetricPack>>;

    // map between core metric id and metric definition
    metricDefMap: Map<string, StatusItem<MetricDefinition>>;

    // map between core metric pack id and metric pack definition
    metricPackDefMap: Map<string, StatusItem<MetricPackDefinition>>;


    // used during creation to store metric definitions by pack id. 
    // created during init and used in form create to create metric definitions
    packId2MetricDefMap: Map<string, MetricDefinition[]>,

    removedMetricDefs: MetricDefinition[];
    removedMetricPacks: MetricPackDefinition[];
    removedWidgets: Widget[];

    // widgets: Widget[],
    widgetMap: Map<string, StatusItem<Widget>>;

}

export const initialFormState: FormState = {

    mode: "add",
    showedWidgetPrompt: false,
    initializedMaps: false,

    // for edit mode
    formDefinition: {} as FormDefinition,


    coreMetricMap: new Map<string, StatusItem<CoreMetric>>(),
    coreMetricPackMap: new Map<string, StatusItem<CoreMetricPack>>(),

    metricDefMap: new Map<string, StatusItem<MetricDefinition>>(),
    metricPackDefMap: new Map<string, StatusItem<MetricPackDefinition>>(),
    packId2MetricDefMap: new Map<string, MetricDefinition[]>(),


    widgetMap: new Map<string, StatusItem<Widget>>(),
    removedMetricDefs: [],
    removedMetricPacks: [],
    removedWidgets: [],
}



// Define the types of actions
export type FormActions =
    | {type: 'SET_MODE'; payload: "add" | "edit"}
    | {type: "SET_SHOWED_WIDGET_PROMPT"; payload: boolean}
    | {type: 'SET_CORE_METRIC_MAP'; payload: Map<string, StatusItem<CoreMetric>>} //SET_CORE_METRIC_PACK_MAP
    | {type: 'SET_CORE_METRIC_PACK_MAP'; payload: Map<string, StatusItem<CoreMetricPack>>}
    | {type: 'SET_METRIC_DEF_MAP'; payload: Map<string, StatusItem<MetricDefinition>>}
    | {type: 'SET_METRIC_PACK_DEF_MAP'; payload: Map<string, StatusItem<MetricPackDefinition>>}
    // | {type: "SET_WIDGETS"; payload: Widget[]}
    | {type: "SET_WIDGETS"; payload: Map<string, StatusItem<Widget>>}
    | {type: "SET_PACK_ID_2_MD_MAP"; payload: Map<string, MetricDefinition[]>}
    | {type: 'SET_INITIALIZE_MAP'; payload: boolean;}
    | {
        type: 'PREPARE_EDIT_STATE'; payload: {
            formDefinition: FormDefinition;
            mode: "edit";
            coreMetricMap: Map<string, StatusItem<CoreMetric>>;
            coreMetricPackMap: Map<string, StatusItem<CoreMetricPack>>;
            metricDefMap: Map<string, StatusItem<MetricDefinition>>;
            metricPackDefMap: Map<string, StatusItem<MetricPackDefinition>>;
            // packId2MetricDefMap: Map<string, MetricDefinition[]>;
            widgetMap: Map<string, StatusItem<Widget>>;
        }
    }
    | {type: "SET_REMOVED_METRIC_DEFS"; payload: MetricDefinition[]}
    | {type: "SET_REMOVED_METRIC_PACKS"; payload: MetricPackDefinition[]}
    | {type: "SET_REMOVED_WIDGETS"; payload: Widget[]}
    | {type: 'CLEAR_STATE';}





export function formReducer(state: FormState, action: FormActions): FormState {

    switch (action.type) {


        case "SET_REMOVED_WIDGETS":
            return {
                ...state,
                removedWidgets: action.payload
            }
        case "SET_REMOVED_METRIC_DEFS":
            return {
                ...state,
                removedMetricDefs: action.payload
            }

        case "SET_REMOVED_METRIC_PACKS":
            return {
                ...state,
                removedMetricPacks: action.payload
            }


        case "PREPARE_EDIT_STATE":
            return {
                ...state,
                mode: action.payload.mode,
                formDefinition: action.payload.formDefinition,
                coreMetricMap: action.payload.coreMetricMap,
                coreMetricPackMap: action.payload.coreMetricPackMap,
                metricDefMap: action.payload.metricDefMap,
                metricPackDefMap: action.payload.metricPackDefMap,
                // packId2MetricDefMap: action.payload.packId2MetricDefMap,
                widgetMap: action.payload.widgetMap,
            }

        case "SET_CORE_METRIC_MAP":
            return {
                ...state,
                coreMetricMap: action.payload
            }

        case "SET_INITIALIZE_MAP":
            return {
                ...state,
                initializedMaps: action.payload
            }
        case "SET_WIDGETS":
            return {
                ...state,
                widgetMap: action.payload
            }

        // Just giving it the whole map, logic for setting it will be outside
        case "SET_PACK_ID_2_MD_MAP":
            return {
                ...state,
                packId2MetricDefMap: action.payload
            }

        case "SET_METRIC_DEF_MAP":
            return {
                ...state,
                metricDefMap: action.payload
            }

        case "SET_METRIC_PACK_DEF_MAP":
            return {
                ...state,
                metricPackDefMap: action.payload
            }

        case "SET_CORE_METRIC_PACK_MAP":
            return {
                ...state,
                coreMetricPackMap: action.payload
            }

        case "SET_MODE":
            return {
                ...state,
                mode: action.payload
            }

        case "SET_SHOWED_WIDGET_PROMPT":
            return {
                ...state,
                showedWidgetPrompt: action.payload
            }




        case "CLEAR_STATE":
            return {
                ...initialFormState,
            };



        // default:
        //     return state;
    }
}