// import BarDemo from "@/components/demo-widgets/BarDemo"
// import DemoContainer from "@/components/demo-widgets/DemoContainer"
// import LineGraphDemo from "@/components/demo-widgets/LineDemo"
// import PieDemo from "@/components/demo-widgets/PieDemo"
// import ProgressBarsDemo from "@/components/demo-widgets/ProgressBarsDemo"
// import OrbitProgress from "@/components/progress-widgets/Orbit"
// import {WidgetType} from "@/types/formdefinition"

// export function renderWidget(
//     widgetType: WidgetType,
//     location: "in-bottom-sheet" | "main-screen"
// ) {



//     const bgLevel = location === "in-bottom-sheet" ? "bgTertiary" : "bgSecondary";
//     switch (widgetType) {
//         case WidgetType.LINE:
//             return (<LineGraphDemo padding={0.75} />)

//         case WidgetType.BAR:
//             return (<BarDemo padding={0.75} />)

//         case WidgetType.PIE:
//             return (<PieDemo padding={0.5} />)

//         case WidgetType.ORBIT:
//             return (
//                 // <OrbitDemo padding={1} />

//                 <DemoContainer
//                     bgLevel={bgLevel}

//                 >
//                     <OrbitProgress
//                         size={150}
//                         progress={0.75}
//                         text="75%"
//                         padding={1}
//                     />
//                 </DemoContainer>


//             )
//         case WidgetType.PROGRESS_LINES:
//             return (
//                 <DemoContainer
//                     bgLevel={bgLevel}

//                 >
//                     <ProgressBarsDemo
//                     />
//                 </DemoContainer>

//             )

//         default:
//             break;
//     }


// }

import BarDemo from "@/components/demo-widgets/BarDemo";
import DemoContainer from "@/components/demo-widgets/DemoContainer";
import LineGraphDemo from "@/components/demo-widgets/LineDemo";
import PieDemo from "@/components/demo-widgets/PieDemo";
import ProgressBarsDemo from "@/components/demo-widgets/ProgressBarsDemo";
import OrbitProgress from "@/components/progress-widgets/Orbit";
import {WidgetType} from "@/types/formdefinition";
import {SFSymbol} from "react-native-sfsymbols";

export function renderWidget(
    widgetType: WidgetType,
    location: "in-bottom-sheet" | "main-screen",
    showDisabled: boolean
) {
    const bgLevel = location === "in-bottom-sheet" ? "bgTertiary" : "bgSecondary";

    switch (widgetType) {
        case WidgetType.LINE:
            return (
                <DemoContainer bgLevel={bgLevel} showDisabled={showDisabled}>
                    <LineGraphDemo padding={0.75} />
                </DemoContainer>
            );

        case WidgetType.BAR:
            return (
                <DemoContainer bgLevel={bgLevel} showDisabled={showDisabled}>
                    <BarDemo padding={0.75} />
                </DemoContainer>
            );

        case WidgetType.PIE:
            return (
                <DemoContainer bgLevel={bgLevel} showDisabled={showDisabled}>
                    <PieDemo padding={0.5} />
                </DemoContainer>
            );

        case WidgetType.ORBIT:
            return (
                <DemoContainer bgLevel={bgLevel} showDisabled={showDisabled}>
                    <OrbitProgress size={150} progress={0.75} text="75%" padding={1} />
                </DemoContainer>
            );

        case WidgetType.PROGRESS_LINES:
            return (
                <DemoContainer bgLevel={bgLevel} showDisabled={showDisabled} >
                    <ProgressBarsDemo />
                </DemoContainer>
            );

        default:
            break;
    }
}