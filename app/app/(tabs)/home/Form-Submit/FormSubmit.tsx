import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect, useRef} from 'react'
import {FormDefinition, FormSubmission, MetricPackSubmission, MetricSubmission} from '@/types/formdefinition';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackNavigationType, HomeStackParamList, OperationTypeHome} from '../_layout';
import {useFormData} from '@/hooks/useFormData';
import ThemedView from '@/components/ThemedView';
import {ScrollView} from 'react-native-gesture-handler';
import {spacing} from '@/constants/Spacing';
import MetricDefSubmit from './components/MetricDefSubmit';
import CenteredSpinner from '@/components/CenteredSpinner';
import {ThemedText} from '@/components/ui/ThemedText';
import {useSubmissions} from './hooks/useSubmissions';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import {useNavigation} from 'expo-router';
import SubmitHeader from './components/SubmitHeader';
import {useMetaData} from './hooks/useMetaData';
import {convertPackStates2Submissions, generateMaps, generatePackSubmissions, getCoreMetricPacks, getCoreMetrics} from './utils/util';
import {useForm} from '@/app/context/FormContext';
import PackSubmit from './components/PackSubmit';
import {usePackStatesStore} from './stores/useStore';
import {NutritionPackState, NutritionPackItems} from '../../../../types/store-types';
import {getAllItems, getNewItems, getUpdatedItems} from '@/types/status-item';
import * as Crypto from 'expo-crypto';
import {Timestamp} from 'firebase/firestore';
import {useAuthenticatedUser} from '@/app/context/AuthContext';
import {Food, FoodCombination, UserFood} from '@/types/food';
import WidgetDisplay from './components/WidgetDisplay';
import {MetricPackType} from '@/types/coremetric-pack';


type FormSubmitRouteProp = RouteProp<HomeStackParamList, "Form-Submit/FormSubmit">;

/**
 * 
 * @returns 
 */
