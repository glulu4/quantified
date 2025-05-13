import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {ThemedText} from "./ui/ThemedText";
import {Colors} from "@/constants/Colors";
import {useThemeColor} from "@/hooks/useThemeColor";

interface CounterProps {
    value: number;
    onValueChange: (newValue: number) => void;
}

export default function Counter({value, onValueChange}: CounterProps) {
    const increment = () => onValueChange(value + 1);
    const decrement = () => onValueChange(value > 0 ? value - 1 : 0); // Prevent negative numbers

    const btnColor = useThemeColor({}, "button")
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, {backgroundColor: btnColor}]} onPress={decrement}>
                <ThemedText style={styles.buttonText}>-</ThemedText>
            </TouchableOpacity>

            <ThemedText style={styles.count}>{value}</ThemedText>

            <TouchableOpacity style={[styles.button, {backgroundColor: btnColor}]} onPress={increment}>
                <ThemedText style={styles.buttonText}>+</ThemedText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
        // padding: 20,
    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 1},
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.primary
    },
    count: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 10
    },
});
