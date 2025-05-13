// import {TouchableOpacity, View} from "react-native";
// import React from "react";
// import {ThemedText} from "@/components/ui/ThemedText";
// import clsx from "clsx";

// interface CircleProps {

//     icon?: React.ReactNode;
//     color?: string;
//     selected?: boolean;
//     onPress: () => void;
// }

// const Circle = ({color, icon, selected, onPress}: CircleProps) => {
//     return (
//         <TouchableOpacity
//             className={clsx(
//                 " rounded-full items-center justify-center border-2",
//                 selected ? "border-blue-light dark:border-blue-dark" : "border-transparent",
//                 color ? `bg-[${color}]` : "bg-bgPrimary-light dark:bg-bgPrimary-dark"
//             )}
//             onPress={onPress}
//         >
//             {icon && <View>{icon}</View>}
//         </TouchableOpacity>
//     );
// };

// export default Circle;
import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import clsx from 'clsx';
import {useThemeColor} from '@/hooks/useThemeColor';

interface CircleProps {
    icon?: React.ReactNode;
    color?: string;
    selected?: boolean;
    onPress: () => void;
}

const Circle = ({icon, selected, onPress, color}: CircleProps) => {

    const secondaryColor = useThemeColor({}, "bgSecondary");
    const backgroundColor = color ? color : secondaryColor;
    return (
        <TouchableOpacity
            className={clsx(
                "w-24 h-24 rounded-full flex items-center justify-center",
                selected ? "border-blue-500" : "border-transparent",
                // color ? " " : "bg-bgSecondary-light dark:bg-bgSecondary-dark"
            )}
            onPress={onPress}
            style={{backgroundColor: backgroundColor, borderWidth: 3}}
        >
            {icon && <View>{icon}</View>}
        </TouchableOpacity>
    );
};

export default Circle;
