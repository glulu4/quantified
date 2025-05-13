import {getMetricDefinitions} from "@/cloudfunctions/getFunctions";
import {FormDefinition, MetricDefinition} from "@/types/formdefinition";
import {handleError} from "@/utils/util";
import {useEffect, useState} from "react";

/**
 * Fetches metric definitions for an array of form definitions.
 * Optionally includes metric definitions from associated metric packs.
 *
 * @template T - A type extending MetricDefinition.
 * @param formDefinitions - Array of form definitions.
 * @param getMetricsFromPacks - Whether to include metric definitions from metric packs.
 * @returns A record mapping form IDs to their respective metric definitions, and a loading state.
 */
export function useMetricDefinitionsFromForms<T extends MetricDefinition>(
    formDefinitions: FormDefinition[],
    getMetricsFromPacks: boolean = false
) {
    const [metricDefinitionsByForm, setMetricDefinitionsByForm] = useState<Record<string, T[]>>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchAll = async () => {
            if (!Array.isArray(formDefinitions) || formDefinitions.length === 0) {
                handleError({
                    msg: "Form definitions are invalid or empty",
                    fileName: "/hooks/useMetricDefsFromForms",
                    functionName: "fetchAll",
                    error: Error("Invalid Input"),
                });
                setLoading(false);
                return;
            }

            const result: Record<string, T[]> = {};

            try {
                for (const form of formDefinitions) {
                    let metricIds = [...(form.metricDefinitionIds || [])];

                    if (getMetricsFromPacks && form.metricPackMetricDefIds) {
                        const packMetricIds = Object.values(form.metricPackMetricDefIds).flat();
                        metricIds = [...new Set([...metricIds, ...packMetricIds])];
                    }

                    if (metricIds.length === 0) {
                        continue; // Skip forms with no metrics
                    }

                    const definitions = (await getMetricDefinitions(metricIds)) as T[];
                    result[form.id] = definitions;
                }

                setMetricDefinitionsByForm(result);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAll();
    }, [formDefinitions, getMetricsFromPacks]);

    return {metricDefinitionsByForm, loading};
}
