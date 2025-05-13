// // The Cloud Functions for Firebase SDK to set up triggers and logging.
// // const {onSchedule} = require("firebase-functions/v2/scheduler");
// import * as logger from "firebase-functions/logger";
// import {onSchedule} from "firebase-functions/v2/scheduler";
// import db from "./converter";
// import {NutritionFormDefinition} from "../../types/nutritionTypes";
// import * as functions from "firebase-functions";
// // The es6-promise-pool to limit the concurrency of promises.
// // const PromisePool = require("es6-promise-pool").default;
// // Maximum concurrent account deletions.
// // const MAX_CONCURRENT = 3;
// // Manually run the task here https://console.cloud.google.com/cloudscheduler

// exports.clearTodaysSubmissions = onSchedule("0 0 * * *", async () => {
//   try {
//     const formsSnapshot = await db.formDefinitions.get();

//     // Check if there are any documents
//     if (formsSnapshot.empty) {
//       logger.log("No documents found in the form collection");
//       return;
//     }

//     const forms = formsSnapshot.docs.map((doc) => (doc.data()));
//     for (const form of forms) {
//       if (form.formType === FormDefinitionType.NUTRITION) {
//         const formDefinition = form as NutritionFormDefinition;
//         formDefinition.todaysSubmissions = [];

//         // Update the Firestore document to clear `todaysSubmissions`
//         await db.formDefinitions.doc(form.id).set(
//           formDefinition, {merge: true});
//       }
//       logger.log(`Cleared ${form.id} nutrition forms 'todaysSubmissions`);
//     }
//   } catch (error) {
//     logger.info("error in getUserFormDefinitions: ", error);
//     throw new functions.https.HttpsError(
//       "internal",
//       "Unable to get user form defs",
//       error
//     );
//   }

//   // Use a pool so that we delete maximum `MAX_CONCURRENT` users in parallel.
//   // const promisePool = new PromisePool(
//   //   () => deleteInactiveUser(inactiveUsers),
//   //   MAX_CONCURRENT,
//   // );
//   // await promisePool.start();

//   logger.log("User cleanup finished");
// });
