// import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
// import React, {JSXElementConstructor, useEffect, useState} from 'react';
// import {ThemedText} from '@/components/ui/ThemedText';
// import {getFormDefinitions, getMetricDefinitions, getMetricSubmissions} from '@/cloudfunctions/getFunctions';
// import {GraphType, GraphData} from '@/types/graph';
// import {useAuth, useAuthenticatedUser} from '@/app/context/AuthContext';
// import {Collapsible} from '@/components/Collapsible'; // Import your Collapsible component
// import Checkbox from 'expo-checkbox';
// import Button from '@/components/Button';
// import {useNavigation} from 'expo-router';
// import {GraphStackNavigationType, GraphStackParamList} from '../_layout';
// import {CommonActions, RouteProp, useRoute} from '@react-navigation/native';
// import {useGraph} from '@/app/context/GraphContext';
// import {log} from '@/types/logger';
// import Toast, {ErrorToast} from 'react-native-toast-message';
// import {logErrorToSentry} from '@/utils/util';
// import CenteredSpinner from '@/components/CenteredSpinner';
// import {getGraphDataByMetricIds} from '../utils/util';
// import ThemedView from '@/components/ThemedView';
// import {FormDefinition, MetricDefinition} from '@/types/formdefinition';

// type SelectMetricsRouteProp = RouteProp<GraphStackParamList, "SelectMetrics/SelectMetrics">;


// const Item = ({item, onSelect, isSelected, disabled}: {item: MetricDefinition; onSelect: (item: MetricDefinition) => void; isSelected: boolean, disabled: boolean}) => {


//     return (
//         <TouchableOpacity
//             onPress={() => onSelect(item)}
//             style={styles.item}
//         >
//             <View style={styles.itemContent}>
//                 <Checkbox

//                     value={isSelected}
//                     onValueChange={() => onSelect(item)}
//                     color={isSelected ? '#6e3b6e' : undefined}
//                     disabled={disabled}
//                 />
//                 <ThemedText type='subhead' style={styles.itemText}>{(item.metricTitle)}</ThemedText>
//             </View>
//         </TouchableOpacity>
//     );
// };


// const SelectMetrics = () => {
//     const {state, dispatch} = useGraph()
//     const route = useRoute<SelectMetricsRouteProp>();
//     const operation = route.params.operation;
//     const sourceScreen = route.params.sourceScreen;

//     const [formDefinitions, setFormDefinitions] = useState<FormDefinition[]>([]);
//     const [selectedFormDef, setSelectedFormDef] = useState<FormDefinition | null>(null);
//     const [metricDefinitions, setMetricDefinitions] = useState<{[key: string]: MetricDefinition[]}>({});
//     const [loading, setLoading] = useState<boolean>(true);
//     const [loadingMetrics, setLoadingMetrics] = useState<{[key: string]: boolean}>({});
//     const [error, setError] = useState<string | null>(null);
//     const [selectedMetricDefs, setSelectedMetricDefs] = useState<MetricDefinition[]>([]);
//     const [selected2ndDataMetricDefs, setSelected2ndDataMetricDefs] = useState<MetricDefinition[]>([]);

//     const mode = state.mode;
//     const navigation = useNavigation<GraphStackNavigationType>();

//     const user = useAuthenticatedUser();

//     useEffect(() => {
//         fetchFormDefs();
//     }, []);

//     useEffect(() => {

//         if (mode === "editing") {

//             const primaryDataMetricDefs: MetricDefinition[] = state
//                 .graphData.map((data: GraphData) => data.metricDefinition)
//             setSelectedMetricDefs(primaryDataMetricDefs);
//             if (state.secondaryGraphData.length > 0) {
//                 const secondaryDataMetricDefs: MetricDefinition[] = state
//                     .secondaryGraphData.map((data: GraphData) => data.metricDefinition);
//                 setSelected2ndDataMetricDefs(secondaryDataMetricDefs);
//             }
//         }
//     }, [mode])

