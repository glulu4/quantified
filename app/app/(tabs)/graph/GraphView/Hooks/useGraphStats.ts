// import {useState, useEffect} from 'react'
// import {GraphData, GraphType} from '@/types/graph'
// import {calculateAverage, calculateMax, calculateMedian, calculateMin, calculateTotal} from '../../utils/util'
// import {isALineGraph} from '../../GraphCreate/Util/graph-type-util'

// // Define types to match StatsDisplay component
// export type StatItem = {
//     value: string | number;
//     label: string;
// }

// export const useGraphStats = (
//     graphType: GraphType,
//     graphData: GraphData[],
//     secondaryGraphData: GraphData[]
// ) => {
//     const [avg, setAvg] = useState<number[]>()
//     const [min, setMin] = useState<number[]>()
//     const [max, setMax] = useState<number[]>()
//     const [median, setMedian] = useState<number[]>()
//     const [total, setTotal] = useState<number[]>()

//     // Raw metric titles
//     const metricDefTitles: string[] = [
//         ...graphData.map(gd => gd.metricDefinition.metricTitle),
//         ...secondaryGraphData.map(gd => gd.metricDefinition.metricTitle)
//     ]

//     // Stats formatted for the StatsDisplay component
//     const [statsForDisplay, setStatsForDisplay] = useState<StatItem[]>([])

//     useEffect(() => {
//         if (isALineGraph(graphType)) {
//             const combinedData: GraphData[] = [...graphData, ...secondaryGraphData]
//             setMax(calculateMax(combinedData))
//             setMin(calculateMin(combinedData))
//             setAvg(calculateAverage(combinedData))
//             setMedian(calculateMedian(combinedData))
//             setTotal(calculateTotal(combinedData))
//         }
//     }, [graphData, secondaryGraphData, graphType])

//     // Process stats for display whenever the calculated values change
//     useEffect(() => {
//         // Only create display stats when we have data
//         if (graphData.length === 0) return

//         const displayStats: StatItem[] = []

//         // Add overall stats (for the first metric or aggregated)
//         if (max?.[0] !== undefined) {
//             displayStats.push({value: `${max[0].toFixed(1)}`, label: 'Max'})
//         }

//         if (median?.[0] !== undefined) {
//             displayStats.push({value: `${median[0].toFixed(1)}`, label: 'Median'})
//         }

//         if (avg?.[0] !== undefined) {
//             displayStats.push({value: `${avg[0].toFixed(1)}`, label: 'Average'})
//         }

//         if (min?.[0] !== undefined) {
//             displayStats.push({value: `${min[0].toFixed(1)}`, label: 'Min'})
//         }

//         if (total?.[0] !== undefined) {
//             displayStats.push({value: `${total[0].toFixed(1)}`, label: 'Total'})
//         }

//         setStatsForDisplay(displayStats)
//     }, [max, min, avg, median, total, graphData])



//     return {
//         // Original raw data
//         avg,
//         min,
//         max,
//         median,
//         total,
//         metricDefTitles,

//         // Formatted data ready for StatsDisplay
//         statsForDisplay,

//         // Detailed stats by metric
//     }
// }


import {useState, useEffect} from 'react'
import {GraphData, GraphType} from '@/types/graph'
import {
    calculateAverage,
    calculateMax,
    calculateMedian,
    calculateMin,
    calculateTotal
} from '../../utils/util'
import {isALineGraph} from '../../GraphCreate/Util/graph-type-util'
import {useGraph} from '@/app/context/GraphContext'

// Type for display stats
export type StatItem = {
    value: string | number
    label: string
}

export const useGraphStats = (
    graphType: GraphType,
    graphData: GraphData[],
    secondaryGraphData: GraphData[]
) => {
    const {state} = useGraph();
    const [avg, setAvg] = useState<number[]>([])
    const [min, setMin] = useState<number[]>([])
    const [max, setMax] = useState<number[]>([])
    const [median, setMedian] = useState<number[]>([])
    const [total, setTotal] = useState<number[]>([])
    const [statsForDisplay, setStatsForDisplay] = useState<StatItem[]>([])

    // Titles of all metrics in both primary and secondary graph data
    const metricDefTitles: string[] = [
        ...graphData.map((gd) => gd.metricDefinition.metricTitle),
        ...secondaryGraphData.map((gd) => gd.metricDefinition.metricTitle)
    ]

    // Calculate stats only if graph is a line graph
    useEffect(() => {
        if (isALineGraph(graphType)) {
            const combinedData: GraphData[] = [...graphData, ...secondaryGraphData]

            setMax(calculateMax(combinedData))
            setMin(calculateMin(combinedData))
            setAvg(calculateAverage(combinedData))
            setMedian(calculateMedian(combinedData))
            setTotal(calculateTotal(combinedData))
        }
    }, [graphData, secondaryGraphData, graphType])

    // Format stats for display when raw stats update
    useEffect(() => {
        if (graphData.length === 0) return

        const displayStats: StatItem[] = []

        if (typeof max[0] === 'number') {
            displayStats.push({value: max[0].toFixed(1), label: 'Max'})
        }

        if (typeof median[0] === 'number') {
            displayStats.push({value: median[0].toFixed(1), label: 'Median'})
        }

        if (typeof avg[0] === 'number') {
            displayStats.push({value: avg[0].toFixed(1), label: 'Average'})
        }

        if (typeof min[0] === 'number') {
            displayStats.push({value: min[0].toFixed(1), label: 'Min'})
        }

        if (typeof total[0] === 'number') {
            displayStats.push({value: total[0].toFixed(1), label: 'Total'})
        }

        setStatsForDisplay(displayStats)
    }, [graphData, max, min, avg, median, total])

    return {
        // Raw calculated stats
        avg,
        min,
        max,
        median,
        total,
        metricDefTitles,

        // Display-ready formatted stats
        statsForDisplay
    }
}
