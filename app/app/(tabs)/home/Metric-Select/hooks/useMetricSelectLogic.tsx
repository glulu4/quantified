import {useNavigation} from "expo-router";
import {useForm} from "@/app/context/FormContext";
import {HomeStackNavigationType} from "../../_layout";
import {errorToast} from "@/utils/toastUtils";
import {CoreMetric, CoreMetricPack} from "@/types/core-metric";
import {useCallback} from "react";
import {getNewItems, StatusItem} from "@/types/status-item";

/**
 * Manages metric selection logic, tracking "new", "old", and removed metrics.
 */
export const useMetricSelectLogic = () => {
    const {state, dispatch} = useForm();
    const navigation = useNavigation<HomeStackNavigationType>();

    const metricMap = state.coreMetricMap
    const metricPackMap = state.coreMetricPackMap


    function next() {

        const newCoreMetrics = getNewCoreMetrics();
        const newCoreMetricPacks = getNewCoreMetricPacks();

        if (!newCoreMetrics.length && !newCoreMetricPacks.length) {
            errorToast("Please select at least one metric before continuing.");
            return;
        }

        navigation.navigate("Metric-Set/MetricSet", {

        })
    }

    /**
     * Gets all new core metrics from the metric map.
     */
    const getNewCoreMetrics = () => {
        return getNewItems<CoreMetric>(metricMap);
    };
    /**
 * Gets all new core metric packs from the metric pack map.
 */
    const getNewCoreMetricPacks = () => {
        return getNewItems<CoreMetricPack>(metricPackMap);
    };


    const isMetricSelected = useCallback(
        (coreMetric: CoreMetric) => metricMap.has(coreMetric.id),
        [metricMap]
    );

    /**
     * Checks if a metric pack is selected.
     */
    const isMetricPackSelected = useCallback(
        (metricPack: CoreMetricPack) => metricPackMap.has(metricPack.id),
        [metricPackMap]
    );




    const toggleItem = useCallback(
        <T extends CoreMetric | CoreMetricPack>(
            item: T,
            map: Map<string, StatusItem<T>>,
            actionType: "SET_CORE_METRIC_MAP" | "SET_CORE_METRIC_PACK_MAP"
        ) => {
            const newMap = new Map(map);

            if (newMap.has(item.id)) {


                // cant be undefined, we are in the has sooo
                const statusItem = newMap.get(item.id)!;


                if (statusItem.status === "old") {
                    errorToast("If you want to remove this, do so on the next screen.")
                    return;
                }
                /** 
                 * TO DO
                 * if status is old, dont remove. tell user to remove on edit screen
                 */

                newMap.delete(item.id); // Remove if already selected
            } else {
                newMap.set(item.id, {value: item, status: "new"});
            }

            if (actionType === "SET_CORE_METRIC_MAP") {
                dispatch({type: actionType, payload: newMap as Map<string, StatusItem<CoreMetric>>});
            } else {
                dispatch({type: actionType, payload: newMap as Map<string, StatusItem<CoreMetricPack>>});
            }
        },
        [dispatch]
    );


    const handleDelete = (item: CoreMetric | CoreMetricPack) => {
        if ('defaultTitle' in item) {
            toggleMetric(item);
        } else {
            toggleMetricPack(item);
        }
    };
    const toggleMetric = (coreMetric: CoreMetric) => {
        toggleItem(coreMetric, metricMap, "SET_CORE_METRIC_MAP");
    };

    const toggleMetricPack = (metricPack: CoreMetricPack) => {
        toggleItem(metricPack, metricPackMap, "SET_CORE_METRIC_PACK_MAP");
    };




    return {
        goBack: navigation.goBack,
        toggleMetric,
        toggleMetricPack,
        isMetricSelected,
        isMetricPackSelected,
        getNewCoreMetrics,
        getNewCoreMetricPacks,
        next,
        metricMap,
        metricPackMap,
        handleDelete,
    };
};
