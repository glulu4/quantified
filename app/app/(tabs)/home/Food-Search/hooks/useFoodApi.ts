import {debounce, searchFood} from '@/services/foodDataApi';
import {ApiFood} from '@/services/foodDataApiTypes';
import {useState, useCallback, useEffect, useRef} from 'react';

export function useFoodApi() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [foodResults, setFoodResults] = useState<ApiFood[]>([]);
    const [foods, setFoods] = useState<ApiFood[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // Cache for storing previous search results
    const foodCache = useRef<Map<string, ApiFood[]>>(new Map());

    function isFoodSelected(food: ApiFood) {
        return foods.some((item) => item.fdcId === food.fdcId);
    }

    function toggleFood(food: ApiFood) {
        if (isFoodSelected(food)) {
            setFoods(foods.filter((item) => item.fdcId !== food.fdcId));
        } else {
            setFoods([...foods, food]);
        }
    }

    // Debounced search function with caching
    const fetchFoods = useCallback(
        debounce(async (query: string) => {
            if (!query.trim()) {
                setFoodResults([]); // Clear results when empty
                return;
            }

            // Check if search value is already in cache
            if (foodCache.current.has(query)) {
                setFoodResults(foodCache.current.get(query)!);
                return;
            }

            setLoading(true);
            const results = await searchFood(query, '');
            setFoodResults(results);
            foodCache.current.set(query, results); // Store results in cache
            setLoading(false);
        }, 500), // 500ms debounce delay
        []
    );

    // Trigger API call when searchValue changes
    useEffect(() => {
        fetchFoods(searchValue);
    }, [searchValue]);

    return {searchValue, setSearchValue, foodResults, loading, toggleFood, isFoodSelected};
}
