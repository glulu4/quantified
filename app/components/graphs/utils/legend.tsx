import {GraphColor} from "@/constants/Colors";
import {View} from "react-native";

export const renderDot = (color: GraphColor) => {

  console.log("renderDot color", color);

  return (
    <View
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: color?.colorValue || "#ffffff",
        marginRight: 10,
      }}
    />
  );
};



// interface pointerEvent {
//   pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
// }

//   const pointer = {
//     height: 0, // default: 0
//     width: 10, // default: 0
//     radius: 5, // default: 5
//     pointerColor: "white", // default: 'red'
//     // pointer1Color: ColorValue; // default: 'red'
//     // pointer2Color: ColorValue; // default: 'red'
//     // pointer3Color: ColorValue; // default: 'red'
//     // pointer4Color: ColorValue; // default: 'red'
//     // pointer5Color: ColorValue; // default: 'red'
//     secondaryPointerColor: "white", // default: 'red'

//     pointerComponent: null, // default: null, the dot

//     showPointerStrip: true, // default: true
//     pointerStripWidth: 5, // default: containerHeight
//     // pointerStripHeight: number; // default: 1
//     pointerStripColor: "black", // default: 'black'
//     pointerStripUptoDataPoint: false, // default: false
//     pointerLabelComponent: null, // default: null ( label when you're on a point)

//     stripOverPointer: false, // default: false
//     shiftPointerLabelX: 0, // default: 0
//     shiftPointerLabelY: 0, // default: 0
//     pointerLabelWidth: 20, // default: 20
//     pointerLabelHeight: 20, // default: 20
//     autoAdjustPointerLabelPosition: false, // default: false
//     pointerVanishDelay: 150, // default: 150
//     activatePointersOnLongPress: true, // default: false
//     activatePointersDelay: 300, // default: 150
//     // initialPointerIndex: number; // default -1
//     // initialPointerAppearDelay: number; // if isAnimated, then animationDuration, else 0
//     persistPointer: false, // false
//     hidePointer1: false, // default: false
//     hidePointer2: false, // default: false
//     // hidePointer3: boolean; // default: false
//     // hidePointer4: boolean; // default: false
//     // hidePointer5: boolean; // default: false
//     hideSecondaryPointer: false, // default: false
//     // strokeDashArray: [1,2,3,4],
//     barTouchable: false, //default : false (only applicable to bar charts having pointerConfig)
//     pointerEvents: 'auto' // 'box-none' | 'none' | 'box-only' | 'auto'; // default: "none
// };