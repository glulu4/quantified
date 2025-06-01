// Assuming you already have:

import {CoreInputType} from "./core-input";
import {CoreUnitType} from "./core-unit";
import {SubtagOf, Tag} from "./tags";


/** One filter entry: a top‐level Tag and one of its allowed Subtags */
// export interface MetricFilter<T extends Tag = Tag> {
//     tag: T;
//     subtag: SubtagOf<T>;
// }

export type MetricFilter = {
    [K in Tag]: {tag: K; subtag: SubtagOf<K>}
}[Tag];


/** A single “core metric” definition */
export interface CoreMetric {
    /** Unique identifier (e.g. slug or UUID) */
    id: string;

    /** Human‐readable default title */
    defaultTitle: string;

    /** What input controls to render (e.g. slider, text, date) */
    inputTypes: CoreInputType[];

    /** Allowed unit types (e.g. mg/dL, bpm) */
    unitTypes: CoreUnitType[];

    /** For metrics that let you multiselect from fixed options */
    defaultMultiSelectOptions?: string[];

    /**  
     * List of filters you can use to group or search this metric  
     * — each filter points to one Tag + Subtag pair  
     */
    filters: MetricFilter[];
}
