import {View, Text, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import BottomSheetWrap from '@/components/BottomSheetWrap'
import BottomSheet from '@gorhom/bottom-sheet';
import {useThemeColor} from '@/hooks/useThemeColor';
import {FlatList} from 'react-native-gesture-handler';
import {List, Row} from 'react-native-ios-list';
import CheckCircle from '@/components/ui/CheckCircle';
import {ThemedText} from '@/components/ui/ThemedText';
import {GraphColor} from '@/constants/Colors';
import {useGraph} from '@/app/context/GraphContext';
import {GraphType} from '@/types/graph';
import {isABarGraph, isALineGraph} from '../Util/graph-type-util';
import {DropdownMetricDefinition} from '@/types/formdefinition';
import {getNumUniqueSubmissions} from '../../utils/util';


interface ColorBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string[];
    colors: GraphColor[];
    handleColorSelect: (color: GraphColor) => void;
    isColorSelected: (color: GraphColor) => boolean;
    selectedColors: GraphColor[];
}

export default function ColorBottomSheet({
    bottomSheetRef,
    snapPoints,
    colors,
    handleColorSelect,
    isColorSelected,
    selectedColors
}: ColorBottomSheetProps) {
    const backgroundColor = useThemeColor({}, "bgSecondary");
    const separatorColor = useThemeColor({}, "systemGray4");



    const {state} = useGraph();

    let maxNumberOfColors;

    function handleColorPick(item: GraphColor) {

        if (isALineGraph(state.graphType) || isABarGraph(state.graphType)) {
            maxNumberOfColors = state.graphData.length + state.secondaryGraphData.length;
        }
        else {
            maxNumberOfColors = getNumUniqueSubmissions(state.graphData);
            // maxNumberOfColors = (state.graphData[0].metricDefinition as DropdownMetricDefinition).dropdownOptions.length
        }


        const isSelected = isColorSelected(item);

        console.log("isSelected: ", isSelected);

        // if its not selected and we have reached the max number of colors, show an alert
        if (!isSelected && selectedColors.length >= maxNumberOfColors) {
            Alert.alert("Limit Reached", `You can only select up to ${maxNumberOfColors} colors`);
            return;
        }
        handleColorSelect(item);


    }
    return (
        <BottomSheetWrap bottomSheetRef={bottomSheetRef} snapPoints={snapPoints}>
            {/* <Text>ColorBottomSheet</Text> */}


            <List
                style={{borderRadius: 12}}
                backgroundColor={backgroundColor}
                dividerColor={separatorColor}
                inset
            >
                <FlatList
                    data={colors}
                    keyExtractor={(item) => item.colorValue}
                    renderItem={({item}) => (
                        <Row
                            leading={
                                <TouchableOpacity

                                    onPress={() => handleColorPick(item)}

                                >
                                    <CheckCircle selected={isColorSelected(item)} />
                                </TouchableOpacity>
                            }
                        >
                            <View className='flex flex-1 flex-row items-center gap-2 justify-around w-full'>
                                <ThemedText labelType="primary" className="py-3 flex-1 flex-wrap">
                                    {item.colorLabel}
                                </ThemedText>

                                {/* <View className={`h-14 w-14 rounded-full bg-[${item.colorValue}]`} /> */}

                                <View
                                    style={{
                                        width: 22,
                                        height: 22,
                                        borderRadius: 14,
                                        backgroundColor: item.colorValue
                                    }}
                                />
                            </View>



                        </Row>
                    )}
                />
            </List>


        </BottomSheetWrap>
    )
}