import {getMetricSubmissions, getMetricDefinitions} from "@/cloudfunctions/getFunctions";
import {LineGraphState} from "@/reducers/lineGraphReducer";
import {log} from "@/types/logger";
import {GraphData, GraphType} from "@/types/graph";
import {handleError, logErrorToSentry} from "@/utils/util";
import {startOfDay} from "date-fns";
import {MetricDefinition, MetricSubmission} from "@/types/formdefinition";



// // Helper function to get the correct graph view based on the graph type
// export const getGraphView = (graphType: GraphType): "LineGraphView" | "PieGraphView" | "BarGraphView" | null => {
//   switch (graphType) {
//     case GraphType.LineGraph:
//     case GraphType.DotLineGraph:
//     case GraphType.SmoothLineGraph:
//       return "LineGraphView";
//     case GraphType.PieGraph:
//     case GraphType.DonutGraph:
//       return "PieGraphView";
//     case GraphType.BarGraph:
//       return "BarGraphView";
//     default:
//       return null;
//   }
// };



/**
 * Retrieves graph data for a given set of metric definitions and a specified graph type.
 *
 * @param {MetricDefinition[]} metricDefs - An array of metric definitions to fetch data for.
 * @param {GraphType} graphType - The type of graph to associate with the data.
 * @returns {Promise<GraphData[]>} A promise that resolves to an array of graph data objects.
 *
 * @throws Will handle and log any errors that occur during the data retrieval process.
 * In case of an error, an empty array is returned.
 */
export async function generateGraphDataFromMetricDefs(metricDefs: MetricDefinition[], graphType: GraphType): Promise<GraphData[]> {
  try {
    const graphData: GraphData[] = await Promise.all(
      metricDefs.map(async (metricDef: MetricDefinition) => {

        let metricSubmissions: MetricSubmission[] = await getMetricSubmissions(metricDef.id);


        return {
          metricDefinition: metricDef, // Get the first definition as we fetch by ID
          metricSubmissions: metricSubmissions,
          graphType: graphType, // Use the provided graphType
        };
      })
    );

    return graphData;

  } catch (error) {
    handleError({
      error,
      msg: "Failed to create graph data array",
      fileName: 'graph/util',
      functionName: "generateGraphDataFromMetricDefs"
    })
    return []
  }
}


// /**
//  * 
//  * @param submissions metric submissions
//  * @returns returns submissions where the values are aggregated by date
//  */
// function aggregate(submissions: MetricSubmission[]): MetricSubmission[] {
//   const aggregatedMap = new Map<number, MetricSubmission>(); // Map to store submissions by date
//   const today = startOfDay(new Date()).getTime(); // Get today's start of the day timestamp

//   submissions.forEach((submission) => {
//     const date = startOfDay(convertTimeStampToDate(submission.createdAt) as Date).getTime();

//     if (date === today) return;

//     if (aggregatedMap.has(date)) {
//       const existingSubmission: MetricSubmission = aggregatedMap.get(date)!;
//       if (typeof existingSubmission.value === 'number') {
//         existingSubmission.value += submission.value as number;
//       }
//     } else {
//       aggregatedMap.set(date, {...submission});
//     }
//   });

//   return Array.from(aggregatedMap.values());
// }




/**
 * Returns the number of unique string submission values
 * from all metricSubmissions in the given graphData array.
 *
 * @param graphData - Array of GraphData
 * @returns number of unique submission values
 */
export function getNumUniqueSubmissions(graphData: GraphData[]): number {
  const uniqueValues = new Set<string>();

  graphData.forEach((data) => {
    if ('dropdownOptions' in data.metricDefinition) {
      data.metricSubmissions.forEach((submission) => {
        if (typeof submission.value === 'string') {
          uniqueValues.add(submission.value);
        }
      });
    }
  });

  return uniqueValues.size;
}






// Function to calculate the maximum values for each graph's data
export const calculateMax = (graphData: GraphData[]): number[] => {
  return graphData.map(data => {
    const values = data.metricSubmissions.map(submission => {
      if (typeof submission.value === 'object' && 'numerator' in submission.value) {
        return submission.value.numerator / submission.value.denominator;
      }
      return submission.value as number;
    });
    return Math.max(...values);
  });
};

// Function to calculate the minimum values for each graph's data
export const calculateMin = (graphData: GraphData[]): number[] => {
  return graphData.map(data => {
    const values = data.metricSubmissions.map(submission => {
      if (typeof submission.value === 'object' && 'numerator' in submission.value) {
        return submission.value.numerator / submission.value.denominator;
      }
      return submission.value as number;
    });
    return Math.min(...values);
  });
};

// Function to calculate the average values for each graph's data
export const calculateAverage = (graphData: GraphData[]): number[] => {
  return graphData.map(data => {
    const values = data.metricSubmissions.map(submission => {
      if (typeof submission.value === 'object' && 'numerator' in submission.value) {
        return submission.value.numerator / submission.value.denominator;
      }
      return submission.value as number;
    });
    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
  });
};

// Function to calculate the median values for each graph's data
export const calculateMedian = (graphData: GraphData[]): number[] => {
  try {
    return graphData.map(data => {
      const values = data.metricSubmissions.map(submission => {
        if (typeof submission.value === 'object' && 'numerator' in submission.value) {
          return submission.value.numerator / submission.value.denominator;
        }
        return submission.value as number;
      });
      values.sort((a, b) => a - b);
      const mid = Math.floor(values.length / 2);
      return values.length % 2 !== 0 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
    });
  } catch (error) {
    handleError({
      error,
      fileName: "graph/util",
      functionName: "calculateMedian",
      msg: "Error calculating median"
    })
    return []
  }

};

// Function to calculate the total values for each graph's data
export const calculateTotal = (graphData: GraphData[]): number[] => {
  return graphData.map(data => {
    const values = data.metricSubmissions.map(submission => {
      if (typeof submission.value === 'object' && 'numerator' in submission.value) {
        return submission.value.numerator / submission.value.denominator;
      }
      return submission.value as number;
    });
    return values.reduce((a, b) => a + b, 0);
  });
};



// /**
//   * 
//   * @param lineState saved line graph settings
//   * @return void: sets the graph states secondary data.
//   */
export const loadSecondaryDataSet = async (lineState: LineGraphState, graphType: GraphType): Promise<GraphData[]> => {

  try {
    if (lineState.secondDataSetIds && lineState.secondDataSetIds.length > 0) {
      const metricDefs: MetricDefinition[] = await getMetricDefinitions(lineState.secondDataSetIds);
      let secondaryGraphData: GraphData[] = await generateGraphDataFromMetricDefs(metricDefs, graphType);

      return secondaryGraphData;
    }
  } catch (error) {
    logErrorToSentry({
      error,
      functionName: 'loadSecondaryDataSet',
      fileName: '/graph/index.tsx',
    })
    log.error("error: ", error)
    console.error(error)
    return []
  }

  return []

}



