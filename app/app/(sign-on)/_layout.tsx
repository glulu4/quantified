import {Stack} from "expo-router";
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useColorScheme} from '@/hooks/useColorScheme';
import {NavigationProp} from "@react-navigation/native";
import Toast from "react-native-toast-message";

export type SignInStackParamList = {
  CreateAccount: {},
  SignIn: {},
  Loading:
  | {
    action: Action.CREATE_ACCOUNT;
    createAccountForm: UserDataOnRegister;
  }
  | {
    action: Action.SIGN_IN | Action.SIGN_IN_GABBY,
    signInForm: SignInForm
  }

  // ... 
};

export interface SignInForm {
  email: string;
  password: string;
}

export interface UserDataOnRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: Date;
  weight: string;
  height: string;
}
export enum Action {
  SIGN_IN_GABBY = 'sign in gabby',
  SIGN_IN = "sign in",
  CREATE_ACCOUNT = "create account"
}
export type SignInNavigationType = NavigationProp<SignInStackParamList>;

const SignInStackLayout = () => {

  const colorScheme = useColorScheme();


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false, headerTitle: 'Landing', }} />
        <Stack.Screen name="CreateAccount" options={{headerShown: false, headerTitle: 'CreateAccount'}} />
        <Stack.Screen name="SignIn" options={{headerShown: false, headerTitle: 'SignIn'}} />
        <Stack.Screen name="Loading" options={{headerShown: false, headerTitle: 'Loading'}} />

      </Stack>
      <Toast />
    </ThemeProvider>
  )
}

export default SignInStackLayout;

