import {useState, useEffect} from 'react';
import {apiService} from '../api-service/apiService';
import {HomeStackParamList, OperationTypeHome} from '../../_layout';

export const useOperation = (params: HomeStackParamList['Loading/Loading']) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const [success, setSuccess] = useState(false); // Add success flag

    useEffect(() => {
        const executeOperation = async () => {

            try {

                let success = false;
                switch (params.submissionType) {

                    case OperationTypeHome.FORM_DEFINITION_UPLOAD:
                        setStatus("Starting Form Upload");
                        console.log("Uploading form definition, in useOperation");
                        success = await apiService.uploadFormDefinition(
                            params.newFormDefinition,
                            params.metricDefinitions,
                            params.metricPackDefinitions,
                            params.widgets
                        );

                        break;
                    case OperationTypeHome.FORM_DELETE:
                        setStatus("Starting Form Upload");
                        console.log("Deleting form definition, in useOperation");
                        console.log("Form Def to delete", params.formDefToDelete);


                        success = await apiService.deleteForm(params.formDefToDelete);
                        break;

                    case OperationTypeHome.FORM_UPDATE:
                        setStatus("Starting Form Update");
                        console.log("Updating form definition, in useOperation");
                        console.log("Items to update", params.itemsToUpdate);
                        console.log("Items to create", params.itemsToCreate);
                        console.log("Items to delete", params.itemsToDelete);


                        success = await apiService.updateForm(
                            params.itemsToUpdate,
                            params.itemsToCreate,
                            params.itemsToDelete
                        );
                        break;
                    case OperationTypeHome.FORM_SUBMISSION:

                        setStatus("Starting Form Submission");
                        console.log("Submitting form, in useOperation");
                        success = await apiService.submitForm(

                            params.formSubmission,
                            params.metricPackSubmissions,
                            params.metricSubmissions,
                            params.nutritionPackItems,
                            // params.updatedNutritionPackItems,
                            params.uid,

                        );
                        break;
                    default:
                        throw new Error("Invalid operation type");
                }
                setStatus("Operation completed");
                setSuccess(success);
            } catch (err) {
                setError(err as Error);
                apiService.handleError(err, params.submissionType || error);

                // this might not even happen because we throw an error in handleError
                setSuccess(false);
            } finally {
                setLoading(false);
            }
        };

        if (params.submissionType) executeOperation();
    }, [params.submissionType]); // Only depend on submissionType

    return {loading, error, status, success};
};