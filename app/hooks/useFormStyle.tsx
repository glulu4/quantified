import {SFSymbol} from "react-native-sfsymbols";
import {remapProps} from "nativewind";
import {FontAwesome6, Fontisto, MaterialCommunityIcons} from "@expo/vector-icons";
import {useThemeColor} from "@/hooks/useThemeColor";
import React from "react";
import {View} from "react-native";

const RemappedSFSymbol = remapProps(SFSymbol, {
    colorClass: "color"
});

export const formColors = [
    {name: "red", color: "rgba(255, 131, 124, 1)"},
    {name: "yellow", color: "rgba(255, 222, 92, 1)"},
    {name: "purple", color: "rgba(203, 148, 232, 1)"},
    {name: "blue", color: "rgba(157, 219, 248, 1)"},
    {name: "pink", color: "rgba(255, 176, 191, 1)"}
];

export type FormColor = typeof formColors[number];

export type FormIcon = {
    name: string;
    icon: JSX.Element;
};

// ✅ Function to get the icons dynamically
export function useFormStyle() {
    const blueColor = useThemeColor({}, "blue");
    const redColor = useThemeColor({}, "red");
    const brownColor = useThemeColor({}, "brown");
    const purpleColor = useThemeColor({}, "purple");
    const mint = useThemeColor({}, "mint");

    const icons = [
        {
            name: "pill",
            icon: (
                <View className="p-2">
                    <RemappedSFSymbol
                        name="pill"
                        size={30}
                        weight="semibold"
                        color={blueColor} // Now correctly using the hook
                    />
                </View>

            )
        },
        {
            name: "heart",
            icon: (

                <View className="p-2">
                    <RemappedSFSymbol
                        name="heart.fill"
                        size={30}
                        weight="semibold"
                        color={redColor}
                    />
                </View>


            )
        },
        {
            name: "lung",
            icon: <FontAwesome6 name="lungs" size={25} color={purpleColor} />
        },
        {
            name: "blood",
            icon: <Fontisto name="blood" size={30} color={redColor} />
        },
        {
            name: "tooth",
            icon: <MaterialCommunityIcons name="tooth" size={30} color={mint} />
        }
    ];



    return {
        icons,
        formColors,

    }
}
