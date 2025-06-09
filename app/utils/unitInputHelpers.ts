import { CoreInputType } from "@/types/core-input";
import { CoreUnitType } from "@/types/core-unit";

export function inputToUnits(input: CoreInputType): CoreUnitType[] {
    switch (input) {
        case CoreInputType.MULTISELECT:
            return [CoreUnitType.MULTISELECT];
        case CoreInputType.SCALE:
            return [CoreUnitType.SCALE];
        case CoreInputType.DATE:
            return [CoreUnitType.DATE];
        case CoreInputType.DATE_RANGE:
            return [CoreUnitType.DATE_RANGE];
        case CoreInputType.TIME:
            return [
                CoreUnitType.TIME,
                CoreUnitType.HOUR,
                CoreUnitType.MINUTES,
                CoreUnitType.SECONDS,
            ];
        case CoreInputType.TEXT:
        case CoreInputType.FRACTION:
        case CoreInputType.NUMBER:
            return [CoreUnitType.UNITLESS];
        case CoreInputType.FOOD_DB:
            return [CoreUnitType.GRAM, CoreUnitType.MILLIGRAM];
        default:
            return [CoreUnitType.UNITLESS];
    }
}

export function unitToInput(unit: CoreUnitType): CoreInputType {
    switch (unit) {
        case CoreUnitType.MULTISELECT:
            return CoreInputType.MULTISELECT;
        case CoreUnitType.SCALE:
            return CoreInputType.SCALE;
        case CoreUnitType.DATE:
            return CoreInputType.DATE;
        case CoreUnitType.DATE_RANGE:
            return CoreInputType.DATE_RANGE;
        case CoreUnitType.TIME:
        case CoreUnitType.HOUR:
        case CoreUnitType.MINUTES:
        case CoreUnitType.SECONDS:
        case CoreUnitType.MS:
            return CoreInputType.TIME;
        default:
            return CoreInputType.NUMBER;
    }
}
