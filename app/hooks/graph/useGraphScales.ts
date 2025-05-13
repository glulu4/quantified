import {useState, useEffect} from 'react';
import {GraphData, GraphType} from '@/types/graph';
import {DataSet} from 'react-native-gifted-charts';
import {LineGraphState} from '@/reducers/lineGraphReducer';
import {calculateScales, prepareLineGraphData, onlyFraction as checkOnlyFraction} from '@/components/graphs/utils/line-data-transform';

/**
 * Hook to manage the scales and data sets for the graph
 */
export const useGraphScales = (
    graphData: GraphData[],
    secondaryGraphData: GraphData[],
    lineGraphType: GraphType,
    lineState: LineGraphState
) => {
    const [dataSets, setDataSets] = useState<DataSet[]>([]);
    const [maxValue, setMaxValue] = useState<number>();
    const [stepValue, setStepValue] = useState<number>();
    const [numSections, setNumSections] = useState<number>();
    const [secondMaxValue, setSecondMaxValue] = useState<number>();
    const [secondStepValue, setSecondStepValue] = useState<number>();
    const [secondNumSections, setSecondNumSections] = useState<number>();
    const [onlyFraction, setOnlyFraction] = useState<boolean>(false);

    useEffect(() => {
        if (lineState.colors.length > 0) {
            try {

                console.log(graphData.length);

                if (graphData.length === 0) {
                    console.log("Here in useGraphScales: No data available for this widget");
                    return;
                }
                // Check if data is only fraction type
                const isOnlyFraction = checkOnlyFraction(graphData);
                setOnlyFraction(isOnlyFraction);

                // Prepare primary data sets
                const primaryDataSets = prepareLineGraphData(
                    graphData,
                    lineGraphType,
                    lineState.selectedXAxisLabel,
                    lineState.colors
                );

                // Set primary scales if not fraction data
                if (!isOnlyFraction) {
                    const {maxValue, stepValue, numSections} = calculateScales(primaryDataSets);
                    setMaxValue(maxValue);
                    setStepValue(stepValue);
                    setNumSections(numSections);
                }

                // Handle secondary data if exists
                let secondaryDataSets: DataSet[] = [];
                if (secondaryGraphData.length > 0) {
                    secondaryDataSets = prepareLineGraphData(
                        secondaryGraphData,
                        lineGraphType,
                        lineState.selectedXAxisLabel,
                        lineState.colors,
                        true,
                        primaryDataSets.length
                    );

                    // Set secondary scales if not fraction data
                    if (!checkOnlyFraction(secondaryGraphData)) {
                        const {maxValue, stepValue, numSections} = calculateScales(secondaryDataSets);
                        setSecondMaxValue(maxValue);
                        setSecondStepValue(stepValue);
                        setSecondNumSections(numSections);
                    }
                }

                // Combine data sets
                setDataSets([...primaryDataSets, ...secondaryDataSets]);
            } catch (error) {
                console.error('Error preparing data in useGraphScales:', error);
                setDataSets([]);
            }
        }
        else {
            console.log("in else ");

        }
    }, [
        graphData,
        secondaryGraphData,
        lineGraphType,
        lineState.colors,
        lineState.selectedXAxisLabel
    ]);

    return {
        dataSets,
        maxValue,
        stepValue,
        numSections,
        secondMaxValue,
        secondStepValue,
        secondNumSections,
        onlyFraction
    };
};