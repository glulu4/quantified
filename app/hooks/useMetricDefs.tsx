// import {getMetricDefinitions} from "@/cloudfunctions/getFunctions";
// import {FormDefinition, MetricDefinition} from "@/types/formdefinition";
// import {handleError} from "@/utils/util";
// import {useEffect, useState} from "react";

// /**
//  * 
//  * @param formDefinition - The form definition object containing metric definition IDs.
//  * @returns array of metric definitions and loading state.
//  */
// export function useMetricDefinitions<T extends MetricDefinition>(formDefinition: FormDefinition) {
//     const [metricDefinitions, setMetricDefinitions] = useState<T[]>([]);
//     const [loadingMetricDefs, setLoadingMetricDefs] = useState<boolean>(true);

//     useEffect(() => {
//         const fetchDefinitions = async () => {
//             if (!formDefinition || !formDefinition.metricDefinitionIds || formDefinition.metricDefinitionIds.length === 0) {
//                 handleError({
//                     msg: 'Invalid form definition or metric definitions array is empty',
//                     fileName: "/hooks/useMetricDefs",
//                     functionName: "fetchDefinitions",
//                     error: Error("Invalid Form Definition"),
//                 });
//                 setLoadingMetricDefs(false);
//                 return;
//             }

//             try {
//                 const definitions = (await getMetricDefinitions(formDefinition.metricDefinitionIds)) as T[];
//                 setMetricDefinitions(definitions);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoadingMetricDefs(false);
//             }
//         };

//         fetchDefinitions();
//     }, [formDefinition]);

//     return {metricDefinitions, loadingMetricDefs};
// }



import {getMetricDefinitions} from "@/cloudfunctions/getFunctions";
import {FormDefinition, MetricDefinition} from "@/types/formdefinition";
import {handleError} from "@/utils/util";
import {useEffect, useState} from "react";

/**
 * Fetches metric definitions for a given form definition.
 * Optionally includes metric definitions from metric packs as well.
 *
 * @template T - A type extending MetricDefinition.
 * @param formDefinition - The form definition object containing metricDefinitionIds and metricPackMetricDefIds.
 * @param getMetricsFromPacks - Whether to include metric definitions from associated metric packs.
 * @returns An object with an array of metric definitions and a loading state.
 */
export function useMetricDefinitions<T extends MetricDefinition>(
    formDefinition: FormDefinition,
    getMetricsFromPacks: boolean = false
) {
    const [metricDefinitions, setMetricDefinitions] = useState<T[]>([]);
    const [loadingMetricDefs, setLoadingMetricDefs] = useState<boolean>(true);

    useEffect(() => {
        const fetchDefinitions = async () => {
            if (!formDefinition) {
                handleError({
                    msg: "Form definition is missing",
                    fileName: "/hooks/useMetricDefs",
                    functionName: "fetchDefinitions",
                    error: Error("Invalid Form Definition"),
                });
                setLoadingMetricDefs(false);
                return;
            }

            // Collect metric IDs from the form directly
            let allMetricIds = [...(formDefinition.metricDefinitionIds || [])];

            // Optionally include metrics from packs
            if (getMetricsFromPacks && formDefinition.metricPackMetricDefIds) {
                const packMetricIds = Object.values(formDefinition.metricPackMetricDefIds).flat();
                allMetricIds = [...new Set([...allMetricIds, ...packMetricIds])]; // Remove duplicates
            }

            if (allMetricIds.length === 0) {
                handleError({
                    msg: "No metric IDs found in form definition",
                    fileName: "/hooks/useMetricDefs",
                    functionName: "fetchDefinitions",
                    error: Error("No Metric Definitions"),
                });
                setLoadingMetricDefs(false);
                return;
            }

            try {
                const definitions = (await getMetricDefinitions(allMetricIds)) as T[];
                setMetricDefinitions(definitions);
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingMetricDefs(false);
            }
        };

        fetchDefinitions();
    }, [formDefinition, getMetricsFromPacks]);

    return {metricDefinitions, loadingMetricDefs};
}
