import React from "react";
import {createIconSetFromFontello} from "react-native-vector-icons";
import fontelloConfig from "../../assets/iconJsons/slider-config.json";
import {useFonts} from "expo-font";
import {ThemedText} from "../ui/ThemedText";

interface SliderProps {
    size: number;
    color?: string;
}

const Slider = ({size, color}: SliderProps) => {
    const [fontsLoaded] = useFonts({
        slider: require("@/assets/fonts/slider.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const SliderIcon = createIconSetFromFontello(fontelloConfig, "slider", "slider.ttf");

    return (
        // <ThemedText
        //     style={{
        //         fontSize: size, // Match the size of the icon
        //         lineHeight: size * 1.2, // Prevent clipping (adjustable)
        //         paddingVertical: size * 0.1, // Small padding to avoid cropping
        //     }}
        // >
        <SliderIcon name="slider" size={size} color={color} />
        // </ThemedText>
    );
};

export default Slider;
