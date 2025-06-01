import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {spacing} from '@/constants/Spacing';
import {Collapsible} from '@/components/Collapsible';
import CheckCircle from '@/components/ui/CheckCircle';
import {ThemedText} from '@/components/ui/ThemedText';
import {SubTag, SUBTAGS, TAGS} from '@/types/tags';

interface DrawerContentProps {
    toggleSubTag: (subTag: SubTag) => void;
    isSubTagSelected: (subTag: SubTag) => boolean;
}

const DrawerContent: React.FC<DrawerContentProps> = ({toggleSubTag, isSubTagSelected}) => {
    return (
        <>
            {TAGS.map((topLevelTag, index) => (
                <View className='py-6 px-4' key={index}>
                    <Collapsible title={topLevelTag} textType="title3">
                        <View className='flex-1'>
                            <ScrollView>
                                {(SUBTAGS[topLevelTag]).map((subtag) => (
                                    <TouchableOpacity
                                        key={subtag}
                                        className='flex flex-row items-center gap-6 py-4'
                                        onPress={() => toggleSubTag(subtag)}
                                    >
                                        <CheckCircle selected={isSubTagSelected(subtag)} />
                                        <ThemedText
                                            labelType='primary'
                                            className='py-4'
                                        >
                                            {subtag}
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

