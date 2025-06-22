import {View, Text, TouchableOpacity} from "react-native";
import React, {useEffect} from "react";
import {ThemedText} from "@/components/ui/ThemedText";
import ThemedView from "@/components/ThemedView";
import {RouteProp, useRoute} from "@react-navigation/native";
import {HomeStackNavigationType, HomeStackParamList} from "./_layout";
import {useNavigation} from "expo-router";
import {useForm} from "@/app/context/FormContext";

export type WidgetPromptRouteProp = RouteProp<HomeStackParamList, "WidgetPrompt">;

const WidgetPrompt = () => {

    const {state, dispatch} = useForm();


    const route = useRoute<WidgetPromptRouteProp>();
    const navigation = useNavigation<HomeStackNavigationType>();

    const next = () => {
        navigation.navigate("Form-Create/FormCreate", {
        });
    }

    useEffect(() => {
        dispatch({type: "SET_SHOWED_WIDGET_PROMPT", payload: true});

        navigation.setOptions({
            headerRight: () => (
                <View
                    className='flex-row items-center justify-between gap-[60]'
                >


                    <TouchableOpacity onPress={next}>
                        <ThemedText type="headline" className=' text-blue-light dark:text-blue-dark'>
                            Next
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);


    // function addWidget() {

    //     const newCoreMetrics = route.params.newCoreMetrics;
    //     const newCoreMetricPacks = route.params.newCoreMetricPacks;

    //     navigation.navigate("Metric-Set/MetricSet", {
    //         newCoreMetrics,
    //         newCoreMetricPacks,
    //         addingWidget: true
    //     });

    // }

    const addWidget = () => {

        navigation.popTo("Metric-Set/MetricSet", {
        })

        // navigation.getParent()?.setParams({addingWidget: true}); // Update parent screen’s params
        // navigation.goBack();
    };


    return (
        <ThemedView className="flex-1 bg-white px-12 pt-16 items-center justify-between p-safe">
            {/* Header */}
            <ThemedText className="px-14 text-center" type="largeTitle" labelType="primary" emphasized>
                Add visuals to your form
            </ThemedText>

            {/* Main Content */}
            <View className="flex-1 items-center justify-center px-12">
                <ThemedText labelType="primary" emphasized type="title3" className="text-center">
                    Add visuals to your form
                </ThemedText>
                <ThemedText labelType="secondary" type="body" className=" text-center mt-3">
                    Visuals like charts and graphs can help you better understand your data.
                    You can add them now or set them up later.
                </ThemedText>
            </View>

            {/* Buttons */}
            <View className="w-full mb-12 px-12 ">
                <TouchableOpacity onPress={addWidget} >
                    <View className="bg-blue-light dark:bg-blue-dark py-4 rounded-xl">
                        <ThemedText type="body" className="text-white text-center text-lg font-semibold">
                            Add Widgets
                        </ThemedText>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={next} >
                    <View className="mt-3 bg-bgSecondary-light dark:bg-bgSecondary-dark  py-4 rounded-lg">
                        <ThemedText type="body" className="text-blue-light dark:text-blue-dark text-center text-lg font-semibold">
                            Set up later
                        </ThemedText>

                    </View>
                </TouchableOpacity>
            </View>
        </ThemedView>
    );
};

export default WidgetPrompt;
