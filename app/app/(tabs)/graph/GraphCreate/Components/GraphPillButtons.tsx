import {View, ScrollView} from 'react-native';
import React from 'react';
import {GraphType} from '@/types/graph';
import PillButton from '@/components/PillButton';
import clsx from 'clsx';

interface GraphPillButtonsProps {
    graphType: GraphType;
    handleChangeGraphType: (newType: GraphType) => void;
    className?: string;
}

export default function GraphPillButtons({
    graphType,
    handleChangeGraphType,
    className
}: GraphPillButtonsProps) {
    const [pills, setPills] = React.useState<GraphType[]>([]);

    React.useEffect(() => {
        switch (graphType) {
            case GraphType.LineGraph:
            case GraphType.DotLineGraph:
            case GraphType.SmoothLineGraph:
                setPills([
                    GraphType.LineGraph,
                    GraphType.DotLineGraph,
                    GraphType.SmoothLineGraph,
                ]);
                break;
            case GraphType.PieGraph:
            case GraphType.DonutGraph:
                setPills([GraphType.PieGraph, GraphType.DonutGraph]);
                break;
            default:
                setPills([]);
                break;
        }
    }, [graphType]);

    if (graphType === GraphType.BarGraph) return null;

    return (
        <View className={clsx(`flex flex-row`, className)}>
            <ScrollView horizontal className="flex flex-row px-3">
                {pills.map((pillType, index) => (
                    <PillButton
                        key={index}
                        text={pillType}
                        selected={pillType === graphType}
                        onPress={() => handleChangeGraphType(pillType)}
                        className="p-2"

                    />
                ))}
            </ScrollView>
        </View>

    );
}
