import {View, Text, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import {ThemedText} from '@/components/ui/ThemedText'
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackNavigationType, HomeStackParamList, OperationTypeHome} from './_layout';
import {useNavigation} from 'expo-router';
import FormCard from '@/components/FormCard';
import {useForm} from '@/app/context/FormContext';
import {ThemedScrollView} from '@/components/ThemedScrollView';
import {NutritionFormDefinition} from '@/types/nutritionTypes';
import ThemedView from '@/components/ThemedView';
import {FormDefinition} from '@/types/formdefinition';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import {ScrollView} from 'react-native-gesture-handler';

type ModalRouteProp = RouteProp<HomeStackParamList, "ViewAllModal">;


const ViewAllModal = () => {


    const route = useRoute<ModalRouteProp>();
    const [forms, setForms] = useState(route.params.formDefinitions);
    const navigation = useNavigation<HomeStackNavigationType>();
    const {state, dispatch} = useForm();
    const noFormIconColor = useThemeColor({}, "labelPrimary");


    const goToFormSubmission = (formDef: FormDefinition) => {
        dispatch({type: "CLEAR_STATE"}) // sets mode to add by default


        navigation.navigate("Form-Submit/FormSubmit", {
            formDefinition: formDef
        })

    }
    const deleteForm = async (formDef: FormDefinition) => {
        navigation.navigate("Loading/Loading", {
            submissionType: OperationTypeHome.FORM_DELETE,
            formDefToDelete: formDef,
        })
    }

    if (forms.length === 0) {
        return (
            <View className='flex-1 flex-col-reverse justify-center gap-10 items-center mt-16'>
                <ThemedText
                    type='title3'
                    labelType='primary'
                >
                    No forms to display
                </ThemedText>

                <SFSymbol
                    name='ecg.text.page'
                    size={40}
                    color={noFormIconColor}
                />
            </View>
        )
    }
    return (
        <ThemedView style={styles.screen}>
            <ScrollView
                // onRefresh={getAllForms}
                showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{paddingBottom: 300}}

            >
                {forms.map((formDef: FormDefinition, index: number) => (

                    <FormCard
                        title={formDef.title}
                        key={index}
                        handlePress={() => goToFormSubmission(formDef)}
                        deleteFunc={() => {
                            navigation.goBack();
                            deleteForm(formDef)
                        }}
                        formStyleSettings={formDef.displaySettings}
                        className='py-3'

                    />
                ))}
            </ScrollView>
        </ThemedView>
    )
}

export default ViewAllModal;

const styles = StyleSheet.create({

    screen: {
        flex: 1, // needed especially if in another div box
        flexDirection: 'column',
    },
});