import {onCall} from "firebase-functions/v2/https";
import * as functions from "firebase-functions";
import {
  Graph,
} from "../../types/graph";
import {
  FormDefinition,
  MetricDefinition,
  MetricPackDefinition,
  // MetricPackDefinition,
  MetricSubmission,
  Widget,
  // Widget,

} from "../../types/formdefinition";
import db from "./converter";
import * as logger from "firebase-functions/logger";
import {User} from "../../types/user";
import {DocumentData, QuerySnapshot} from "firebase-admin/firestore";
import {Food, FoodCombination, UserFood} from "../../types/food";
import {
  NutritionPackItems,
} from "../../types/store-types";


exports.getMetricDefinitionsFromFormDefId = onCall(async (request) => {
  const formDefId: string = request.data;

  if (!formDefId) {
    return {
      message: "Form Definition ID is missing",
      success: false,
      data: [],
    };
  }
  try {
    const metrics: QuerySnapshot<MetricDefinition, DocumentData> =
      await db.metricDefinitions
        .where("formDefinitionId", "==", formDefId).get();
    if (metrics.empty) {
      return {
        message: `No metric definitions
          found for form definition ID: ${formDefId}`,
        success: true,
        data: [],
      };
    }
    const metricDefinitions: MetricDefinition[] =
      metrics.docs.map((doc) => doc.data() as MetricDefinition);
    logger.info("metric definitions: ", metricDefinitions);
    return {
      message: "Got metric definitions",
      success: true,
      data: metricDefinitions,
    };
  } catch (error) {
    logger.info("error in getMetricDefinitionsFromFormDefId: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to get metric definitions",
      error
    );
  }
});

exports.getUserNutritionPackItems = onCall(async (request) => {
  const uid: string = request.data;
  try {
    const foods: QuerySnapshot<Food, DocumentData> = await db.foods(uid).get();
    const foodCombinations: QuerySnapshot<FoodCombination, DocumentData> =
      await db.foodCombinations(uid).get();
    const userFoods: QuerySnapshot<UserFood, DocumentData> =
      await db.userFoods(uid).get();
    const data: NutritionPackItems = {
      foods: foods.docs.map((doc) => doc.data()),
      foodCombinations: foodCombinations.docs.map((doc) => doc.data()),
      userFoods: userFoods.docs.map((doc) => doc.data()),
    };
    logger.info("nutrition pack items: ", data);
    return {
      message: "Retrieved user nutrition pack items",
      success: true,
      data,
    };
  } catch (error) {
    logger.info("error in getUserNutritionPackItems: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to get user nutrition pack items",
      error
    );
  }
});

exports.getDocuments = onCall(async () => {
  return await db.firestore.listCollections();
});


exports.getFormItems = onCall(async (request) => {
  const {formDefId, metricDefIds, metricPackIds, widgetIds} = request.data;

  try {
    const metricDefsPromise = metricDefIds.length ?
      db.metricDefinitions.where("id", "in", metricDefIds).get() :
      Promise.resolve({docs: []});

    const metricPacksPromise = metricPackIds.length ?
      db.metricPacks.where("id", "in", metricPackIds).get() :
      Promise.resolve({docs: []});

    const widgetsPromise = widgetIds.length ?
      db.widgets(formDefId).where("id", "in", widgetIds).get() :
      Promise.resolve({docs: []});

    // Execute all non-empty queries in parallel
    const [metricDefsSnap, metricPacksSnap, widgetsSnap] = await Promise.all([
      metricDefsPromise,
      metricPacksPromise,
      widgetsPromise,
    ]);

    logger.info(
      "metricDefs:",
      metricDefsSnap.docs.map((doc) => doc.data())
    );
    logger.info(
      "metricPacks:",
      metricPacksSnap.docs.map((doc) => doc.data())
    );
    logger.info(
      "widgets:",
      widgetsSnap.docs.map((doc) => doc.data())
    );

    // Build a data object to return
    const data = {
      metricDefs: metricDefsSnap.docs.map(
        (doc) => doc.data() as MetricDefinition),
      metricPacks: metricPacksSnap.docs.map(
        (doc) => doc.data() as MetricPackDefinition),
      widgets: widgetsSnap.docs.map((doc) => doc.data() as Widget),
    };

    return {
      message: "Got form items",
      success: true,
      data,
    };
  } catch (error) {
    logger.info("error in getFormItems: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to get form items",
      error
    );
  }
});

