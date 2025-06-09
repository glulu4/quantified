import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper'

import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {Colors} from '@/constants/Colors';
import {ThemedText} from '@/components/ui/ThemedText';
import ThemedView from '@/components/ThemedView';
import {CheckMark} from '@/components/CheckMark';
import {XMark} from '@/components/XMark';
import {useOperation} from './hooks/useOperation';
import {HomeStackNavigationType, HomeStackParamList} from '../_layout';
import {useForm} from '@/app/context/FormContext';
import {usePackStatesStore} from '../Form-Submit/stores/useStore';
import CenteredSpinner from '@/components/CenteredSpinner';

type LoadingRouteProp = RouteProp<HomeStackParamList, 'Loading/Loading'>;

export default function Loading() {
  const route = useRoute<LoadingRouteProp>();
  const params = route.params as HomeStackParamList['Loading/Loading'];
  const navigation = useNavigation<HomeStackNavigationType>();
  const {dispatch} = useForm();
  const {loading, error, status, success} = useOperation(params);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const resetToHome = async () => {
    await delay(1500); // 1.5-second animation delay
    dispatch({type: "CLEAR_STATE"});
    usePackStatesStore.getState().clearPackStates();
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{name: 'index'}], // make this go to the home screen
    }));
  };

  const goBack = async () => {
    await delay(1500); // 1.5-second animation delay
    navigation.goBack();
  };

  // Handle navigation after animation
  useEffect(() => {

    if (!loading) {
      if (success) {
        resetToHome();
      } else {
        goBack();
      }
    }

  }, [success, loading]);

  if (loading) {
    return (
      <ThemedView style={styles.screen}>
        <ActivityIndicator size={30} color={Colors.primary} />

        <ThemedText labelType='primary' type="title3">{status}</ThemedText>
      </ThemedView>
    );
  }

  if (!success) {
    return (
      <ThemedView style={styles.screen}>
        <XMark />
        <ThemedText>{error?.message}</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.screen}>
      <CheckMark />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center', alignItems: 'center', padding: 100},
});