import React, {useEffect, useState} from 'react'
import {CheckMark} from '@/components/CheckMark';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useNavigation} from 'expo-router';
import {SignInStackParamList, SignInNavigationType, Action, SignInForm, UserDataOnRegister} from './_layout';
import {router} from 'expo-router';
import {useAuth} from '../context/AuthContext';
import CenteredSpinner from '@/components/CenteredSpinner';
import {handleError} from '@/utils/util';
import ThemedView from '@/components/ThemedView';

type LoadingRouteProp = RouteProp<SignInStackParamList, "Loading">;



const Loading = () => {
	const [loading, setLoading] = useState(true);

	const route = useRoute<LoadingRouteProp>();

	const navigation = useNavigation<SignInNavigationType>();
	const {login, register} = useAuth();


	useEffect(() => {

		const action = route.params.action;
		switch (action) {
			case Action.SIGN_IN_GABBY:
				loginUser(process.env.EXPO_PUBLIC_EMAIL || "", process.env.EXPO_PUBLIC_PASSWORD || "");
				break;
			case Action.SIGN_IN:
				const signInForm: SignInForm = route.params.signInForm;
				loginUser(signInForm.email, signInForm.password);
				break;

			case Action.CREATE_ACCOUNT:
				const form: UserDataOnRegister = route.params.createAccountForm;
				submitNewUser(form);
				break;
			default:
				break;
		}


	}, [])

	const delayNavigation = async () => {
		return new Promise(resolve => setTimeout(resolve, 1500)); // 1.5 seconds delay for checkmark animation
	};

	function handleNavigationError(error: unknown, functionName: string) {
		handleError({
			error,
			fileName: '/sign-on/loading',
			functionName,
			msg: "Error signin in or creating user"
		})
		navigation.goBack();

	}

	async function goToHomeScreen() {
		setLoading(false);
		await delayNavigation();
		router.replace("/(tabs)/home/HomeScreen/HomeScreen");

	}
	const submitNewUser = async (form: UserDataOnRegister): Promise<any> => {

		try {
			const successfulRegister = await register(form)

			if (!successfulRegister) throw new Error("Could not register new user")
			goToHomeScreen();
		} catch (error) {
			console.log("error", error);

			handleNavigationError(error, "submitNewUser")
		}
	};

	const loginUser = async (email: string, password: string): Promise<void> => {
		try {
			if (!email || !password) throw new Error("Email or password is missing");
			const successfulLogin = await login(email, password);
			if (!successfulLogin) throw new Error("Did not login user");
			goToHomeScreen();

		} catch (error: any) {
			handleNavigationError(error, "loginUser")
		}
	};

	if (loading) {
		return (
			<CenteredSpinner />
		);
	}

	return (
		<ThemedView style={{display: "flex", flex: 1, justifyContent: "center", padding: 100, alignItems: "center"}}>
			<CheckMark />
		</ThemedView>
	);
}

export default Loading;