export default function FormSubmit() {



    const route = useRoute<FormSubmitRouteProp>();
    const user = useAuthenticatedUser();
    const {dispatch} = useForm();
    const navigation = useNavigation<HomeStackNavigationType>();
    const {formDefinition} = route.params as {formDefinition: FormDefinition};
    const editPencilColor = useThemeColor({}, "blue");
    const {metricDefinitions, loading, metricPacks, widgets, error} = useFormData(formDefinition);
    const addPackStates = usePackStatesStore.getState().addPackStates;
    const packState = usePackStatesStore((state) => state); // Replace `packStates` with the actual state slice you need
    const {
        metricSubmissionMap,
        updateSubmissionValue,
    } = useSubmissions(metricDefinitions, metricPacks);

    const {
        submissionDate,
        handleDateChange,
        notes,
        setNotes} = useMetaData();


    function goToEdit() {

        const cms = getCoreMetrics(metricDefinitions);
        const cmps = getCoreMetricPacks(metricPacks);

        const {
            coreMetricMap,
            coreMetricPackMap,
            metricDefMap,
            metricPackDefMap,
            widgetMap

        } = generateMaps(cms, cmps, metricDefinitions, metricPacks, widgets);
        // load widgets and packs into state as old
        // map core metric id -> metric def
        // get core metrics and make map between id and core metric
        // load widgets into state
        // load 



        dispatch({
            type: "PREPARE_EDIT_STATE",
            payload: {
                mode: "edit",
                formDefinition,
                coreMetricMap,
                coreMetricPackMap,
                metricDefMap,
                metricPackDefMap,
                widgetMap,
                // packId2MetricDefMap: new Map<string, MetricDefinition[]>(),
            }
        })

        navigation.navigate("Metric-Set/MetricSet", {});




    }


    /**
     * TO DO 
     * cinfirm logic and put form submission ids into metric submissions
     */

    function handleSubmission() {

        /**
         * notes and remindeers
         * submission ids are in the form submission
         * metric pack submissions are in the form submission
         * the submissions for each metric in pack are stored in the metric pack submission
         * 
         * all the submissions are combined for submission purposes
         */

        // console.log("user: ", user);
        // return

        const formSubmissionId = Crypto.randomUUID();

        const unfilteredSubmissions: MetricSubmission[] = getAllItems(metricSubmissionMap);

        const submissions: MetricSubmission[] = [];
        unfilteredSubmissions.forEach((s) => {
            if (s.value !== null && s.value !== undefined && s.value !== "" && s.value !== "Enter Value") {
                submissions.push({
                    ...s,
                    formSubmissionId: formSubmissionId,
                });
            }
        });


        // converts the pack states to submissions
        // converts all food items in nutrition pack state to submissions
        const packId2Submissions: Record<string, MetricSubmission[]> =
            convertPackStates2Submissions(metricPacks, formSubmissionId);

        console.log("packId2Submissions: ", JSON.stringify(packId2Submissions, null, 2));
        // return;
        const allSubmissions: MetricSubmission[] = submissions.concat(...Object.values(packId2Submissions));



        const metricPackSubmissions: MetricPackSubmission[] =
            generatePackSubmissions(
                packId2Submissions,
                metricPacks,
                formSubmissionId
            );



        const formSubmission: FormSubmission = {
            id: formSubmissionId,
            formDefinitionId: formDefinition.id,
            formTitle: formDefinition.title,
            displaySettings: formDefinition.displaySettings,
            metricSubmissionIds: submissions.map((s) => s.id),
            metricPackSubmissionIds: metricPackSubmissions.map((s) => s.id),
            createdAt: Timestamp.now(),
            deletedAt: null,
            notes: notes,
            submissionDate: Timestamp.fromDate(submissionDate)
        }


        let foods: Food[] = [];
        let userFoods: UserFood[] = [];
        let foodCombinations: FoodCombination[] = [];

        let foods2Edit: Food[] = [];
        let userFoods2Edit: UserFood[] = [];
        let foodCombinations2Edit: FoodCombination[] = [];


        // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
        // TODO make this dynamic so each pack can create its own items
        // this is hard coded for v0 UPDATE IF MORE PACKS ARE ADDED
        // later just loop through the packs

        if (metricPacks.length > 0) {
            // forcing it to not be undefined
            const nutritionPackState: NutritionPackState = usePackStatesStore.getState().getPackState<NutritionPackState>(
                metricPacks[0].id,
                MetricPackType.Nutrition
            )!;



            // Getting new items to create
            foods = getNewItems(nutritionPackState.data.foods);
            userFoods = getNewItems(nutritionPackState.data.userFoods);
            foodCombinations = getNewItems(nutritionPackState.data.foodCombinations);

            // Getting updated items to edit
            foods2Edit = getUpdatedItems(nutritionPackState.data.foods);
            userFoods2Edit = getUpdatedItems(nutritionPackState.data.userFoods);
            foodCombinations2Edit = getUpdatedItems(nutritionPackState.data.foodCombinations);

        }
        // combines edited items and new ones, firetsore handles the rest
        const nutritionPackItems: NutritionPackItems = {
            foods: [...foods, ...foods2Edit],
            userFoods: [...userFoods, ...userFoods2Edit],
            foodCombinations: [...foodCombinations, ...foodCombinations2Edit],
        };

        // 


        const allFilteredSubmissions: MetricSubmission[] = allSubmissions.filter((s) => {
            return s.value !== null && s.value !== undefined && s.value !== "" && s.value !== "Enter Value" && s.value !== "0" && s.value !== 0;
        });



        navigation.navigate("Loading/Loading", {
            submissionType: OperationTypeHome.FORM_SUBMISSION,
            formSubmission,
            metricSubmissions: allFilteredSubmissions,//allSubmissions,
            metricPackSubmissions,
            nutritionPackItems: nutritionPackItems,
            // updatedNutritionPackItems: updatedNutritionPackItems,
            uid: user.uid,
        })

    }

    const existingIds = useRef(new Set<string>());

    useEffect(() => {
        if (!metricPacks || metricPacks.length === 0) return;

        const newPacks = metricPacks.filter(mp => !existingIds.current.has(mp.id));

        if (newPacks.length > 0) {
            console.log("Adding new packs to store: ");

            addPackStates(newPacks.map((mp) => ({id: mp.id, type: mp.packType})));
            newPacks.forEach(mp => existingIds.current.add(mp.id));
        }
    }, [metricPacks]);



    useEffect(() => {
        navigation.setOptions({
            headerTitle: formDefinition.title,
            headerRight: () => (
                <View className='flex-row items-center justify-between gap-[50]' >
                    {/* Chart Icon */}
                    <TouchableOpacity
                        hitSlop={10}
                        onPress={() => {
                            goToEdit();
                            // bottomSheetRef.current?.expand();
                        }}>
                        <SFSymbol
                            name='square.and.pencil'
                            weight='regular'
                            size={20}
                            color={editPencilColor}

                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSubmission}>
                        <ThemedText type="headline" className=' text-blue-light dark:text-blue-dark'>
                            Submit
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            ),
        });

        // add pack map here too
    }, [navigation, metricSubmissionMap, packState, notes, submissionDate]);


    // logSubmission(getNewItems(metricSubmissionMap), formDefinition.title);
    if (loading) {
        return (
            <ThemedView
                backGroundLevel='bgPrimary'
                className='flex-1 flex p-safe'
            >
                <CenteredSpinner />
            </ThemedView>
        )
    }

    if (error) {
        return (
            <ThemedView
                backGroundLevel='bgPrimary'
                className='flex-col flex-1 flex p-safe items-center justify-center'
            >
                <ThemedText emphasized type='headline'>
                    There was an error loading the form data
                </ThemedText>
            </ThemedView>
        )
    }

    return (
        <View

            className='flex flex-col flex-1 bg-bgPrimary-light dark:bg-bgPrimary-dark'
        >

            <ScrollView
                style={{
                    flex: 1,
                    margin: spacing['3xl']
                }}
            >
                <SubmitHeader
                    formTitle={formDefinition.title}
                    notes={notes}
                    setNotes={setNotes}
                    submissionDate={submissionDate}
                    handleDateChange={handleDateChange}
                />

                {metricDefinitions.map((md, idx) => (
                    <MetricDefSubmit
                        updateSubmissionValue={updateSubmissionValue}
                        key={idx}
                        metricDef={md}
                    />
                ))}


                {metricPacks && (
                    metricPacks.map((mp, idx) => (
                        <PackSubmit
                            key={idx}
                            pack={mp}
                        />
                    ))
                )}
                {widgets.map((widget, index) => (
                    <WidgetDisplay
                        key={`widget-${index}-${widget.id || ''}`}
                        widget={widget}

                    />
                ))}
                {/* 
                {widgets && (


                )} */}


            </ScrollView>
        </View>
    )
}