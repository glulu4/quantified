import {useState, useEffect} from "react";
import {collection, query, where, onSnapshot} from "firebase/firestore";
import {db} from "@/firebaseConfig"; // Adjust the path based on your file structure
import {Meal} from "@/types/nutritionTypes";
import {handleError} from "@/utils/util";

export const useUserMeals = (userId: string) => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!userId) {
            setLoading(false);
            setError(new Error("User ID is required to fetch meals."));
            return;
        }

        setLoading(true);
        setError(null);

        // Reference the 'meals' collection
        const mealsRef = collection(db, "meals"); // Reference to the 'meals' collection
        const mealsQuery = query(mealsRef, where("uid", "==", userId)); // Query meals for the user

        // Set up a real-time listener using onSnapshot
        const unsubscribe = onSnapshot(
            mealsQuery,
            (querySnapshot) => {
                console.log(`Received query snapshot of size ${querySnapshot.size}`);
                const fetchedMeals: Meal[] = querySnapshot.docs.map((doc) => (doc.data() as Meal))
                setMeals(fetchedMeals);
                setLoading(false);
            },
            (error) => {
                handleError({
                    error,
                    fileName: "useUserMeals",
                    functionName: "useUserMeals",
                    msg: error.message

                })
                setError(error);
                setLoading(false);
            }
        );

        // Clean up the listener on unmount or when userId changes
        return () => unsubscribe();
    }, [userId]);

    return {meals, loading, error};
};
