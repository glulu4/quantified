import {View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import {ThemedText} from '@/components/ui/ThemedText';
import CenteredSpinner from '@/components/CenteredSpinner';
import {FormDefinition} from '@/types/formdefinition';
import FormCard from '@/components/FormCard';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';




interface TopFormsProps {
    topForms: FormDefinition[];
    loading: boolean;
    onPress: (formDef: FormDefinition) => void;
    onDelete: (formDef: FormDefinition) => void;
    error: Error | null

}

const TopForms = ({topForms, loading, onPress, onDelete, error}: TopFormsProps) => {

    const noFormIconColor = useThemeColor({}, "labelPrimary");
    if (error) {
        <View className='flex-1 justify-center items-center p-14'>
            <ThemedText>{error.message}</ThemedText>
        </View>
    }

    if (loading) return <CenteredSpinner />

    if (topForms.length === 0) {
        return (
            <View className='gap-2 flex-col  h-full justify-between items-center mt-16'>



                <SFSymbol
                    name='ecg.text.page'
                    size={40}
                    color={noFormIconColor}
                />

                <ThemedText
                    type='title3'
                    labelType='secondary'
                >
                    No forms to display
                </ThemedText>


            </View>
        )
    }
    return (
        <ScrollView
            contentContainerStyle={{paddingBottom: 10, paddingTop: 10}}
        >

            {topForms.map((formDef: FormDefinition, index: number) => (
                <View className='py-3' key={index}>
                    <FormCard
                        title={formDef.title}
                        key={index}
                        handlePress={() => onPress(formDef)}
                        deleteFunc={() => onDelete(formDef)}
                        formStyleSettings={formDef.displaySettings}

                    />
                </View>

            ))}
        </ScrollView>
    )
}

export default TopForms


