import React, {createContext, useReducer, useContext, ReactNode} from 'react';
import {FormActions, formReducer, FormState, initialFormState} from '@/reducers/formReducer';

type FormContextType = {
    state: FormState;
    dispatch: React.Dispatch<FormActions>;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
};

const FormProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(formReducer, initialFormState);

    return (
        <FormContext.Provider value={{state, dispatch}}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
