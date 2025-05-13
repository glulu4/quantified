import React, {useEffect, useState} from 'react';
import {Redirect, useNavigation} from 'expo-router';
import {useAuth} from './context/AuthContext';
import {getAuth} from 'firebase/auth';
import {functions, httpsCallable} from '@/firebaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth';
import {router} from 'expo-router';
import {ActivityIndicator, View} from 'react-native';
import {getUser} from '@/cloudfunctions/getFunctions';
import {handleError} from '@/utils/util';
import CenteredSpinner from '@/components/CenteredSpinner';
import {User} from '@/types/user';
import {HomeStackNavigationType} from './(tabs)/home/_layout';

// Call this once at the entry point of your app

const StartPage = () => {
  const {loginWithUser} = useAuth();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const navigation = useNavigation<HomeStackNavigationType>();


  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {

          const fetchedUser: User = await getUser(user.uid);
          if (!fetchedUser) throw new Error("Error getting user");

          loginWithUser(fetchedUser); // adds user to context
          router.push("/(tabs)/home/HomeScreen/HomeScreen");
          // navigation.navigate("", {});
        } catch (error) {
          console.error("Error fetching user data:", error);

          setErrorOccurred(true);
        }
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) {

    return (
      <CenteredSpinner />
    )

    // Render a loading state while checking the token
    // return null; // need this for auto sign in
  }
  // href = "(sign-on)"
  if (errorOccurred) {
    console.log("Authentication error:", error);
    return <Redirect href="/(sign-on)" />;
  }

  if (error) {
    handleError({
      error,
      fileName: "index",
      functionName: "EOF",
      msg: "Authentication erro"
    })
    console.log("Authentication error:", error);
    return <Redirect href="/(sign-on)" />;
  }

  if (!user) {
    return <Redirect href="/(sign-on)" />;
  }

  return null; // This ensures that the component doesn't render anything if the user is authenticated and the redirect has happened
};

export default StartPage;
