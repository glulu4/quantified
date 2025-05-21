import {View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import {List, Row} from 'react-native-ios-list'
import {spacing} from '@/constants/Spacing';
import {useThemeColor} from '@/hooks/useThemeColor'
import {corePackList} from '@/list/core-pack-list'
import CheckCircle from '@/components/ui/CheckCircle'
import {SFSymbol} from 'react-native-sfsymbols'
import {ThemedText} from '@/components/ui/ThemedText'
import {CoreMetric} from '@/types/core-metric'
import {remapProps} from 'nativewind';


interface MetricListProps {
    toggleMetric: (metric: any) => void;
    toggleMetricPack: (metricPack: any) => void;
    isMetricSelected: (metric: any) => boolean;
    isMetricPackSelected: (metricPack: any) => boolean;
    segmentedControlIndex: number;
    filteredMetrics: CoreMetric[]
}

remapProps(Row, {
    className: "style",
});


const MetricList = ({toggleMetric, toggleMetricPack, isMetricPackSelected, isMetricSelected, segmentedControlIndex, filteredMetrics}: MetricListProps) => {

    const separatorColor = useThemeColor({}, "systemGray4");
    const backgroundColor = useThemeColor({}, "bgSecondary");
    const [num, setNum] = React.useState(0);

    const nutritionPackColor = useThemeColor({}, "orange")

    console.log("nutritionPackColor", nutritionPackColor);



    const toOpacity = (rgbString: string, alpha: string) =>
        rgbString.replace("rgb", "rgba").replace(")", `, ${alpha})`);

    const renderCoreMetrics = () => (
        <View className=' flex-row flex-grow'>
            <FlatList
                data={filteredMetrics}
                keyExtractor={(item) => item.id}
                // estimatedItemSize={250}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {
                        setNum(num + 1);
                        toggleMetric(item)
                    }}>
                        <Row
                            leading={<CheckCircle selected={isMetricSelected(item)} />}>
                            <ThemedText labelType='primary' style={{paddingVertical: 5}}>
                                {item.defaultTitle}
                            </ThemedText>
                        </Row>
                    </TouchableOpacity>
                )}
            />
        </View>

    );

    // Function to render Metric Pack List
    const renderMetricPacks = () => (


        <View className='py-10 self-start px-10'>
            <ThemedText labelType='primary' type='title3' >
                Coming Soon...
            </ThemedText>
        </View>

        // <FlatList
        //     data={corePackList}
        //     keyExtractor={(item) => item.id}
        //     renderItem={({item}) => (
        //         <TouchableOpacity onPress={() => toggleMetricPack(item)}>
        //             <Row

        //                 style={[styles.metricPackRow, {backgroundColor: toOpacity(nutritionPackColor, "0.5")}]} // Adjust the background color here
        //                 leading={<CheckCircle selected={isMetricPackSelected(item)} />}
        //                 trailing={
        //                     <SFSymbol
        //                         name={item.iconKey}
        //                         weight="semibold"
        //                         scale="large"
        //                         color="black"
        //                         size={20}
        //                         resizeMode="center"
        //                         multicolor={false}
        //                         style={{width: 32, height: 32}}
        //                     />
        //                 }
        //             >
        //                 <View className='flex flex-1 flex-col'>
        //                     <ThemedText labelType='primary' emphasized type='title3'>{item.title}</ThemedText>
        //                     <ThemedText type='subhead' labelType='secondary'>{item.subtitle}</ThemedText>
        //                 </View>
        //             </Row>
        //         </TouchableOpacity>
        //     )}
        // />
    );

    return (
        <View className='flex flex-1 mb-4'>
            <List backgroundColor={backgroundColor} dividerColor={segmentedControlIndex === 0 ? separatorColor : "transparent"} sideBar inset>
                {segmentedControlIndex === 0 ? renderCoreMetrics() : renderMetricPacks()}
            </List>
        </View>
    )
}

export default MetricList;
const styles = StyleSheet.create({

    metricPackRow: {
        // backgroundColor: "#FDD38A", // Light orange background like in your image
        borderRadius: spacing.lg,
        marginVertical: spacing.md,
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.xl,
        marginHorizontal: spacing.md,
        marginBottom: spacing.md,
    },
})


