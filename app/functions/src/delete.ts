import {onCall} from "firebase-functions/v2/https";
import * as functions from "firebase-functions";
import db from "./converter";
import * as logger from "firebase-functions/logger";
// import {removeFolderFromUser} from "./update";
import {Timestamp} from "firebase-admin/firestore";
import {getAuth} from "firebase-admin/auth";
import {
  MetricDefinition,
  MetricPackDefinition,
  Widget,
} from "../../types/formdefinition";


exports.deleteFormItemsForUpdate = onCall(async (request) => {
  const {
    formDefId,
    metricDefinitions,
    metricPackDefinitions,
    widgets,
  }: {
    formDefId: string;
    metricDefinitions: MetricDefinition[];
    metricPackDefinitions: MetricPackDefinition[];
    widgets: Widget[];
  } = request.data;

  try {
    const batch = db.firestore.batch();

    metricDefinitions.forEach((metricDefinition) => {
      const docRef = db.metricDefinitions.doc(metricDefinition.id);

      batch.update(docRef, {deletedAt: Timestamp.now()});
    });

    metricPackDefinitions.forEach((metricPackDefinition) => {
      const docRef = db.metricPacks.doc(metricPackDefinition.id);

      batch.update(docRef, {deletedAt: Timestamp.now()});
    });

    widgets.forEach((widget) => {
      const docRef = db.widgets(formDefId).doc(widget.id);
      batch.delete(docRef);
    });

    await batch.commit();
    return {
      message: "Deleted form items for update successfully",
      success: true,
    };
  } catch (error) {
    logger.info("error in deleteFormItemsForUpdate: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to delete form items for update",
      error
    );
  }
});

exports.deleteFormDefinition = onCall(async (request) => {
  const id: string = request.data;
  try {
    await db.formDefinitions.doc(id).delete({
      exists: true,
    });
    return {
      message: "Form Definition deleted successfully",
      success: true,
    };
  } catch (error) {
    logger.info("error in deleteFormDefinition: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to Delete Form Definition",
      error
    );
  }
});

// revise
// exports.deleteMetricDefinitions = onCall(async (request) => {
//   const ids: string[] = request.data;

//   if ( ids.length === 0 ) {
//     return {
//       message: "No metric definitions ids provided",
//       success: false,
//     };
//   }
//   try {
//     let total = 0;
//     await Promise.all(ids.map(async (id) => {
//       await db.metricDefinitions.doc(id).delete({
//         exists: true,
//       });
//       total += 1;
//     }));
//     return {
//       message: `Deleted ${total} out of ${ids.length} passed
//       in metric definitions`,
//       success: true,
//     };
//   } catch (error) {
//     logger.info("error in deleteMetricDefinitions: ", error);
//     throw new functions.https.HttpsError(
//       "internal",
//       "Unable to Delete Metric definitions",
//       error
//     );
//   }
// });

exports.deleteMetricDefinitions = onCall(async (request) => {
  const ids: string[] = request.data;

  if (ids.length === 0) {
    return {
      message: "No metric definition IDs provided",
      success: false,
    };
  }

  try {
    let total = 0;
    await Promise.all(
      ids.map(async (id) => {
        const docRef = db.metricDefinitions.doc(id);
        const docSnapshot = await docRef.get();

        if (!docSnapshot.exists) {
          throw new Error(`Metric definition with ID ${id} does not exist.`);
        }

        // Only update if deletedAt does not exist
        if (!docSnapshot.data()?.deletedAt) {
          await docRef.update({
            deletedAt: Timestamp.now(),
          });
          total += 1;
        }
      })
    );

    return {
      message: `Soft deleted ${total} out
      of ${ids.length} provided metric definitions.`,
      success: true,
    };
  } catch (error) {
    functions.logger.error("Error in deleteMetricDefinitions: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to soft delete metric definitions",
      error
    );
  }
});


// exports.deleteFolder = onCall(async (request) => {
//   const folder: Folder = request.data;
//   if (!folder || !folder.uid || !folder.id) {
//     throw new functions.https.HttpsError(
//       "invalid-argument",
//       "Folder must have a valid uid and id."
//     );
//   }
//   try {
//     await db.folders(folder.uid).doc(folder.id).delete({
//       exists: true,
//     });

//     await removeFolderFromUser(folder.uid, folder.id);
//     return {
//       message: "Folder deleted successfully",
//       success: true,
//     };
//   } catch (error) {
//     logger.info("error in deleteFolder: ", error);
//     throw new functions.https.HttpsError(
//       "internal",
//       "Unable to delete graph",
//       error
//     );
//   }
// });


exports.deleteGraph = onCall(async (request) => {
  const graphId: string = request.data;

  try {
    await db.graphs.doc(graphId).delete({
      exists: true,
    });
    return {
      message: "Graph deleted successfully",
      success: true,
    };
  } catch (error) {
    logger.info("error in deleteGraph: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to delete graph",
      error
    );
  }
});

exports.deleteUser = onCall(async (request) => {
  const uid: string = request.data;

  if (!uid) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "User id must be provided"
    );
  }

  try {
    await getAuth().deleteUser(uid);
    await db.users.doc(uid).update({deletedAt: Timestamp.now()});
    return {
      message: "User deleted successfully",
      success: true,
    };
  } catch (error) {
    logger.error("error in deleteUser: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to delete user",
      error
    );
  }
});

exports.deleteNutritionItem = onCall(async (request) => {
  const {
    uid,
    itemId,
    itemType,
  }: {uid: string; itemId: string; itemType: 'food' | 'userFood' | 'foodCombination'} = request.data;

  if (!uid || !itemId || !itemType) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'uid, itemId and itemType must be provided'
    );
  }

  try {
    let collectionRef;
    switch (itemType) {
      case 'food':
        collectionRef = db.foods(uid);
        break;
      case 'userFood':
        collectionRef = db.userFoods(uid);
        break;
      case 'foodCombination':
        collectionRef = db.foodCombinations(uid);
        break;
      default:
        throw new functions.https.HttpsError(
          'invalid-argument',
          'Unknown itemType'
        );
    }

    await collectionRef.doc(itemId).delete({exists: true});

    return {
      message: 'Nutrition item deleted successfully',
      success: true,
    };
  } catch (error) {
    logger.error('error in deleteNutritionItem: ', error);
    throw new functions.https.HttpsError(
      'internal',
      'Unable to delete nutrition item',
      error
    );
  }
});
