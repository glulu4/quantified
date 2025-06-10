import {chartLog, homeLog, log} from "@/types/logger";
import {functions, httpsCallable} from "../firebaseConfig";
import {Graph} from "@/types/graph";
import {HttpsCallableResult} from "firebase/functions";
import {handleError, logErrorToSentry} from "@/utils/util";
import {getMetricDefinitions} from "./getFunctions";
import {FormDefinition, MetricDefinition, MetricPackDefinition, Widget} from "@/types/formdefinition";

type FireStoreDeleteResponse = {
  message: string;
  success: boolean;
};

// Generic function to handle Firestore deletions or actions
const fetchFirestoreData = async <T, P>(
  params: P,
  functionName: string
): Promise<boolean> => {
  const callableFunction = httpsCallable<P, FireStoreDeleteResponse>(functions, functionName);

  try {
    const response: HttpsCallableResult<FireStoreDeleteResponse> = await callableFunction(params);
    const {message, success} = response.data;
    log.info(`Function: ${functionName} - Message: ${message}`);

    if (!success) throw new Error(`Error in ${functionName}: ${message}`);

    // return response.data as FireStoreDeleteResponse;
    return success;
  } catch (error: unknown) {
    if (error instanceof Error) {
      log.error(`Error in ${functionName}: ${error.message}`);
      logErrorToSentry({error, functionName, fileName: "deleteFunctions"});
    }
    return false;
    // return {
    //   message: "Error in deleteFunctions",
    //   success: false
    // };
  }
};

// Specific functions using the generic function

// export const removeFolder = async (folder: Folder): Promise<boolean> => {
//   return fetchFirestoreData<boolean, Folder>(folder, 'delete-deleteFolder');
// };

export const deleteFormItemsForUpdate = async (
  itemsToDelete: {
    metricDefinitions: MetricDefinition[];
    metricPackDefinitions: MetricPackDefinition[];
    widgets: Widget[];
  },
  formDefId: string
): Promise<boolean> => {

  if (itemsToDelete.metricDefinitions.length === 0 && itemsToDelete.metricPackDefinitions.length === 0 && itemsToDelete.widgets.length === 0) {
    log.info("No items to delete");
    return true;
  }
  return fetchFirestoreData({
    formDefId,
    ...itemsToDelete
  }, 'delete-deleteFormItemsForUpdate');

};


export const deleteFormAndMetricDefs = async (
  form: FormDefinition,
  metricDefinitions: MetricDefinition[]
): Promise<boolean> => {
  try {
    homeLog.info("Deleting form and metric definitions...");

    // 1. Delete metric definitions if any exist
    let deletedMetricDefs = true;
    if (metricDefinitions && metricDefinitions.length > 0) {

      const metricDefinitionIds = metricDefinitions.map((md) => md.id);
      deletedMetricDefs = await deleteMetricDefs(metricDefinitionIds);

      if (!deletedMetricDefs) {
        homeLog.error("Failed to delete metric definitions");
      }
      else {
        homeLog.info("Successfully deleted metric definitions");
      }
    } else {
      homeLog.info("No metric definitions to delete");
    }

    // 2. Delete the form definition itself
    const deletedForm = await deleteFormDefinition(form.id);

    if (!deletedForm) {
      homeLog.error(`Failed to delete form definition with ID: ${form.id}`);
    }
    else {
      homeLog.info(`Successfully deleted form definition with ID: ${form.id}`);
    }

    // Return true only if both form & metric defs were successfully deleted
    return deletedForm && deletedMetricDefs;
  } catch (error) {
    handleError({
      error,
      functionName: "deleteFormAndMetricDefs",
      fileName: "deleteFunctions",
      msg: "Error deleting form and related data",
    });
    return false;
  }
};
const deleteMetricDefs = async (ids: string[]): Promise<boolean> => {
  return fetchFirestoreData<boolean, string[]>(ids, 'delete-deleteMetricDefinitions');
};

export const deleteFormDefinition = async (id: string): Promise<boolean> => {
  console.log("Making it");

  return fetchFirestoreData<boolean, string>(id, 'delete-deleteFormDefinition');
};

export const deleteGraph = async (chartId: string): Promise<boolean> => {
  return fetchFirestoreData<boolean, string>(chartId, 'delete-deleteGraph');
};

export const deleteUserAccount = async (uid: string): Promise<boolean> => {
  return fetchFirestoreData<boolean, string>(uid, 'delete-deleteUser');
};

export const deleteNutritionItem = async (
  uid: string,
  itemId: string,
  itemType: 'food' | 'userFood' | 'foodCombination'
): Promise<boolean> => {
  return fetchFirestoreData<boolean, {uid: string; itemId: string; itemType: string}>(
    {uid, itemId, itemType},
    'delete-deleteNutritionItem'
  );
};
