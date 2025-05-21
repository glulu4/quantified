import {useEffect, useMemo, useRef} from 'react';
import {Timestamp} from 'firebase/firestore';
import * as Crypto from 'expo-crypto';
import {CoreMetric, CoreMetricPack, MetricPackType} from '@/types/core-metric';
import {DropdownMetricDefinition, MetricDefinition, MetricPackDefinition} from '@/types/formdefinition';
import {getAllItems, getNewItems, StatusItem} from '@/types/status-item';
import {useForm} from '@/app/context/FormContext';
import {staticNutritionPackMDs} from '@/list/nutrition-pack-defs';


// Packs need to be added in initPack and AddPack



export const useDefinitions = () => {

    const {state, dispatch} = useForm();
    const newCoreMetrics = useMemo(() => getNewItems(state.coreMetricMap), [state.coreMetricMap]);
    const newCoreMetricPacks = useMemo(() => getNewItems(state.coreMetricPackMap), [state.coreMetricPackMap]);

    const metricDefMap = state.metricDefMap;
    const metricPackDefMap = state.metricPackDefMap;

    const allMetricDefs = getAllItems(metricDefMap);
    const allMetricPackDefs = getAllItems(metricPackDefMap);

    // ! ! ! ! ! ! ! ! ! 
    // during form editing, merge with old ones
    const allCoreMetrics = getAllItems(state.coreMetricMap);
    const allCoreMetricPacks = getAllItems(state.coreMetricPackMap);

    function removeMetricPackDef({
        id,
        save,
    }: {
        id: string;
        save: boolean;
    }) {

        // remving from core metric map, need to do this
        if (state.coreMetricPackMap.has(id)) {
            const updatedMap = new Map(state.coreMetricPackMap);
            updatedMap.delete(id);
            dispatch({type: 'SET_CORE_METRIC_PACK_MAP', payload: updatedMap});
        }

        // if its in the map
        if (metricPackDefMap.has(id)) {
            const updatedMap = new Map(metricPackDefMap);


            if (save) {
                const itemToRemove = updatedMap.get(id)!;

                const updatedList = [...state.removedMetricPacks];
                updatedList.push(itemToRemove.value);
                dispatch({type: 'SET_REMOVED_METRIC_PACKS', payload: updatedList});
            }
            updatedMap.delete(id);
            dispatch({type: 'SET_METRIC_PACK_DEF_MAP', payload: updatedMap});
        }


    }

    function removeMetricDef({
        id,
        save
    }: {
        id: string;
        save: boolean;
    }) {


        // removing from core metric map, need to do this
        if (state.coreMetricMap.has(id)) {
            const updatedMap = new Map(state.coreMetricMap);
            updatedMap.delete(id);
            dispatch({type: 'SET_CORE_METRIC_MAP', payload: updatedMap});
        }

        // if its in the map
        if (metricDefMap.has(id)) {

            const updatedMap = new Map(metricDefMap);

            // storing the removed metric def
            if (save) {
                const itemToRemove = updatedMap.get(id)!;
                const updatedList = [...state.removedMetricDefs];

                updatedList.push(itemToRemove.value);
                dispatch({type: "SET_REMOVED_METRIC_DEFS", payload: updatedList});
            }
            updatedMap.delete(id);
            dispatch({type: 'SET_METRIC_DEF_MAP', payload: updatedMap});
        }

    }

    /**
     * Initializes metric definitions and metric pack definitions maps only if they don’t exist yet
     */

    useEffect(() => {
        // not in edit mode, we just need to initialize the maps
        if (state.mode !== "edit" && !state.initializedMaps) {

            initMetricDefMap(newCoreMetrics);
            initMetricPackDefMap(newCoreMetricPacks);
            dispatch({type: "SET_INITIALIZE_MAP", payload: true});
        }
    }, []);



    useEffect(() => {
        // For each core metric, if it's not in the metricDefMap, add it
        allCoreMetrics.forEach((coreMetric) => {
            if (!metricDefMap.has(coreMetric.id)) {

                console.log("Adding new metric def for", coreMetric.id);

                addMetricDefinition(coreMetric);
            }
        });

        // For each core metric pack, if it's not in the metricPackDefMap, add it
        allCoreMetricPacks.forEach((corePack) => {
            if (!metricPackDefMap.has(corePack.id)) {
                addMetricPackDefinition(corePack);
            }
        });
        // We rely on these dependencies so this effect re-runs whenever
        // the list of core metrics/packs or the definitions map changes
    }, [allCoreMetrics, allCoreMetricPacks, metricDefMap, metricPackDefMap]);

    // --- 2) Provide helper functions for adding a single definition or pack
    function addMetricDefinition(coreMetric: CoreMetric) {
        const updatedMap = new Map(metricDefMap); // clone existing map
        const metricDefId = Crypto.randomUUID();
        updatedMap.set(coreMetric.id, {
            value: {
                id: metricDefId,
                formDefinitionId: '',
                coreMetricId: coreMetric.id,
                metricTitle: coreMetric.defaultTitle,
                inputType: coreMetric.inputTypes[0],
                unitType: coreMetric.unitTypes[0],
                createdAt: Timestamp.now(),
                updatedAt: null,
                deletedAt: null,
            },
            status: 'new',
        });
        dispatch({type: 'SET_METRIC_DEF_MAP', payload: updatedMap});
    }

    function addMetricPackDefinition(coreMetricPack: CoreMetricPack) {
        const updatedMap = new Map(metricPackDefMap);
        const metricPackDefId = Crypto.randomUUID();

        // let metricDefinitionIds: string[] = [];
        // For special handling (e.g., nutrition packs)
        if (coreMetricPack.packType === MetricPackType.Nutrition) {
            // Generate IDs for all the metric definitions in the nutrition pack
            staticNutritionPackMDs.forEach((md) => {
                md.id = Crypto.randomUUID();
            });
            // Possibly store them in your context
            dispatch({
                type: 'SET_PACK_ID_2_MD_MAP',
                payload: new Map([[coreMetricPack.id, staticNutritionPackMDs]]),
            });
            // Collect the generated IDs
            // metricDefinitionIds = staticNutritionPackMDs.map((md) => md.id);
        }

        const newMetricPackDef: MetricPackDefinition = createMetricPackDefinition(
            metricPackDefId,
            coreMetricPack,
            staticNutritionPackMDs,
        );

        updatedMap.set(coreMetricPack.id, {
            value: newMetricPackDef,
            status: 'new',
        });
        dispatch({type: 'SET_METRIC_PACK_DEF_MAP', payload: updatedMap});
    }

    /**
     * 
     * @param newCoreMetrics 
     * Initializes the metric definition map with new core metrics
     * Maps CoreMetric.id to MetricDefinition
     */
    function initMetricDefMap(newCoreMetrics: CoreMetric[]) {

        const metricDefMap = new Map<string, StatusItem<MetricDefinition>>();

        newCoreMetrics.forEach((cm) => {
            const metricDefId = Crypto.randomUUID();

            const newMetricDef: MetricDefinition = {
                id: metricDefId,
                formDefinitionId: "",
                coreMetricId: cm.id,
                metricTitle: cm.defaultTitle,
                inputType: cm.inputTypes[0],
                unitType: cm.unitTypes[0],
                createdAt: Timestamp.now(),
                updatedAt: null,
                deletedAt: null,
            }
            metricDefMap.set(cm.id, {
                value: newMetricDef, status: 'new'
            });
        });

        dispatch({type: 'SET_METRIC_DEF_MAP', payload: metricDefMap});
    }


    /**
     * 
     * @param newCoreMetricPacks 
     * Initializes the metric pack definition map with new core metric packs
     * Maps CoreMetricPack.id to MetricPackDefinition
     */
    function initMetricPackDefMap(newCoreMetricPacks: CoreMetricPack[]) {
        const metricPackDefMap = new Map<string, StatusItem<MetricPackDefinition>>();

        newCoreMetricPacks.forEach((cmp) => {

            const metricPackDefId = Crypto.randomUUID();
            // for other packs, set their ids in here
            switch (cmp.packType) {
                case MetricPackType.Nutrition:

                    // Generating Ids for all the metric definitions in the pack
                    staticNutritionPackMDs.map((md: MetricDefinition) => {
                        md.id = Crypto.randomUUID();
                    })
                    dispatch({
                        type: "SET_PACK_ID_2_MD_MAP",
                        payload: new Map([
                            [cmp.id, staticNutritionPackMDs]
                        ])
                    })
                    break;

                default:
                    break;
            }

            const newMetricPackDef: MetricPackDefinition = createMetricPackDefinition(
                metricPackDefId,
                cmp,
                staticNutritionPackMDs
            )
            metricPackDefMap.set(cmp.id, {
                value: newMetricPackDef, status: 'new'
            });
        });

        dispatch({type: 'SET_METRIC_PACK_DEF_MAP', payload: metricPackDefMap});


    }


    function updateMetricDef(
        cmId: string,
        updates: Partial<MetricDefinition> | Partial<DropdownMetricDefinition>
    ) {
        if (metricDefMap.has(cmId)) {
            const currentDef: StatusItem<MetricDefinition> = metricDefMap.get(cmId)!;
            const updatedValue = {...currentDef.value, ...updates};
            const updatedMap = new Map(metricDefMap);
            updatedMap.set(cmId, {...currentDef, value: updatedValue});
            dispatch({type: "SET_METRIC_DEF_MAP", payload: updatedMap});
        }
    }

    function createMetricPackDefinition(
        metricPackDefId: string,
        cmp: CoreMetricPack,
        staticNutritionPackMDs: MetricDefinition[],
    ): MetricPackDefinition {

        const coreMetricId2MetricDefIdMap: Record<string, string> = {};
        staticNutritionPackMDs.forEach((md) => {
            coreMetricId2MetricDefIdMap[md.coreMetricId] = md.id;
        });
        return {
            id: metricPackDefId,
            formDefinitionId: "",
            packType: cmp.packType,
            coreMetricPackId: cmp.id,
            title: cmp.title,
            inputType: cmp.inputTypes[0],
            coreMetricId2MetricDefId: coreMetricId2MetricDefIdMap,
            // metricDefinitionIds: metricDefinitionIds,
            createdAt: Timestamp.now(),
            updatedAt: null,
            deletedAt: null,
        };
    }

    function updateMetricPackDef(cmpId: string, updates: Partial<MetricPackDefinition>) {
        if (metricPackDefMap.has(cmpId)) {
            const currentDef = metricPackDefMap.get(cmpId)!;
            const updatedValue = {...currentDef.value, ...updates};
            const updatedMap = new Map(metricPackDefMap);
            updatedMap.set(cmpId, {...currentDef, value: updatedValue});
            dispatch({type: "SET_METRIC_PACK_DEF_MAP", payload: updatedMap});
        }
    }

    return {
        allMetricDefs,
        allMetricPackDefs,
        allCoreMetrics,
        updateMetricDef,
        allCoreMetricPacks,
        updateMetricPackDef,
        metricDefMap,
        metricPackDefMap,
        removeMetricDef,
        removeMetricPackDef
    };
};


