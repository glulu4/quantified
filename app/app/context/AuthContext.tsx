import React, {createContext, useState, useContext, ReactNode, useReducer, useEffect} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {router} from "expo-router";
import {Timestamp} from 'firebase/firestore';
import {AuthActionType, authReducer, AuthState, initialAuthState} from '@/reducers/authReducer';
import {getUser} from '@/cloudfunctions/getFunctions';
import {UserDataOnRegister} from '../(sign-on)/_layout';
import {addNewUser} from '@/cloudfunctions/addFunctions';
import {useColorScheme} from 'react-native';
import {handleError} from '@/utils/util';
import {User} from '@/types/user';
import * as Crypto from 'expo-crypto';

const AuthContext = createContext<{
  authState: AuthState;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (form: UserDataOnRegister) => Promise<boolean>;
  loginWithUser: (user: User) => Promise<boolean>;
  clearStateError: () => void;
} | null>(null);

// creating provider component
export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);
  const auth = getAuth();
  const colorScheme = useColorScheme() === "light" ? "light" : "dark";


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUser(user.uid);
        dispatch({type: AuthActionType.SET_USER, payload: userData});
      } else {
        dispatch({type: AuthActionType.LOGOUT});
      }
    });

    return () => unsubscribe();
  }, []);


  const getUserFromFirestore = async (uid: string): Promise<User | null> => {
    return await getUser(uid);
  };

  const login = async (email: string, password: string): Promise<boolean> => {

    dispatch({type: AuthActionType.SET_LOADING, payload: true});

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = await getUserFromFirestore(userCredential.user.uid);

      // prevents wrong email pass combination to app
      if (!user) throw new Error("user came back null");

      dispatch({type: AuthActionType.SET_USER, payload: user});
      return true;
    } catch (error: any) {
      dispatch({type: AuthActionType.SET_ERROR, payload: error.message});
      return false;
    }
  };

  const loginWithUser = async (user: User): Promise<boolean> => {

    dispatch({type: AuthActionType.SET_LOADING, payload: true});

    try {
      dispatch({type: AuthActionType.SET_USER, payload: user});
      return true;
    } catch (error: any) {
      dispatch({type: AuthActionType.SET_ERROR, payload: error.message});
      return false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({type: AuthActionType.LOGOUT});
      router.replace('/(sign-on)');
    } catch (error: any) {
      dispatch({type: AuthActionType.SET_ERROR, payload: error.message});
    }
  };

  const register = async (form: UserDataOnRegister): Promise<boolean> => {


    dispatch({type: AuthActionType.SET_LOADING, payload: true});
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);


      if (!userCredential) throw new Error("Error creation new user");

      const newUser: User = {
        uid: userCredential.user.uid,
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        userSettings: {
          id: Crypto.randomUUID(),
          colorScheme: colorScheme
        },
        weight: parseInt(form.weight),
        height: parseInt(form.height),
        phoneNumber: "215-412-1234",
        dateOfBirth: form.dob,//new Date(2002, 5, 4), // june 4, 2002
        folders: [],
        createdAt: Timestamp.now(),
        deletedAt: null

      }
      if (!newUser)
        throw new Error("User object came back null");
      await addNewUser(newUser);
      dispatch({type: AuthActionType.SET_USER, payload: newUser});
      return true;
    } catch (error: any) {
      dispatch({type: AuthActionType.SET_ERROR, payload: error.message});
      return false;
    }
  };


  function clearStateError() {
    dispatch({type: AuthActionType.SET_ERROR, payload: null})
  }


  return (
    <AuthContext.Provider value={{authState, login, logout, register, loginWithUser, clearStateError}}>
      {children}
    </AuthContext.Provider >
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useAuthenticatedUser = () => {
  const {authState} = useAuth();
  if (!authState.user) {
    if (authState.isSignedIn) {
      throw new Error("User is signed in but not in state");
    }
    return {} as User; // Ensures that user is defined
  }
  return authState.user;
};


export default () => null;