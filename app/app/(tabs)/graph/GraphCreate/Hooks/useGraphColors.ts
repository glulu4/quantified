// hooks/useGraphColors.ts
import {useState, useEffect, useMemo} from 'react';
import {GraphType, GraphHandle} from '@/types/graph';
import {Colors, defaultGraphColors, defaultPieGraphColors, GraphColor} from '@/constants/Colors';

/**
 * Hook to manage graph colors
 * @param graphRef Reference to the graph component
 * @param graphType Type of the graph
 */
export function useGraphColors(graphRef: React.RefObject<GraphHandle<any>>,
    graphType: GraphType) {
    const [selectedColors, setSelectedColors] = useState<GraphColor[]>([]);
    const dispatchLocalColors = "SET_COLORS";

    // Initialize selected colors from graph state
    useEffect(() => {
        if (graphRef.current) {
            const colors = graphRef.current.getState()?.colors ?? [];
            console.log("colors: ", colors);

            setSelectedColors(colors);
        }
    }, [graphRef.current]);

    /**
     * Handle color selection/deselection
     */
    const handleColorSelect = (color: GraphColor) => {
        if (!graphRef.current) {
            console.warn("graphRef.current is not initialized");
            return;
        }

        console.log("In handleColorSelect: ", color);




        if (isColorSelected(color)) {
            // Deselect color
            const newColors = selectedColors.filter(
                (selectedColor) => selectedColor.colorValue !== color.colorValue
            );
            console.log("newColors: ", newColors);
            graphRef.current?.dispatch({type: dispatchLocalColors, payload: newColors});
            setSelectedColors(newColors);
        }
        else {
            // Select color
            const newColors = [...selectedColors, color];
            console.log("newColors: ", newColors);
            graphRef.current?.dispatch({type: dispatchLocalColors, payload: newColors});
            setSelectedColors(newColors);

        }
        // let newColors = isColorSelected(color)
        //     ? selectedColors.filter(selectedColor => selectedColor !== color) // deselect
        //     : [...selectedColors, color]; // selecting



        // graphRef.current?.dispatch({type: dispatchLocalColors, payload: newColors});
        // setSelectedColors(newColors);
    };

    /**
     * Get default colors based on graph type
     */
    const getDefaultColors = () => {
        switch (graphType) {
            case GraphType.DonutGraph:
            case GraphType.PieGraph:
                return defaultPieGraphColors;

            case GraphType.BarGraph:
            case GraphType.LineGraph:
            case GraphType.DotLineGraph:
            case GraphType.SmoothLineGraph:
                return defaultGraphColors;

            default:
                return defaultGraphColors;
        }
    };

    const defaultColors = useMemo(() => getDefaultColors(), [graphType]);

    // const isColorSelected = (color: GraphColor) => {
    //     return selectedColors.includes(color);
    // };
    const isColorSelected = (color: GraphColor) => {
        return selectedColors.some(
            (selected) => selected.colorValue === color.colorValue
        );
    };


    return {
        selectedColors,
        handleColorSelect,
        defaultColors,
        isColorSelected
    };
}