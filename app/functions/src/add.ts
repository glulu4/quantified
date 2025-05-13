import * as functions from "firebase-functions";
import {
  FormSubmission,
  MetricDefinition,
  MetricPackDefinition,
  MetricPackSubmission,
  MetricSubmission,
  Widget,
} from "../../types/formdefinition";
import {User} from "../../types/user";
import db from "./converter";
import {onCall} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {
  CollectionReference,
  DocumentReference,
  Timestamp,
  WriteBatch,
} from "firebase-admin/firestore";

import {createTimestampFromObject, TimeStampJSONObj} from "./util";
import {Meal} from "../../types/nutritionTypes";
import {NutritionPackItems} from
  "../../types/store-types";
import {Food, FoodCombination, UserFood} from "../../types/food";
import {incrementSubmissionCountAndDate} from "./update";
import {Graph} from "../../types/graph";

exports.addMeal = onCall(async (request) => {
  const meal: Meal = request.data;
  if (!meal) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "meal was falsy"
    );
  }
  meal.createdAt = Timestamp.now();
  try {
    await db.meals.doc(meal.id).set(meal);
    return {
      message: "Successfully added meal",
      success: true,
    };
  } catch (error) {
    logger.info("error in addMeal: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to add meal",
      error
    );
  }
});

exports.addFormDefinition = onCall(async (request) => {
  const formDefinition = request.data.formDefinition;
  const metricDefinitions = request.data.metricDefinitions;
  const metricPacks = request.data.metricPackDefinitions;
  const widgets = request.data.widgets;

  if (!formDefinition || !formDefinition.id) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "FormDefinition must have a valid id."
    );
  }
  formDefinition.createdAt = Timestamp.now();

  const batch: WriteBatch = db.firestore.batch();

  try {
    // addFormDef2Batch(formDefinition, batch);
    // addMetricDefs2Batch(metricDefinitions, batch);
    // addMetricPacks2Batch(metricPacks, batch);
    // addWidgets2Batch(widgets, batch);
    addItemsToBatch(batch,
      db.formDefinitions.doc(formDefinition.id), formDefinition);
    addItemsToBatch(batch, db.metricDefinitions, metricDefinitions);
    addItemsToBatch(batch, db.metricPacks, metricPacks);
    addItemsToBatch(batch, db.widgets(formDefinition.id), widgets);

    await batch.commit();

    // await db
    //   .formDefinitions.doc(formDefinition.id).set(formDefinition);
    return {
      message: "Successfully added form definition and related entities",
      success: true,
    };
  } catch (error) {
    logger.info("error in addFormDefinition: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to add form definition",
      error
    );
  }
});

exports.createFormItemsForUpdate = onCall(async (request) => {
  const {
    formDefId,
    metricDefinitions,
    metricPackDefinitions,
    widgets,
  }: {
    formDefId: string,
    metricDefinitions: MetricDefinition[],
    metricPackDefinitions: MetricPackDefinition[],
    widgets: Widget[],
  } = request.data;

  const batch = db.firestore.batch();
  try {
    addItemsToBatch(batch, db.metricDefinitions, metricDefinitions);
    addItemsToBatch(batch, db.metricPacks, metricPackDefinitions);
    addItemsToBatch(batch, db.widgets(formDefId), widgets);

    await batch.commit();
    return {
      message: "Successfully created items",
      success: true,
    };
  } catch (error) {
    logger.info("error in createFormItemsForUpdate: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to add form items for update",
      error
    );
  }
});

exports.addFormSubmission = onCall(async (request) => {
  const formSubmission: FormSubmission = request.data.formSubmission;
  const metricPackSubmissions: MetricPackSubmission[] =
    request.data.metricPackSubmissions;
  const metricSubmissions: MetricSubmission[] =
    request.data.metricSubmissions;
  const nutritionPackItems: NutritionPackItems =
    request.data.nutritionPackItems;
  // const updatedNutritionPackItems: NutritionPackItems =
  //   request.data.updatedNutritionPackItems;

  const uid: string = request.data.uid;

  if (!formSubmission || !formSubmission.id) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "FormSubmission must have a valid id."
    );
  }

  const batch: WriteBatch = db.firestore.batch();
  try {
    formSubmission.createdAt = Timestamp.now();
    formSubmission.submissionDate = createTimestampFromObject(
      formSubmission.submissionDate as unknown as TimeStampJSONObj
    );
    await incrementSubmissionCountAndDate(formSubmission.formDefinitionId);
    // Form Submission
    addItemsToBatch(batch,
      db.formSubmissions(formSubmission.formDefinitionId), formSubmission);

    // metric submissions
    for (const metricSubmission of metricSubmissions) {
      metricSubmission.createdAt = Timestamp.now();
      addItemsToBatch(batch,
        db.metricSubmissions(metricSubmission.metricDefinitionId),
        metricSubmission);
    }

    // Metric Pack Submissions
    for (const metricPackSubmission of metricPackSubmissions) {
      metricPackSubmission.createdAt = Timestamp.now();
      addItemsToBatch(batch,
        db.metricPackSubmissions(metricPackSubmission.metricPackDefinitionId),
        metricPackSubmission);
    }
    // foods
    const foods: Food[] = nutritionPackItems.foods;
    const foodCombinations: FoodCombination[] =
      nutritionPackItems.foodCombinations;
    const userFoods: UserFood[] = nutritionPackItems.userFoods;

    addItemsToBatch(batch, db.foods(uid), foods);
    addItemsToBatch(batch, db.foodCombinations(uid), foodCombinations);
    logger.info("userFoods: ", userFoods);
    addItemsToBatch(batch, db.userFoods(uid), userFoods);
    // meals

    await batch.commit();
    return {
      message: "Successfully added form submission and related entities",
      success: true,
    };
  } catch (error) {
    logger.info("error in addFormSubmission: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to add form submission",
      error
    );
  }
});
/**
 * Adds one or multiple items to a Firestore write batch.
 *
 * @template T - The type of the items to be added.
 * @param {WriteBatch} batch
 * - The Firestore write batch to which the items will be added.
 * @param {CollectionReference
 * | DocumentReference} collectionRef
 * - The Firestore collection or document reference where the items added
 * @param {T[] | T} items - The item or array of items to be added to batch.
 * If a single item is provided, it will be converted into an array
 */
