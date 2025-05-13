import {MetricDefinition} from "@/types/formdefinition";
import {useState} from "react";


export const useSelectedMetrics = () => {

    const [selectedMetrics, setSelectedMetrics] = useState<MetricDefinition[]>([]);



    function toggleMetric(metric: MetricDefinition) {
        setSelectedMetrics((prevSelectedMetrics) => {
            if (prevSelectedMetrics.some((m) => m.id === metric.id)) {
                return prevSelectedMetrics.filter((m) => m.id !== metric.id);
            } else {
                return [...prevSelectedMetrics, metric];
            }
        });
    }
    function isMetricSelected(metric: MetricDefinition) {
        return selectedMetrics.some((m) => m.id === metric.id);
    }


    return {toggleMetric, isMetricSelected, selectedMetrics};
}