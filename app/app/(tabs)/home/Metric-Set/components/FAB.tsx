import React, {useRef, useEffect, useState} from "react";
import {View, TouchableOpacity, Animated} from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import {SFSymbol} from "react-native-sfsymbols";
import {useThemeColor} from "@/hooks/useThemeColor";
import {ThemedText} from "@/components/ui/ThemedText";

// Define an interface for action buttons in the FAB
interface Action {
    icon: React.ReactNode; // Icon component (or a function returning one)
    label: string;
    onPress: () => void;
}

interface CustomFABProps {
    actions: Action[];
    fabBgColor: string; // Background color for the FAB to match your theme
    style?: object;
}

const CustomFAB: React.FC<CustomFABProps> = ({
    actions,
    fabBgColor,
    style,
}) => {
    // State for whether the FAB is expanded or not
    const [open, setOpen] = useState(false);

    // Animated value for handling opacity and translation
    const animation = useRef(new Animated.Value(open ? 1 : 0)).current;

    console.log("open: ", open);

    const iconToggleColor = useThemeColor({}, "blue");

    // Animate the expansion whenever the open state changes
    useEffect(() => {
        Animated.timing(animation, {
            toValue: open ? 1 : 0,
            duration: 200,
            useNativeDriver: true, // Uses native driver for smoother animations
        }).start();
    }, [open]);

    // Toggle the FAB menu open/closed
    const toggleOpen = () => {
        setOpen(!open);
    };

    // Render the main FAB icon based on state
    const fabIcon = (isOpen: boolean) => (
        <View className="w-6 h-6 items-center justify-center">
            <SFSymbol
                name={isOpen ? "xmark" : "plus"}
                size={22}
                weight="semibold"
                color={iconToggleColor}
                style={{alignSelf: "center"}}
            />
        </View>
    );

    return (
        // OutsidePressHandler detects taps outside its children
        <OutsidePressHandler onOutsidePress={() => {if (open) setOpen(false);}}>
            <View
                className="absolute bottom-5 right-5 items-center justify-center"
                style={[style, {pointerEvents: "box-none"}]}
            >
                {/* Render sub-buttons (actions) */}
                {actions.map((action, index) => {
                    // Each action slides upward when the menu is open
                    const translateY = animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -(index + 1) * 60], // Each button moves up by 60 px * (index+1)
                    });
                    return (
                        <Animated.View
                            key={index}
                            className="absolute bottom-0 right-0"
                            style={[
                                {
                                    transform: [{translateY}],
                                    opacity: animation, // Fade in as the menu opens
                                },
                            ]}
                        >

                            <TouchableOpacity
                                className="w-14 h-14 rounded-full mb-2 items-center justify-center shadow-md"
                                style={[
                                    {backgroundColor: fabBgColor},
                                    {elevation: 3}, // Android shadow
                                    {
                                        shadowColor: "#000",
                                        shadowOffset: {width: 0, height: 2},
                                        shadowOpacity: 0.3,
                                        shadowRadius: 4,
                                    }, // iOS shadow
                                ]}
                                onPress={action.onPress}
                            >
                                {typeof action.icon === "function" ? action.label : action.icon}
                            </TouchableOpacity>

                        </Animated.View>
                    );
                })}

                {/* Main FAB Button */}
                <Animated.View
                    style={{
                        transform: [
                            {
                                // Rotate the main button icon when expanded
                                rotate: animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "90deg"],
                                }),
                            },
                        ],
                    }}
                >
                    <TouchableOpacity
                        className="w-16 h-16 rounded-full items-center justify-center shadow-md"
                        style={[
                            {backgroundColor: fabBgColor},
                            {elevation: 5}, // Android shadow
                            {
                                shadowColor: "#000",
                                shadowOffset: {width: 0, height: 2},
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                            }, // iOS shadow
                        ]}
                        onPress={toggleOpen}
                    >
                        {fabIcon(open)}
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </OutsidePressHandler>
    );
};

export default CustomFAB;