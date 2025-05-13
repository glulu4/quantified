import {ThemedText} from "@/components/ui/ThemedText";
import {Fraction, MetricSubmission} from "@/types/formdefinition";
import {xAxisLabelTypes} from "@/types/graph";
import {convertSerializedTimeStamp2TimeStamp, convertTimeStampObj2Date, handleError, SerializedTimestamp} from "@/utils/util";
import {compareAsc, format, startOfDay, startOfMonth, startOfWeek} from "date-fns";
import {View} from "react-native";
import {lineDataItem} from "react-native-gifted-charts";



/**
 * Sorts an array of metric submissions in ascending order based on their creation date.
 *
 * @param metricSubmissions - An array of MetricSubmission objects to be sorted.
 * @returns A new array of MetricSubmission objects sorted by their createdAt timestamp.
 */
function sortSubmissions(metricSubmissions: MetricSubmission[]): MetricSubmission[] {
  return [...metricSubmissions].sort((a, b) => {
    const dateA = convertTimeStampObj2Date(a.createdAt as unknown as SerializedTimestamp) || new Date();
    const dateB = convertTimeStampObj2Date(b.createdAt as unknown as SerializedTimestamp) || new Date();
    return compareAsc(dateA, dateB);
  });
}
/**
 * Extracts the numeric value and its textual representation from a MetricSubmission.
 * Handles both numeric and fractional values.
 *
 * @param submission - The MetricSubmission object.
 * @returns An object containing the numeric value and its textual representation.
 */
const getValueAndText = (submission: MetricSubmission): {value: number; text: string} => {
  if (typeof submission.value === "number") {
    return {
      value: submission.value,
      text: String(submission.value),
    };
  } else {
    const fraction = submission.value as Fraction;
    return {
      value: fraction.numerator / fraction.denominator,
      text: `${fraction.numerator}/${fraction.denominator}`,
    };
  }
};

/**
 * Generates a label for the x-axis based on the submission's timestamp and the label type.
 *
 * @param submission - The MetricSubmission object.
 * @param index - The index of the submission in the dataset.
 * @param xAxisLabelType - The type of label to generate (e.g., Hour, Date, Weekday).
 * @returns A string representing the label.
 */
function getLabel(submission: MetricSubmission, index: number, xAxisLabelType: xAxisLabelTypes): string {
  try {
    const submissionDate: Date = convertTimeStampObj2Date(submission.createdAt as unknown as SerializedTimestamp);

    if (!submissionDate) {
      console.log("Invalid submission date:", submission.createdAt);

      throw new Error("Invalid submission date");

    }

    switch (xAxisLabelType) {
      case xAxisLabelTypes.Hour:
        return format(submissionDate, "h a");
      case xAxisLabelTypes.Date:
        return format(submissionDate, "M/d/yy");
      case xAxisLabelTypes.Index:
        return `${index}`;
      case xAxisLabelTypes.Weekday:
        return format(submissionDate, "eee");
      case xAxisLabelTypes.Month:
        return format(submissionDate, "MMM");
      case xAxisLabelTypes.None:
        return "";
      default:
        return `${index}`;
    }
  } catch (error) {
    console.error("Error generating label:", error);
    return "";
  }
}

// /**
//  * Prepares data for a line chart, specifically for fractional values.
//  *
//  * @param metricSubmissions - An array of MetricSubmission objects.
//  * @param xAxisLabelType - The type of label to generate for the x-axis.
//  * @returns An array of lineDataItem objects for the chart.
//  */
// export const prepareFractionData = (metricSubmissions: MetricSubmission[], xAxisLabelType: xAxisLabelTypes): lineDataItem[] => {
//   try {
//     return metricSubmissions.map((submission: MetricSubmission, index: number) => {
//       const {value, text} = getValueAndText(submission);
//       const label = getLabel(submission, index, xAxisLabelType);

//       return {
//         value,
//         label,
//         dataPointText: text,
//       };
//     });
//   } catch (error) {
//     console.error("Error preparing fraction data:", error);
//     return [];
//   }
// };

