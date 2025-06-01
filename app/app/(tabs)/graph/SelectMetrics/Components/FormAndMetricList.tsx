// import {View, Text, FlatList, TouchableOpacity} from 'react-native'
// import React from 'react'
// import {useUserFormDefs} from '@/hooks/useUserFormDefs';
// import {useMetricDefinitionsFromForms} from '@/hooks/useMetricDefsFromForms';
// import {useThemeColor} from '@/hooks/useThemeColor';
// import {MetricDefinition} from '@/types/formdefinition';
// import {List, Row} from 'react-native-ios-list';
// import CheckCircle from '@/components/ui/CheckCircle';
// import {ThemedText} from '@/components/ui/ThemedText';
// import {Collapsible} from '@/components/Collapsible';
// import ThemedView from '@/components/ThemedView';
// import CenteredSpinner from '@/components/CenteredSpinner';

// interface FormAndMetricListProps {
//     uid: string;
//     segementedControlIndex: string;
//     searchText: string;

// }
// export default function FormAndMetricList({
//     uid,
//     segementedControlIndex,
//     searchText,
// }: FormAndMetricListProps) {


//     const {formDefinitions, loading: loadingFormDefinitions} = useUserFormDefs(uid);
//     const {metricDefinitionsByForm, loading: loadingMetricDefs} = useMetricDefinitionsFromForms(formDefinitions, true);

//     const backgroundColor = useThemeColor({}, "bgSecondary");
//     const separatorColor = useThemeColor({}, "systemGray4");

//     if (loadingFormDefinitions || loadingMetricDefs) {
//         return (
//             <View>
//                 <Text>Loading...</Text>
//             </View>
//         )
//     }



//     function renderMetrics(metricDefinitions: MetricDefinition[]) {

//         if (metricDefinitions?.length === 0) {
//             return (
//                 <View className='flex flex-col items-center justify-center w-full h-full'>
//                     <ThemedText labelType='primary' className='text-lg'>No metrics available</ThemedText>
//                 </View>
//             )
//         }

//         if (loadingMetricDefs) {
//             return (
//                 <CenteredSpinner />
//             )
//         }

//         console.log("in here");

//         return (
//             <List style={{borderRadius: 12}} backgroundColor={backgroundColor} dividerColor={separatorColor} sideBar >
//                 <FlatList
//                     data={metricDefinitions}
//                     keyExtractor={(item) => item.id}
//                     renderItem={({item}) => (

//                         <Row
//                             leading={
//                                 <TouchableOpacity
//                                     onPress={() => {
//                                         console.log("item", item);

//                                     }}
//                                 >
//                                     <CheckCircle selected={true} />

//                                 </TouchableOpacity>
//                             }
//                         >

//                             <ThemedText labelType='primary' className='py-3 flex-1 flex-wrap'>
//                                 {item.metricTitle}
//                             </ThemedText>
//                         </Row>
//                     )}
//                 />
//             </List>

//         )

//     }
//     return (
//         <ThemedView className='flex flex-col items-center' backGroundLevel='bgPrimary'>
//             <View className='flex flex-col justify-center w-full px-4 pt-4'>

//                 {segementedControlIndex === "0" ?
//                     (

//                         formDefinitions.map((formDefinition, idx) => (

//                             <Collapsible
//                                 key={idx}
//                                 title={`${formDefinition.title} ${metricDefinitionsByForm[formDefinition.id]?.length > 0 ? `(${metricDefinitionsByForm[formDefinition.id].length})` : ""}`}
//                                 textType='title3'
//                                 onToggle={() => {
//                                     console.log("onToggle");
//                                 }
//                                 }
//                             >
//                                 {renderMetrics(metricDefinitionsByForm[formDefinition.id])}
//                             </Collapsible>
//                         ))



//                     )
//                     :
//                     renderMetrics(Object.values(metricDefinitionsByForm).flat())
//                 }
//             </View>
//         </ThemedView>
//     )
// }

import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useUserFormDefs} from '@/hooks/useUserFormDefs';
import {useMetricDefinitionsFromForms} from '@/hooks/useMetricDefsFromForms';
import {useThemeColor} from '@/hooks/useThemeColor';
import {MetricDefinition} from '@/types/formdefinition';
import {List, Row} from 'react-native-ios-list';
import CheckCircle from '@/components/ui/CheckCircle';
import {ThemedText} from '@/components/ui/ThemedText';
import {Collapsible} from '@/components/Collapsible';
import ThemedView from '@/components/ThemedView';
import CenteredSpinner from '@/components/CenteredSpinner';
import _ from 'lodash';

