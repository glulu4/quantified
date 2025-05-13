// import React, {useState, useRef} from 'react';
// import {View, StyleSheet, TouchableOpacity, Animated, ScrollView, TextInput, ViewStyle} from 'react-native';
// import {ThemedText} from './ThemedText';
// import {Colors} from '@/constants/Colors';
// import {ThemedView} from './ThemedView';
// import {useThemeColor} from '@/hooks/useThemeColor';
// import {Entypo} from '@expo/vector-icons';
// import OutsidePressHandler from 'react-native-outside-press';
// import ThemedTextInput from './ThemedTextInput';
// import {Swipeable} from 'react-native-gesture-handler';
// import TrashButton from './TrashButton';

// type DropDownProps = {
//     options: string[];
//     onSelect?: (option: string) => void; // Optional callback prop for parent
//     style?: ViewStyle;
//     emptyStateMessage?: string;
//     add?: boolean; // New prop to display the additional input box
//     onAddOption?: (newOption: string) => void;
//     onDeleteOption?: (optionToDelete: string) => void;
// };

// const DropDown = (props: DropDownProps) => {
//     const [visible, setVisible] = useState(false);
//     const [selectedOption, setSelectedOption] = useState<string>('Select');
//     const [newOption, setNewOption] = useState<string>(''); // State for the additional input
//     const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0
//     const btnBackgrounColor = useThemeColor({}, "card")
//     const rotationAnimation = useRef(new Animated.Value(0)).current; // Initial opacity is 0
//     const modalBackgroundColor = useThemeColor({}, "card")
//     const arrowColor = useThemeColor({}, "text")


//     const openMenu = () => {
//         setVisible(true);
//         Animated.timing(fadeAnim, {
//             toValue: 1, // Fully visible
//             duration: 300,
//             useNativeDriver: true,
//         }).start();

//         Animated.timing(rotationAnimation, {
//             toValue: 180, // Fully visible
//             duration: 200,
//             useNativeDriver: true,
//         }).start();
//     };

//     const closeMenu = () => {
//         Animated.timing(fadeAnim, {
//             toValue: 0, // Fully hidden
//             duration: 300,
//             useNativeDriver: true,
//         }).start(() => setVisible(false)); // Set visibility to false after fade-out

//         Animated.timing(rotationAnimation, {
//             toValue: 0, // Reset rotation
//             duration: 200,
//             useNativeDriver: true,
//         }).start();
//     };

//     const handleSelectOption = (option: string) => {
//         setSelectedOption(option);
//         closeMenu();
//         if (props.onSelect) {
//             props.onSelect(option);
//         }
//     };

//     const addNewOption = () => {
//         if (newOption) {
//             handleSelectOption(newOption);
//             if (props.onAddOption) {
//                 props.onAddOption(newOption)
//             }
//             setNewOption(''); // Clear input after adding
//         }
//     };

//     const renderArrow = () => (
//         <Animated.View style={{
//             transform: [{
//                 rotate: rotationAnimation.interpolate({
//                     inputRange: [0, 180],
//                     outputRange: ['0deg', '180deg']
//                 })
//             }]
//         }}>
//             <Entypo color={arrowColor} name='chevron-small-down' size={20} />
//         </Animated.View>
//     );
//     const renderRightActions = (item: string) => (
//         <View style={styles.deleteView}>
//             <TrashButton
//                 pressFn={() => {
//                     if (props.onDeleteOption) {
//                         props.onDeleteOption(item)
//                         closeMenu()
//                     }
//                 }}
//             />

//         </View>
//     );

//     const renderEmptyState = () => (
//         <View style={styles.emptyStateContainer}>
//             <ThemedText type="subtitle-small" style={styles.emptyStateText}>
//                 {props.emptyStateMessage || "No options available"}
//             </ThemedText>
//             {props.add && (
//                 <View style={styles.addNewOptionContainer}>
//                     <ThemedTextInput
//                         style={styles.input}
//                         placeholder="Add new option"
//                         value={newOption}
//                         onChangeText={setNewOption}
//                     />
//                     <TouchableOpacity onPress={addNewOption} style={styles.addButton}>
//                         <ThemedText type="subtitle-small" style={{color: Colors.primary}}>
//                             Add
//                         </ThemedText>
//                     </TouchableOpacity>
//                 </View>
//             )}
//         </View>
//     );

