import {View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react'
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import BottomSheetWrap from '@/components/BottomSheetWrap';
import {ThemedText} from '@/components/ui/ThemedText';
import {MetricDefinition, MetricPackDefinition, WidgetType} from '@/types/formdefinition';
import {input2WidgetMap} from '@/constants/input-2-graph-map';
import {renderWidget} from '../util/widget-util';
import Selector from '@/components/ui/Selector';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import {log} from '@/types/logger';
import {spacing} from '@/constants/Spacing';
// import {ScrollView} from 'react-native-gesture-handler';
interface WidgetBottomSheetProps {

    metricDefs: MetricDefinition[];
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string[];
    addWidget: (metricDef: MetricDefinition, widgetType: WidgetType) => void;
    isWidgetSelected(metricDef: MetricDefinition, widgetType: WidgetType): boolean    // handleSelect: (selected: string) => void;
    metricPacks: MetricPackDefinition[];
    pack2MetricDefMap: Map<string, MetricDefinition[]>;
}

export default function WidgetBottomSheet({
    metricDefs,
    bottomSheetRef,
    snapPoints,
    addWidget,
    isWidgetSelected,
    metricPacks,
    pack2MetricDefMap
}: WidgetBottomSheetProps) {


    const [selectedPack, setSelectedPack] = useState<MetricPackDefinition | null>(null);
    const backArrowColor = useThemeColor({}, "labelPrimary")


    function getWidgetsTypes(metricDef: MetricDefinition) {
        // console.log("metricDef", metricDef);
        const inputTypes = metricDef.inputType;
        var allowedWidgets: WidgetType[] = input2WidgetMap[inputTypes];
        // console.log("allowedWidgets", allowedWidgets);

        return allowedWidgets;

    }

    function onAddWidget(metricDef: MetricDefinition, type: WidgetType) {
        addWidget(metricDef, type);
        bottomSheetRef.current?.close();
    }

    const renderMetricDefWidgets = (metricDefs: MetricDefinition[]) => {
        return metricDefs.map((metricDef, index) => {
            return (
                <View key={index} className='flex flex-col flex-1'>
                    <ThemedText
                        className='text-left my-4'
                        type='title2'
                        labelType='primary'
                    >
                        {metricDef.metricTitle}
                    </ThemedText>
                    <View className="flex flex-col flex-1 items-center justify-center">
                        <ScrollView
                            contentContainerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                            }}
                            horizontal
                        >
                            {getWidgetsTypes(metricDef).map((type, idx) => (
                                <View key={idx} className='my-2 mx-10'>
                                    <TouchableOpacity
                                        disabled={isWidgetSelected(metricDef, type)}
                                        onPress={() => onAddWidget(metricDef, type)}
                                    >
                                        {renderWidget(type, "in-bottom-sheet", isWidgetSelected(metricDef, type))}
                                    </TouchableOpacity>

                                </View>

                            ))}
                        </ScrollView>
                    </View>
                </View>
            );
        });
    }


    function renderPack(
        pack: MetricPackDefinition,
        pack2MetricDefMap: Map<string, MetricDefinition[]>,
        chunkSize?: number,
    ) {
        return (
            <View>
                <ThemedText
                    className='text-left my-4'
                    type='title2'
                    labelType='primary'
                    emphasized
                >
                    {pack.title}
                </ThemedText>
                {
                    chunkSize ?
                        renderMetricDefWidgets(pack2MetricDefMap.get(pack.coreMetricPackId)?.slice(0, chunkSize) || [])
                        :
                        renderMetricDefWidgets(pack2MetricDefMap.get(pack.coreMetricPackId) || [])}

            </View>)
    }

    function renderPackWidgets(metricPacks: MetricPackDefinition[], pack2MetricDefMap: Map<string, MetricDefinition[]>) {
        return (
            metricPacks.map((pack, idx1) => (
                <View key={idx1} className='flex flex-col flex-1'>
                    {renderPack(pack, pack2MetricDefMap, 5)}

                    <View className='pt-5'>
                        <TouchableOpacity onPress={() => nextScreen(pack)}>
                            <Selector
                                labelType='primary'
                                value={`View all ${pack.title} widgets`}
                            />
                        </TouchableOpacity>

                    </View>

                </View>

            ))
        )
    }



    const screen1 = (
        <View className='flex-1 flex flex-col'>
            <View className='p-3'>
                <ThemedText labelType='primary' type='title1' emphasized>
                    Select Widget
                </ThemedText>
            </View>
            <View style={{flex: 1}} >
                <ScrollView
                    contentContainerStyle={{
                        padding: spacing.lg,
                        // paddingBottom: 600,

                    }}
                    className='pt-3'
                >

                    {renderMetricDefWidgets(metricDefs)}

                    {renderPackWidgets(metricPacks, pack2MetricDefMap)}

                </ScrollView>
            </View>
        </View>
    )

    const screen2 = (
        <View className="flex-1 flex flex-col p-3">

            <View className='flex justify-center items-center absolute top-0 left-0 w-12 h-12 rounded-full bg-bgTertiary-light dark:bg-bgTertiary-dark'>
                <TouchableOpacity hitSlop={20} onPress={previousScreen}>
                    <SFSymbol size={15} name="chevron.left" weight="semibold" color={backArrowColor} />

                </TouchableOpacity>
            </View>
            <View className="flex-1 flex flex-col mt-14">
                <ThemedText labelType="primary" type="title1" emphasized>
                    {selectedPack ? selectedPack.title : "Pack Widgets"}
                </ThemedText>
                <ScrollView
                    contentContainerStyle={{
                        padding: spacing.lg,
                        // paddingBottom: 600,
                    }}
                    className="pt-3"
                >
                    {selectedPack &&
                        renderMetricDefWidgets(
                            pack2MetricDefMap.get(selectedPack.coreMetricPackId) || []
                        )}
                </ScrollView>
            </View>
        </View>
    );




    const [activeScreenIndex, setActiveScreenIndex] = useState(0);

    const screens = [screen1, screen2];
    function previousScreen() {
        if (activeScreenIndex > 0) {
            setActiveScreenIndex(activeScreenIndex - 1);
        }
        setSelectedPack(null);
    }

    function nextScreen(pack: MetricPackDefinition) {
        if (screens && activeScreenIndex < screens.length - 1) {
            setActiveScreenIndex(activeScreenIndex + 1);
        }
        setSelectedPack(pack);

    }

    return (
        <BottomSheetWrap
            activeScreenIndex={activeScreenIndex}
            // setActiveScreenIndex={setActiveScreenIndex}
            className='p-8'
            bottomSheetRef={bottomSheetRef} snapPoints={snapPoints}
            screens={[screen1, screen2]}>




        </BottomSheetWrap >

    )
}
