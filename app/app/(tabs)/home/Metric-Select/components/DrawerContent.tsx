import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {TopLevelFilter, filterMap, Interest, BodyPart, Wellness, HealthCategory, Goal} from '@/types/core-metric';
import {spacing} from '@/constants/Spacing';
import {Collapsible} from '@/components/Collapsible';
import CheckCircle from '@/components/ui/CheckCircle';
import {ThemedText} from '@/components/ui/ThemedText';

interface DrawerContentProps {
    toggleFilter: (filter: Interest | BodyPart | Wellness | HealthCategory | Goal) => void;
    isFilterSelected: (filter: Interest | BodyPart | Wellness | HealthCategory | Goal) => boolean;
}

const DrawerContent: React.FC<DrawerContentProps> = ({toggleFilter, isFilterSelected}) => {
    return (
        <>
            {Object.values(TopLevelFilter).map((topLevelFilter, index) => (
                <View className='py-6 px-4' key={index}>
                    <Collapsible title={topLevelFilter} textType="title3">
                        <View className='flex-1'>
                            <ScrollView>
                                {Object.values(filterMap[topLevelFilter]).map((filter) => (
                                    <TouchableOpacity
                                        key={filter}
                                        className='flex flex-row items-center gap-6 py-4'
                                        onPress={() => toggleFilter(filter as Interest | BodyPart | Wellness | HealthCategory | Goal)}
                                    >
                                        <CheckCircle selected={isFilterSelected(filter as Interest | BodyPart | Wellness | HealthCategory | Goal)} />
                                        <ThemedText
                                            labelType='primary'
                                            className='py-4'
                                        >
                                            {filter}
                                        </ThemedText>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </Collapsible>
                </View>
            ))}
        </>
    );
};

export default DrawerContent;

