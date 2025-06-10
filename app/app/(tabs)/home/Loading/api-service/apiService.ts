import {createFormItemsForUpdate, uploadCompleteFormDefinition, uploadFormSubmissionData} from '@/cloudfunctions/addFunctions';
import {deleteFormAndMetricDefs, deleteFormItemsForUpdate, deleteUserAccount} from '@/cloudfunctions/deleteFunctions';
import {homeLog, log} from '@/types/logger';
import {logErrorToSentry} from '@/utils/util';
import {FormDefinition, FormSubmission, MetricDefinition, MetricPackDefinition, MetricPackSubmission, MetricSubmission, Widget} from '@/types/formdefinition';
import {getMetricDefinitions} from '@/cloudfunctions/getFunctions';
import {updateFormItems} from '@/cloudfunctions/updateFunctions';
import {NutritionPackItems} from '../../../../../types/store-types';

export const apiService = {


    async updateForm(
        itemsToUpdate: {
            formDefinition: FormDefinition;
            metricDefinitions: MetricDefinition[];
            metricPackDefinitions: MetricPackDefinition[];
            widgets: Widget[];
        },
        itemsToCreate: {
            metricDefinitions: MetricDefinition[];
            metricPackDefinitions: MetricPackDefinition[];
            widgets: Widget[];
        },
        itemsToDelete: {
            metricDefinitions: MetricDefinition[];
            metricPackDefinitions: MetricPackDefinition[];
            widgets: Widget[];
        }
    ) {


        log.info("Updating form definition, in apiService.ts");
        const successUpdate = await updateFormItems(itemsToUpdate);
        const successCreate = await createFormItemsForUpdate(itemsToCreate, itemsToUpdate.formDefinition.id);
        const successDelete = await deleteFormItemsForUpdate(itemsToDelete, itemsToUpdate.formDefinition.id);

        return successUpdate && successCreate && successDelete;

    },



    async uploadFormDefinition(
        formDef: FormDefinition,
        newMetricDefs: MetricDefinition[],
        newMetricPackDefs: MetricPackDefinition[],
        newWidgets: Widget[],
    ) {

        log.info("Uploading form definition, in apiService.ts");
        const success = await uploadCompleteFormDefinition(formDef, newMetricDefs, newMetricPackDefs, newWidgets);
        if (success)
            homeLog.info("Form definition uploaded");
        else
            homeLog.error("Form definition upload failed, in apiService.ts");
        return success;
    },

    // async uploadFormSubmission(metricSubmissions: MetricSubmission[], formDef: FormDefinition) {
    //     const success = await uploadMetricSubmissions(metricSubmissions, formDef.id, formDef.formType);
    //     if (!success) throw new Error("Form submission upload failed");
    //     homeLog.info("Form submission uploaded");
    //     return true;
    // },

    async deleteForm(formDef: FormDefinition) {
        const defsToDelete = await getMetricDefinitions(formDef.metricDefinitionIds);

        console.log("defs2: ", defsToDelete);

        const success = await deleteFormAndMetricDefs(formDef, defsToDelete);
        if (!success)
            homeLog.info("Form deletion failed");
        else
            homeLog.info("Form deleted");
        return success;
    },

    async submitForm(
        formSubmission: FormSubmission,
        metricPackSubmissions: MetricPackSubmission[],
        metricSubmissions: MetricSubmission[],
        nutritionPackItems: NutritionPackItems,
        // updatedNutritionPackItems: NutritionPackItems,
        uid: string,
    ) {

        const success = await uploadFormSubmissionData(
            formSubmission,
            metricPackSubmissions,
            metricSubmissions,
            nutritionPackItems,
            // updatedNutritionPackItems,
            uid,
        )

        if (!success)
            homeLog.error("Form submission upload failed");
        else
            homeLog.info("Form submission uploaded");

        return success;
    },



    handleError(error: unknown, operation: string) {
        homeLog.error(`Error in ${operation}:`, error);
        logErrorToSentry({error, functionName: operation, fileName: 'apiService'});
        throw error; // Re-throw to let the caller handle UI
    }
};