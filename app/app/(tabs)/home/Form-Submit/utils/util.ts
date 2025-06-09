import {corePackList} from "@/list/core-pack-list";
import {MetricDefinition, MetricPackDefinition, MetricPackSubmission, MetricSubmission, NutritionPackSubmission, Widget} from "@/types/formdefinition";
import {getAllItems, StatusItem} from "@/types/status-item";
import {NutritionPackState, PackState, PackStatesRecord} from "../../../../../types/store-types";
import {initialNutritionState} from "../stores/initial-states";
import {handleError} from "@/utils/util";
import {Timestamp} from "firebase/firestore";
import * as Crypto from "expo-crypto";
import isEqual from "lodash/isEqual";
import {usePackStatesStore} from "../stores/useStore";
import {gatherNutrients} from "./food-util";
import {Food, FoodCombination, Nutrient, UserFood} from "@/types/food";
import {CoreMetricPack, MetricPackType} from "@/types/coremetric-pack";
import {CoreMetric} from "@/types/coremetric";
import {CoreMetricList} from "@/list/coremetric-list";

export function generatePackSubmissions(
    packId2Submissions: Record<string, MetricSubmission[]>,
    metricPacks: MetricPackDefinition[],
    formSubmissionId: string
): (MetricPackSubmission | NutritionPackSubmission)[] {
    let res: (MetricPackSubmission | NutritionPackSubmission)[] = [];
    try {
        const packStates: PackStatesRecord = usePackStatesStore.getState().packStates;

        for (const metricPack of metricPacks) {
            const packId = metricPack.id;
            const packState = packStates[packId];
            if (!packState) continue;

            const packSubmissions = packId2Submissions[packId];
            if (!packSubmissions) {
                console.warn(`No submissions found for pack ID: ${packId}`);
                continue;
            }

            // Check if the pack is a Nutrition pack.
            if (packState.type === MetricPackType.Nutrition) {
                // Cast packState to NutritionPackState.
                // Assuming NutritionPackState has a data.mealTime property.
                const nutritionPackState = packState;
                const nutritionSubmission: NutritionPackSubmission = {
                    id: Crypto.randomUUID(),
                    formSubmissionId: formSubmissionId,
                    metricPackDefinitionId: packId,
                    packType: packState.type,
                    packState: packState,
                    metricSubmissionIds: packSubmissions.map((sub) => sub.id),
                    createdAt: Timestamp.now(),
                    deletedAt: null,
                    mealTime: (nutritionPackState.data as any).mealTime, // Adjust typing as needed
                };
                res.push(nutritionSubmission);
            } else {
                // For other pack types, use the generic MetricPackSubmission.
                const submission: MetricPackSubmission = {
                    id: Crypto.randomUUID(),
                    formSubmissionId: formSubmissionId,
                    metricPackDefinitionId: packId,
                    packType: packState.type,
                    packState: packState,
                    metricSubmissionIds: packSubmissions.map((sub) => sub.id),
                    createdAt: Timestamp.now(),
                    deletedAt: null,
                };
                res.push(submission);
            }
        }
    } catch (error) {
        handleError({
            error,
            fileName: "Form-Submit/utils/util.ts",
            functionName: "generatePackSubmissions",
            msg: "Error generating pack submissions",
        });
    }
    return res;
}


export function convertPackStates2Submissions(packs: MetricPackDefinition[], formSubmissionId: string): Record<string, MetricSubmission[]> {


    if (!packs || packs.length === 0) {
        console.log("No metric packs");
        return {};
    }
    // let res: MetricSubmission[] = [];
    // map from packId to metric submission
    let res: Record<string, MetricSubmission[]> = {}
    try {
        const packStates: PackStatesRecord = usePackStatesStore.getState().packStates;

        for (const [packId, packState] of Object.entries(packStates)) {
            if (!packState) continue;

            switch (packState.type) {
                case MetricPackType.Nutrition:
                    const nutritionSubs: MetricSubmission[] = (handleNutritionPack(packId, packState, packs, formSubmissionId));
                    res[packId] = nutritionSubs;
                    break;
            }
        }
    } catch (error) {
        handleError({
            error,
            fileName: "Form-Submit/utils/util.ts",
            functionName: "convertPackStates2Submissions",
            msg: "Error converting pack states to submissions",
        });
    }
    return res;
}

function handleNutritionPack(
    packId: string,
    packState: NutritionPackState,
    packs: MetricPackDefinition[],
    formSubmissionId: string
): MetricSubmission[] {
    if (isEqual(packState.data, initialNutritionState)) return [];
    if (!packs) throw new Error("Packs is null or undefined");

    const packDef = packs.find((pack) => pack.id === packId);
    if (!packDef) throw new Error(`Pack definition not found for ID: ${packId}`);

    const nutritionState = packState.data;
    const foods: Food[] = getAllItems(nutritionState.foods);
    const userFoods: UserFood[] = getAllItems(nutritionState.userFoods);
    const combos: FoodCombination[] = getAllItems(nutritionState.foodCombinations);

    // Aggregate nutrients from foods, userFoods, and food combinations
    const aggregatedNutrients: Record<string, Nutrient> = gatherNutrients(foods, userFoods, combos);

    // Create submissions from the aggregated nutrients
    const submissions: MetricSubmission[] = [];
    for (const [coreMetricId, nutrient] of Object.entries(aggregatedNutrients)) {
        const metricDefId = packDef.coreMetricId2MetricDefId[coreMetricId];
        if (!metricDefId) {
            console.warn(
                `No metric definition ID found for core metric ID: ${coreMetricId} in pack ID: ${packId}`
            );
            continue;
        }
        submissions.push({
            id: Crypto.randomUUID(),
            formSubmissionId: formSubmissionId,
            value: nutrient.value,
            metricDefinitionId: metricDefId,
            createdAt: Timestamp.now(),
            deletedAt: null,
        });
    }
    return submissions;
}

