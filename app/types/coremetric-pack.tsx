import {CoreInputType} from "./core-input";

export enum MetricPackType {
    Nutrition = "Nutrition",
    Exercise = "Exercise",
    Hormones = "Hormones",
    Sleep = "Sleep",
}

export interface CoreMetricPack {
    id: string;
    packType: MetricPackType;
    inputTypes: CoreInputType[];
    title: string;
    subtitle: string;
    iconKey: string;
}