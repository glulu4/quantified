import {useEffect, useState} from "react";
// import {getMetricDefinitions, getMetricPacks, getWidgets} from "@/cloudfunctions/getFunctions";
import {FormDefinition, MetricDefinition, MetricPackDefinition, Widget} from "@/types/formdefinition";
import {handleError} from "@/utils/util";
import {getFormItems} from "@/cloudfunctions/getFunctions";

export function useFormData(formDefinition: FormDefinition) {
    const [metricDefinitions, setMetricDefinitions] = useState<MetricDefinition[]>([]);
    const [metricPacks, setMetricPacks] = useState<MetricPackDefinition[]>([]);
    const [widgets, setWidgets] = useState<Widget[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!formDefinition || !formDefinition.metricDefinitionIds || !formDefinition.metricPackIds || !formDefinition.widgetIds) {


                console.log("Invalid form definition or missing related data.");
                console.log("formDefinition: ", formDefinition);



                handleError({
                    msg: "Invalid form definition or missing related data.",
                    fileName: "/hooks/useFormData",
                    functionName: "fetchData",
                    error: Error("Invalid Form Definition"),
                });
                setLoading(false);
                setError(true);
                return;
            }

            try {

                const {
                    metricDefs: defs,
                    metricPacks: packs,
                    widgets: wids,
                } = await getFormItems({
                    formDefId: formDefinition.id,
                    metricDefIds: formDefinition.metricDefinitionIds,
                    metricPackIds: formDefinition.metricPackIds,
                    widgetIds: formDefinition.widgetIds,
                });

                setMetricDefinitions(defs as MetricDefinition[]);
                setMetricPacks(packs as MetricPackDefinition[]);
                setWidgets(wids as Widget[]);
            } catch (error) {
                console.error("Error fetching form data:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [formDefinition]);

    return {metricDefinitions, metricPacks, widgets, loading, error};
}
