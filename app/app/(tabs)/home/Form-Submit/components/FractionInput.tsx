import React, {useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import ThemedTextInput from "@/components/ui/ThemedTextInput";
import {ThemedText} from "@/components/ui/ThemedText";
import clsx from "clsx";

interface FractionInputProps {
    className?: string;
    onChange: (value: number) => void;
}

const FractionInput = ({className, onChange}: FractionInputProps) => {
    const [numerator, setNumerator] = useState<string>("");
    const [denominator, setDenominator] = useState<string>("");

    useEffect(() => {
        const num = Number(numerator);
        const denom = Number(denominator);

        // Only calculate the fraction if the denominator is not 0 and both values are valid numbers
        if (!isNaN(num) && !isNaN(denom) && denom !== 0) {
            onChange(num / denom);
        } else {
            // Optionally pass a default value or NaN to indicate invalid input
            onChange(NaN);
        }
    }, [numerator, denominator, onChange]);

    const handleNumeratorChange = (value: string) => {
        // Allow only positive integers or empty string
        if (value === "" || (/^\d+$/.test(value) && Number(value) >= 0)) {
            setNumerator(value);
        }
    };

    const handleDenominatorChange = (value: string) => {
        // Allow only positive integers or empty string, but prevent 0
        if (value === "" || (/^\d+$/.test(value) && Number(value) > 0)) {
            setDenominator(value);
        }
    };

    return (
        <View className={clsx(className)}>
            <View style={styles.container}>
                <ThemedTextInput
                    labelType="primary"
                    type="headline"
                    keyboardType="numeric"
                    value={numerator}
                    onChangeText={handleNumeratorChange}
                    placeholder="Numerator"
                // style={styles.input}
                />
                <ThemedText labelType="secondary" type="title1" className="mx-2">
                    /
                </ThemedText>
                <ThemedTextInput
                    labelType="primary"
                    keyboardType="numeric"
                    type="headline"

                    value={denominator}
                    onChangeText={handleDenominatorChange}
                    placeholder="Denominator"
                // style={styles.input}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    // input: {
    //     borderBottomWidth: 1,
    //     borderBottomColor: Colors.light.gray,
    //     padding: 5,
    //     margin: 5,
    //     width: 50,
    //     textAlign: "center",
    // },
});

export default FractionInput;