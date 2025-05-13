// // src/context/PackContext.tsx
// import React, {createContext, useContext, useReducer, useEffect} from 'react';
// import {Food, UserFood, FoodCombination} from '@/services/foodDataApiTypes';
// import {FoodState} from '@/reducers/foodReducer';

// /**
//  * Each pack’s state shape goes here.
//  */
// // export type FoodState = {
// //     foods: Food[];
// //     userFoods: UserFood[];
// //     foodCombinations: FoodCombination[];
// // };

// // map between core pack id and its state
// export interface PackStateMap {
//     "nutrition-core-pack": FoodState;
//     // Add more pack IDs (e.g. sleep, coffee) as needed
// }

// type PackAction<K extends keyof PackStateMap> =
//     | {type: 'SET'; packId: K; payload: Partial<PackStateMap[K]>}
//     | {type: 'REMOVE'; packId: K};

// type PackState = Partial<PackStateMap>;

// const PackContext = createContext<{state: PackState; dispatch: React.Dispatch<PackAction<keyof PackStateMap>>}>(null!);

// function packReducer(state: PackState, action: PackAction<keyof PackStateMap>): PackState {
//     switch (action.type) {
//         case 'SET':
//             return {...state, [action.packId]: {...state[action.packId], ...action.payload} as PackStateMap[typeof action.packId]};
//         case 'REMOVE': {
//             const {[action.packId]: _, ...rest} = state;
//             return rest;
//         }
//         default:
//             return state;
//     }
// }

// export const PackProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
//     const [state, dispatch] = useReducer(packReducer, {});
//     return <PackContext.Provider value={{state, dispatch}}>{children}</PackContext.Provider>;
// };

// /**
//  * Hook to initialize and update a single pack.
//  */
// export function usePack<K extends keyof PackStateMap>(packId: K, initialState: PackStateMap[K]) {
//     const {state, dispatch} = useContext(PackContext);

//     useEffect(() => {
//         dispatch({type: 'SET', packId, payload: initialState});
//         return () => dispatch({type: 'REMOVE', packId});
//     }, [packId]);

//     const packState = state[packId] as PackStateMap[K];
//     const setPack = (patch: Partial<PackStateMap[K]>) => dispatch({type: 'SET', packId, payload: patch});

//     return [packState, setPack] as const;
// }

// /**
//  * Hook to initialize and manage multiple packs at once.
//  * @param initializers Array of objects: { packId, initialState }.
//  * @returns [packStates, updatePack]
//  */
// export function usePackStates<KS extends keyof PackStateMap>(
//     initializers: Array<{packId: KS; initialState: PackStateMap[KS]}>
// ) {
//     const {state, dispatch} = useContext(PackContext);

//     useEffect(() => {
//         initializers.forEach(({packId, initialState}) => dispatch({type: 'SET', packId, payload: initialState}));
//         return () => initializers.forEach(({packId}) => dispatch({type: 'REMOVE', packId}));
//     }, [initializers]);

//     const packStates = initializers.reduce((acc, {packId}) => {
//         acc[packId] = state[packId] as PackStateMap[typeof packId];
//         return acc;
//     }, {} as Record<KS, PackStateMap[KS]>);

//     const updatePack = <K extends KS>(packId: K, patch: Partial<PackStateMap[K]>) =>
//         dispatch({type: 'SET', packId, payload: patch});

//     return [packStates, updatePack] as const;
// }

// /**
//  * USAGE EXAMPLE:
//  *
//  * Wrap your app (or just the submission screen) in <PackProvider>.
//  *
//  * // Single pack
//  * const [nutrition, updateNutrition] = usePack('nutrition', {
//  *   foods: [],
//  *   userFoods: [],
//  *   foodCombinations: [],
//  * });
//  * updateNutrition({ userFoods: [...nutrition.userFoods, newFood] });
//  *
//  * // Multiple packs
//  * const [[{ nutrition, sleep }], updatePack] = usePackStates([
//  *   { packId: 'nutrition', initialState: { foods: [], userFoods: [], foodCombinations: [] } },
//  *   { packId: 'sleep', initialState: { hours: 0 } },
//  * ]);
//  * updatePack('nutrition', { foods: [...nutrition.foods, newFood] });
//  */



// src/context/PackContext.tsx
import React, {createContext, useContext, useReducer} from 'react';
import {Food, UserFood, FoodCombination} from '@/services/foodDataApiTypes';
import {FoodState} from '@/reducers/foodReducer';

/**
 * Each pack’s state shape goes here.
 */

export interface PackStateMap {
    "nutrition-core-pack": FoodState;
    // Add more pack IDs and their state shapes here
}

type PackId = keyof PackStateMap;

type PackAction =
    | {type: 'SET'; packId: PackId; value: PackStateMap[PackId]}
    | {type: 'UPDATE'; packId: PackId; patch: Partial<PackStateMap[PackId]>}
    | {type: 'REMOVE'; packId: PackId};

function packReducer(state: Partial<PackStateMap>, action: PackAction): Partial<PackStateMap> {
    switch (action.type) {
        case 'SET':
            return {
                ...state,
                [action.packId]: action.value
            };
        case 'UPDATE':
            return {
                ...state,
                [action.packId]: {...(state[action.packId] ?? {}), ...action.patch} as PackStateMap[typeof action.packId]
            };
        case 'REMOVE': {
            const {[action.packId]: _, ...rest} = state;
            return rest;
        }
        default:
            return state;
    }
}

const PackContext = createContext<{
    packs: Partial<PackStateMap>;
    setPack: (packId: PackId, value: PackStateMap[PackId]) => void;
    // Updates the state at the core pack id
    updatePack: (packId: PackId, patch: Partial<PackStateMap[PackId]>) => void;
    removePack: (packId: PackId) => void;
}>(null!);

export const PackProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [packs, dispatch] = useReducer(packReducer, {});

    const setPack = (packId: PackId, value: PackStateMap[PackId]) =>
        dispatch({type: 'SET', packId, value});

    const updatePack = (packId: PackId, patch: Partial<PackStateMap[PackId]>) =>
        dispatch({type: 'UPDATE', packId, patch});

    const removePack = (packId: PackId) =>
        dispatch({type: 'REMOVE', packId});

    return (
        <PackContext.Provider value={{packs, setPack, updatePack, removePack}}>
            {children}
        </PackContext.Provider>
    );
};

/**
 * Returns the entire map of packId → state, plus an update function.
 */
export function usePackStates() {
    const {packs, updatePack} = useContext(PackContext);
    return [packs, updatePack] as const;
}

/**
 * Returns a single pack’s state slice and set/update/remove functions.
 */
export function usePack<K extends PackId>(packId: K) {
    const {packs, setPack, updatePack, removePack} = useContext(PackContext);
    const packState = packs[packId] as PackStateMap[K] | undefined;

    return [
        packState,
        (value: PackStateMap[K]) => setPack(packId, value),
        (patch: Partial<PackStateMap[K]>) => updatePack(packId, patch),
        () => removePack(packId),
    ] as const;
}

/**
 * USAGE:
 * Wrap your app in <PackProvider>.
 *
 * // Read entire map + update any pack
 * const [allPackStates, updatePack] = usePackStates();
 * updatePack('nutrition', { foods: [...allPackStates.nutrition!.foods, newFood] });
 *
 * // Read and write a single pack
 * const [nutrition, setNutrition, updateNutrition, clearNutrition] = usePack('nutrition');
 * if (!nutrition) setNutrition({ foods: [], userFoods: [], foodCombinations: [] });
 * updateNutrition({ userFoods: [...nutrition.userFoods, newFood] });
 */
