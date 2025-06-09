import {StatusItem} from '@/types/status-item';
import {create} from 'zustand';
import {initialNutritionState, initialSleepState} from './initial-states';
import {NutritionState, PackState, PackStatesRecord} from '../../../../../types/store-types';
import {SleepState} from '@/reducers/foodReducer';
import {Food, FoodCombination, UserFood} from '@/types/food';
import {MetricPackType} from '@/types/coremetric-pack';



type PackStatesStore = {
    packStates: PackStatesRecord;
    addPackState: (packId: string, packType: MetricPackType) => void;
    addPackStates: (packArray: {id: string; type: MetricPackType}[]) => void;
    clearPackStates: () => void;
    // getPackState: (packId: string) => PackState | undefined;
    getPackState: <T extends PackState>(
        packId: string,
        expectedType: T["type"]
    ) => T | undefined;
    updatePackState: (
        packId: string,
        newData: Partial<NutritionState> | Partial<SleepState>
    ) => void;
    // Nutrition Pack
    getFoods: (packId: string) => Map<string, StatusItem<Food>>;
    getUserFoods: (packId: string) => Map<string, StatusItem<UserFood>>;
    getFoodCombinations: (packId: string) => Map<string, StatusItem<FoodCombination>>;
};

/** Helper: Creates a new PackState based on type */

const createPackState = (type: MetricPackType): PackState => {


    switch (type) {
        case MetricPackType.Nutrition:
            return {
                type: MetricPackType.Nutrition,
                data: initialNutritionState,
            };
        case MetricPackType.Sleep:
            return {
                type: MetricPackType.Sleep,
                data: initialSleepState
            };
        default:
            throw new Error(`Unsupported pack type: ${type}`);
    }
};

/** Helper: Merges partial data into existing PackState */
const createUpdatedPackState = (
    existingPackState: PackState,
    partialData: Partial<NutritionState> | Partial<SleepState>
): PackState => {
    switch (existingPackState.type) {
        case MetricPackType.Nutrition:
            return {
                type: MetricPackType.Nutrition,
                data: {
                    ...existingPackState.data,
                    ...(partialData as Partial<NutritionState>),
                },
            };
        case MetricPackType.Sleep:
            return {
                type: MetricPackType.Sleep,
                data: {
                    ...existingPackState.data,
                    ...(partialData as Partial<SleepState>),
                },
            };
        default:
            throw new Error(`Unsupported pack type: ${existingPackState}`);
    }
};

/** Zustand Store */
export const usePackStatesStore = create<PackStatesStore>((set, get) => ({
    packStates: {},

    addPackState: (packId, packType) => {
        set((prevState) => ({
            packStates: {
                ...prevState.packStates,
                [packId]: createPackState(packType),
            },
        }));
    },


    getPackState<T extends PackState>(
        packId: string,
        expectedType: T["type"]
    ): T | undefined {
        const pack = get().packStates[packId];
        return pack?.type === expectedType ? (pack as T) : undefined;
    },

    addPackStates: (packArray) => {
        set((prevState) => {
            const newPackStates = {...prevState.packStates};
            packArray.forEach(({id, type}) => {
                newPackStates[id] = createPackState(type);
            });
            return {packStates: newPackStates};
        });
    },

    clearPackStates: () => {
        set({packStates: {}});
    },

    updatePackState: (packId, newData) => {
        set((prevState) => {
            // gets pack based on pack id ( not core pack id )
            const existingPack = prevState.packStates[packId];
            if (!existingPack) {
                return prevState;
            }
            const updatedPack = createUpdatedPackState(existingPack, newData);
            return {
                packStates: {
                    ...prevState.packStates,
                    [packId]: updatedPack,
                },
            };
        });
    },


    // Nutriton Pack
    getFoods: (packId: string) => {
        const packState = get().packStates[packId];
        if (packState?.type === MetricPackType.Nutrition) {
            return (packState.data as NutritionState).foods;
        }
        return new Map();
    },
    getUserFoods: (packId: string) => {
        const packState = get().packStates[packId];
        if (packState?.type === MetricPackType.Nutrition) {
            return (packState.data as NutritionState).userFoods;
        }
        return new Map();
    },
    getFoodCombinations: (packId: string) => {
        const packState = get().packStates[packId];
        if (packState?.type === MetricPackType.Nutrition) {
            return (packState.data as NutritionState).foodCombinations;
        }
        return new Map();
    }
}));