// import React, {useEffect, useRef} from "react";
// import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
// import ThemedView from "@/components/ThemedView";
// import BottomSheetWrap from "@/components/BottomSheetWrap";
// import BottomSheet from "@gorhom/bottom-sheet";
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import {NavigationContainer} from "@react-navigation/native";
// import {NavigationIndependentTree} from "@react-navigation/native";
// import {ThemedText} from "@/components/ui/ThemedText";



// const ScreenOne = () => {
//     return (
//         <View>
//             <Text>Screen One</Text>
//         </View>
//     );
// }

// const ScreenTwo = () => {
//     return (
//         <View>
//             <Text>Screen Two</Text>
//         </View>
//     );
// }

// const Stack = createNativeStackNavigator();

// const NestedNavigator = () => (

//     <NavigationIndependentTree>

//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="ScreenOne">
//                 <Stack.Screen name="ScreenOne" component={ScreenOne} />
//                 <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     </NavigationIndependentTree>

// );



// export default function Test() {
//     // Theme colors
//     const bottomSheetRef = useRef<BottomSheet>(null);

//     // These are two simple screens that will be displayed in the bottom sheet.
//     bottomSheetRef.current?.expand()
//     const screen1 = (
//         <View style={styles.screen}>
//             <Text style={styles.title}>Screen 1</Text>
//             <TouchableOpacity
//             >
//                 <ThemedText>Next</ThemedText>
//             </TouchableOpacity>
//         </View>
//     );

//     const screen2 = (
//         <View style={styles.screen}>
//             <Text style={styles.title}>Screen 2</Text>
//             <TouchableOpacity

//                 onPress={() => {
//                     // Similarly, call the function to slide back (e.g., goToScreen(0)).
//                     console.log("Go back to Screen 1");
//                 }}
//             >
//                 <ThemedText>Back </ThemedText>
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <ThemedView className="flex-1 flex flex-col">
//             <BottomSheetWrap
//                 bottomSheetRef={bottomSheetRef}
//                 snapPoints={["25%", "50%"]}
//                 screens={[screen1, screen2]}
//             />
//         </ThemedView>

//     );



// }

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#fff",
//     },
//     title: {
//         fontSize: 20,
//         marginBottom: 20,
//     },
// });


import React, {useEffect, useRef} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import ThemedView from "@/components/ThemedView";
import BottomSheetWrap from "@/components/BottomSheetWrap";
import BottomSheet from "@gorhom/bottom-sheet";
import {ThemedText} from "@/components/ui/ThemedText";
import NumberInput from "@/components/ui/NumberInput";
import InputRow from "@/components/ui/InputRow";
import PlusCircle from "@/components/ui/PlusCircle";
import {useThemeColor} from "@/hooks/useThemeColor";

export default function Test() {

    const [val, setVal] = React.useState<number>(1);

    const blue = useThemeColor({}, "blue");

    return (
        <ThemedView className="flex-1">

            <PlusCircle
                color={blue}
                selected={true}
            />
            {/* Add some content to ensure the parent view has dimensions */}


            <View className="flex-1">
                <ThemedText emphasized type='headline' className="mt-4 mb-2 ml-1">Number of Servings {val}</ThemedText>

                <InputRow backGroundLevel='bgTertiary'>
                    <ThemedText emphasized >
                        Serving Size
                    </ThemedText>

                    <NumberInput value={val} onChange={setVal} min={1} />
                </InputRow>

            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        padding: 12,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        minWidth: 150,
        alignItems: 'center',
    }
});