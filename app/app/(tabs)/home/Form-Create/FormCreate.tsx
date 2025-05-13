import {TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import ThemedView from "@/components/ThemedView";
import {ThemedText} from "@/components/ui/ThemedText";
import ThemedTextInput from "@/components/ui/ThemedTextInput";
import SelectSlider from "./components/SelectSlider";
import {useFormStyle} from "@/hooks/useFormStyle";
import clsx from "clsx";
import {useNavigation} from "expo-router";
import {HomeStackNavigationType, HomeStackParamList, OperationTypeHome} from "../_layout";
import {RouteProp, useRoute} from "@react-navigation/native";
import * as Crypto from 'expo-crypto';
import {useAuthenticatedUser} from "@/app/context/AuthContext";
import {FormDefinition, MetricDefinition} from "@/types/formdefinition";
import {Timestamp} from 'firebase/firestore';
import {errorToast} from "@/utils/toastUtils";
import {useThemeColor} from "@/hooks/useThemeColor";
import {useForm} from "@/app/context/FormContext";
import {getAllItems, getNewItems, getOldItems} from "@/types/status-item";
import {generateRecordPackId2MetricDefs} from "./util/util";

export type FormCreateRouteProp = RouteProp<HomeStackParamList, "Form-Create/FormCreate">;

export default function FormCreate() {


    const {state} = useForm();
    const [selectedColor, setSelectedColor] = useState(state.formDefinition?.displaySettings?.color || "");
    const [selectedIcon, setSelectedIcon] = useState(state.formDefinition?.displaySettings?.icon || "");
    const [formTitle, setFormTitle] = useState(state.formDefinition?.title || "");

    const {icons, formColors} = useFormStyle();
    const navigation = useNavigation<HomeStackNavigationType>();
    const user = useAuthenticatedUser()
    const defaultFormColor = useThemeColor({}, "primaryFill");

    useEffect(() => {
        navigation.setOptions({
            title: state.mode === "edit" ? "Edit Form" : "Create Form",
            headerRight: () => (
                <View
                    className='flex-row items-center justify-between gap-[60]'
                >
                    <TouchableOpacity onPress={
                        state.mode === "edit" ? updateForm : createForm
                    }>
                        <ThemedText type="headline" className=' text-blue-light dark:text-blue-dark'>
                            {state.mode === "edit" ? "Save" : "Create"}
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation, formTitle, selectedColor, selectedIcon]);


    function getIcon() {
        return icons.find((icon) => icon.name === selectedIcon);
    }

    function updateForm() {

        // set form def ids into metric definitions
        // set form def ids into metric pack definitions
        // set form def ids into widgets

        console.log(state.metricDefMap);


        const formDefId = state.formDefinition.id;

        // collection new items and set the ids, we need to create these
        const newMetricDefinitions = getNewItems(state.metricDefMap).map((md) => ({
            ...md,
            formDefinitionId: formDefId,
        }));

        const newMetricPackDefinitions = getNewItems(state.metricPackDefMap).map((mp) => ({
            ...mp,
            formDefinitionId: formDefId,
        }));

        const newWidgets = getNewItems(state.widgetMap).map((widget) => ({
            ...widget,
            formDefinitionId: formDefId,
        }));

        // get old items, we need to update these



        const oldMetricDefinitions = getOldItems(state.metricDefMap).map((md) => ({
            ...md,
            updatedAt: Timestamp.now(),
        }));
        const oldMetricPackDefinitions = getOldItems(state.metricPackDefMap).map((mp) => ({
            ...mp,
            updatedAt: Timestamp.now(),
        }));
        const oldWidgets = getOldItems(state.widgetMap).map((widget) => ({
            ...widget,
            updatedAt: Timestamp.now(),
        }));


        // combine old and new items
        const combinedMetricDefinitions = [...oldMetricDefinitions, ...newMetricDefinitions];
        const combinedMetricPackDefinitions = [...oldMetricPackDefinitions, ...newMetricPackDefinitions];
        const combinedWidgets = [...oldWidgets, ...newWidgets];

        const updatedForm: FormDefinition = {
            ...state.formDefinition,
            // id: formDefId,
            // uid: user.uid,
            title: formTitle,
            metricDefinitionIds: combinedMetricDefinitions.map((md) => md.id),
            metricPackIds: combinedMetricPackDefinitions.map((mp) => mp.id),
            widgetIds: combinedWidgets.map((widget) => widget.id),
            // submissionCount: 0,
            // lastSubmission: undefined,
            version: state.formDefinition.version + 1,
            displaySettings: {
                color: selectedColor,
                icon: selectedIcon,
            },

            // deletedAt: null,
            // createdAt: state.formDefinition.createdAt,
            updatedAt: Timestamp.now(),
        }

        navigation.navigate("Loading/Loading", {
            submissionType: OperationTypeHome.FORM_UPDATE,

            itemsToUpdate: {
                formDefinition: updatedForm,
                metricDefinitions: oldMetricDefinitions,
                metricPackDefinitions: oldMetricPackDefinitions,
                widgets: oldWidgets,
            },
            itemsToCreate: {

                metricDefinitions: newMetricDefinitions,
                metricPackDefinitions: newMetricPackDefinitions,
                widgets: newWidgets,
            },
            itemsToDelete: {
                metricDefinitions: state.removedMetricDefs,
                metricPackDefinitions: state.removedMetricPacks,
                widgets: state.removedWidgets,
            }
        })



    }

    function createForm() {

        if (!formTitle) {
            errorToast("Form title is required");
            return;
        }

        const formDefId = Crypto.randomUUID();

        console.log("formDefId: ", formDefId);



        const metricDefinitions = getAllItems(state.metricDefMap).map((md) => ({
            ...md,
            formDefinitionId: formDefId,
        }));

        const metricPackDefinitions = getAllItems(state.metricPackDefMap).map((mp) => ({
            ...mp,
            formDefinitionId: formDefId,
        }));

        const widgets = getAllItems(state.widgetMap).map((widget) => ({
            ...widget,
            formDefinitionId: formDefId,
        }));


        const newFormDefinition: FormDefinition = {
            id: formDefId,
            uid: user.uid,
            title: formTitle,
            metricDefinitionIds: metricDefinitions.map((md) => md.id),
            metricPackMetricDefIds: generateRecordPackId2MetricDefs(metricPackDefinitions),
            metricPackIds: metricPackDefinitions.map((mp) => mp.id),
            widgetIds: widgets.map((widget) => widget.id),
            submissionCount: 0,
            lastSubmission: undefined,
            version: 1,
            displaySettings: {
                color: selectedColor,
                icon: selectedIcon,
            },
            createdAt: Timestamp.now(),
            deletedAt: null,

        }


        const packMetricDefs: MetricDefinition[] = Array.from(state.packId2MetricDefMap.values()).flat();

        for (const packMetricDef of packMetricDefs) {
            packMetricDef.formDefinitionId = formDefId;
        }
        /**
         * TO DO
         * Pull metric definition from packID2MetricDefMap and create them
         * maybe append them to the metricDefinitions array
         */

        console.log("Navigating to Loading screen with the following data:");
        console.log("newFormDefinition:", newFormDefinition);
        console.log("metricDefinitions:", metricDefinitions);
        console.log("metricPackDefinitions:", metricPackDefinitions);
        console.log("widgets:", widgets);

        const packMdsPlusMetricDefs = [...metricDefinitions, ...packMetricDefs];

        navigation.navigate("Loading/Loading", {
            submissionType: OperationTypeHome.FORM_DEFINITION_UPLOAD,
            newFormDefinition: newFormDefinition,
            metricDefinitions: packMdsPlusMetricDefs, // metricDefinitions,
            metricPackDefinitions: metricPackDefinitions,
            widgets: widgets,
        })

        // navigate with widgets, metric definitions, metric packs, and form definition
    }


    return (
        <ThemedView className="flex flex-1 flex-col px-1 py-2">
            {/* Header */}
            <View className='px-8 flex flex-col flex-1'>
                <ThemedText
                    labelType='primary'
                    type='headline'
                    emphasized
                    className='text-left py-2'
                >
                    Form Title
                </ThemedText>
                <ThemedView
                    backGroundLevel='bgSecondary'
                    className='px-6 min-h-[70px] flex flex-row items-center justify-between rounded-xl overflow-hidden'

                >
                    <ThemedTextInput
                        className="flex-1"
                        labelType="primary"
                        value={formTitle}
                        onChangeText={setFormTitle}
                        placeholder='Enter name' />
                </ThemedView>

            </View>

            {/* Icon Selection */}
            <SelectSlider
                data={icons}
                title="Select Icon"
                type="icon"
                selectedItem={selectedIcon}
                setSelectedItem={setSelectedIcon}
            />

            {/* Color Selection */}
            <SelectSlider
                data={formColors}
                title="Select Card Color"
                type="color"
                selectedItem={selectedColor}
                setSelectedItem={setSelectedColor}
            />

            {/* Live Preview */}
            <View className="mt-6 flex flex-col w-full">
                <ThemedText
                    labelType="primary"
                    type="headline"
                    emphasized
                    className="pb-2 px-8"
                >
                    Live Preview
                </ThemedText>
                <View
                    style={{backgroundColor: selectedColor || defaultFormColor, width: "90%"}} // Default blue background
                    className={clsx(

                        "self-center",
                        " mx-8 h-[150px] rounded-xl flex flex-row items-center justify-between shadow-md"
                    )}
                >
                    <ThemedText type="title1" className="absolute top-8 left-8" labelType="primary" emphasized>
                        {formTitle || "My form"}
                    </ThemedText>

                    {/* Display Selected Icon */}
                    {selectedIcon ? (
                        <View className="absolute bottom-8 right-8">
                            {getIcon()?.icon}
                        </View>
                    ) : null}
                </View>
            </View>
        </ThemedView>
    );
}
