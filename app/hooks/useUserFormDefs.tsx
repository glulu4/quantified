import {useState, useEffect, useMemo} from "react";
import {collection, query, where, onSnapshot, CollectionReference, DocumentData} from "firebase/firestore";
import {db} from "@/firebaseConfig"; // Adjust the path based on your file structure
import {handleError} from "@/utils/util";
import {FormDefinition} from "@/types/formdefinition";

export const useUserFormDefs = (userId: string) => {
	const [formDefinitions, setFormDefinitions] = useState<FormDefinition[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const topFormDefinitions = useMemo(() => {
		return [...formDefinitions]
			.sort((a, b) => (b.submissionCount) - (a.submissionCount))
			.slice(0, 5);
	}, [formDefinitions, 5]);

	useEffect(() => {
		if (!userId) {
			setLoading(false);
			setError(new Error("User ID is required to fetch form definitions."));
			return;
		}

		setLoading(true);
		setError(null);

		// Reference the 'meals' collection
		const formDefCollectionRef: CollectionReference<DocumentData, DocumentData>
			= collection(db, "form-definitions"); // Reference to the 'meals' collection
		const formDefsQuery = query(formDefCollectionRef, where("uid", "==", userId)); // Query meals for the user

		// Set up a real-time listener using onSnapshot
		const unsubscribe = onSnapshot(
			formDefsQuery,
			(querySnapshot) => {
				console.log(`Received query snapshot of size ${querySnapshot.size}`);
				const formDefs: FormDefinition[] = querySnapshot.docs.map((doc) => (doc.data()) as FormDefinition);
				setFormDefinitions(formDefs);
				setLoading(false);
			},
			(error) => {
				handleError({
					error,
					fileName: "useUserFormDefs",
					functionName: "useUserFormDefs",
					msg: error.message

				})
				setError(error);
				setLoading(false);
			}
		);

		// Clean up the listener on unmount or when userId changes
		return () => unsubscribe();
	}, [userId]);

	return {formDefinitions, loading, error, topFormDefinitions};
};
