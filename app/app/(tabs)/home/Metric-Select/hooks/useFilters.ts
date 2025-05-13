import {useState, useMemo} from "react";
import filter from "lodash.filter";
import {
    BodyPart,
    Goal,
    HealthCategory,
    Interest,
    Wellness,
    TopLevelFilter
} from "@/types/core-metric";
import {metrics} from "@/list/core-metric-list";

export type FilterCategory = Interest | BodyPart | Wellness | HealthCategory | Goal;

/**
 * Manages filtering logic for core metrics, including search and category selection.
 */
export const useFilters = () => {

    // const topFilters = [
    //     Interest.BodyComposition,
    //     BodyPart.ShouldersArms,
    //     HealthCategory.Sleep,
    //     Goal.HabitTracking,
    //     Wellness.MentalWellness,
    // ];

    const [selectedFilters, setSelectedFilters] = useState<FilterCategory[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [defaultFilters, setDefaultFilters] = useState<FilterCategory[]>([
        Interest.BodyComposition,
        BodyPart.ShouldersArms,
        HealthCategory.Sleep,
        Goal.HabitTracking,
        Wellness.MentalWellness,
    ]);


    /**
     * Toggles the selection state of a filter category.
     */
    const toggleFilter = (category: FilterCategory) => {
        setSelectedFilters((prev) =>
            prev.includes(category)
                ? prev.filter((filter) => filter !== category)
                : [...prev, category]
        );

        // add the default filters to the selected filters
        const inDefaultFilters = defaultFilters.some((filter) => filter === category);
        // if its not in the default filters, add it to the default selection
        if (!inDefaultFilters) {
            setDefaultFilters((prev) => [category, ...prev]);
        }
    };

    /**
     * Checks if a filter is selected.
     */
    const isFilterSelected = (category: FilterCategory) => selectedFilters.includes(category);

    /**
     * Filters the list of metrics based on search and selected filters.
     */
    const filteredMetrics = useMemo(() => {
        return filter(metrics, (metric) => {
            // Search filtering (case insensitive)
            const matchesSearch = metric.defaultTitle.toLowerCase().includes(searchValue.toLowerCase());

            // Filter selection matching
            const matchesFilter =
                selectedFilters.length === 0 || // Show all if no filters
                selectedFilters.some((filter) => Object.values(metric.filters).flat().includes(filter));

            return matchesSearch && matchesFilter;
        });
    }, [metrics, searchValue, selectedFilters]);

    return {
        selectedFilters,
        setSelectedFilters,
        searchValue,
        setSearchValue,
        toggleFilter,
        isFilterSelected,
        filteredMetrics,
        defaultFilters
    };
};
