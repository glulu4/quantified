import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect} from 'react'
import {MetricPackDefinition, MetricValueType} from '@/types/formdefinition';
import {ThemedText} from '@/components/ui/ThemedText';
import NutritionPack from './packs/NutritionPack';
import {CoreInputType} from '@/types/core-input';

interface PackSubmitProps {
    pack: MetricPackDefinition;
}

export default function PackSubmit({
    pack
}: PackSubmitProps) {


    function renderPackInput(pack: MetricPackDefinition) {
        switch (pack.inputType) {
            case CoreInputType.FOOD_DB:
                return (
                    <NutritionPack pack={pack} />

                )
        }
    }

    return (
        <View className="flex flex-col justify-between flex-1">
            {renderPackInput(pack)}
        </View>
    )

}