import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {ThemedText} from '@/components/ui/ThemedText'
import {useUserGraphs} from '@/hooks/useUserGraphs';
import CenteredSpinner from '@/components/CenteredSpinner';
import FormCard from '@/components/FormCard';
import {Graph} from '@/types/graph';
import {useNavigation} from 'expo-router';
import {GraphStackNavigationType, OperationTypeGraph} from '../../_layout';
import {useThemeColor} from '@/hooks/useThemeColor';

interface GraphCardsProps {
    uid: string;
}

export default function GraphCards({
    uid,
}: GraphCardsProps) {


    const {graphs, loading, error, topGraphs} = useUserGraphs(uid);
    const navigation = useNavigation<GraphStackNavigationType>();
    const graphCardColor = useThemeColor({}, "secondaryFill");

    const loadSavedGraph = async (graph: Graph) => {

        navigation.navigate("Loading/Loading", {
            operation: OperationTypeGraph.LOAD_GRAPH,
            graph: graph,
            destination: "GraphView/GraphView",
        })

    };
    const handleDeleteGraph: (graph: Graph) => Promise<void> = async (graph: Graph) => {
        navigation.navigate("Loading/Loading", {
            operation: OperationTypeGraph.DELETE_GRAPH,
            graphId: graph.id,
            destination: "Index/Index"
        })
    }
    const renderFeaturedGraphs = () => {

        if (loading) {
            return (
                <CenteredSpinner />
            )
        }

        if (topGraphs.length === 0) {
            return (
                <View style={{justifyContent: "center", alignItems: 'center', margin: 20}}>
                    <ThemedText labelType='primary' type="caption">No graphs available</ThemedText>
                </View>
            )
        }
        return (

            topGraphs.map((graph: Graph, index: number) => (
                <FormCard
                    formStyleSettings={{
                        color: graphCardColor,
                        icon: ""
                    }}
                    key={index}
                    title={graph.graphTitle}
                    handlePress={() => loadSavedGraph(graph)}
                    deleteFunc={() => handleDeleteGraph(graph)}
                    className='py-3'
                />



            ))


        )
    }

    return (
        <View>
            <View className='flex-row justify-between items-end px-4'>
                <ThemedText labelType='primary' type='title3' emphasized>Featured Graphs</ThemedText>
                <TouchableOpacity onPress={() => navigation.navigate("ViewAllModal", {graphs: graphs})}>
                    <ThemedText labelType='primary' type='subhead'>View All</ThemedText>
                </TouchableOpacity>
            </View>

            {renderFeaturedGraphs()}
        </View>
    )
}