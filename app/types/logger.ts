// loggerConfig.js
import {logger, consoleTransport} from "react-native-logs";
// import RNFS from "react-native-fs"; // Uncomment if you want to use file transport later
// import * as Sentry from "@sentry/react-native"; // Uncomment if you want to use Sentry transport later

const config = {
  levels: {

    info: 0,
    debug: 2,
    warn: 3,
    error: 4,
    fatal: 5,
  },
  severity: "trace",
  transport: consoleTransport, // default to console transport
  // transport: [
  //   consoleTransport,
  //   fileAsyncTransport, // Uncomment if you want to use file transport
  //   sentryTransport, // Uncomment if you want to use Sentry transport
  // ],
  transportOptions: {
    colors: {
      info: "cyan",
      debug: "cyan",
      warn: "yellowBright",
      error: "magenta",
      fatal: 'red',
    },
    // FS: RNFS, // Required for file transport
    // SENTRY: Sentry, // Required for Sentry transport
  },
};

const log = logger.createLogger<"trace" | "debug" | "info" | "warn" | "error" | "fatal">(config);

// Creating extensions
const firebaseLog = log.extend("Firebase");
const homeLog = log.extend("Home");
const chartLog = log.extend("Chart");

// Exporting both the base logger and extensions
export {log, firebaseLog, homeLog, chartLog};