function normalizeSubmission(submission: MetricSubmission): MetricSubmission {
  if (typeof submission.value !== "number") {
    if (typeof submission.value === "string" && !isNaN(parseFloat(submission.value))) {
      submission.value = parseFloat(submission.value);
    } else {
      throw new Error(`Invalid value for submission with ID ${submission.id}: ${submission.value}`);
    }
  }
  return submission;
}

/**
 * Prepares data for a line chart, handling both numeric and fractional values.
 * Sorts submissions if the x-axis label type requires chronological order.
 *
 * @param metricSubmissions - An array of MetricSubmission objects.
 * @param xAxisLabelType - The type of label to generate for the x-axis.
 * @returns An array of lineDataItem objects for the chart.
 */
export const prepareData = (metricSubmissions: MetricSubmission[], xAxisLabelType: xAxisLabelTypes): lineDataItem[] => {

  try {
    // Sort submissions if the x-axis label type requires chronological order
    if ([xAxisLabelTypes.Date, xAxisLabelTypes.Weekday].includes(xAxisLabelType)) {
      metricSubmissions = sortSubmissions(metricSubmissions);
    }

    if ([xAxisLabelTypes.Month, xAxisLabelTypes.Weekday].includes(xAxisLabelType)) {
      metricSubmissions = aggregateSubmissions(metricSubmissions, xAxisLabelType);
    }

    const data: lineDataItem[] = metricSubmissions.map((submission: MetricSubmission, index: number) => {
      const normalizedSubmission = normalizeSubmission(submission);

      const {value, text} = getValueAndText(normalizedSubmission);
      const label = getLabel(normalizedSubmission, index, xAxisLabelType);

      return {
        value,
        label,
        dataPointText: text,
        focusedDataPointLabelComponent: () => (
          <View
            className="bg-black p-5 rounded-lg w-full"
          >
            <ThemedText style={{color: "white"}}>{`${submission.value}`}</ThemedText>
          </View>
        ),
      };
    });

    return data;
  } catch (error) {
    handleError({
      error,
      msg: "Error preparing data",
      fileName: "formatData.tsx",
      functionName: "prepareData",
    })
    return [];
  }
};



function aggregateSubmissions(metricSubmissions: MetricSubmission[], xAxisLabelType: xAxisLabelTypes): MetricSubmission[] {
  // Sort submissions by date to ensure consistent grouping
  const sortedSubmissions = sortSubmissions(metricSubmissions);

  // Map to store aggregated data: key is the time period (as a string), value is the aggregated submission
  const aggregatedMap: {[key: string]: MetricSubmission} = {};

  sortedSubmissions.forEach((submission) => {
    const date = convertTimeStampObj2Date(submission.createdAt as unknown as SerializedTimestamp);
    if (!date) return;

    // Determine the time period key based on the filter
    let periodKey: string = "";
    let periodDate: Date;

    switch (xAxisLabelType) {
      case xAxisLabelTypes.Month:
        periodDate = startOfMonth(date);
        periodKey = periodDate.toISOString();
        break;

      case xAxisLabelTypes.Weekday: // Consider renaming this to Week if it represents a full week grouping
        periodDate = startOfWeek(date, {weekStartsOn: 1}); // Monday
        periodKey = periodDate.toISOString();
        break;

      default:
        // If no specific grouping is required, use the day-level precision
        periodKey = startOfDay(date).toISOString();
    }

    const normalizedSubmission = normalizeSubmission(submission);
    const {value} = getValueAndText(normalizedSubmission);

    if (!aggregatedMap[periodKey]) {
      // Initialize the aggregated submission for this period
      aggregatedMap[periodKey] = {
        ...submission,
        value: 0, // Initialize the value to sum up from scratch
      };
    }

    // Sum the values for this time period
    aggregatedMap[periodKey].value = (aggregatedMap[periodKey].value as number) + value;
  });

  // Convert the map to an array and sort by date
  return Object.values(aggregatedMap).sort((a, b) => {
    const dateA = convertTimeStampObj2Date(a.createdAt as unknown as SerializedTimestamp) || new Date();
    const dateB = convertTimeStampObj2Date(b.createdAt as unknown as SerializedTimestamp) || new Date();
    return compareAsc(dateA, dateB);
  });
}
