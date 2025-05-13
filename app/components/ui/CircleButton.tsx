import {useThemeColor} from "@/hooks/useThemeColor";
import {StyleSheet, View} from "react-native";
import {SFSymbol} from "react-native-sfsymbols";

const CircleButton = ({selected, color, iconName}: {selected: boolean; color: string; iconName?: string}) => {

    const ringColor = useThemeColor({}, "systemGray3");

    return (
        <View
            style={[
                styles.circle,
                selected ? {backgroundColor: color} : {borderColor: ringColor, borderWidth: 2}
            ]}
        >
            {selected && iconName && (
                <SFSymbol weight="semibold" name={iconName} size={10} color="white" />
            )}
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
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    },
});


export default CircleButton;