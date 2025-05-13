import React from "react";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons"; // Expo or react-native-vector-icons
import {SFSymbol} from "react-native-sfsymbols";
import {useColors} from "@/hooks/useColors";

const CircleSelect = () => {
    const colors = useColors();
    return (
        <View style={styles.container}>
            {/* Empty Circle */}
            <View style={[styles.circle, {borderColor: colors.systemGrays.systemGray3, }]} />

            {/* Blue Check Button */}
            <TouchableOpacity style={[styles.button, styles.blue]}>
                <SFSymbol weight="semibold" name="checkmark" size={10} color="white" />
            </TouchableOpacity>

            {/* Green Add Button */}
            <TouchableOpacity style={[styles.button, styles.green]}>
                <SFSymbol weight="semibold" name="plus" size={10} color="white" />
            </TouchableOpacity>

            {/* Red Minus Button */}
            <TouchableOpacity style={[styles.button, styles.red]}>
                <SFSymbol weight="semibold" name="minus" size={10} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12, // Spacing between buttons
        padding: 10,
    },
    circle: {
        width: 22,
        height: 22,
        borderRadius: 20,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 22,
        height: 22,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    blue: {
        backgroundColor: "#3478F6",
    },
    green: {
        backgroundColor: "#34C759",
    },
    red: {
        backgroundColor: "#FF3B30",
    },
});

export default CircleSelect;