//     return (
//         <OutsidePressHandler
//             style={styles.container}
//             onOutsidePress={() => closeMenu()}
//         >
//             <ThemedView style={[styles.button, props.style]}>
//                 <TouchableOpacity onPress={visible ? closeMenu : openMenu} style={[styles.button, {backgroundColor: btnBackgrounColor}]}>
//                     <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 5}}>
//                         <ThemedText type="defaultSemiBold">{selectedOption}</ThemedText>
//                         {renderArrow()}
//                     </View>
//                 </TouchableOpacity>
//             </ThemedView>

//             {(visible && props.options.length > 0) && (
//                 <>
//                     <Animated.View style={[styles.dropdown, {opacity: fadeAnim}, {backgroundColor: modalBackgroundColor}]}>
//                         <ScrollView contentContainerStyle={{borderRadius: 10}}>
//                             {props.options.map((item, index) => (
//                                 <Swipeable renderRightActions={() => (props.onDeleteOption ? renderRightActions(item) : null)} key={index}>
//                                     <TouchableOpacity
//                                         key={item}
//                                         style={styles.optionItem}
//                                         onPress={() => handleSelectOption(item)}
//                                     >
//                                         <ThemedText
//                                             type="subtitle-small"
//                                             style={item === selectedOption ? styles.selectedOption : styles.optionText}
//                                         >
//                                             {item}
//                                         </ThemedText>
//                                     </TouchableOpacity>
//                                 </Swipeable>


//                             ))}
//                             {/* Additional input box for new option if `add` is true */}
//                             {props.add && (
//                                 <View style={styles.addNewOptionContainer}>
//                                     <ThemedTextInput
//                                         style={styles.input}
//                                         placeholder="Add new option"
//                                         value={newOption}
//                                         onChangeText={setNewOption}
//                                     />
//                                     <TouchableOpacity onPress={addNewOption} style={styles.addButton}>
//                                         <ThemedText type="subtitle-small" style={{color: Colors.primary}}>
//                                             Add
//                                         </ThemedText>
//                                     </TouchableOpacity>
//                                 </View>
//                             )}
//                         </ScrollView>
//                     </Animated.View>
//                 </>
//             )}
//             {props.options.length === 0 && renderEmptyState()}
//         </OutsidePressHandler>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         // width: 200,
//         // padding: 10,
//         borderRadius: 10,
//         flex: 1
//     },
//     button: {
//         flex: 1,
//         borderRadius: 10,
//         width: 'auto',
//         padding: 15,
//     },
//     dropdown: {
//         // backgroundColor: '#ffffff',
//         borderRadius: 10,
//         marginTop: 5,
//         padding: 10,
//         shadowColor: '#000',
//         shadowOffset: {width: 0, height: 2},
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         elevation: 5,
//     },
//     optionItem: {
//         paddingVertical: 15,
//         paddingHorizontal: 15,
//     },
//     optionText: {
//         fontSize: 16,
//     },
//     selectedOption: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: Colors.primary,
//     },
//     addNewOptionContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     input: {
//         flex: 1,
//         borderWidth: 1,
//         borderColor: Colors.primary,
//         borderRadius: 5,
//         padding: 8,
//         marginRight: 5,
//     },
//     addButton: {
//         padding: 8,
//     },
//     deleteView: {
//         display: "flex",
//         flexDirection: 'column',
//         justifyContent: "center",
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         backgroundColor: "tomato"
//     },
//     emptyStateContainer: {
//         padding: 15,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     emptyStateText: {
//         color: Colors.primary,
//         textAlign: 'center',
//     },
//     disabledButton: {
//         opacity: 0.5,
//     }
// });

// export default DropDown;

import React, {useState, useRef, useCallback} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    ScrollView,
    TextInput,
    ViewStyle,
    Text,
    Alert,
} from 'react-native';
import {ThemedText} from './ui/ThemedText';
import {Colors} from '@/constants/Colors';
import {useThemeColor} from '@/hooks/useThemeColor';
import {Entypo} from '@expo/vector-icons';
import OutsidePressHandler from 'react-native-outside-press';

type DropDownProps = {
    options: string[];
    onSelect?: (option: string) => void;
    style?: ViewStyle;
    emptyStateMessage?: string;
    add?: boolean;
    onAddOption?: (newOption: string) => void;
    onDeleteOption?: (optionToDelete: string) => void;
};