//     useEffect(() => {
//         if (!loading && formDefinitions.length === 0) {
//             Toast.show({
//                 type: 'error',
//                 text1: 'Error',
//                 text2: 'No form definitions found. Please create a form first.',
//                 position: 'top',
//                 visibilityTime: 3000,
//                 swipeable: true,
//             });

//         }
//     }, [loading, formDefinitions]);


//     const fetchFormDefs = async () => {
//         try {
//             setLoading(true);
//             setError(null);
//             const forms = await getFormDefinitions(user.uid);
//             setFormDefinitions(forms);
//             return forms;
//         } catch (error) {
//             console.log("Error getting form definitions:", error);
//             setError("Error getting form definitions");
//             logErrorToSentry({
//                 error,
//                 functionName: 'fetchFormDefs',
//                 fileName: '/graph/selectmetrics.tsx',
//                 // contextData: { },  
//             })
//         } finally {
//             setLoading(false);
//         }
//     };
//     const renderCheckBox = (item: MetricDefinition, index: number) => {
//         const isSelected = isMetricSelected(item);

//         // Update isDisabled logic
//         const isDisabled =
//             (operation === "add-2nd-dataset" && selectedMetricDefs.some(selectedItem => selectedItem.id === item.id)) ||
//             (operation === "adding-metric" && selected2ndDataMetricDefs.some(selectedItem => selectedItem.id === item.id));

//         return (
//             <Item
//                 key={index}
//                 item={item}
//                 onSelect={handleCheckedMetric}
//                 isSelected={isSelected}
//                 disabled={isDisabled}
//             />
//         );
//     };


//     const isMetricSelected = (item: MetricDefinition) => {
//         return (
//             selectedMetricDefs.some(selectedItem => selectedItem.id === item.id) ||
//             selected2ndDataMetricDefs.some(selectedItem => selectedItem.id === item.id)
//         );
//     };

//     /**
//      * 
//      * @param item takes a metric definition and handles if its checked or not
//      */
//     const handleCheckedMetric = (item: MetricDefinition) => {
//         const updateSelected = (prevSelected: MetricDefinition[]) => {
//             const isItemSelected = prevSelected.some(selectedItem => selectedItem.id === item.id);

//             // If trying to unselect an item, ensure there's at least one primary metric remaining
//             if (mode === "editing" && operation === "adding-metric" && isItemSelected && prevSelected.length === 1) {
//                 // If there's only one metric left, prevent unselection
//                 Toast.show({
//                     type: 'error',
//                     text1: 'Error',
//                     text2: 'At least one primary metric must be selected.',
//                     position: 'top',
//                     visibilityTime: 3000,
//                     swipeable: true,
//                 });
//                 return prevSelected; // Do not remove the last item
//             }

//             // Proceed with adding or removing the item
//             return isItemSelected
//                 ? prevSelected.filter(selectedItem => selectedItem.id !== item.id) // Remove item
//                 : [...prevSelected, item]; // Add item
//         };

//         if (operation === "add-2nd-dataset") {
//             // Allows toggling of secondary metrics in both edit and creation modes
//             setSelected2ndDataMetricDefs(prevSelected => updateSelected(prevSelected));
//         } else {
//             // Allows toggling of primary metrics in both edit and creation modes
//             setSelectedMetricDefs(prevSelectedMetricDefs => updateSelected(prevSelectedMetricDefs));
//         }
//     };




//     /**
//      * 
//      * @param formDef takes a form definition and fetches the metrics
//      * @returns 
//      */
//     const fetchMetricDefinitions = async (formDef: FormDefinition) => {

//         if (metricDefinitions[formDef.id] || loadingMetrics[formDef.id]) {
//             return; // Prevent over-querying
//         }

