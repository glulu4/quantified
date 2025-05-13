import {FoodAction, foodReducer, FoodState, initialState} from "@/reducers/foodReducer";
import {ReactNode, useContext, useReducer} from "react";
import {createContext} from "react";

// --- Context Setup ---
type FoodContextType = {
    state: FoodState;
    dispatch: React.Dispatch<FoodAction>;
};

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(foodReducer, initialState);

    return (
        <FoodContext.Provider value={{state, dispatch}}>
            {children}
        </FoodContext.Provider>
    );
};

export const useFoodContext = () => {
    const context = useContext(FoodContext);
    if (!context) {
        throw new Error("useFoodContext must be used within a FoodProvider");
    }
    return context;
};
