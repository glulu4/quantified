import {chartLog, log} from "@/types/logger";
import {functions, httpsCallable} from "../firebaseConfig";
// import {MetricSubmission, FormDefinition, User, MetricDefinition, Graph, Folder} from "@/types/graph";
import {HttpsCallableResult} from "firebase/functions";
import {logErrorToSentry} from "@/utils/util";
import {FormDefinition, MetricDefinition, MetricPackDefinition, Widget} from "@/types/formdefinition";
import {Graph} from "@/types/graph";
import {User} from "@/types/user";

type UpdateFirestoreResponse = {
    message: string;
    success: boolean;
}

const updateFirestore = async <T>(
    data: T,
    functionName: string
): Promise<boolean> => {
    const callableFunction = httpsCallable<T, UpdateFirestoreResponse>(functions, functionName);

    try {
        const response: HttpsCallableResult<UpdateFirestoreResponse> = await callableFunction(data);
        const {message, success} = response.data;
        log.info(`Function: ${functionName} - message: ${message}`);
        if (!success) throw new Error(`Error in ${functionName}: ${message}`);
        return true;
    } catch (error: unknown) {
        if (error instanceof Error) {
            log.error(`Error in ${functionName}: ${error.message}`);
            logErrorToSentry({error, functionName, fileName: "updateFunctions"});
        }
        return false;
    }
};

export const updateFormItems = async (itemsToUpdate: {
    formDefinition: FormDefinition;
    metricDefinitions: MetricDefinition[];
    metricPackDefinitions: MetricPackDefinition[];
    widgets: Widget[];
}): Promise<boolean> => {
    return updateFirestore<{
        formDefinition: FormDefinition;
        metricDefinitions: MetricDefinition[];
        metricPackDefinitions: MetricPackDefinition[];
        widgets: Widget[];
    }>(itemsToUpdate, "update-updateFormItems");
};

// Specific update functions using the generic function
export const updateGraphViewStats = async (graph: Graph): Promise<boolean> => {
    return updateFirestore<string>(graph.id, "update-updateGraphViewCountAndDate");
};

// export const updateFolder = async (folder: Partial<Folder>): Promise<boolean> => {
//     return updateFirestore<Partial<Folder>>(folder, "update-updateFolder");
// };

export const updateGraph = async (graph: Graph): Promise<boolean> => {
    return updateFirestore<Graph>(graph, "update-updateGraph");
};

export const updateFormDefinition = async (formDefinition: Partial<FormDefinition>): Promise<boolean> => {
    return updateFirestore<Partial<FormDefinition>>(formDefinition, "update-updateFormDefinition");
};

export const updateMetricDefinitions = async (metricDefinitions: MetricDefinition[]): Promise<boolean> => {
    console.log("Sending metricDefinitions for update", metricDefinitions);

    return updateFirestore<MetricDefinition[]>(metricDefinitions, "update-updateMetricDefinitions");
};

export type UserUpdate = Partial<User> & { uid: string };

export const updateUser = async (user: UserUpdate): Promise<boolean> => {
    return updateFirestore<UserUpdate>(user, "update-updateUser");
};
