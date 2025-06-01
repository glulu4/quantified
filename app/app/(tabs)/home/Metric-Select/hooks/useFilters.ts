// import {useState, useMemo} from "react";
// import filter from "lodash.filter";
// import {
//     BodyPart,
//     Goal,
//     HealthCategory,
//     Interest,
//     Wellness,
//     TopLevelFilter
// } from "@/types/core-metric";
// import {metrics} from "@/list/core-metric-list";

import {CoreMetricList} from "@/list/coremetric-list";
import {MetricFilter} from "@/types/coremetric";
import {SubTag, SUBTAGS, Tag} from "@/types/tags";
import filter from "lodash.filter";
import {useMemo, useState} from "react";

// export type FilterCategory = Interest | BodyPart | Wellness | HealthCategory | Goal;

// /**
//  * Manages filtering logic for core metrics, including search and category selection.
//  */
// export const useFilters = () => {

//     const [selectedFilters, setSelectedFilters] = useState<FilterCategory[]>([]);
//     const [searchValue, setSearchValue] = useState<string>("");
//     const [defaultFilters, setDefaultFilters] = useState<FilterCategory[]>([
//         Interest.BodyComposition,
//         BodyPart.ShouldersArms,
//         HealthCategory.Sleep,
//         Goal.HabitTracking,
//         Wellness.MentalWellness,
//     ]);


//     /**
//      * Toggles the selection state of a filter category.
//      */
//     const toggleFilter = (category: FilterCategory) => {
//         setSelectedFilters((prev) =>
//             prev.includes(category)
//                 ? prev.filter((filter) => filter !== category)
//                 : [...prev, category]
//         );

//         // add the default filters to the selected filters
//         const inDefaultFilters = defaultFilters.some((filter) => filter === category);
//         // if its not in the default filters, add it to the default selection
//         if (!inDefaultFilters) {
//             setDefaultFilters((prev) => [category, ...prev]);
//         }
//     };

//     /**
//      * Checks if a filter is selected.
//      */
//     const isFilterSelected = (category: FilterCategory) => selectedFilters.includes(category);

//     /**
//      * Filters the list of metrics based on search and selected filters.
//      */
//     const filteredMetrics = useMemo(() => {
//         return filter(metrics, (metric) => {
//             // Search filtering (case insensitive)
//             const matchesSearch = metric.defaultTitle.toLowerCase().includes(searchValue.toLowerCase());

//             // Filter selection matching
//             const matchesFilter =
//                 selectedFilters.length === 0 || // Show all if no filters
//                 selectedFilters.some((filter) => Object.values(metric.filters).flat().includes(filter));

//             return matchesSearch && matchesFilter;
//         });
//     }, [metrics, searchValue, selectedFilters]);

//     return {
//         selectedFilters,
//         setSelectedFilters,
//         searchValue,
//         setSearchValue,
//         toggleFilter,
//         isFilterSelected,
//         filteredMetrics,
//         defaultFilters
//     };
// };

export const useFilters = () => {
    // const [selectedFilters, setSelectedFilters] = useState<FilterTag[]>([]);


    const [selectedSubTags, setSelectedSubTags] = useState<SubTag[]>([]);

    const [searchValue, setSearchValue] = useState<string>("");
    const [defaultSubTags, setDefaultSubTags] = useState<SubTag[]>([
        "Body Composition",
        'Hormone Health',
        'Nutrition & Hydration',
        'Brain',
        'Lungs',
        'Blood',
        'Hormones',
        'Dermatology',
        'Neurology',
        'Urology',
        'Physiological',
        'Symptoms',
        'Exercise & Movement',
        'Intellectual',
        "Pain Management",
        'Gut Health',
    ]);

    /**
     * Toggles the selection state of a filter tag.
     */
    const toggleSubTag = (subTag: SubTag) => {
        setSelectedSubTags((prev) => {
            const isAlreadySelected = prev.some(
                (curr) => curr === subTag
            );

            // If already selected, remove it; otherwise, add it
            if (isAlreadySelected) {
                return prev.filter(
                    (curr) => !(curr === subTag)
                );
            } else {
                return [...prev, subTag];
            }
        });

        // Add to default filters if not already present
        const inDefaultFilters = defaultSubTags.some(
            (curr) => curr === subTag
        );

        if (!inDefaultFilters) {
            setDefaultSubTags((prev) => [subTag, ...prev]);
        }
    };

    /**
     * Checks if a filter tag is selected.
     */
    const isSubTagSelected = (subtag: SubTag) => {
        return selectedSubTags.some(
            (curr) => curr === subtag
        );
    };

    /**
     * Removes a specific filter from selection.
     */
    const removeFilter = (subtag: SubTag) => {
        setSelectedSubTags((prev) =>
            prev.filter(
                (curr) => curr !== subtag
            )
        );
    };

    /**
     * Clears all selected filters.
     */
    const clearAllFilters = () => {
        setSelectedSubTags([]);
    };

    /**
     * Gets all selected subtags for a specific tag category.
     */
    const getSelectedSubtagsForTag = (tag: Tag) => {

        return SUBTAGS[tag];
    };

    /**
     * Filters the list of metrics based on search and selected filters.
     */
    const filteredMetrics = useMemo(() => {
        return filter(CoreMetricList, (metric) => {
            // Search filtering (case insensitive)
            const matchesSearch = metric.defaultTitle
                .toLowerCase()
                .includes(searchValue.toLowerCase());

            // Filter selection matching
            const matchesFilter =
                selectedSubTags.length === 0 || // Show all if no filters
                selectedSubTags.some((subTag) => {
                    // Assuming metric.tags is an array of FilterTag objects
                    // You'll need to adjust this based on your actual metric structure
                    return metric.filters.some(
                        (metricFilter: MetricFilter) =>
                            metricFilter.subtag === subTag
                    );
                });

            return matchesSearch && matchesFilter;
        });
    }, [CoreMetricList, searchValue, selectedSubTags]);



    return {

        searchValue,
        setSearchValue,
        toggleSubTag,
        isSubTagSelected,
        removeFilter,
        clearAllFilters,
        getSelectedSubtagsForTag,
        filteredMetrics,
        selectedSubTags,
        setSelectedSubTags,
        defaultSubTags,
        setDefaultSubTags,

    };
};