interface FormAndMetricListProps {
    uid: string;
    segementedControlIndex: string;
    searchText: string;
    toggleMetric: (metric: MetricDefinition) => void;
    isMetricSelected: (metric: MetricDefinition) => boolean;
}

export default function FormAndMetricList({
    uid,
    segementedControlIndex,
    searchText,
    toggleMetric,
    isMetricSelected,
}: FormAndMetricListProps) {
    const {formDefinitions, loading: loadingFormDefinitions} = useUserFormDefs(uid);
    const {metricDefinitionsByForm, loading: loadingMetricDefs} = useMetricDefinitionsFromForms(formDefinitions, true);

    const backgroundColor = useThemeColor({}, "bgSecondary");
    const separatorColor = useThemeColor({}, "systemGray4");

    if (loadingFormDefinitions || loadingMetricDefs) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (formDefinitions.length === 0) {
        return (
            <View className='flex-1 justify-center items-center p-14'>
                <ThemedText labelType='primary'>No forms available</ThemedText>
            </View>
        );
    }

    // Convert search text to lower case for case-insensitive filtering.
    const lowerCaseSearchText = searchText.toLowerCase();

    // Filter form definitions by title if segmented control is "0"
    const filteredFormDefinitions =
        segementedControlIndex === "0"
            ? _.filter(formDefinitions, (formDef) =>
                formDef.title.toLowerCase().includes(lowerCaseSearchText)
            )
            : formDefinitions;

    // Filter metrics by metricTitle when segmented control is not "0"
    const allMetrics = Object.values(metricDefinitionsByForm).flat();
    const filteredMetrics =
        segementedControlIndex !== "0"
            ? _.filter(allMetrics, (metric: MetricDefinition) =>
                metric.metricTitle.toLowerCase().includes(lowerCaseSearchText)
            )
            : [];

    function renderMetrics(metricDefinitions: MetricDefinition[]) {


        if (loadingMetricDefs) {
            return <CenteredSpinner />;
        }


        if (metricDefinitions?.length === 0) {
            return (
                <View className="flex flex-col items-center justify-center w-full h-full">
                    <ThemedText labelType="primary" className="text-lg">
                        No metrics available
                    </ThemedText>
                </View>
            );
        }

        // if (!metricDefinitions || metricDefinitions.length === 0) {
        //     return (
        //         <View className="flex flex-col items-center justify-center w-full h-full">
        //             <ThemedText labelType="primary" className="text-lg">
        //                 No metrics available
        //             </ThemedText>
        //         </View>
        //     );
        // }


        return (
            <List
                style={{borderRadius: 12}}
                backgroundColor={backgroundColor}
                dividerColor={separatorColor}
                sideBar
            >
                <FlatList
                    data={metricDefinitions}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Row
                            leading={
                                <TouchableOpacity
                                    onPress={() => toggleMetric(item)}
                                >
                                    <CheckCircle selected={isMetricSelected(item)} />
                                </TouchableOpacity>
                            }
                        >
                            <ThemedText labelType="primary" className="py-3 flex-1 flex-wrap">
                                {item.metricTitle}
                            </ThemedText>
                        </Row>
                    )}
                />
            </List>
        );
    }

    return (
        <ThemedView className="flex flex-col items-center" backGroundLevel="bgPrimary">
            <View className="flex flex-col justify-center w-full px-4 pt-4">
                {segementedControlIndex === "0" ? (
                    filteredFormDefinitions.map((formDefinition, idx) => (
                        <Collapsible
                            key={idx}
                            title={`${formDefinition.title} ${metricDefinitionsByForm[formDefinition.id]?.length > 0
                                ? `(${metricDefinitionsByForm[formDefinition.id].length})`
                                : ""
                                }`}
                            textType="title3"
                            onToggle={() => {
                                console.log("onToggle");
                            }}
                        >
                            {renderMetrics(metricDefinitionsByForm[formDefinition.id])}
                        </Collapsible>
                    ))
                ) : (
                    renderMetrics(filteredMetrics)
                )}
            </View>
        </ThemedView>
    );
}
