import React, {useRef, useEffect} from "react";
import {
    View,
    Animated,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import ThemedView from "./ThemedView";
import {useTheme} from "react-native-paper";
import {useThemeColor} from "@/hooks/useThemeColor";
import {ThemedText} from "./ui/ThemedText";

const SCREEN_WIDTH = Dimensions.get("window").width;
const DRAWER_WIDTH = SCREEN_WIDTH * 0.8; // Expo typically uses 80% of screen width
// const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

interface CustomDrawerProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const LeftDrawer = ({isVisible, onClose, children}: CustomDrawerProps) => {
    const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
    const overlayOpacity = useRef(new Animated.Value(0)).current;
    const drawerBackground = useThemeColor({}, "bgSecondary")

    const openDrawer = () => {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            }),
            Animated.timing(overlayOpacity, {
                toValue: 0.6,
                duration: 250,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const closeDrawer = () => {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: -DRAWER_WIDTH,
                duration: 250,
                useNativeDriver: true,
            }),
            Animated.timing(overlayOpacity, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            }),
        ]).start(() => onClose());
    };

    useEffect(() => {
        if (isVisible) {
            openDrawer();
        } else {
            closeDrawer();
        }
    }, [isVisible]);

    return (
        <View style={styles.container} pointerEvents={isVisible ? "auto" : "none"}>
            {/* Backdrop */}
            <Animated.View
                style={[styles.backdrop, {opacity: overlayOpacity}]}
                pointerEvents={isVisible ? "auto" : "none"}
            >
                <TouchableWithoutFeedback onPress={closeDrawer}>
                    <View style={styles.backdropTouchable} />
                </TouchableWithoutFeedback>
            </Animated.View>

            {/* Drawer */}
            <Animated.View
                style={[
                    styles.drawer,
                    {
                        transform: [{translateX: slideAnim}],
                    },
                    {backgroundColor: drawerBackground},
                ]}
            >
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={closeDrawer}
                        style={styles.closeButton}
                        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                    >
                        <ThemedText style={styles.closeText}>×</ThemedText>
                    </TouchableOpacity>
                </View>
                <ThemedView style={{flex: 1, backgroundColor: drawerBackground}}>
                    {children}

                </ThemedView>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1000,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#000",
    },
    backdropTouchable: {
        flex: 1,
    },
    drawer: {
        position: "absolute",
        left: 0,
        top: 0,
        width: DRAWER_WIDTH,
        height: "100%",
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    header: {
        height: 60,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#e0e0e0',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 15,
        padding: 5,
    },
    closeText: {
        fontSize: 24,
        color: '#666',
    },
});

export default LeftDrawer;