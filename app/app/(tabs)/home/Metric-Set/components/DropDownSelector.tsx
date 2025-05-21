import {View, TextInput, TouchableOpacity, ScrollView} from "react-native";
import React, {useState} from "react";
import {ThemedText} from "@/components/ui/ThemedText";
import {useThemeColor} from "@/hooks/useThemeColor";
import {SFSymbol} from "react-native-sfsymbols";
import {List, Row} from "react-native-ios-list";
import ThemedView from "@/components/ThemedView";
import {remapProps} from "nativewind";
import ThemedTextInput from "@/components/ui/ThemedTextInput";


interface DropDownSelectorProps {
    options: string[];
    onUpdate(index: number, newValue: string): void
    openBottomSheet: () => void;
    selected: string;
    addOption: () => void;
    removeOption(index: number): void;
}

const DropDownSelector = ({
    options,
    onUpdate,
    openBottomSheet,
    selected,
    addOption,
    removeOption

}: DropDownSelectorProps) => {
    const arrowColor = useThemeColor({}, "blue");
    const trashIconColor = useThemeColor({}, "red");

    const rowBackground = useThemeColor({}, "bgTertiary");
    const [inputValue, setInputValue] = useState("");

    const RowTw = remapProps(Row, {
        className: "style",
    });


    const ListTw = remapProps(List, {
        className: "style",
    });



    return (
        <View className="w-full flex flex-col rounded-xl bg-bgTertiary-light dark:bg-bgTertiary-dark">
            {/* Selector */}
            <TouchableOpacity onPress={openBottomSheet} className="min-h-[70px] px-6 flex flex-row items-center justify-between rounded-xl">
                <ThemedText type="body" labelType="secondary">{selected}</ThemedText>
                <SFSymbol name="chevron.right" size={16} weight="semibold" color={arrowColor} />
            </TouchableOpacity>

            {/* List Container */}
            <View className="flex w-full">
                <ScrollView contentContainerClassName="pb-10">
                    <ListTw inset header="Create Options"
                        className="flex-1 "
                    >
                        {options.map((option, index) => (
                            <RowTw key={index}

                                style={{backgroundColor: rowBackground, paddingTop: 5, paddingBottom: 5}}
                            // className="flex-col px-4 border-b border-gray-200 rounded-lg bg-bgPrimary-dark"
                            >
                                <View className="flex-row items-center justify-between w-full ">
                                    <View className="flex-[0.7] flex-row items-center ">
                                        <ThemedText labelType="primary">{index + 1}. </ThemedText>
                                        <ThemedTextInput
                                            labelType="primary"
                                            value={option}
                                            onChangeText={(newText) => onUpdate(index, newText)}
                                            placeholder=" Add Option"
                                            style={{flex: 1}} />
                                    </View>
                                    {/* Icons */}
                                    <View>
                                        <TouchableOpacity
                                            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                                            onPress={() => removeOption(index)}
                                        >
                                            <SFSymbol name="trash" size={20} color={trashIconColor} weight="semibold" />
                                        </TouchableOpacity>
                                    </View>


                                </View>
                            </RowTw>
                        ))}
                    </ListTw>
                </ScrollView>

                <TouchableOpacity
                    onPress={addOption}
                    // className="flex-row items-center justify-center py-2 bg-blue-500 rounded-b-xl"
                    className="p-5"
                >
                    <ThemedText type="body" className="text-blue-light dark:text-blue-dark">Add Option</ThemedText>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default DropDownSelector;
