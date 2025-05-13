import * as functions from "firebase-functions";
import {
  Graph,
} from "../../types/graph";
import {
  FormDefinition,
  MetricDefinition,
  // MetricPackDefinition,
  // Widget,
  // MetricPackDefinition,
  // MetricSubmission,
  // Widget,

} from "../../types/formdefinition";
import db from "./converter";
import {onCall} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {
  CollectionReference,
  DocumentReference,
  FieldValue,
  Timestamp,
  WriteBatch,
} from "firebase-admin/firestore";
import {createTimestampFromObject, TimeStampJSONObj} from "./util";

exports.updateFormItems = onCall(async (request) => {
  const {formDefinition,
    metricDefinitions,
    metricPackDefinitions,
    widgets,
  } = request.data;

  if (!formDefinition || !formDefinition.id) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "FormDefinition must have a valid id."
    );
  }

  const batch = db.firestore.batch();

  try {
    addItemsToBatch(batch,
      db.formDefinitions.doc(formDefinition.id), formDefinition);
    addItemsToBatch(batch, db.metricDefinitions, metricDefinitions);
    addItemsToBatch(batch, db.metricPacks, metricPackDefinitions);
    addItemsToBatch(batch, db.widgets(formDefinition.id), widgets);

    await batch.commit(); // Commit the batch write
    return {
      message: "Successfully updated form items",
      success: true,
    };
  } catch (error) {
    logger.info("error in updateFormItems: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to update form items",
      error
    );
  }
});

/**
 * Adds items to a Firestore batch with timestamps.
 *
 * @template T - The type of the items to be added to the batch.
 * @param {WriteBatch} batch
 * - The Firestore write batch to which the items will be added.
 * @param {CollectionReference |
 * DocumentReference} collectionRef
 * - The Firestore collection or document reference.
 * @param {T[] | T} items - The items to be added to the batch.
 * Can be a single item or an array of items.
 */
function addItemsToBatch<T>(
  batch: WriteBatch,
  collectionRef: CollectionReference |
    DocumentReference,
  items: T[] | T
) {
  try {
    if (!Array.isArray(items)) {
      // If only a single object is provided, convert it into an array
      items = [items];
    }

    for (const item of items) {
      const itemWithTimestamps = {
        ...item,
        updatedAt: Timestamp.now(),
        createdAt: createTimestampFromObject(
          (item as any).createdAt as unknown as TimeStampJSONObj),
      };

      // Get document reference
      const docRef =
        collectionRef instanceof CollectionReference ?
          collectionRef.doc((item as any).id) :
          collectionRef;

      batch.set(docRef, itemWithTimestamps, {merge: true});
    }
  } catch (error) {
    logger.info("error in addItemsToBatch: ", error);
    throw error;
  }
}

exports.updateMetricDefinitions = onCall(async (request) => {
  const metricDefinitions: MetricDefinition[] = request.data;

  if (metricDefinitions.length === 0) {
    return {
      message: "metricDefinitions has length 0",
      success: false,
    };
  }

  const batch = db.firestore.batch();
  let total = 0;
  try {
    for (const metricDefinition of metricDefinitions) {
      metricDefinition.createdAt = createTimestampFromObject(
        metricDefinition.createdAt as unknown as TimeStampJSONObj
      );
      const docRef = db.metricDefinitions.doc(metricDefinition.id);
      batch.set(docRef, metricDefinition, {merge: true});
      total += 1;
    }
    await batch.commit(); // Commit the batch write
    return {
      message: `Successfully added ${total} out of 
      ${metricDefinitions.length} metric definitions`,
      success: true,
    };
  } catch (error) {
    logger.info("error in updateMetricDefinitions: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to update metric definitions",
      error
    );
  }
});