//         try {
//             setLoadingMetrics((prev) => ({...prev, [formDef.id]: true}));
//             const metricDefinitions = await getMetricDefinitions(formDef.metricDefinitionIds);
//             // log.debug("metricDefinitions: ", JSON.stringify(metricDefinitions, null, 2))
//             if (metricDefinitions.length === 0) {
//                 log.error("metricDefinitions is empty")
//                 return;
//             }
//             setMetricDefinitions((prev) => ({...prev, [formDef.id]: metricDefinitions}));
//         }
//         catch (error) {
//             console.error("Error getting metric definitions:", error);
//             setError("Error getting metric definitions");
//             logErrorToSentry({
//                 error,
//                 functionName: 'fetchMetricDefinitions',
//                 fileName: '/graph/selectmetrics.tsx',
//                 contextData: {formDef},
//             })
//         }
//         finally {
//             setLoadingMetrics((prev) => ({...prev, [formDef.id]: false}));
//         }
//     };

//     const renderMetrics = (formDefId: string) => {
//         if (loadingMetrics[formDefId]) {
//             return <CenteredSpinner />;
//         }

//         const metrics = metricDefinitions[formDefId];
//         if (!metrics || metrics.length === 0) {
//             return <ThemedText>No metrics available</ThemedText>;
//         }

//         return metrics.map((metric: MetricDefinition, index: number) => (
//             renderCheckBox(metric, index)
//         ));
//     };

//     const handleCollapsibleToggle = (formDef: FormDefinition) => {
//         if (selectedFormDef !== formDef) {
//             setSelectedFormDef(formDef);
//             fetchMetricDefinitions(formDef);
//         }
//     };

//     const renderItem = ({item}: {item: FormDefinition}) => {
//         return (

//             <Collapsible
//                 title={item.title}
//                 onToggle={() => handleCollapsibleToggle(item)}
//                 textType='subhead'
//             >
//                 {renderMetrics(item.id)}
//             </Collapsible>

//         );
//     };

//     const returnGraphCreation = async () => {
//         let graphTitle = "";
//         if (selectedMetricDefs.length === 0) {
//             Toast.show({
//                 type: 'error',
//                 text1: 'Error',
//                 text2: 'At least one primary metric must be selected.',
//                 position: 'top',
//                 visibilityTime: 3000,
//                 swipeable: true,
//             });
//             return;
//         }

//         const metricDefids = selectedMetricDefs.map(md => md.id)
//         const graphData: GraphData[] = await getGraphDataByMetricIds(metricDefids, state.graphType)

//         dispatch({type: "SET_GRAPH_TITLE", payload: graphTitle})

//         dispatch({type: 'ADD_METRIC', payload: graphData})

//         console.log("state.graphSettings ", state.graphSettings);

//         navigation.navigate("GraphCreate", {})

//     }

//     const goToGraph2ndDataSet = async () => {

//         // if we deselect a secondary data set
//         if (selected2ndDataMetricDefs.length === 0) {
//             dispatch({type: "SET_SECONDARY_DATA_IDS", payload: []})
//             dispatch({type: "SET_SECONDARY_DATA", payload: []})
//             navigation.navigate("GraphCreate", {})
//         }
//         let metricDefIds: string[] = selected2ndDataMetricDefs.map(md2nd => md2nd.id)
//         const newGraphData: GraphData[] = await getGraphDataByMetricIds(metricDefIds, state.graphType)


//         dispatch({type: "SET_SECONDARY_DATA_IDS", payload: metricDefIds})
//         dispatch({type: "SET_SECONDARY_DATA", payload: newGraphData})

//         navigation.navigate("GraphCreate", {})
//     }

//     const renderButton = () => {

//         switch (operation) {
//             case 'new-graph':
//                 return (
//                     <View style={{margin: 10, paddingBottom: 50}}>
//                         <Button onPress={goToSelectGraph} text='Select Graphs'></Button>
//                     </View>
//                 )

