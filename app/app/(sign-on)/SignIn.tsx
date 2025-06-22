import React, {useEffect, useState} from 'react'
import {
  TouchableOpacity, View,
  Text,
} from 'react-native'
import Button from '@/components/Button';
import {useNavigation} from 'expo-router';
import {Action, SignInForm, SignInNavigationType} from './_layout';
import Toast from 'react-native-toast-message';
import {useAuth} from '../context/AuthContext';
import {validatePassword} from '@/utils/util';
import {errorToast} from '@/utils/toastUtils';
import ThemedView from '@/components/ThemedView';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import TextInputWithLabel from '@/components/TextInputLabeled';

export default function SignIn() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<SignInNavigationType>();
  const {authState, clearStateError} = useAuth();


  const backArrowColor = useThemeColor({}, "labelPrimary")
  useEffect(() => {

    if (authState.error) {
      console.log("Auth state error");

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: authState.error,
        position: 'top',
        visibilityTime: 3000,
        swipeable: true,
      });
      clearStateError()

    }

  })

  const goToLoading = (who?: string) => {


    if (who === "gabby") {
      let form: SignInForm = {
        email: '',
        password: ''
      }
      navigation.navigate('Loading', {
        action: Action.SIGN_IN_GABBY,
        signInForm: form,
      })
    }


    else {


      // const validationMessage = validatePassword(password);
      // if (validationMessage) {


      //   errorToast(validationMessage);
      //   return;
      // }

      let form: SignInForm = {
        email,
        password,
      }
      navigation.navigate('Loading', {
        action: Action.SIGN_IN,
        signInForm: form,
      })
    }
  }



  return (


    <ThemedView
      className='flex flex-col flex-1 justify-center px-8'
    >

      <View
        className='flex flex-col gap-10'
      >

        <Text className="text-[48px] font-semibold text-center text-blue-light dark:text-blue-dark mb-24">
          Sign In
        </Text>

        <TextInputWithLabel
          value={email}
          setValue={setEmail}
          label="Email"
          placeholder="Enter your email"
        />

        <TextInputWithLabel
          value={password}
          setValue={setPassword}
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />

      </View>

      <View className='self-center flex flex-row pt-12 gap-8' >
        <Button text='Sign In' onPress={goToLoading} />
        {/* <Button text='Gabby' onPress={() => goToLoading("gabby")} /> */}

      </View>

      <View className='flex justify-center items-center absolute top-20 left-10 w-12 h-12 rounded-full bg-bgSecondary-light dark:bg-bgSecondary-dark'>
        <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
          <SFSymbol size={15} name="chevron.left" weight="semibold" color={backArrowColor} />

        </TouchableOpacity>
      </View>


    </ThemedView>
  )
}