exports.updateFormDefinition = onCall(async (request) => {
  const formDefinition: Partial<FormDefinition> = request.data;
  if (!formDefinition || !formDefinition.id) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "FormDefinition must have a valid id."
    );
  }
  formDefinition.updatedAt = Timestamp.now();
  if (formDefinition.createdAt) {
    formDefinition.createdAt = createTimestampFromObject(
      formDefinition.createdAt as unknown as TimeStampJSONObj
    );
  }
  // formDefinition.createdAt = new Timestamp(
  //   formDefinition.createdAt?.seconds || 0,
  //   formDefinition.createdAt?.nanoseconds || 0);
  try {
    await db.formDefinitions.doc(formDefinition.id)
      .update(formDefinition);
    return {
      message: "Successfully updated form definition",
      success: true,
    };
  } catch (error) {
    logger.info("error in updateFormDefinition: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to update form definition",
      error
    );
  }
});

// exports.updateFolder = onCall(async (request) => {
//   const folder: Partial<Folder> = request.data;
//   if (!folder || !folder.id || !folder.uid) {
//     throw new functions.https.HttpsError(
//       "invalid-argument",
//       "FormDefinition must have a valid id and uid."
//     );
//   }
//   folder.updatedAt = Timestamp.now();

//   if (folder.createdAt) {
//     folder.createdAt = createTimestampFromObject(
//       folder.createdAt as unknown as TimeStampJSONObj
//     );
//   }

//   try {
//     await db.folders(folder.uid).doc(folder.id).update(folder);
//     return {
//       message: "Successfully updated folder",
//       success: true,
//     };
//   } catch (error) {
//     logger.info("error in updateFormDefinition: ", error);
//     throw new functions.https.HttpsError(
//       "internal",
//       "Unable to update form definition",
//       error
//     );
//   }
// });

exports.updateGraph = onCall(async (request) => {
  const graph: Graph = request.data;
  if (!graph || !graph.id) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "graph must have a valid id."
    );
  }

  const partialGraph: Partial<Graph> = {
    ...graph,
    updatedAt: Timestamp.now(),
    createdAt: createTimestampFromObject(
      graph.createdAt as unknown as TimeStampJSONObj),
  };

  logger.log("graph: ", partialGraph);
  try {
    await db.graphs.doc(graph.id).update(partialGraph);
    // await db.graphs.doc(graph.id)
    //   .set(graph, {merge: true});
    return {
      message: "Successfully updated graph",
      success: true,
    };
  } catch (error) {
    logger.info("error in updateGraph: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to update graph",
      error
    );
  }
});
// Firestore should be initialized elsewhere in your app
export const incrementSubmissionCountAndDate = async (formId: string) => {
  const formRef = db.formDefinitions.doc(formId);

  try {
    await formRef.set({
      submissionCount: FieldValue.increment(1),
      lastSubmission: FieldValue.serverTimestamp(),
    }, {merge: true});

    console.log(`Successfully incremented 
      submission count for form: ${formId}`);
  } catch (error) {
    console.error(`Failed to increment 
      submission count for form: ${formId}`, error);
    throw new Error("Unable to increment submission count");
  }
};

export const updateGraphViewCountAndDate = onCall(async (request) => {
  const graphId: string = request.data;

  const graphRef = db.graphs.doc(graphId);

  try {
    await graphRef.set({
      viewCount: FieldValue.increment(1),
      lastView: FieldValue.serverTimestamp(),
    }, {merge: true});


    return {
      message: "Successfully updated graph stats",
      success: true,
    };
  } catch (error) {
    console.error(`Failed to view count and last view
       for graph: ${graphId}`, error);
    throw new Error("Unable to increment graph view count");
  }
});

export const removeFolderFromUser = async (uid: string, folderId: string) => {
  try {
    const userDocRef = db.users.doc(uid);

    await userDocRef.update({
      folders: FieldValue.arrayRemove(folderId),
    });

    logger.info(`Folder ID ${folderId} successfully removed from user ${uid}`);
  } catch (error) {
    logger.info("Error in removeFolderFromUser: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to remove folder ID from user's folders array.",
      error
    );
  }
};
