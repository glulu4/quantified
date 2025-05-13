import {useGraph} from '@/app/context/GraphContext';
import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {useGraphStats} from '../Hooks/useGraphStats';
import {ThemedText} from '@/components/ui/ThemedText';

type StatItemProps = {
    value: string | number;
    label: string;
};


// statItem: {
//     backgroundColor: '#f5f5f7',
//         borderRadius: 12,
//             paddingVertical: 16,
//                 paddingHorizontal: 20,
//                     marginHorizontal: 8,
//                         width: 120,
//                             alignItems: 'center',
//     },
const StatItem = ({value, label, style}: StatItemProps & {style?: object}) => {

    return (
        <View className='rounded-xl py-4 px-5 mx-2 w-[120] bg-bgSecondary-light dark:bg-bgSecondary-dark'>
            <ThemedText emphasized labelType='primary' type="headline" className='mb-2'>{value}</ThemedText>
            <ThemedText emphasized labelType='secondary' type="subhead" className='mb-2'>{label}</ThemedText>
        </View>
    )

};

const StatsDisplay = () => {

    const {state} = useGraph();
    const {
        statsForDisplay,
    } = useGraphStats(
        state.graphType,
        state.graphData,
        state.secondaryGraphData
    );
    return (
        <View className='my-5'>
            <ThemedText emphasized type="title2" labelType='primary' className='text-left mb-5 px-6'>
                Stats
            </ThemedText>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[styles.scrollContent]}
            >
                {statsForDisplay.map((stat, index) => (
                    <StatItem
                        key={index}
                        value={stat.value}
                        label={stat.label}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    scrollContent: {
        paddingHorizontal: 8,
        paddingBottom: 8,
    },
    statItem: {
        backgroundColor: '#f5f5f7',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginHorizontal: 8,
        width: 120,
        alignItems: 'center',
    },

});

export default StatsDisplay;