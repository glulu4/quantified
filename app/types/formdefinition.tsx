
import {Timestamp} from '@google-cloud/firestore';
import {CoreInputType, CoreUnitType, MetricPackType} from './core-metric';
import {PackState} from './store-types';
import {MealTime} from './food';

export interface FormDefinition {
    id: string;
    uid: string;
    title: string;
    metricDefinitionIds: string[];
    metricPackIds: string[]
    metricPackMetricDefIds: Record<string, string[]>; // metric pack id to metric def ids
    widgetIds: string[];
    submissionCount: number;
    lastSubmission?: Date;
    version: number;
    displaySettings: FormDefDisplaySetting;
    createdAt: Timestamp;
    updatedAt?: Timestamp;
    deletedAt: Timestamp | null;
}

export interface FormSubmission {
    id: string;
    formDefinitionId: string; // the id
    formTitle: string;
    displaySettings: FormDefDisplaySetting;
    notes: string;
    submissionDate: Timestamp;
    metricSubmissionIds: string[]; // ids
    metricPackSubmissionIds: string[]; // of the ids
    createdAt: Timestamp;
    deletedAt: Timestamp | null;
}

export interface FormDefDisplaySetting {
    color: string;
    icon: string;
}

export enum WidgetType {
    LINE = "Line",
    BAR = "Bar",
    PIE = "Pie",
    ORBIT = "Orbit",
    PROGRESS_LINES = "Progress Lines",
    // CUP = "Cup", // Liquid UI
}

export interface Widget {
    id: string;
    title: string;
    formDefinitionId: string; // form it lives in 
    metricDefinitionIds: string[]; // data on the graph
    widgetType: WidgetType;
    createdAt: Timestamp;
    updatedAt: Timestamp | null;
    deletedAt: Timestamp | null;
}

export interface MetricSubmission {
    id: string;
    value: MetricValueType;
    formSubmissionId: string;
    metricDefinitionId: string;
    createdAt: Timestamp;
    deletedAt: Timestamp | null;
}
// done

export interface MetricDefinition {
    id: string;
    formDefinitionId: string;
    metricPackId?: string;
    coreMetricId: string;
    inputType: CoreInputType;
    unitType: CoreUnitType;
    metricTitle: string;
    createdAt: Timestamp;
    updatedAt: Timestamp | null;
    deletedAt: Timestamp | null;
}

export interface MetricPackDefinition {
    id: string;
    title: string;
    formDefinitionId: string;
    coreMetricPackId: string
    // metricDefinitionIds: string[] // populate this later on after submission
    coreMetricId2MetricDefId: Record<string, string>
    packType: MetricPackType;
    inputType: CoreInputType;
    createdAt: Timestamp;
    updatedAt: Timestamp | null;
    deletedAt: Timestamp | null;
}


export interface MetricPackSubmission {
    id: string;                          // Unique ID for this pack submission
    formSubmissionId: string;            // The form submission to which this pack submission belongs
    metricPackDefinitionId: string;      // Reference to the associated MetricPackDefinition
    packType: MetricPackType;            // The type of pack (e.g. Nutrition, Sleep)
    packState: PackState;  // Snapshot of the pack state from the store
    metricSubmissionIds: string[]; // Array of metric submissions within this pack
    createdAt: Timestamp;                // When this submission was created
    deletedAt: Timestamp | null;         // Optional deletion timestamp (if applicable)
}

export interface NutritionPackSubmission extends MetricPackSubmission {
    mealTime: MealTime;
}

/**
 * The three below are questionable. I'm unsure whether they shoudl be optional attributes in the 
 * 'MetricDefinition' or if they should be their own extended type. Would love input here :)
 */
export interface ThresholdMetricDefinition extends MetricDefinition {
    threshold: number;
}

export interface GoalMetricDefinition extends MetricDefinition {
    goal: number;
}

export interface DropdownMetricDefinition extends MetricDefinition {
    dropdownOptions: string[];
}

export type MetricValueType = string | Date | Fraction | number;

export type Fraction = {
    numerator: number;
    denominator: number;
}