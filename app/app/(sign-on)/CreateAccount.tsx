import {View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from 'expo-router';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {useAuth} from '../context/AuthContext';
import {Action, UserDataOnRegister, SignInNavigationType} from './_layout';
import ThemedView from '@/components/ThemedView';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import Toast from 'react-native-toast-message';
import TextInputWithLabel from '@/components/TextInputLabeled';
import Button from '@/components/Button';
import DateInputWithLabel from '@/components/DateInputWithLabel';
import {errorToast} from '@/utils/toastUtils';


const firebaseError2Message = new Map<string, string>([
  ['auth/email-already-in-use', 'Email already in use'],
  ['Firebase: Error (auth/invalid-email).', 'Invalid email address'],
  ['auth/weak-password', 'Password should be at least 6 characters'],
  ['auth/operation-not-allowed', 'Operation not allowed'],
  ['auth/user-not-found', 'User not found'],
  ['auth/wrong-password', 'Wrong password'],
  ['auth/too-many-requests', 'Too many requests, please try again later'],
  ['auth/invalid-verification-code', 'Invalid verification code'],
  ['auth/invalid-verification-id', 'Invalid verification ID'],
  ['auth/invalid-credential', 'Invalid credential'],
  ['auth/invalid-phone-number', 'Invalid phone number'],
  ['auth/invalid-user-token', 'Invalid user token'],
  ['auth/user-disabled', 'User disabled'],
  ['auth/user-token-expired', 'User token expired'],
  ['auth/operation-not-supported-in-this-environment', 'Operation not supported in this environment'],
  ['auth/invalid-app-id', 'Invalid app ID'],
  ['auth/invalid-api-key', 'Invalid API key'],
]);

export default function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState<Date>(new Date());
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const navigation = useNavigation<SignInNavigationType>();
  const {authState, clearStateError} = useAuth();

  useEffect(() => {
    if (authState.error) {
      const error = authState.error as string;
      console.log('Error in CreateAccount:', error);

      errorToast(firebaseError2Message.get(error) || authState.error);
      // Toast.show({
      //   type: 'error',
      //   text1: 'Error',
      //   text2: authState.error,
      //   position: 'top',
      //   visibilityTime: 3000,
      //   swipeable: true,
      // });
      clearStateError();
    }
  }, [authState.error, clearStateError]);

  const goToLoading = () => {
    const form: UserDataOnRegister = {
      firstName,
      lastName,
      email,
      password,
      dob,
      weight,
      height,
    };
    navigation.navigate('Loading', {
      action: Action.CREATE_ACCOUNT,
      createAccountForm: form,
    });
  };

  const blue = useThemeColor({}, "blue")
  const label = useThemeColor({}, "labelSecondary");
  const disabledColor = useThemeColor({}, "systemGray6");

  const numberOfSteps = 3
  const [activeStep, setActiveStep] = useState(0);


  function goNext() {

    if (activeStep === 0) {
      if (firstName.length < 2 || lastName.length < 2) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: "First name and last name must be at least 2 characters long",
          position: 'top',
          visibilityTime: 3000,
          swipeable: true,
        });
        return;
      }
    }

    if (activeStep === 1) {
      if (weight.length < 1 || height.length < 1) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: "Weight and height must be at least 1 character long",
          position: 'top',
          visibilityTime: 3000,
          swipeable: true,
        });
        return;
      }
    }
    if (activeStep === 2) {
      if (email.length < 5 || password.length < 6) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: "Email must be at least 5 characters long and password must be at least 6 characters long",
          position: 'top',
          visibilityTime: 3000,
          swipeable: true,
        });
        return;
      }
      if (!email.includes('@')) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: "Email must be a valid email address",
          position: 'top',
          visibilityTime: 3000,
          swipeable: true,
        });
        return;
      }
    }


    if (activeStep === numberOfSteps - 1) {
      goToLoading();
      return;
    }
    setActiveStep((prev) => prev + 1);
  }

  function goBack() {
    if (activeStep === 0) {
      navigation.goBack();
      return;
    }
    setActiveStep((prev) => prev - 1);
  }


  return (
    <ThemedView className="flex-1 flex-col justify-center items-center px-6 pt-20">

      <ProgressSteps
        activeStep={activeStep}
        activeStepIconBorderColor={blue}
        activeStepNumColor={blue}

        activeLabelColor={blue}
        completedStepIconColor={blue}
        completedLabelColor={blue}
        completedProgressBarColor={blue}
        disabledStepNumColor={label}
        disabledStepIconColor={disabledColor}


      >
        {/* Step 1: Name */}
        <ProgressStep
          label="Name"
          scrollViewProps={{contentContainerStyle: {flexGrow: .4, justifyContent: 'center'}}}
          removeBtnRow

        >
          <View className="mt-10">
            <TextInputWithLabel
              label="First Name"
              value={firstName}
              setValue={setFirstName}
              placeholder="Enter your first name"
              className="mb-6"
            />
            <TextInputWithLabel
              label="Last Name"
              value={lastName}
              setValue={setLastName}
              placeholder="Enter your last name"
            />


            <View className=" gap-4 flex flex-row-reverse justify-around mt-20">
              <Button text="Next" onPress={goNext} theme="default" />
              <Button text="Back" onPress={goBack} theme="default" />
            </View>

          </View>
        </ProgressStep>



        {/* Step 2: DOB + Weight + Height */}
        <ProgressStep
          label="Details"
          scrollViewProps={{contentContainerStyle: {flexGrow: .4, justifyContent: 'center'}}}
          removeBtnRow

        >
          <View className="mt-10">
            <DateInputWithLabel
              label="Date of Birth"
              value={dob}
              setValue={setDob}

            // className="mb-6"

            />
            <TextInputWithLabel
              label="Weight (lbs)"
              value={weight}
              setValue={setWeight}
              placeholder="Enter your weight"
              className="mb-6"
              keyboardType="numeric"
            />
            <TextInputWithLabel
              label="Height (in)"
              value={height}
              setValue={setHeight}
              placeholder="Enter your height"
              keyboardType="numeric"
            />
            <View className=" gap-4 flex flex-row-reverse justify-around mt-20">
              <Button text="Next" onPress={goNext} theme="default" />
              <Button text="Back" onPress={goBack} theme="default" />
            </View>
          </View>


        </ProgressStep>


        {/* Step 3: Email + Password */}
        <ProgressStep
          label="Account"
          scrollViewProps={{contentContainerStyle: {flexGrow: .4, justifyContent: 'center'}}}
          removeBtnRow
        // buttonPreviousText="Back"
        // buttonNextTextColor='#3b82f6'
        // buttonPreviousTextColor='#6b7280'

        >
          <View className="">
            <TextInputWithLabel
              label="Email"
              value={email}
              setValue={setEmail}
              placeholder="Enter your email"
              className="mb-6"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInputWithLabel
              label="Password"
              value={password}
              setValue={setPassword}
              placeholder="Enter your password"
              secureTextEntry
              className="mb-6"
              autoCapitalize="none"
            />
          </View>

          <View className=" gap-4 flex flex-row-reverse justify-around mt-20">
            <Button text="Next" onPress={goNext} theme="default" />
            <Button text="Back" onPress={goBack} theme="default" />
          </View>
        </ProgressStep>


      </ProgressSteps>
    </ThemedView>
  );
}