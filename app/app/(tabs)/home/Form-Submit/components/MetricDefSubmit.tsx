import {View, Text} from 'react-native'
import React, {useEffect} from 'react'
import {ThemedText} from '@/components/ui/ThemedText'
import ThemedView from '@/components/ThemedView'
import {MetricDefinition, MetricValueType} from '@/types/formdefinition'
import MetricInput from './MetricInput'

interface MetricDefSubmitProps {
    metricDef: MetricDefinition;
    updateSubmissionValue: (metricDefId: string, value: MetricValueType) => void;
}

export default function MetricDefSubmit({
    metricDef,
    updateSubmissionValue
}: MetricDefSubmitProps) {

    const [value, setValue] = React.useState<MetricValueType>('');


    useEffect(() => {

        updateSubmissionValue(metricDef.id, value);

    }, [value])

    return (
        <View className='py-4 flex flex-col flex-1'>

            <View className='mb-4 ml-2'>
                <ThemedText labelType='primary' type='title3' emphasized>
                    {metricDef.metricTitle}
                </ThemedText>

            </View>
            <ThemedView className='flex flex-1 p-2 rounded-xl mb-3' backGroundLevel='bgSecondary'>

                <View
                    className="flex flex-1 flex-col p-3 justify-between "
                >

                    <MetricInput
                        value={value}
                        setValue={setValue}
                        metricDef={metricDef}
                    />
                </View>
            </ThemedView>
        </View>
    )
}