// import {useThemeColor} from "@/hooks/useThemeColor";
// import {Canvas, RoundedRect} from "@shopify/react-native-skia";
// import {Dimensions, View} from "react-native";

// interface ProgressBarProps {
//     percentProgress: number;
//     padding: number;
//     barColor?: string;
// }

// const ProgressBar = ({
//     percentProgress = 0.62,
//     padding = 1, // closer to 1 means wider
//     barColor = useThemeColor({}, 'orange'),
// }: ProgressBarProps) => {


//     const lineBackground = useThemeColor({}, 'secondaryFill');
//     const backrgroundColor = useThemeColor({}, 'primaryFill');
//     const barHeight = 10;
//     const canvasHeight = 60;
//     const {width: deviceWidth} = Dimensions.get('window');

//     const r = 60; // rounded edges 

//     // Calculate the width of the progress bar
//     const fullWidth = deviceWidth * padding;

//     const progressWidth = fullWidth * percentProgress; // Progress bar is 80% of the full width

//     // full width of screen minus the center region, leaving the two outside parts
//     // this gets the width of the two outside parts and returns one of them
//     const xOffset = (deviceWidth - fullWidth) / 2;
//     const yOffset = (canvasHeight / 2) - (barHeight / 2);

//     return (
//         // <View className='rounded-xl bg-secondaryFill-light dark:bg-secondaryFill-dark flex'>
//         <Canvas style={{height: canvasHeight, width: fullWidth}}>
//             {/* Background Bar */}
//             <RoundedRect
//                 r={r}
//                 x={xOffset} // Center horizontally
//                 y={yOffset} // Fixed vertical position (adjustable)
//                 width={fullWidth}
//                 height={barHeight}
//                 color={lineBackground}
//             />


//             {/* Animated Progress Bar */}
//             <RoundedRect
//                 r={r}
//                 x={xOffset} // Center horizontally
//                 y={yOffset}
//                 width={progressWidth}
//                 height={barHeight}
//                 color={barColor}
//             />
//         </Canvas>
//         // </View>


//     );
// };

// export default ProgressBar;


import {useThemeColor} from "@/hooks/useThemeColor";
import {Canvas, RoundedRect} from "@shopify/react-native-skia";
import {Dimensions} from "react-native";

interface ProgressBarProps {
    percentProgress: number;
    padding: number;
    barColor?: string;
}

const ProgressBar = ({
    percentProgress = 0.62,
    padding = 1, // closer to 1 means wider
    barColor = useThemeColor({}, "orange"),
}: ProgressBarProps) => {
    const backgroundColor = useThemeColor({}, "tertiaryFill"); // Background for the full bar
    const barHeight = 10;
    const canvasHeight = barHeight + 20; // Reduced to fit content snugly
    const {width: deviceWidth} = Dimensions.get("window");

    const r = barHeight / 2; // 5, half the bar height for smooth rounding

    // Calculate the width of the progress bar
    const fullWidth = deviceWidth * padding; // Background bar width
    const progressWidth = Math.min(fullWidth * percentProgress, fullWidth); // Clamp progress to fullWidth

    // Center the bars horizontally within the full device width
    const xOffset = (deviceWidth - fullWidth) / 2;
    const yOffset = (canvasHeight / 2) - (barHeight / 2); // Center vertically

    return (
        <Canvas style={{height: canvasHeight, width: deviceWidth}}>
            {/* Background Bar */}
            <RoundedRect
                r={r}
                x={xOffset} // Centered horizontally
                y={yOffset} // Centered vertically
                width={fullWidth}
                height={barHeight}
                color={backgroundColor} // Fixed naming
            />
            {/* Progress Bar */}
            <RoundedRect
                r={r}
                x={xOffset} // Same starting point as background
                y={yOffset}
                width={progressWidth}
                height={barHeight}
                color={barColor}
            />
        </Canvas>
    );
};

export default ProgressBar;