import React from "react";
import {createIconSetFromFontello} from "react-native-vector-icons";
import fontelloConfig from "../../assets/iconJsons/chartConfig.json";
import {useFonts} from "expo-font";
import {ThemedText} from "../ui/ThemedText";

interface ClipBoardProps {
    size: number;
    color?: string;
}

const ClipBoard = ({size, color}: ClipBoardProps) => {
    const [fontsLoaded] = useFonts({
        chart: require("@/assets/fonts/chart.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const ChartIcon = createIconSetFromFontello(fontelloConfig, "chart", "chart.ttf");

    return (
        // <ThemedText
        //     style={{
        //         fontSize: size, // Match the size of the icon
        //         lineHeight: size * 1.2, // Prevent clipping (adjustable)
        //         paddingVertical: size * 0.1, // Small padding to avoid cropping
        //         textAlign: "center",
        //     }}
        // >
        <ChartIcon name="chart" size={size} color={color} />
        // </ThemedText>
    );
};

export default ClipBoard;
