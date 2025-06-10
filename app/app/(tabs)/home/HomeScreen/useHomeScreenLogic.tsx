import {useNavigation} from 'expo-router';
import {useForm} from '@/app/context/FormContext';
import {NutritionFormDefinition} from '@/types/nutritionTypes';
import {HomeStackNavigationType, OperationTypeHome} from '../_layout';
import {FormDefinition} from '@/types/formdefinition';

export function useHomeScreenLogic() {
    const {dispatch} = useForm();
    const navigation = useNavigation<HomeStackNavigationType>();

    const goToAddForm = (): void => {
        dispatch({type: 'CLEAR_STATE'});
        navigation.navigate("Metric-Select/MetricSelect", {});
    };

    const goToFormSubmission = (formDef: FormDefinition) => {
        dispatch({type: "CLEAR_STATE"}) // sets mode to add by default


        navigation.navigate("Form-Submit/FormSubmit", {
            formDefinition: formDef
        })
    };

    const deleteForm = async (formDef: FormDefinition) => {
        navigation.navigate('Loading/Loading', {
            submissionType: OperationTypeHome.FORM_DELETE,
            formDefToDelete: formDef,
        });
    };

    const viewAllForms = (allForms: FormDefinition[]) => {
        navigation.navigate("ViewAllModal", {
            formDefinitions: allForms,
        })
    }

    const openAccountScreen = () => {
        navigation.navigate("Account", {});
    }

    return {goToAddForm, goToFormSubmission, deleteForm, viewAllForms, openAccountScreen};
}


export default () => null;