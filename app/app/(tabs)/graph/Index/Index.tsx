import {View, StyleSheet, useColorScheme, TouchableOpacity} from 'react-native';
import React from 'react';
import {ThemedText} from '@/components/ui/ThemedText';
import {useAuth, useAuthenticatedUser} from '@/app/context/AuthContext';
import {useNavigation} from 'expo-router';
import {GraphStackNavigationType, OperationTypeGraph} from '../_layout';
import {useGraph} from '@/app/context/GraphContext';
import ThemedView from '@/components/ThemedView';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import GraphCards from './Components/GraphCards';
import {ScrollView} from 'react-native-gesture-handler';

export default function Index() {
  const navigation = useNavigation<GraphStackNavigationType>();
  const iconPlusColor = useThemeColor({}, "blue");
  const user = useAuthenticatedUser();
  const {dispatch} = useGraph();



  const addGraph = (): void => {
    dispatch({type: "CLEAR_STATE"})
    navigation.navigate("SelectMetrics/SelectMetrics", {operation: 'new-graph'});
  };


  return (
    <ThemedView className='p-safe flex-1 flex-col flex'>


      <View className="py-24 px-14">
        <ThemedText labelType='primary' type='title1' emphasized>
          User Graphs
        </ThemedText>

        <ThemedText className='pt-4' type='subhead' labelType='secondary'>
          View and manage your graphs
        </ThemedText>
      </View >

      <TouchableOpacity className='absolute top-[60] right-[30]' testID="plus-icon-button" onPress={addGraph}>
        <SFSymbol
          name="plus.circle"
          weight="semibold"
          scale="large"
          color={iconPlusColor}
          size={16}
          resizeMode="center"
          multicolor={false}
          style={{width: 32, height: 32}}
        />


      </TouchableOpacity>



      <View className='flex flex-1 mt-16 mb-5 px-4' >
        <ScrollView>

          <GraphCards
            uid={user.uid}
          />
        </ScrollView>




      </View >


    </ThemedView >
  );
}
