import React, {useCallback, useState, useRef, useEffect} from "react";
import {
    View,
    Animated,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import {spacing} from '@/constants/Spacing';
import {useThemeColor} from "@/hooks/useThemeColor";
import ThemedView from "./ThemedView";

interface BottomSheetWrapProps {
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string[];
    children?: React.ReactNode;
    screens?: React.ReactNode[];
    nextScreen?: () => void;
    previousScreen?: () => void;
    activeScreenIndex?: number;
    backgroundColor?: string;
    className?: string;
    onChange?: (index: number) => void;
}

/**
 * BottomSheetWrap component that wraps the BottomSheet component from @gorhom/bottom-sheet.
 */
const BottomSheetWrap: React.FC<BottomSheetWrapProps> = ({
    bottomSheetRef,
    snapPoints,
    children,
    screens,
    activeScreenIndex,
    backgroundColor,
    className,
    onChange
}) => {


    const bgColor = backgroundColor ? backgroundColor : useThemeColor({}, "bgSecondary");
    const indicatorBgColor = useThemeColor({}, "systemGray3");

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                opacity={0.3}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        []
    );

    // If screens are provided, use animated sliding between them.
    // const [activeScreenIndex, setActiveScreenIndex] = useState(0);
    const translateX = useRef(new Animated.Value(0)).current;
    const screenWidth = Dimensions.get("window").width;
    const arrowColor = useThemeColor({}, "labelPrimary");



    useEffect(() => {
        Animated.timing(translateX, {
            toValue: -(activeScreenIndex ?? 0) * screenWidth,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [activeScreenIndex, screenWidth, translateX]);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backgroundStyle={[styles.bottomSheetBackground, {backgroundColor: bgColor}]}
            handleIndicatorStyle={[styles.handleIndicator, {backgroundColor: indicatorBgColor}]}
            backdropComponent={renderBackdrop}
            onChange={onChange}
        >
            <BottomSheetView style={styles.bottomSheetContent} className={className}>
                {screens ? (

                    <Animated.View
                        style={[
                            styles.screensContainer,
                            {
                                width: screenWidth * screens.length,
                                backgroundColor: backgroundColor,
                                transform: [{translateX}],
                            },
                        ]}
                    >
                        {screens.map((screen, index) => (
                            <ThemedView backGroundLevel="bgSecondary" key={index} className="flex-1 flex flex-col" style={{width: screenWidth - spacing["3xl"] * 2}}>
                                {screen}
                            </ThemedView>
                        ))}
                    </Animated.View>
                ) : (


                    children

                )}
            </BottomSheetView>
        </BottomSheet>
    );
};

export default BottomSheetWrap;

const styles = StyleSheet.create({
    bottomSheetContent: {
        flex: 1,
        // padding: spacing["3xl"],
    },
    handleIndicator: {
        width: 50,
        height: 4,
        borderRadius: 2,
    },
    bottomSheetBackground: {
        shadowColor: "#000",
        shadowOffset: {width: 0, height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 8,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    screensContainer: {
        flexDirection: "row",
        flex: 1,
    },
});