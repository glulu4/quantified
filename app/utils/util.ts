import * as Sentry from '@sentry/react-native';
import {log} from '@/types/logger';
import {Timestamp} from 'firebase/firestore';



type LogErrorParams = {
  error: unknown;  // Can be any type of error
  functionName: string;
  fileName: string;
  contextData?: Record<string, any>;  // Additional data
};

type HandleErrorParams = {
  error: unknown;
  functionName: string;
  fileName: string;
  msg: string;
  severity?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
  folder?: 'home' | 'graph' | 'firebase';
  contextData?: Record<string, any>;
};







export const handleError = ({
  error,
  functionName,
  fileName,
  msg,
  severity = 'error',
  folder,
  contextData = {},
}: HandleErrorParams) => {


  // Log error details to Sentry
  logErrorToSentry({
    error,
    functionName,
    fileName,
    contextData,
  });

  // Log error details to console with custom logger
  const logObject = {
    error: error instanceof Error ? error.message : String(error),
    functionName,
    msg,
    fileName,
    ...contextData,
  };
  log.error(logObject);
};


export const sum = (array: number[]) => {
  if (!array || array.length === 0) return 0;
  return array.reduce((prev, curr) => prev + curr, 0);
};

/**
 * 
 * @param0 Error
 * @param1 function name
 * @param2 file name
 * @param3 contextData
 * 
 * 
 */
export const logErrorToSentry = ({error, functionName, fileName, contextData = {}}: LogErrorParams) => {
  // Add a breadcrumb for context
  Sentry.addBreadcrumb({
    category: 'error',
    message: `Error in ${functionName} in ${fileName}`,
    data: {
      ...contextData, // Spread additional context data
    },
    level: "error",
  });

  // Capture the error with Sentry, including tags for function and file
  Sentry.captureException(error, {
    tags: {
      functionName,
      fileName,
    },
  });

  // Optionally log to the console for local debugging (optional)
  // console.log(`Error in ${functionName} (${fileName}):`, error);
};



export type SerializedTimestamp = {
  _seconds: number;
  _nanoseconds: number;
}

export function convertTimeStampObj2Date(timeStampObj: SerializedTimestamp): Date {
  const {_seconds: seconds, _nanoseconds: nanoseconds} = timeStampObj;
  const temporaryTimestamp = new Timestamp(seconds, nanoseconds);
  return temporaryTimestamp.toDate();
}

export function convertSerializedTimeStamp2TimeStamp(
  timeStampObj: SerializedTimestamp
): Timestamp {

  const {_seconds: seconds, _nanoseconds: nanoseconds} = timeStampObj;
  const temporaryTimestamp = new Timestamp(seconds, nanoseconds);
  return temporaryTimestamp;

}
