import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {ThemedText} from '@/components/ui/ThemedText'
import {RouteProp, useRoute} from '@react-navigation/native';
import {GraphStackNavigationType, GraphStackParamList, isALineGraph, OperationTypeGraph} from './_layout';
import {ScrollView} from 'react-native-gesture-handler';
import {Graph} from '@/types/graph';
import {useNavigation} from 'expo-router';
import Tile from '@/components/Tile';
import FormCard from '@/components/FormCard';
import ThemedView from '@/components/ThemedView';
type ModalRouteProp = RouteProp<GraphStackParamList, "ViewAllModal">;


const ViewAllModal = () => {


    const route = useRoute<ModalRouteProp>();
    const graphs = route.params.graphs;
    const navigation = useNavigation<GraphStackNavigationType>();


    const loadSavedGraph = async (graph: Graph) => {

        navigation.navigate("Loading/Loading", {
            operation: OperationTypeGraph.LOAD_GRAPH,
            graph: graph,
            destination: "GraphView/GraphView",
        })

    };
    return (
        <ThemedView className='flex flex-1'>
            <ScrollView
                showsHorizontalScrollIndicator={false}

            // contentContainerStyle={{paddingBottom: 300}}
            >
                {graphs.map((graph: Graph, index: number) => (

                    <FormCard
                        formStyleSettings={{
                            color: "",
                            icon: ""
                        }}
                        className='py-3'
                        title={graph.graphTitle}
                        key={index}
                        handlePress={() => {
                            navigation.goBack(); // closes modal
                            loadSavedGraph(graph)

                        }}

                    />
                ))}
            </ScrollView>
        </ThemedView>
    )
}

export default ViewAllModal;

