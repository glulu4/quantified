import {chartLog, homeLog, log} from "@/types/logger";
import {functions, httpsCallable} from "../firebaseConfig";
import {Graph} from "@/types/graph";
import {HttpsCallableResult} from "firebase/functions";
import {handleError, logErrorToSentry} from "@/utils/util";
import {FormDefinition, MetricDefinition, MetricPackDefinition, MetricSubmission, Widget} from "@/types/formdefinition";
// import {User} from "firebase/auth";
import {Food, FoodCombination, UserFood} from "@/types/food";
import {User} from "@/types/user";

type GetFireStoreResponse<T> = {
    message: string;
    success: boolean;
    data: T;
};

// if you're missing a param, use void
// fetchFirestoreData<WhatWeGet, WhatWeSend>

// Generic function for fetching data from Firebase functions
// P is what you send to the Firebase function (input parameter).
// T is what you get back from the Firebase function (the response type).
const fetchFirestoreData = async <T, P>(
    params: P,
    functionName: string
): Promise<T> => {
    const callableFunction = httpsCallable<P, GetFireStoreResponse<T>>(functions, functionName);
    try {
        const response: HttpsCallableResult<GetFireStoreResponse<T>> = await callableFunction(params);
        const {message, success, data} = response.data;
        // log.info(`Successfully fetched data from ${functionName}: ${message}`);

        console.log("message: ", message);
        console.log("success: ", success);
        console.log("data: ", data);

        if (!success)
            throw new Error(`Error in ${functionName}: ${message}`);
        else
            chartLog.info(`Successfully fetched data from ${functionName}: ${message}`);
        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            log.warn(`${error.message}`);

            handleError({error, functionName, fileName: "getFunctions", msg: `Error in ${functionName}`});
        }
        return [] as unknown as T; // Return an empty array or object based on the expected return type
    }
};

export function getUserNutritionPackItems(uid: string) {
    return fetchFirestoreData<{
        foods: Food[];
        foodCombinations: FoodCombination[];
        userFoods: UserFood[];
    }, string>(uid, 'get-getUserNutritionPackItems');
}

// Specific data fetching functions using the generic fetchFirestoreData function

export const getMostSubmittedForms = async (uid: string, numForms: number): Promise<FormDefinition[]> => {

    if (!uid && !numForms) {
        console.log("uid: ", uid);
        console.log("numForms: ", numForms);
        console.log("uid or num forms is false")
        return [];
    }
    return fetchFirestoreData<FormDefinition[], {uid: string, numForms: number}>({uid, numForms}, 'get-getMostSubmittedForms');
};

export const getMostViewedGraphs = async (uid: string, numGraphs: number): Promise<Graph[]> => {
    return fetchFirestoreData<Graph[], {uid: string, numGraphs: number}>({uid, numGraphs}, 'get-getMostSubmittedGraphs');
};

export const getFormItems = async ({
    formDefId,
    metricDefIds,
    metricPackIds,
    widgetIds,
}: {
    formDefId: string;
    metricDefIds: string[];
    metricPackIds: string[];
    widgetIds: string[];
}): Promise<{
    metricDefs: MetricDefinition[];
    metricPacks: MetricPackDefinition[];
    widgets: Widget[];
}> => {

    return fetchFirestoreData<
        {
            metricDefs: MetricDefinition[];
            metricPacks: MetricPackDefinition[];
            widgets: Widget[];
        },
        {formDefId: string, metricDefIds: string[], metricPackIds: string[], widgetIds: string[]}
    >(
        {formDefId, metricDefIds, metricPackIds, widgetIds},
        'get-getFormItems'
    );
}

// export const getFolderFormDefs = async (folder: Folder): Promise<FormDefinition[]> => {
//     return fetchFirestoreData<FormDefinition[], Folder>(folder, 'get-getFolderFormDefinitions');
// };

// export const getUserFolders = async (uid: string): Promise<Folder[]> => {
//     return fetchFirestoreData<Folder[], string>(uid, 'get-getUserFolders');
// };

export const getFormDefinitions = async (uid: string): Promise<FormDefinition[]> => {
    return fetchFirestoreData<FormDefinition[], string>(uid, 'get-getUserFormDefinitions');
};


export function getMetricDefinitionsFromFormDefId<T extends MetricDefinition>(formDefId: string): Promise<T[]> {
    return fetchFirestoreData<T[], string>(formDefId, 'get-getMetricDefinitionsFromFormDefId');
}

/**
 * 
 * @param ids - The ids of the metric definitions to fetch.
 * @returns array of metric definitions.
 * @throws Error if ids is empty or undefined.
 */
export const getMetricDefinitions = async (ids: string[]): Promise<MetricDefinition[]> => {

    if (!ids) {
        homeLog.info("No metric definition ids provided, in getFunctions");
        console.log("ids: ", ids);
        console.log("ids is false")
        return []
    }

    if (ids.length === 0)
        throw new Error("ids length === 0");
    return fetchFirestoreData<MetricDefinition[], string[]>(ids, 'get-getMetricDefinitions');
};

export const getMetricSubmissions = async (metricDefId: string): Promise<MetricSubmission[]> => {
    return fetchFirestoreData<MetricSubmission[], string>(metricDefId, 'get-getMetricSubmissions');
};

export const getUserGraphs = async (uid: string): Promise<Graph[]> => {
    return fetchFirestoreData<Graph[], string>(uid, 'get-getUserGraphs');
};

export const getUser = async (uid: string): Promise<User> => {
    return fetchFirestoreData<User, string>(uid, 'get-getUser');
};

export const getDocuments = async (): Promise<Array<FirebaseFirestore.CollectionReference>> => {
    return fetchFirestoreData<Array<FirebaseFirestore.CollectionReference>, void>(undefined, 'get-getDocuments');
};

