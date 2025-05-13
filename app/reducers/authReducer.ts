import {User} from '@/types/graph';


// Define the types for actions
export enum AuthActionType {
    SET_USER = 'SET_USER',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
    LOGOUT = 'LOGOUT',
}

// Define the auth state and action types
export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
    isSignedIn: boolean;
}

export const initialAuthState: AuthState = {
    user: null,
    loading: true,
    error: null,
    isSignedIn: false,
};

type AuthAction =
    | {type: AuthActionType.SET_USER; payload: User | null}
    | {type: AuthActionType.SET_LOADING; payload: boolean}
    | {type: AuthActionType.SET_ERROR; payload: string | null}
    | {type: AuthActionType.LOGOUT};

// Reducer function for managing auth state
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionType.SET_USER:
            return {
                ...state,
                user: action.payload,
                isSignedIn: !!action.payload,
                loading: false,
                error: null
            };
        case AuthActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case AuthActionType.SET_ERROR:
            return {
                ...state,
                error:
                    action.payload,
                loading: false

            };
        case AuthActionType.LOGOUT:
            return {
                ...state,
                user: null,
                isSignedIn: false,
                loading: false,
                error: null
            };
        default:
            return state;
    }

};