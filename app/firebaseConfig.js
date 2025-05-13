// firebase config
import {initializeApp, getApps} from 'firebase/app';
import {getFunctions, httpsCallable} from 'firebase/functions';
import {initializeAuth} from 'firebase/auth';

//@ts-ignore
import {getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// init Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
// @ts-ignore 
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// 'not supoprted in this environment'
// const analytics = getAnalytics(app);

const functions = getFunctions(app);
const db = getFirestore(app);

export {app, functions, httpsCallable, auth, db};