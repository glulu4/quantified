import React from "react";
import {View, ScrollView, StyleSheet} from "react-native";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import {ThemedText} from "@/components/ui/ThemedText";
import MetricDeleteRow from "./MetricDeleteRow";
import {spacing} from '@/constants/Spacing';
import {CoreMetric, CoreMetricPack} from "@/types/core-metric";
import ClipBoard from "@/components/icons/ClipBoard";
import BottomSheetWrap from "@/components/BottomSheetWrap";
import {useTheme} from "react-native-paper";
import {useThemeColor} from "@/hooks/useThemeColor";
import {useForm} from "@/app/context/FormContext";
import {getAllItems} from "@/types/status-item";

interface MetricBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string[];
    handleDelete: (item: CoreMetric | CoreMetricPack) => void;
}

const MetricBottomSheet: React.FC<MetricBottomSheetProps> = ({
    bottomSheetRef,
    snapPoints,
    handleDelete,
}) => {

    const {state} = useForm()
    const coreMetrics: CoreMetric[] = getAllItems(state.coreMetricMap);
    const coreMetricPacks: CoreMetricPack[] = getAllItems(state.coreMetricPackMap);

    const hasMetrics = coreMetrics.length > 0 || coreMetricPacks.length > 0;
    const iconColor = useThemeColor({}, "labelPrimary");

    return (
        <BottomSheetWrap bottomSheetRef={bottomSheetRef} snapPoints={snapPoints} >

            <View className="flex flex-col flex-1 mx-8">
                <View style={styles.header}>
                    <ThemedText labelType="primary" type="title1" emphasized>
                        Selected Health Metrics
                    </ThemedText>
                </View>

                {hasMetrics ? (
                    <ScrollView style={styles.bottomSheetScrollView}>
                        {coreMetrics.map((metric) => (
                            <MetricDeleteRow
                                item={metric}
                                key={metric.id}
                                onDelete={() => handleDelete(metric)}
                            />
                        ))}

                        {coreMetricPacks.map((pack) => (
                            <MetricDeleteRow
                                item={pack}
                                key={pack.id}
                                onDelete={() => handleDelete(pack)}
                            />
                        ))}
                    </ScrollView>
                ) : (
                    <View style={styles.noMetricsContainer}>
                        <ClipBoard size={50} color={iconColor} />
                        <ThemedText labelType="secondary" className="py-3" type="headline">No metrics selected</ThemedText>
                    </View>
                )}
            </View>




        </BottomSheetWrap>

    );
};

export default MetricBottomSheet;

const styles = StyleSheet.create({
    bottomSheetContent: {
        flex: 1,
        padding: spacing["3xl"],
    },
    bottomSheetScrollView: {
        flex: 1,
        marginTop: spacing.xl,
    },
    header: {
        paddingTop: spacing["3xl"],
        marginBottom: spacing.xl,
        alignItems: "center",
    },
    noMetricsContainer: {
        flexDirection: "column",
        alignItems: "center",

        flex: 1,
        justifyContent: "center",
        paddingBottom: spacing["4xl"],
    },
});