function addItemsToBatch<T>(
  batch: WriteBatch,
  collectionRef:
    CollectionReference
    | DocumentReference,
  items: T[] | T
) {
  if (!Array.isArray(items)) {
    // If a single object is provided, convert it into an array
    items = [items];
  }

  for (const item of items) {
    const itemWithTimestamps = {
      ...item,
      createdAt: (item as any).createdAt ?
        createTimestampFromObject((item as any).createdAt) :
        Timestamp.now(),
    };

    const docRef =
      collectionRef instanceof CollectionReference ?
        collectionRef.doc((item as any).id) :
        collectionRef;

    logger.info("Addoing item to batch: ", docRef);
    console.log("item: ", itemWithTimestamps);
    batch.set(docRef, itemWithTimestamps);
  }
}

exports.addMetricDefinitions = onCall(async (request) => {
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
    metricDefinitions.forEach((metricDefinition) => {
      metricDefinition.createdAt = Timestamp.now();
      const docRef = db.metricDefinitions.doc(metricDefinition.id);
      batch.set(docRef, metricDefinition);
      total += 1;
    });
    await batch.commit(); // Commit the batch write
    return {
      message: `Successfully added ${total} out of 
      ${metricDefinitions.length} metric definitions`,
      success: true,
    };
  } catch (error) {
    logger.info("error in addMetricDefinitions: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to add metric definitions",
      error
    );
  }
});
/**
exports.addFolder = onCall(async (request) => {
  const folder: Folder = request.data;
  if (!folder) {
    return {
      message: "folder was falsy",
      success: false,
    };
  }
  folder.createdAt = Timestamp.now();
  try {
    await db.folders(folder.uid).doc(folder.id).set(folder);
    const userDocRef = db.users.doc(folder.uid);
    const userDoc = await userDocRef.get();
    if (!userDoc.exists) {
      throw new Error(`User document for uid: ${folder.uid} does not exist.`);
    }
    await userDocRef.update({
      folders: FieldValue.arrayUnion(folder.id),
    });
    return {
      message: "Successfully added folder",
      success: true,
    };
  } catch (error) {
    logger.info("error in addFolder: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to add folder",
      error
    );
  }
});
 */
// revised
// exports.addMetricSubmissions = onCall(async (request) => {
//   const {metricSubmissions, formDefId, formType} = request.data;

//   if (metricSubmissions.length === 0) {
//     return {
//       message: "metricSubmissions has length 0",
//       success: false,
//     };
//   }
//   const batch = db.firestore.batch();
//   let total = 0;
//   try {
//     metricSubmissions.forEach((metricSubmission: MetricSubmission) => {
//       metricSubmission.createdAt = new Timestamp(
//         metricSubmission.createdAt.seconds,
//         metricSubmission.createdAt.nanoseconds,
//       );
//       const {metricDefinitionId} = metricSubmission;
//       const docRef = db.metricSubmissions(metricDefinitionId)
//         .doc(metricSubmission.id);
//       batch.set(docRef, metricSubmission);
//       total += 1;
//     });
//     await batch.commit();
//     try {
//       await incrementSubmissionCountAndDate(formDefId);
//     } catch (incrementError) {
//       logger.info("Failed to increment submission count: ", incrementError);
//     }
//     try {
//       if (formType && formType === FormDefinitionType.NUTRITION) {
//         await updateNutritionFormTodaysSubmissions(
//           metricSubmissions, formDefId);
//       }
//     } catch (error) {
//       logger.info("Failed to update todays submissions: ", error);
//     }

//     return {
//       message: `Successfully added ${total} out of
//       ${metricSubmissions.length} metric submissions`,
//       success: true,
//     };
//   } catch (error) {
//     logger.info("error in addMetricSubmissions: ", error);
//     throw new functions.https.HttpsError(
//       "internal",
//       "Unable to add metric submissions",
//       error
//     );
//   }
// });

exports.uploadGraph = onCall(async (request) => {
  const graph: Graph = request.data;

  try {
    graph.createdAt = Timestamp.now();
    await db.graphs.doc(graph.id).set(graph);
    return {
      message: "Added Graph",
      success: true,
    };
  } catch (error) {
    logger.info("error in uploadGraph: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to upload graph",
      error
    );
  }
});

exports.addNewUser = onCall(async (request) => {
  const user: User = request.data;

  user.createdAt = createTimestampFromObject(
    user.createdAt as unknown as TimeStampJSONObj
  );
  try {
    user.createdAt = Timestamp.now();
    await db.users.doc(user.uid).set(user);
    const addedUserDoc = await db.users.doc(user.uid).get();
    if (!addedUserDoc.exists) {
      return {
        message: "User document not found after creation.",
        success: false,
        user: null,
      };
    }
    return {
      message: "added and returned user",
      success: true,
      user: addedUserDoc.data(),
    };
  } catch (error) {
    logger.info("error in addNewUser: ", error);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to add user",
      error
    );
  }
});
