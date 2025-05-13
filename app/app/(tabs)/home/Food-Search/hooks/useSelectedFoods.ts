import {useState, useCallback} from 'react';
import {ApiFood} from '@/services/foodDataApiTypes';

// Interface for food with edits
export interface EditedFood extends ApiFood {
    numServings?: number;
    // Add other editable fields as needed
}

export function useSelectedApiFoods() {
    // Store selected foods in a lookup table keyed by fdcId
    const [selectedMap, setSelectedMap] = useState<Record<string, EditedFood>>({});

    // Store edited foods (whether selected or not) in a separate map
    const [editedMap, setEditedMap] = useState<Record<string, EditedFood>>({});

    // Track which food is currently open in the detail view
    const [detailFood, setDetailFood] = useState<EditedFood | null>(null);

    /**
     * Returns an array of all currently selected foods
     */
    const selectedFoods = Object.values(selectedMap);

    /**
     * Check if a given ApiFood is selected
     */
    const isApiFoodSelected = useCallback((food: ApiFood) => Boolean(selectedMap[food.fdcId]), [selectedMap]);

    /**
     * Toggle selection: add with default servings=1 if not selected, otherwise remove
     */
    const toggleFood = useCallback((food: ApiFood) => {
        setSelectedMap(prev => {
            // If already selected, remove it from the selection
            if (prev[food.fdcId]) {
                const {[food.fdcId]: _, ...rest} = prev;
                return rest;
            }
            // Otherwise, add it with default servings=1
            // Use any existing edits if available, otherwise default to 1 serving
            const editedVersion = editedMap[food.fdcId] || {...food, numServings: 1};
            return {...prev, [food.fdcId]: editedVersion};
        });
    }, [editedMap]);



    /**
     * Open a food in the detail view (can be unselected)
     */
    const openDetail = useCallback((food: ApiFood) => {
        // Prioritize selected version, then edited version, then create new
        const foodToShow = selectedMap[food.fdcId] || editedMap[food.fdcId] || {...food, numServings: 1};
        setDetailFood(foodToShow);
    }, [selectedMap, editedMap]);

    /**
     * Update the currently viewed food and store its edits
     */
    const updateDetail = useCallback((edits: Partial<EditedFood>) => {
        if (!detailFood) return;

        // Update both the detail view and the edits map
        const updatedFood = {...detailFood, ...edits};
        setDetailFood(updatedFood);
        setEditedMap(prev => ({
            ...prev,
            [detailFood.fdcId]: updatedFood
        }));

        // If the food is selected, update the selection too
        if (selectedMap[detailFood.fdcId]) {
            setSelectedMap(prev => ({
                ...prev,
                [detailFood.fdcId]: updatedFood
            }));
        }
    }, [detailFood, selectedMap]);

    /**
     * Close the detail view without discarding edits
     */
    const closeDetail = useCallback(() => {
        setDetailFood(null);
    }, []);

    return {
        selectedFoods,    // Array of selected foods
        isApiFoodSelected,       // Check if a food is selected
        toggleFood,       // Toggle food selection
        detailFood,       // Currently viewed food (edited or original)
        openDetail,       // Open a food for viewing/editing
        updateDetail,     // Update the viewed food's details
        closeDetail,      // Close the detail view
        editedMap,        // All edited foods (for debugging or persistence)
    };
}