//             case 'adding-metric':
//                 return (
//                     <View style={{margin: 10, paddingBottom: 50}}>
//                         <Button onPress={returnGraphCreation} text='Add Metric'></Button>
//                     </View>
//                 )
//             case "add-2nd-dataset":
//                 return (
//                     <View style={{margin: 10, paddingBottom: 50}}>
//                         <Button onPress={goToGraph2ndDataSet} text='Add Dataset'></Button>
//                     </View>
//                 )

//             default:
//                 break;
//         }


//     }



//     const goToSelectGraph = () => {
//         navigation.navigate("SelectGraphType", {selectedMetricDefs: selectedMetricDefs})
//     }

//     if (loading) {
//         return (
//             <CenteredSpinner />
//         );
//     }

//     return (
//         <ThemedView style={styles.screen}>
//             <ThemedText style={styles.title} type='title2'>Select Form(s)</ThemedText>
//             {formDefinitions.length !== 0 ?

//                 <FlatList
//                     data={formDefinitions}
//                     renderItem={renderItem}
//                     keyExtractor={(item) => item.id}
//                     style={{padding: 30}}
//                     contentContainerStyle={{marginBottom: 150}}
//                 />
//                 :
//                 <ThemedText style={{textAlign: "center"}}>No Form Definitions</ThemedText>
//             }

//             <>
//                 {renderButton()}
//             </>



//             <Toast />
//         </ThemedView>
//     );
// };

// const styles = StyleSheet.create({
//     screen: {
//         display: "flex",
//         flexDirection: 'column',
//         flex: 1,

//     },
//     centered: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         padding: 40
//     },
//     item: {
//         padding: 5,
//         marginHorizontal: 16,
//     },
//     itemContent: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     itemText: {
//         marginLeft: 10,

//     },
// });

// export default SelectMetrics;



import {View, Text} from 'react-native'
import React, {useEffect, useState} from 'react'
import ThemedView from '@/components/ThemedView'
import Search from '@/components/Search'
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {useUserFormDefs} from '@/hooks/useUserFormDefs';
import {useAuthenticatedUser} from '@/app/context/AuthContext';
import FormAndMetricList from './Components/FormAndMetricList';
import {useSelectedMetrics} from './Hooks/useSelectedMetrics';
import {GraphStackNavigationType} from '../_layout';
import {useNavigation} from 'expo-router';
import {TouchableOpacity} from 'react-native';
import {ThemedText} from '@/components/ui/ThemedText';
import {error} from 'console';
import {errorToast} from '@/utils/toastUtils';

export default function SelectMetrics() {


    const [searchText, setSearchText] = React.useState<string>("");
    const controlOptions = ['Forms', 'Metrics'];
    const [segmentedIndex, setSegmentedIndex] = useState(0);
    const user = useAuthenticatedUser();
    const navigation = useNavigation<GraphStackNavigationType>();
    const {toggleMetric, isMetricSelected, selectedMetrics} = useSelectedMetrics();


    function next() {
        if (selectedMetrics.length === 0) {
            errorToast("Please select at least one metric");
            return;
        }



        navigation.navigate("GraphSelect/GraphSelect", {
            selectedMetricDefs: selectedMetrics,
        });
    }
    useEffect(() => {
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
    }, [selectedMetrics])

    return (
        <ThemedView className='flex-1 flex-col' backGroundLevel="bgPrimary">
            <Search
                searchValue={searchText}
                setSearchValue={setSearchText}
            />
            <View className="m-3">
                <SegmentedControl
                    values={controlOptions}
                    selectedIndex={segmentedIndex}
                    onChange={({nativeEvent}) => setSegmentedIndex(nativeEvent.selectedSegmentIndex)}
                />
            </View>

            <View className="flex-1">
                <FormAndMetricList
                    uid={user.uid}
                    segementedControlIndex={segmentedIndex.toString()}
                    searchText={searchText}
                    toggleMetric={toggleMetric}
                    isMetricSelected={isMetricSelected}
                />
            </View>

        </ThemedView>
    )
}