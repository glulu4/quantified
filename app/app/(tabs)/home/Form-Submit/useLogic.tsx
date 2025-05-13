// import {useEffect, useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {useForm} from '@/app/context/FormContext';
// import {CoreMetricsList, CoreMetric, MetricDefinition, MetricSubmission, MetricValueType, FormDefinition} from '@/types/graph';
// import {Timestamp} from 'firebase/firestore';
// import {errorToast} from '@/utils/toastUtils';
// import * as Crypto from 'expo-crypto';
// import {HomeStackNavigationType, OperationTypeHome} from '../_layout';
// import {log} from '@/types/logger';
// import {DateTimePickerEvent} from '@react-native-community/datetimepicker';


// export const useLogic = (metricDefinitions: MetricDefinition[]) => {



// const [metricSubmissions, setMetricSubmissions] = useState<MetricSubmission[]>([]);
// const {state, dispatch} = useForm();
// const navigation = useNavigation<HomeStackNavigationType>();
// const [date, setDate] = useState<Date>(new Date())


// useEffect(() => {
//     setMetricSubmissions(metricDefinitions.map(metricDef => ({
//         id: Crypto.randomUUID(),
//         value: "Enter Value",
//         metricDefinitionId: metricDef.id,
//         createdAt: Timestamp.now(),
//     })))
// }, [metricDefinitions])




//     const getCoreMetrics = (metricDefinitions: MetricDefinition[]): CoreMetric[] => {
//         let coreMetrics: CoreMetric[] = [];

//         metricDefinitions.forEach((metricDef) => {
//             const coreMetric = CoreMetricsList.find(
//                 (coreMetric) => String(coreMetric.id) === String(metricDef.coreMetricId)
//             );

//             if (coreMetric) {
//                 coreMetrics.push({
//                     ...coreMetric, // Use coreMetric as the base
//                     defaultTitle: metricDef.metricTitle, // Override with specific metric title
//                     defaultMultiSelectOptions: metricDef.dropdownOptions || coreMetric.defaultMultiSelectOptions || [],
//                     inputTypes: [metricDef.inputType, ...coreMetric.inputTypes], // Adding metricDef inputType while preserving original inputTypes
//                     unitTypes: coreMetric.unitTypes.includes(metricDef.unitType)
//                         ? coreMetric.unitTypes
//                         : [metricDef.unitType, ...coreMetric.unitTypes], // Ensure metricDef unitType is included
//                 });
//             }
//         });

//         return coreMetrics;
//     };
//     const goToEditForm = () => {

//         dispatch({type: 'SET_MODE', payload: "edit"})
//         dispatch({type: "SET_OLD_METRICS_DEFS", payload: metricDefinitions})
//         dispatch({type: "SET_FORM_DEF", payload: state.formDefinition})
//         dispatch({type: "SET_OLD_CORE_METRICS", payload: getCoreMetrics(metricDefinitions)})
//         dispatch({type: "SET_TITLE", payload: state.formDefinition.title})


//         navigation.navigate("SetCustomForm/SetCustomForm", {})
//     }

//     const handleMetricChange = (id: string, value: MetricValueType) => {
//         setMetricSubmissions(prevMetricSubmissions => prevMetricSubmissions.map(metricSubmission => {
//             if (metricSubmission.metricDefinitionId === id) {
//                 return {
//                     ...metricSubmission,
//                     value: value,
//                 };
//             }
//             return metricSubmission;
//         }));
//     };

//     const submit = (): void => {

//         let filteredMetricSubmissions = metricSubmissions.filter((submission) => submission.value);

//         filteredMetricSubmissions = filteredMetricSubmissions.map((metricSub: MetricSubmission) => ({
//             ...metricSub,
//             createdAt: Timestamp.fromDate(date),
//         }));

//         if (filteredMetricSubmissions.length === 0) {
//             errorToast("Make a submission")
//             return;
//         }

//         log.info("Submitting with...")
//         log.info()
//         log.info("filteredMetricSubmissions: ", filteredMetricSubmissions)
//         log.info("formDefinition: ", state.formDefinition)

//         navigation.navigate("Loading", {
//             submissionType: OperationTypeHome.FORM_SUBMISSION,
//             metricSubmissions: filteredMetricSubmissions,
//             currentFormDefinition: state.formDefinition,
//         });
//     };

//     const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
//         const currentDate = selectedDate || date;

//         switch (event.type) {
//             case 'set':
//                 setDate(currentDate);
//                 break;
//             case 'dismissed':

//                 setDate(currentDate);
//                 break;
//             default:
//                 break;
//         }


//     };

//     return {
//         goToEditForm,
//         metricSubmissions,
//         submit,
//         onChange,
//         date,
//         handleMetricChange
//     };
// };
// export default () => null;