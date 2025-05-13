import {chartLog, homeLog, log} from "@/types/logger";
import {functions, httpsCallable} from "../firebaseConfig";
// import {MetricSubmission, FormDefinition, User, MetricDefinition, Graph, Folder, FormDefinitionType} from "@/types/graph";
import {logErrorToSentry} from "@/utils/util";
import {Meal} from "@/types/nutritionTypes";
import {FormDefinition, MetricDefinition, MetricSubmission, Widget, MetricPackDefinition, FormSubmission, MetricPackSubmission} from "@/types/formdefinition";
import {User} from "@/types/user";
import {Graph} from "@/types/graph";
import {NutritionPackItems} from "@/types/store-types";

type AddFirestoreResponse = {
  message: string;
  success: boolean;
};

interface AddNewUserResponse {
  message: string;
  success: boolean;
  user: User;
}

// Simplified Firestore Operation Handler
const handleFirestoreOperation = async <P>(
  params: P,
  functionName: string
): Promise<boolean> => {
  const callableFunction = httpsCallable<P, AddFirestoreResponse>(functions, functionName);
  try {
    const result = await callableFunction(params);
    const {message, success} = result.data;
    log.info(`${functionName} - Message: ${message}`);

    if (!success)
      throw new Error(`Error in ${functionName}`);

    return true;
  } catch (error) {
    homeLog.error(`Error in ${functionName}:`, error);
    logErrorToSentry({
      error,
      functionName,
      fileName: "addFunctions",
    });
    return false;
  }
};

// Standardized Functions
// export const createFolder = async (folder: Folder): Promise<boolean> => {
//   return handleFirestoreOperation(folder, "add-addFolder");
// };

export const createFormItemsForUpdate = async (
  itemsToCreate: {
    metricDefinitions: MetricDefinition[];
    metricPackDefinitions: MetricPackDefinition[];
    widgets: Widget[];
  },
  formDefId: string
): Promise<boolean> => {

  if (itemsToCreate.metricDefinitions.length === 0 && itemsToCreate.metricPackDefinitions.length === 0 && itemsToCreate.widgets.length === 0) {
    log.info("No items to create");
    return true;
  }

  return handleFirestoreOperation({
    formDefId,
    ...itemsToCreate
  }, "add-createFormItemsForUpdate");
};


export const uploadFormSubmissionData = async (
  formSubmission: FormSubmission,
  metricPackSubmissions: MetricPackSubmission[],
  metricSubmissions: MetricSubmission[],
  nutritionPackItems: NutritionPackItems,
  // updatedNutritionPackItems: NutritionPackItems,
  uid: string,
): Promise<boolean> => {
  return handleFirestoreOperation({
    formSubmission,
    metricPackSubmissions,
    metricSubmissions,
    nutritionPackItems,
    // updatedNutritionPackItems,
    uid,
  }, "add-addFormSubmission");

}


export const uploadCompleteFormDefinition = async (
  formDef: FormDefinition,
  newMetricDefs: MetricDefinition[],
  newMetricPackDefs: MetricPackDefinition[],
  newWidgets: Widget[],
): Promise<boolean> => {

  return handleFirestoreOperation({
    formDefinition: formDef,
    metricDefinitions: newMetricDefs,
    metricPackDefinitions: newMetricPackDefs,
    widgets: newWidgets,
  }, "add-addFormDefinition");
}

export const uploadGraph = async (graph: Graph): Promise<boolean> => {
  return handleFirestoreOperation(graph, "add-uploadGraph");
};

export const uploadMetricDefinitions = async (metricDefinitions: MetricDefinition[]): Promise<boolean> => {
  return handleFirestoreOperation(metricDefinitions, "add-addMetricDefinitions");
};

export const uploadFormDefinition = async (form: FormDefinition): Promise<boolean> => {
  return handleFirestoreOperation(form, "add-addFormDefinition");
};

export async function uploadMeal(meal: Meal): Promise<boolean> {
  return handleFirestoreOperation(meal, "add-addMeal");
}

// export const uploadMetricSubmissions = async (
//   metricSubmissions: MetricSubmission[],
//   formDefId: string,
//   // formType: FormDefinitionType,
// ): Promise<boolean> => {
//   return handleFirestoreOperation({metricSubmissions, formDefId, formType}, "add-addMetricSubmissions");
// };

// // Leave addNewUser as is
export const addNewUser = async (userToAdd: User): Promise<User | null> => {

  try {
    const addUserFunction = httpsCallable<User, AddNewUserResponse>(functions, 'add-addNewUser');
    const result = await addUserFunction(userToAdd);
    const {message, success, user} = result.data;
    console.log("message: ", message);
    if (!success) throw new Error("Error adding Metric submissions");
    return user

  } catch (error) {
    console.log();
    return null

  }

}
