import {Stack} from "expo-router";
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useColorScheme} from '@/hooks/useColorScheme';
import {NavigationProp} from "@react-navigation/native";
import FormProvider from "@/app/context/FormContext";
import {TouchableOpacity, View} from "react-native";
import {ThemedText} from "@/components/ui/ThemedText";
import {FormDefinition, MetricDefinition, MetricSubmission, Widget, MetricPackDefinition, MetricPackSubmission, FormSubmission} from "@/types/formdefinition";
import ClipBoard from "@/components/icons/ClipBoard";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NutritionPackItems} from "../../../types/store-types";


export enum OperationTypeHome {
    FORM_UPDATE = 'form-update',
    FORM_DEFINITION_UPLOAD = 'form-definition',
    FORM_SUBMISSION = 'form-submission',
    FORM_DELETE = 'form-delete',
    DELETE_USER = 'delete-user',

}

const HOME_SCREEN = "HomeScreen/HomeScreen"
const METRIC_SELECT = "Metric-Select/MetricSelect"
const METRIC_SET = "Metric-Set/MetricSet"
const FORM_CREATE = "Form-Create/FormCreate"
const LOADING = "Loading/Loading"
const FORM_SUBMIT = "Form-Submit/FormSubmit"
const FOOD_SEARCH = "Food-Search/FoodSearch"



export type HomeStackParamList = {

    "Loading/Loading":
    | {
        submissionType: OperationTypeHome.FORM_DEFINITION_UPLOAD;
        metricDefinitions: MetricDefinition[];
        metricPackDefinitions: MetricPackDefinition[];
        newFormDefinition: FormDefinition;
        widgets: Widget[];
    }

    | {
        submissionType: OperationTypeHome.FORM_UPDATE;
        itemsToUpdate: {
            formDefinition: FormDefinition;
            metricDefinitions: MetricDefinition[];
            metricPackDefinitions: MetricPackDefinition[];
            widgets: Widget[];
        },
        itemsToCreate: {
            metricDefinitions: MetricDefinition[];
            metricPackDefinitions: MetricPackDefinition[];
            widgets: Widget[];
        },
        itemsToDelete: {
            metricDefinitions: MetricDefinition[];
            metricPackDefinitions: MetricPackDefinition[];
            widgets: Widget[];
        }
    }
    | {
        submissionType: OperationTypeHome.FORM_SUBMISSION;

        formSubmission: FormSubmission;
        metricPackSubmissions: MetricPackSubmission[];
        metricSubmissions: MetricSubmission[];
        nutritionPackItems: NutritionPackItems;
        // updatedNutritionPackItems: NutritionPackItems;
        uid: string;
    }

    | {
        submissionType: OperationTypeHome.FORM_DELETE;
        formDefToDelete: FormDefinition;
    };

    "Form-Submit/FormSubmit": {
        formDefinition: FormDefinition;
    },


    // index
    "HomeScreen/HomeScreen": {};

    "Metric-Select/MetricSelect": {
        // removedCoreMetrics?: CoreMetric[];
        // removedCoreMetricPacks?: CoreMetricPack[];
    }
    "Metric-Set/MetricSet": {
        // newCoreMetrics: CoreMetric[];
        // newCoreMetricPacks: CoreMetricPack[];
        // addingWidget: boolean;
    }

    WidgetPrompt: {
        // newCoreMetrics: CoreMetric[];
        // newCoreMetricPacks: CoreMetricPack[];
        // newMetricDefinitions: MetricDefinition[];
        // newMetricPackDefinitions: MetricPackDefinition[];

    };

    "Form-Create/FormCreate": {
        // newMetricDefinitions: MetricDefinition[];
        // newMetricPackDefinitions: MetricPackDefinition[];
    }


    "Food-Search/FoodSearch": {
        packId: string;
    }


    ViewAllModal: {
        formDefinitions: FormDefinition[];
    },

    "Account": {

    },


};

export type HomeStackNavigationType = NativeStackNavigationProp<HomeStackParamList>;

const HomeStackLayout = () => {

    const colorScheme = useColorScheme();

    return (
        <FormProvider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name={HOME_SCREEN} options={{headerShown: false, headerTitle: 'Home'}} />
                    <Stack.Screen name={METRIC_SELECT} options={{
                        headerShown: true,
                        headerTitle: 'Select Metrics',
                        headerRight: () => (
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 60}}>

                                <TouchableOpacity>
                                    <ClipBoard size={22} />

                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <ThemedText type="headline" labelType="primary">Next</ThemedText>
                                </TouchableOpacity>
                            </View>

                        ),
                    }} />
                    <Stack.Screen name={METRIC_SET} options={{headerShown: true, headerTitle: 'Metric Settings'}} />
                    <Stack.Screen name="WidgetPrompt" options={{headerShown: true, headerTitle: 'Create Prompt'}} />
                    <Stack.Screen name={FORM_CREATE} options={{headerShown: true, headerTitle: 'Create Form'}} />

                    <Stack.Screen name={LOADING} options={{headerShown: false, headerTitle: 'Loading'}} />

                    <Stack.Screen name={FORM_SUBMIT} options={{headerShown: true, headerTitle: 'Form Submission'}} />

                    <Stack.Screen name={FOOD_SEARCH} options={{headerShown: true, headerTitle: 'Food Search'}} />

                    <Stack.Screen name="Account" options={{headerShown: false, presentation: 'modal'}} />

                    {/* <Stack.Screen

                        name="Account/Account"
                        options={{
                            presentation: 'modal',
                            headerTitle: 'Account',

                        }}

                    />

                    <Stack.Screen

                        name="Account/EditAccount"
                        options={{
                            presentation: "modal",
                            headerTitle: 'Account',
                            animation: "slide_from_left"

                        }}


                    /> */}

                    <Stack.Screen
                        name="ViewAllModal"
                        options={{
                            presentation: 'modal',
                            title: 'View All',
                        }}

                    />

                </Stack>
                {/* <Toast /> */}
            </ThemeProvider>
        </FormProvider>
    )
}

export default HomeStackLayout;
