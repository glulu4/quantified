import {StyleSheet, TouchableOpacity, useColorScheme, View, ViewStyle} from "react-native";
import {ThemedTextInput} from "../ui/ThemedTextInput";
import {ThemedText} from "../ui/ThemedText";
import DropDown from "../DropDown";
import {CoreInputType, CoreMetric, CoreUnitType} from "@/types/graph";

import {memo, useEffect, useState} from "react";
import {Colors} from "@/constants/Colors";
import {ThemedView} from "../ThemedView";
import {useThemeColor} from "@/hooks/useThemeColor";

type CoreMetricInputProps = {
    item: CoreMetric;
    onMetricChange: (id: string, title: string, inputType: CoreInputType, unitType: CoreUnitType, options?: string[]) => void;
    style?: ViewStyle;
    handleDeleteMetric: (metricId: string) => void
};

const CoreMetricInput = (({item, onMetricChange, style, handleDeleteMetric}: CoreMetricInputProps) => {
    const [title, setTitle] = useState<string>(item.defaultTitle);
    const [inputType, setInputType] = useState<CoreInputType>(item.inputTypes[0]);
    const [unitType, setUnitType] = useState<CoreUnitType>(item.unitTypes[0]);
    const [options, setOptions] = useState<string[]>(item.defaultMultiSelectOptions || []);
    const [selectedOption, setSelectedOption] = useState('');

    const btnBackgrounColor = useThemeColor({}, "card")

    const handleDropDownSelect = (option: string) => {
        console.log("option: ", option);

        setSelectedOption(option);
    };

    const handleAddOption = (newOption: string) => {
        setOptions([...options, newOption]);
    };
    const handleDeleteOption = (optionToDelete: string) => {
        console.log("Deleting option: ", optionToDelete);

        console.log(options);

        const newOps = options.filter((option) => option !== optionToDelete);
        console.log("newOps ", newOps);

        setOptions(newOps);
    };
    function capitalizeFirstLetter(val: string) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    useEffect(() => {
        onMetricChange(String(item.id), title, inputType, unitType, options);
    }, [title, inputType, unitType, options]);



    const renderUnit = () => {

        console.log(inputType === CoreInputType.MULTISELECT);

        if (inputType === CoreInputType.MULTISELECT) {
            return (
                <DropDown
                    // style={{flex: 1, backgroundColor: 'red'}}
                    options={options}
                    onSelect={handleDropDownSelect}
                    onAddOption={handleAddOption}
                    onDeleteOption={handleDeleteOption}
                    add
                />
            )
        }

        else if (item.unitTypes.length === 1) {
            return (
                <ThemedView style={styles.singleItemView}>
                    <View style={[{backgroundColor: btnBackgrounColor}, styles.singleItemView]}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 5}}>
                            <ThemedText type="defaultSemiBold">{capitalizeFirstLetter(item.unitTypes[0])}</ThemedText>

                        </View>
                    </View>
                </ThemedView>

            )
        }
        else {
            return (
                <DropDown

                    options={item.unitTypes}
                    onSelect={(option: string) => setUnitType(option as CoreUnitType)}
                />
            )
        }



    }

    const renderInputTypes = () => {

        if (item.inputTypes.length === 1) {

            return (
                <ThemedView style={styles.singleItemView}>


                    <View style={[{backgroundColor: btnBackgrounColor, }, styles.singleItemView]}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 5}}>
                            <ThemedText type="defaultSemiBold">{capitalizeFirstLetter(item.inputTypes[0])}</ThemedText>

                        </View>
                    </View>
                </ThemedView>

            )
        }
        else {
            return (
                <DropDown

                    options={item.inputTypes}
                    onSelect={(option) => setInputType(option as CoreInputType)}
                />
            )
        }



    }
    function handleDelete(id: string) {
        console.log("Deleting metric");

        handleDeleteMetric(id)
    }
    return (

        <View style={[styles.metricContainer, style]}>
            <View>
                <View style={styles.metricTitleView}>

                    <ThemedText style={styles.label}>Metric Title</ThemedText>
                    <TouchableOpacity style={styles.minusMetricButton} onPress={() => handleDelete(String(item.id))}>
                        <ThemedText type='subtitle-small'>-</ThemedText>
                    </TouchableOpacity>

                </View>
                <ThemedTextInput
                    value={title}
                    placeholder={item.defaultTitle}
                    onChangeText={(text) => setTitle(text)}
                />

                <View>
                    <View style={styles.unitInputViews}>
                        <ThemedText style={styles.label}>Unit</ThemedText>
                        {renderUnit()}
                    </View>
                    <View>
                        <ThemedText style={styles.label}>Input</ThemedText>
                        {renderInputTypes()}

                    </View>



                </View>
            </View>


        </View>


    );
});

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 30,
    },
    formTitleContainer: {
        paddingTop: 30,
    },

    scrollViewContent: {
        flexGrow: 1, // Ensures content inside ScrollView grows
    },
    metricContainer: {
        flex: 1
        // margin: 10
        // marginBottom: 10,
    },
    unitInputViews: {
        paddingVertical: 20
    },

    label: {
        paddingLeft: 5
    },
    metricSectionHeader: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },

    metricTitleView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    addMetricButton: {
        backgroundColor: '#007bff',
        borderRadius: 15, // Half of width/height for a circle
        width: 30,        // Equal width and height
        height: 30,       // Equal width and height
        justifyContent: 'center',  // Center the text inside
        alignItems: 'center',      // Center the text inside
    },
    minusMetricButton: {
        backgroundColor: Colors.warning,
        borderRadius: 10, // Half of width/height for a circle
        width: 20,        // Equal width and height
        height: 20,       // Equal width and height
        justifyContent: 'center',  // Center the text inside
        alignItems: 'center',      // Center the text inside
        margin: 5
    },
    singleItemView: {
        flex: 1,
        borderRadius: 10,
        width: 'auto',
        padding: 15,
        // backgroundColor: 'blue'
    },

});

export default CoreMetricInput;