const DropDown = React.memo((props: DropDownProps) => {
    const [visible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>('Select');
    const [newOption, setNewOption] = useState<string>('');
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const rotationAnimation = useRef(new Animated.Value(0)).current;
    const btnBackgroundColor = useThemeColor({}, 'card');
    const arrowColor = useThemeColor({}, 'text');

    const openMenu = useCallback(() => {
        setVisible(true);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
        Animated.timing(rotationAnimation, {
            toValue: 180,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim, rotationAnimation]);

    const closeMenu = useCallback(() => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setVisible(false));
        Animated.timing(rotationAnimation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim, rotationAnimation]);

    const handleSelectOption = useCallback(
        (option: string) => {
            setSelectedOption(option);
            closeMenu();
            props.onSelect?.(option);
        },
        [closeMenu, props]
    );

    const addNewOption = () => {
        if (newOption.trim() === '') {
            Alert.alert('Invalid Input', 'Option cannot be empty.');
            return;
        }
        if (props.options.includes(newOption)) {
            Alert.alert('Duplicate Option', 'This option already exists.');
            return;
        }
        props.onAddOption?.(newOption);
        setNewOption('');
    };

    const renderArrow = useCallback(
        () => (
            <Animated.View
                style={{
                    transform: [
                        {
                            rotate: rotationAnimation.interpolate({
                                inputRange: [0, 180],
                                outputRange: ['0deg', '180deg'],
                            }),
                        },
                    ],
                }}
            >
                <Entypo color={arrowColor} name="chevron-small-down" size={20} />
            </Animated.View>
        ),
        [arrowColor, rotationAnimation]
    );

    const renderEmptyState = () => (
        <View style={styles.emptyStateContainer}>
            <ThemedText type="subtitle-small" style={styles.emptyStateText}>
                {props.emptyStateMessage || 'No options available'}
            </ThemedText>
            {props.add && (
                <View style={styles.addNewOptionContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Add new option"
                        value={newOption}
                        onChangeText={setNewOption}
                        onSubmitEditing={addNewOption}
                    />
                    <TouchableOpacity onPress={addNewOption} style={styles.addButton}>
                        <Text style={{color: Colors.primary}}>Add</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );

    return (
        <OutsidePressHandler onOutsidePress={closeMenu}>
            <TouchableOpacity
                style={[styles.button, props.style, {backgroundColor: btnBackgroundColor}]}
                onPress={visible ? closeMenu : openMenu}
                accessible
                accessibilityLabel="Dropdown menu"
            >
                <View style={styles.buttonContent}>
                    <ThemedText type="defaultSemiBold">{selectedOption}</ThemedText>
                    {renderArrow()}
                </View>
            </TouchableOpacity>

            {visible && (
                <Animated.View
                    style={[
                        styles.dropdown,
                        {opacity: fadeAnim, backgroundColor: btnBackgroundColor},
                    ]}
                >
                    {props.options.length === 0 ? (
                        renderEmptyState()
                    ) : (
                        <ScrollView contentContainerStyle={styles.scrollView}>
                            {props.options.map((option) => (
                                <TouchableOpacity
                                    key={option}
                                    style={styles.optionItem}
                                    onPress={() => handleSelectOption(option)}
                                    accessible
                                    accessibilityLabel={`Option: ${option}`}
                                >
                                    <ThemedText
                                        type="subtitle-small"
                                        style={[
                                            styles.optionText,
                                            option === selectedOption && styles.selectedOption,
                                        ]}
                                    >
                                        {option}
                                    </ThemedText>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    )}
                </Animated.View>
            )}
        </OutsidePressHandler>
    );
});

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 10,
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropdown: {
        borderRadius: 10,
        marginTop: 5,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        width: '100%',
    },
    scrollView: {
        borderRadius: 10,
    },
    optionItem: {
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    optionText: {
        fontSize: 16,
    },
    selectedOption: {
        fontWeight: 'bold',
        color: Colors.primary,
    },
    emptyStateContainer: {

        flex: 1,

        padding: 15,
        alignItems: 'center',
    },
    emptyStateText: {
        textAlign: 'center',
        color: Colors.primary,
    },
    addNewOptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 5,
        padding: 8,
        marginRight: 5,
    },
    addButton: {
        padding: 8,
    },
});

export default DropDown;
