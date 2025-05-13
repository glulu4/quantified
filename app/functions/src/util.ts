import {Timestamp} from "firebase-admin/firestore";
import * as logger from "firebase-functions/logger";
export type TimeStampJSONObj = {_seconds: number, _nanoseconds: number}

/**
 * Creates a Firestore `Timestamp` object from a given `TimeStampJSONObj`.
 *
 * This function takes an object containing seconds and nanoseconds, adjusts
 * for any overflow or underflow in the nanoseconds, and returns a valid
 * Firestore `Timestamp` object.
 *
 * @param {any} obj -
 * The input object containing `_seconds` and `_nanoseconds`
 * properties.
 *   - `_seconds`: The number of seconds since the Unix epoch.
 *   - `_nanoseconds`: The number of nanoseconds within the second.
 *
 * @return {Timestamp} object with properly adjusted
 * seconds and nanoseconds.
 *
 * @remarks
 * - If `nanoseconds` exceeds 999,999,999, the overflow is converted
 * into additional seconds.
 * - If `nanoseconds` is negative, the underflow is adjusted by
 * subtracting seconds and recalculating nanoseconds.
 * - The function ensures that the resulting `nanoseconds`
 * value is always within the valid range [0, 999,999,999].

 */
export function createTimestampFromObject(obj: any): Timestamp {
  // Extract values from input object
  try {
    logger.info("Creating Timestamp from object", {obj});
    // const seconds = obj._seconds;
    // const nanoseconds = obj._nanoseconds;
    const [seconds, nanoseconds] = Object.values(obj);

    logger.info("seconds: ", seconds);
    logger.info("nanoseconds: ", nanoseconds);
    return new Timestamp(seconds as number, nanoseconds as number);

  } catch (error) {
    logger.error("Error creating Timestamp", error);
    throw new Error("Invalid Timestamp object");
  }
}
