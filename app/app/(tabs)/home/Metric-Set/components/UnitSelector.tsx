import {View, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import ContextMenu from "react-native-context-menu-view";
import {ThemedText} from "@/components/ui/ThemedText";
import {DropdownMetricDefinition, MetricDefinition} from "@/types/formdefinition";
import {useForm} from "@/app/context/FormContext";
import Selector from "@/components/ui/Selector";
import {CoreMetric} from "@/types/coremetric";
import {CoreUnitType} from "@/types/core-unit";

interface UnitSelectorProps {
    coreMetric: CoreMetric;
    updateMetricDef(cmId: string, updates: Partial<MetricDefinition> | Partial<DropdownMetricDefinition>): void

}

const UnitSelector = ({coreMetric, updateMetricDef}: UnitSelectorProps) => {
    const units = coreMetric.unitTypes;
    const {state, dispatch} = useForm();
    const [selectedUnit, setSelectedUnit] = useState<string>(units[0]);


    useEffect(() => {


        const hasCm = state.metricDefMap.has(coreMetric.id);
        if (hasCm) {

            const mdStatusItem = state.metricDefMap.get(coreMetric.id)!;
            setSelectedUnit(mdStatusItem.value.unitType);
        }

    }, [coreMetric]);

    return (
        <>
            <ThemedText labelType='primary' className='py-2 pl-1' type='headline' emphasized >Unit</ThemedText>
            <ContextMenu
                dropdownMenuMode={true}
                actions={units.map((unit) => ({
                    title: unit, // Show unit options
                }))}
                onPress={(e) => {
                    const selected: string = e.nativeEvent.name;
                    if (selected) {
                        setSelectedUnit(selected);
                    }
                    updateMetricDef(coreMetric.id, {unitType: selected as CoreUnitType});

                }}
            >
                <TouchableOpacity>
                    <Selector value={selectedUnit} />
                </TouchableOpacity>
            </ContextMenu>
        </>

    );
};

export default UnitSelector;
