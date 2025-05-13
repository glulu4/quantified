import {MetricPackDefinition} from "@/types/formdefinition";



/**
 * Generates a mapping of record pack IDs to their associated metric definition IDs.
 *
 * @param metricPacks - An array of `MetricPackDefinition` objects, each containing
 *                      a mapping of core metric IDs to metric definition IDs.
 * @returns A record where the keys are record pack IDs and the values are arrays
 *          of metric definition IDs.
 */
export function generateRecordPackId2MetricDefs(metricPacks: MetricPackDefinition[]) {
    const recordPackId2MetricDefs: Record<string, string[]> = {};
    metricPacks.forEach((metricPack) => {
        recordPackId2MetricDefs[metricPack.id] = Object.values(metricPack.coreMetricId2MetricDefId);
    });
    return recordPackId2MetricDefs;
}