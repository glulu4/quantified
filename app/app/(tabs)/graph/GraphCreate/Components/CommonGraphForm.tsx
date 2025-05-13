import React, {useState, useEffect, useRef, ReactNode} from 'react';
import {View, TouchableOpacity, ScrollView, StyleSheet, Text, useColorScheme} from 'react-native';
import MyModal from '@/components/MyModal';
import {ThemedText} from '@/components/ui/ThemedText';
import {GraphType} from '@/types/graph';


interface GraphFormProps {
    graphType: GraphType;
    // handleSave: (graph: Graph) => void;
    // handleColorSelect: (color: string) => void;
    // selectedColors: string[];
    renderedGraph: ReactNode;
    // defaultColors: GraphColor[];
    selectedGraphType?: GraphType;
    className?: string;
}

export default function CommonGraphForm({
    renderedGraph,
    className
}: GraphFormProps) {



    return (
        <View className={className}>
            {renderedGraph}
        </View>
    );
}


