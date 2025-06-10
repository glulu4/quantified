import {useState, useEffect, useCallback, useRef, RefObject} from 'react';
import {GraphData, GraphHandle, GraphRef, GraphSettings, xAxisLabelTypes} from '@/types/graph';
import {useGraph} from '@/app/context/GraphContext';
import {isWithinInterval, subDays, subMonths, subYears} from 'date-fns';
import Toast from 'react-native-toast-message';
import {convertTimeStampObj2Date, SerializedTimestamp} from '@/utils/util';

export enum GraphFilterOptions {
    Day = 'D',
    Week = 'W',
    Month = 'M',
    Year = 'Y',
    All = 'ALL',
}


export const useGraphTimeFilters = (graphRef: RefObject<GraphHandle<any>>) => {

    const {state, dispatch} = useGraph();
    const [segmentedIndex, setSegmentedIndex] = useState(2); // Default to 'Month'
    const [currentFilter, setCurrentFilter] = useState<GraphFilterOptions>(GraphFilterOptions.Month);
    const [xAxisLabel, setXAxisLabel] = useState('Date');

    function updateXAxisLabel(filterOption: GraphFilterOptions) {
        switch (filterOption) {
            case GraphFilterOptions.Day:
                setXAxisLabel(xAxisLabelTypes.Hour);
                break;
            case GraphFilterOptions.Week:
                setXAxisLabel(xAxisLabelTypes.Weekday);
                break;
            case GraphFilterOptions.Month:
                setXAxisLabel(xAxisLabelTypes.Date);
                break;
            // if the filter is by year, set the x-axis label to month
            case GraphFilterOptions.Year:
                setXAxisLabel(xAxisLabelTypes.Month);
                break;
            case GraphFilterOptions.All:
                setXAxisLabel(xAxisLabelTypes.Month);
                break;
        }
    }
    // Filter data based on the selected option
    const filterData = useCallback((filterOption: GraphFilterOptions): boolean => {
        let filteredPrimaryData: GraphData[] = [];
        let filteredSecondaryData: GraphData[] = [];
        const now = new Date();

        // Define filter predicates for different time ranges
        const filterPredicates = {
            [GraphFilterOptions.Day]: (date: Date) => isWithinInterval(date, {
                start: subDays(now, 1),
                end: now,
            }),
            [GraphFilterOptions.Week]: (date: Date) => isWithinInterval(date, {
                start: subDays(now, 7),
                end: now,
            }),
            [GraphFilterOptions.Month]: (date: Date) => isWithinInterval(date, {
                start: subMonths(now, 1),
                end: now,
            }),
            [GraphFilterOptions.Year]: (date: Date) => isWithinInterval(date, {
                start: subYears(now, 1),
                end: now,
            }),
            [GraphFilterOptions.All]: () => true,
        };

        const filterPredicate = filterPredicates[filterOption];

        // Apply filter to data
        const applyFilter = (data: GraphData[]): GraphData[] => {
            if (!data || data.length === 0) return [];

            return data.map((graphData) => {
                const filteredSubmissions = graphData.metricSubmissions.filter((submission) => {
                    const submissionDate = convertTimeStampObj2Date(submission.createdAt as unknown as SerializedTimestamp);
                    return submissionDate instanceof Date ? filterPredicate(submissionDate) : true;
                });

                return {
                    ...graphData,
                    metricSubmissions: filteredSubmissions,
                };
            });
        };


        // applying filter to original data
        filteredPrimaryData = applyFilter(state.originalGraphData);
        filteredSecondaryData = applyFilter(state.originalSecondaryGraphData);

        // Check if we have any data after filtering
        const hasData = filteredPrimaryData.some(data => data.metricSubmissions.length > 0) ||
            filteredSecondaryData.some(data => data.metricSubmissions.length > 0);

        if (!hasData) {
            Toast.show({
                type: 'error',
                text1: 'No Data',
                text2: `No data available for the selected time range`,
                position: 'top',
                visibilityTime: 3000,
                swipeable: true,
            });

            // Return original data if no filtered data is found
            return false;
        }

        // Update x-axis label based on the filter
        updateXAxisLabel(filterOption);

        // Dispatch filtered data
        dispatch({
            type: 'SET_SECONDARY_AND_PRIMARY_DATA',
            payload: {
                primary: filteredPrimaryData,
                secondary: filteredSecondaryData
            }
        });

        return true

    }, [state.originalGraphData, state.originalSecondaryGraphData, state.graphData, state.secondaryGraphData, dispatch]);

    // Handle segment control changes
    const handleSegmentChange = useCallback((index: number) => {
        setSegmentedIndex(index);
        const newFilter = Object.values(GraphFilterOptions)[index];
        setCurrentFilter(newFilter);
        filterData(newFilter);
    }, [filterData]);



    // const handleSegmentChange = useCallback((index: number) => {
    //     // Store current state as previous.
    //     prevFilterRef.current = currentFilter;
    //     prevSegmentedIndexRef.current = segmentedIndex;

    //     const newFilter = Object.values(GraphFilterOptions)[index];
    //     // Attempt to filter data with the new selection.
    //     const success = filterData(newFilter);
    //     console.log("Filter data success:", success, "for filter", newFilter);

    //     if (success) {
    //         // If filtering succeeds, update current state.
    //         setSegmentedIndex(index);
    //         setCurrentFilter(newFilter);
    //     } else {
    //         // If no data, revert to previous state.
    //         console.log("Reverting to previous filter state");

    //         setSegmentedIndex(prevSegmentedIndexRef.current);
    //         setCurrentFilter(prevFilterRef.current);
    //         // Optionally, reapply the previous filter.
    //         filterData(prevFilterRef.current);
    //     }
    // }, [currentFilter, segmentedIndex, filterData]);


    // Apply initial filter when component mounts
    useEffect(() => {

        // Apply default filter (ALL)
        filterData(GraphFilterOptions.Month);
    }, []);


    useEffect(() => {

        if (graphRef && typeof graphRef !== 'function' && graphRef.current) {
            // Dispatch the x-axis label to the graphRef
            // This assumes that the graphRef has a method to set the x-axis label
            // You may need to adjust this based on your actual graph library
            graphRef.current?.dispatch({type: 'SET_X_AXIS_LABEL', payload: xAxisLabel});
        }
    }, [xAxisLabel])


    return {
        segmentedIndex,
        currentFilter,
        xAxisLabel,
        handleSegmentChange,
        filterOptions: Object.values(GraphFilterOptions),
    };
};