exports.getMostSubmittedForms = onCall(async (request) => {
  const {uid, numForms} = request.data;
  logger.info("uid: ", uid);
  logger.info("numForms: ", numForms);
  try {
    const query = await db.formDefinitions
      .where("uid", "==", uid)
      .orderBy("submissionCount", "desc")
      .limit(numForms)
      .get();
    if (query.empty) {
      return {
        message: `User has no form definitions. uid: ${uid}`,
        success: true,
        data: [],
      };
    }
    const formDefinitions: FormDefinition[] = query
      .docs.map((doc) => doc.data());
    return {
      message: "Retrieved top 5 most submitted forms",
      success: true,
      data: formDefinitions,
    };
  } catch (error) {
    logger.info("error in getTop5MostSubmittedForms: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to get top 5 most submitted forms",
      error
    );
  }
});

exports.getMostSubmittedGraphs = onCall(async (request) => {
  const {uid, numGraphs} = request.data;
  logger.info("uid: ", uid);
  logger.info("numForms: ", numGraphs);
  try {
    const querySnapshot = await db.graphs
      .where("uid", "==", uid)
      .orderBy("viewCount", "desc")
      .limit(numGraphs)
      .get();

    if (querySnapshot.empty) {
      return {
        message: `No graphs for user: ${uid}`,
        success: true,
        data: [],
      };
    }

    const mostSubmittedGraphs = querySnapshot
      .docs
      .map((doc) => doc.data() as Graph);

    return {
      message: "Retrieved top 5 most submitted graphs",
      success: true,
      data: mostSubmittedGraphs,
    };
  } catch (error) {
    logger.info("error in getMostSubmittedGraphs: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to get top 5 most submitted graphs",
      error
    );
  }
});

// exports.getFolderFormDefinitions = onCall(async (request) => {
//   const folder: Folder = request.data;

//   try {
//     if (!folder) {
//       return {
//         message: "Folder is missing",
//         success: false,
//         data: [],
//       };
//     }
//     if (folder.formDefinitions.length === 0) {
//       return {
//         message: "Folder has no form definitions",
//         success: true,
//         data: [],
//       };
//     }

//     const foldersCollectionRef = db.folders(folder.uid);
//     const foldersSnapshot = await foldersCollectionRef.get();

//     // Check if any folders exist
//     if (foldersSnapshot.empty) {
//       return {
//         message: `No folders found for user id: ${folder.uid}`,
//         success: false,
//         data: [],
//       };
//     }

//     const formDocRefs = folder.formDefinitions.map((id) =>
//       db.formDefinitions.doc(id)
//     );

//     const formDocs = await db.firestore.getAll(...formDocRefs);

//     // Extract data from the documents that exist
//     const formDefinitions = formDocs
//       .filter((doc) => doc.exists)
//       .map((doc) => doc.data() as FormDefinition);
//     return {
//       message: `Successfully retrieved ${formDefinitions.length}
//       metric definitions.`,
//       success: true,
//       data: formDefinitions,
//     };
//   } catch (error) {
//     logger.info("error in getFolderFormDefinitions", error);
//     throw new functions.https.HttpsError(
//       "internal",
//       "Unable to get folders form defs",
//       error
//     );
//   }
// });

// exports.getUserFolders = onCall(async (request) => {
//   const uid = request.data;

//   if (!uid) {
//     return {
//       message: "User ID is missing",
//       success: false,
//       data: [],
//     };
//   }

//   try {
//     // Use db utility to get all folders for the user
//     const foldersCollectionRef = db.folders(uid);
//     const foldersSnapshot = await foldersCollectionRef.get();

//     // Check if any folders exist
//     if (foldersSnapshot.empty) {
//       return {
//         message: `No folders found for user id: ${uid}`,
//         success: true,
//         data: [],
//       };
//     }

//     // Map through each folder document and get the data
//     const foldersData = foldersSnapshot.docs.map((doc) => doc.data());

//     return {
//       message: "Got all folders data successfully",
//       success: true,
//       data: foldersData,
//     };
//   } catch (error) {
//     logger.info("error in getUserFolders", error);
//     throw new functions.https.HttpsError(
//       "internal",
//       "Unable to get folders data",
//       error
//     );
//   }
// });

