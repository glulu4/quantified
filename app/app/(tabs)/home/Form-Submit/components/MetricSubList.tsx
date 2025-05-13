// import {StyleSheet, Text, View} from 'react-native'
// import React from 'react'
// import {CoreUnitType, MetricDefinition, MetricValueType} from '@/types/graph'
// import {ThemedScrollView} from '@/components/ThemedScrollView';
// import {ThemedText} from '@/components/ui/ThemedText';
// import MetricDataInput from '@/components/forms/MetricDataInput';


// interface MetricSubListProps {
//     metricDefinitions: MetricDefinition[];
//     handleMetricChange: (id: string, value: MetricValueType) => void
// }

// const MetricSubList = ({metricDefinitions, handleMetricChange}: MetricSubListProps) => {



//     return (
//         <ThemedScrollView style={{marginHorizontal: 20, paddingTop: 30}}>

//             {metricDefinitions.map((metricDef, index) => (
//                 <View key={index}>


//                     <View style={{marginVertical: 20}}>
//                         <View style={styles.label}>
//                             <ThemedText type='subtitle'>{metricDef.metricTitle}</ThemedText>
//                         </View>
//                         <View style={styles.metricRow}>
//                             <MetricDataInput key={index} item={metricDef} onMetricChange={handleMetricChange} style={{flex: 0.8}} />
//                             {(metricDef.unitType !== CoreUnitType.DATE_RANGE && metricDef.unitType !== CoreUnitType.MULTISELECT) && <ThemedText>{metricDef.unitType}</ThemedText>}
//                         </View>
//                     </View>
//                 </View>
//             ))}

//         </ThemedScrollView>
//     )
// }

// export default MetricSubList

// const styles = StyleSheet.create({
//     metricRow: {
//         flexDirection: 'row',
//         // justifyContent: 'space-between',
//         alignItems: 'flex-end',
//         gap: 2,
//         flex: 1,


//         // alignItems: 'space-between',
//     },
//     label: {
//         paddingLeft: 5,
//     },
// })