export function getCoreMetrics(metricDefinitions: MetricDefinition[]): CoreMetric[] {

    if (!metricDefinitions || metricDefinitions.length === 0) {
        return [];
    }
    const coreMetrics = CoreMetricList;
    let foundCms: CoreMetric[] = []

    metricDefinitions.forEach((md) => {

        const metricDefCmId = md.coreMetricId;
        const coreMetric = coreMetrics.find((cm) => cm.id === metricDefCmId);

        if (coreMetric) {
            foundCms.push(coreMetric);
        };
    })

    return foundCms;

}


export function getCoreMetricPacks(metricPackDefs: MetricPackDefinition[]): CoreMetricPack[] {

    if (!metricPackDefs || metricPackDefs.length === 0) {
        return [];
    }

    const coreMetricPacks = corePackList;
    let foundCmps: CoreMetricPack[] = []

    metricPackDefs.forEach((mp) => {

        const metricPackDefCmId = mp.coreMetricPackId;
        const coreMetricPack = coreMetricPacks.find((cp) => cp.id === metricPackDefCmId);

        if (coreMetricPack) {
            foundCmps.push(coreMetricPack);
        };
    })

    return foundCmps;

}



export function generateMaps(
    cms: CoreMetric[],
    cmps: CoreMetricPack[],
    metricDefinitions: MetricDefinition[],
    metricPacks: MetricPackDefinition[],
    widgets: Widget[],
) {

    const coreMetricMap = makeCoreMetricMap(cms);
    const coreMetricPackMap = makeCoreMetricPackMap(cmps);

    const metricDefMap = makeMetricDefMap(cms, metricDefinitions);
    const metricPackDefMap = makeMetricPackDefMap(cmps, metricPacks);
    const widgetMap = makeWidgetMap(widgets);

    return {
        coreMetricMap,
        coreMetricPackMap,
        metricDefMap,
        metricPackDefMap,
        widgetMap
    }

}

function makeWidgetMap(widgets: Widget[]): Map<string, StatusItem<Widget>> {
    let widgetMap = new Map<string, StatusItem<Widget>>();

    widgets.forEach((widget) => {
        const statusItem: StatusItem<Widget> = {
            value: widget,
            status: 'old'
        }
        widgetMap.set(widget.id, statusItem);
    });
    return widgetMap;
}


function makeCoreMetricMap(cms: CoreMetric[]): Map<string, StatusItem<CoreMetric>> {
    let coreMetricMap = new Map<string, StatusItem<CoreMetric>>();

    cms.forEach((cm) => {
        const statusItem: StatusItem<CoreMetric> = {
            value: cm,
            status: 'old'
        }
        coreMetricMap.set(cm.id, statusItem);
    });

    return coreMetricMap;
}

function makeCoreMetricPackMap(cmps: CoreMetricPack[]): Map<string, StatusItem<CoreMetricPack>> {
    let coreMetricPackMap = new Map<string, StatusItem<CoreMetricPack>>();

    cmps.forEach((cmp) => {
        const statusItem: StatusItem<CoreMetricPack> = {
            value: cmp,
            status: 'old'
        }
        coreMetricPackMap.set(cmp.id, statusItem);
    });

    return coreMetricPackMap;
}

function makeMetricDefMap(cms: CoreMetric[], metricDefinitions: MetricDefinition[]): Map<string, StatusItem<MetricDefinition>> {
    let metricDefMap = new Map<string, StatusItem<MetricDefinition>>();

    metricDefinitions.forEach((md) => {
        const coreMetric = cms.find((cm) => cm.id === md.coreMetricId);
        if (coreMetric) {

            const statusItem: StatusItem<MetricDefinition> = {
                value: md,
                status: 'old'
            }
            metricDefMap.set(coreMetric.id, statusItem);
        }
    });

    return metricDefMap;
}



function makeMetricPackDefMap(cmps: CoreMetricPack[], metricPackDefinitions: MetricPackDefinition[]): Map<string, StatusItem<MetricPackDefinition>> {
    let metricPackDefMap = new Map<string, StatusItem<MetricPackDefinition>>();

    metricPackDefinitions.forEach((mpd) => {
        const coreMetricPack = cmps.find((cmp) => cmp.id === mpd.coreMetricPackId);
        if (coreMetricPack) {

            const statusItem: StatusItem<MetricPackDefinition> = {
                value: mpd,
                status: 'old'
            }
            metricPackDefMap.set(coreMetricPack.id, statusItem);
        }
    });

    return metricPackDefMap;
}