exports.getUserFormDefinitions = onCall(async (request) => {
  const uid: string = request.data;

  try {
    const query = await db.formDefinitions.where("uid", "==", uid).get();
    if (query.empty) {
      return {
        message: `No form definitions found for uid: ${uid}`,
        success: true,
        data: [],
      };
    } else {
      const formDefinitions: FormDefinition[] = query
        .docs.map((doc) => doc.data());
      return {
        message: "Retrieved form definitions",
        success: true,
        data: formDefinitions,
      };
    }
  } catch (error) {
    logger.info("error in getUserFormDefinitions: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to get user form defs",
      error
    );
  }
});

exports.getMetricDefinitions = onCall(async (request) => {
  const ids: string[] = request.data;

  // Check if the passed array of IDs is empty
  if (ids.length === 0) {
    return {
      message: "Passed IDs of metric definitions has length of 0",
      success: false,
      data: [],
    };
  }

  try {
    const metricDefinitions: MetricDefinition[] = [];

    for (const id of ids) {
      const metricDefinitionDoc = await db.metricDefinitions.doc(id).get();
      if (!metricDefinitionDoc.exists) {
        throw new Error(`Metric definition with ID ${id} not found`);
      }

      const metricDefinitionData = metricDefinitionDoc
        .data() as MetricDefinition;

      if (!metricDefinitionData.deletedAt) {
        metricDefinitions.push(metricDefinitionData);
      }
    }

    return {
      message: `Successfully retrieved ${metricDefinitions.length}
      metric definitions.`,
      success: true,
      data: metricDefinitions,
    };
  } catch (error) {
    functions.logger.error("Error in getMetricDefinitions: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to get metric definitions",
      error
    );
  }
});
// REVISED
exports.getMetricSubmissions = onCall(async (request) => {
  const metricDefId = request.data;
  try {
    if (await isMetricDefSoftDeleted(metricDefId)) {
      return {
        message: "Metric Definition is deleted",
        success: false,
        data: [],
      };
    }
    const query = await db.metricSubmissions(metricDefId).get();

    if (query.empty) {
      return {
        message: `No metric submissions 
        found for metric def id: ${metricDefId}`,
        success: true,
        data: [],
      };
    } else {
      const metricSubmissions: MetricSubmission[] = query
        .docs.map((doc) => doc.data() as MetricSubmission);
      return {
        message: "Got metric submissions",
        success: true,
        data: metricSubmissions,
      };
    }
  } catch (error) {
    logger.info("error in getMetricSubmissions", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to get metric submissions",
      error
    );
  }
});

// revised to use consistent reposnse
exports.getUserGraphs = onCall(async (request) => {
  const uid: string = request.data;

  try {
    const query = await db.graphs.where("uid", "==", uid).get();
    if (query.empty) {
      return {
        message: `No graph with uid ${uid}`,
        success: false,
        data: [],
      };
    } else {
      const graphs = query.docs.map((doc) => doc.data());
      return {
        message: "Graphs retrieved",
        success: true,
        data: graphs,
      };
    }
  } catch (error) {
    logger.info("error in getUserGraphs: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to get user graphs",
      error
    );
  }
});

// revised
exports.getUser = onCall(async (request) => {
  const uid: string = request.data;
  try {
    const userDoc = await db.users.doc(uid).get();
    if (!userDoc.exists) {
      return {
        message: `No user exist with id ${uid}`,
        success: false,
        data: {} as User,
      };
    } else {
      return {
        message: "Successfully retrieved user",
        success: true,
        data: userDoc.data(),
      };
    }
  } catch (error) {
    logger.info("error in getUser: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to get user",
      error,
    );
  }
});

/**
 *
 * @param {string} metricDefId Metric Definition ID
 * @return {Promise<boolean>} True if the definition is soft-deleted,
 * false otherwise
 */
async function isMetricDefSoftDeleted(metricDefId: string): Promise<boolean> {
  const metricDefinitionDoc = await db.metricDefinitions.doc(metricDefId).get();

  if (!metricDefinitionDoc.exists) {
    return false;
  }

  const metricDefinitionData = metricDefinitionDoc.data() as MetricDefinition;
  // return true if deletedAt exists, otherwise false
  return !!metricDefinitionData.deletedAt;
}
