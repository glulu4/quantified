import React from "react";
import {createIconSetFromFontello} from "react-native-vector-icons";
import fontelloConfig from "../../assets/iconJsons/fraction-config.json";
import {useFonts} from "expo-font";
import {ThemedText} from "../ui/ThemedText";

interface FractionProps {
    size: number;
    color?: string;
}

const Fraction = ({size, color}: FractionProps) => {
    const [fontsLoaded] = useFonts({
        fraction: require("@/assets/fonts/fraction.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const FractionIcon = createIconSetFromFontello(fontelloConfig, "fraction", "fraction.ttf");

    return (
        <ThemedText
            style={{
                fontSize: size, // Match the size of the icon
                lineHeight: size * 1.2, // Prevent clipping (adjustable)
                paddingVertical: size * 0.1, // Small padding to avoid cropping
                textAlign: "center",
            }}
        >
            <FractionIcon name="component-24" size={size} color={color} />
        </ThemedText>
    );
};

export default Fraction;
