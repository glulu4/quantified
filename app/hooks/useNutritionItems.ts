import {NutritionPackItems} from "@/types/store-types";
import {getUserNutritionPackItems} from "@/cloudfunctions/getFunctions";
import {log} from "@/types/logger";
import {useEffect, useState} from "react";

export const useNutritionItems = (uid: string) => {
    const [nutritionItems, setNutritionItems] = useState<NutritionPackItems>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);



    useEffect(() => {

        const fetchNutritionItems = async () => {

            setLoading(true);
            setError(null);
            try {
                const items: NutritionPackItems = await getUserNutritionPackItems(uid);
                setNutritionItems(items);
            } catch (error) {
                log.debug("Error fetching nutrition items: ", error);
                console.error(error);
                setError(error as Error);
            }
            finally {
                setLoading(false);
            }
        }

        // Check if uid is defined and nutritionItems is undefined
        // This prevents the function from being called multiple times
        if (uid) {

            // Check if nutritionItems is undefined
            if (nutritionItems) {
                // If nutritionItems is already defined, do not fetch again
                return;
            }
            fetchNutritionItems();
        } else {
            setNutritionItems(undefined);
        }


    }, [uid])

    return {nutritionItems, loading, error};

}