import BarDemo from "@/components/demo-widgets/BarDemo";
import DemoContainer from "@/components/demo-widgets/DemoContainer";
import LineGraphDemo from "@/components/demo-widgets/LineDemo";
import PieDemo from "@/components/demo-widgets/PieDemo";
import ProgressBarsDemo from "@/components/demo-widgets/ProgressBarsDemo";
import OrbitProgress from "@/components/progress-widgets/Orbit";
import {ThemedText} from "@/components/ui/ThemedText";
import {WidgetType} from "@/types/formdefinition";
import {SFSymbol} from "react-native-sfsymbols";


/**
 * Renders a widget based on the provided widget type and location.
 * @param {WidgetType} widgetType - The type of the widget to render.
 * @param {"in-bottom-sheet" | "main-screen"} location - The location where the widget is rendered.
 * @param {boolean} showDisabled - Flag to show disabled state.
 * @returns {JSX.Element} - The rendered widget component.
 * @Note currently disabled progress bars and orbit progress
 */
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
                    <LineGraphDemo padding={0.8} />
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
                <DemoContainer comingSoon bgLevel={bgLevel} showDisabled={showDisabled}>
                    <OrbitProgress size={150} progress={0.75} text="75%" padding={1} />
                </DemoContainer>
            );

        case WidgetType.PROGRESS_LINES:
            return (
                <DemoContainer comingSoon bgLevel={bgLevel} showDisabled={showDisabled} >
                    <ProgressBarsDemo />
                </DemoContainer>
            );

        default:
            break;
    }
}