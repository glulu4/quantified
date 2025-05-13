import {useState, useEffect, useMemo} from "react";
import {collection, query, where, onSnapshot} from "firebase/firestore";
import {db} from "@/firebaseConfig"; // Adjust the path based on your file structure
import {Graph} from "@/types/graph";
import {handleError} from "@/utils/util";

export const useUserGraphs = (userId: string) => {
    const [graphs, setGraphs] = useState<Graph[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const topGraphs = useMemo(() => {
        return [...graphs]
            .sort((a, b) => (b.viewCount) - (a.viewCount))
            .slice(0, 5);
    }, [graphs, 5]);

    useEffect(() => {
        if (!userId) {
            setLoading(false);
            setError(new Error("User ID is required to fetch graphs"));
            return;
        }

        setLoading(true);
        setError(null);

        // Reference the 'meals' collection
        const graphCollectionRef = collection(db, "graphs"); // Reference to the 'meals' collection
        const graphQuery = query(graphCollectionRef, where("uid", "==", userId)); // Query meals for the user

        // Set up a real-time listener using onSnapshot
        const unsubscribe = onSnapshot(
            graphQuery,
            (querySnapshot) => {
                console.log(`Received query snapshot of size ${querySnapshot.size}`);
                const graphs: Graph[] = querySnapshot.docs.map((doc) => (doc.data()) as Graph);
                setGraphs(graphs);
                setLoading(false);
            },
            (error) => {
                handleError({
                    error,
                    fileName: "useUserGraphs",
                    functionName: "useUserGraphs",
                    msg: error.message

                })
                setError(error);
                setLoading(false);
            }
        );

        // Clean up the listener on unmount or when userId changes
        return () => unsubscribe();
    }, [userId]);

    return {graphs, loading, error, topGraphs};
};
