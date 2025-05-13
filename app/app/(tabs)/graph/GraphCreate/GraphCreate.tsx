import React, {useEffect, useRef, useState} from 'react';
import {Touchable, TouchableOpacity, View} from 'react-native';
import {useGraph} from '@/app/context/GraphContext';
import {useAuthenticatedUser} from '@/app/context/AuthContext';
import useRenderGraph from '@/hooks/useRenderGraph';
import {GraphStackNavigationType, isABarGraph, isALineGraph, isAPieGraph} from '../_layout';
import ThemedView from '@/components/ThemedView';
import {useGraphHandle} from './Hooks/useGraphHandle';
import {useGraphColors} from './Hooks/useGraphColors';
import {useGraphNavigation} from './Hooks/useGraphNavigation';
import {useGraphOperations} from './Hooks/useGraphOperations';
import TitleInput from './Components/TitleInput';
import Selector from '@/components/ui/Selector';
import BottomSheet from '@gorhom/bottom-sheet';
import ColorBottomSheet from './Components/ColorBottomSheet';
import GraphPillButtons from './Components/GraphPillButtons';
import {useNavigation} from 'expo-router';
import {ThemedText} from '@/components/ui/ThemedText';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import {CommonActions} from '@react-navigation/native';
import {useGraphRefs} from '@/hooks/graph/useGraphRefs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const GraphCreate = () => {

  /**
   * TODO 
   * - add back button in header and next to submit 
   */

  const user = useAuthenticatedUser();
  const {state} = useGraph();
  const [graphTitle, setGraphTitle] = useState<string>(state.graphTitle);
  const {graphRef} = useGraphRefs(state.graphType);
  const navigation = useNavigation<GraphStackNavigationType>();
  const renderedGraph = useRenderGraph(state.graphType, state.graphData, graphRef, state.secondaryGraphData, state.graphSettings);
  const {getLocalGraphState} = useGraphHandle(graphRef);
  const blue = useThemeColor({}, "blue");
  const {
    selectedColors,
    handleColorSelect,
    defaultColors,
    isColorSelected
  } = useGraphColors(graphRef, state.graphType);

  const {
    handleAddMetric,
    handleAddSecondDataSet,
    handleChangeGraphType
  } = useGraphNavigation()

  const {
    handleEdit,
    handleSave
  } = useGraphOperations({
    graphRef,
    getLocalGraphState,
    graphTitle,
    userId: user.uid
  });

  const colorBottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['60%'];

  useEffect(() => {

    const getHeaderLeftContent = () => {
      if (state.mode === "creation") {
        return (
          <TouchableOpacity onPress={() => {
            navigation.dispatch(state => {
              const routes = state.routes.slice(0, -2); // remove the last two routes
              return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1,
              });
            });

          }}>
            <View className='flex-row items-center gap-4'>
              <SFSymbol
                name='chevron.left'
                scale="medium"
                size={22}
                weight="semibold"
                style={{alignSelf: 'center'}}
                color={blue}
              />
              <ThemedText type="headline" className=' text-blue-light dark:text-blue-dark'>
                Back
              </ThemedText>
            </View>

          </TouchableOpacity>
        );
      }
    }
    navigation.setOptions({
      headerRight: () => (
        <View className='flex-row items-center justify-between gap-[60]'>


          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons
              style={{paddingLeft: 10}}
              name='database-plus-outline'
              size={25}
              color={blue}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={state.mode === "creation" ? handleSave : handleEdit}>
            <ThemedText type="headline" className=' text-blue-light dark:text-blue-dark'>
              {state.mode === "creation" ? "Create" : "Edit"}
            </ThemedText>
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (

        getHeaderLeftContent())

    });
    // needs these maps here so that the nett function contains an up-to-date version of the maps
  }, [navigation, getLocalGraphState]);




  // used for adding datasets 
  const lineGraphSpecificProps = isALineGraph(state.graphType) ? {
    handleAddMetric: handleAddMetric, // Replace with actual prop name and value
    handleAdd2ndDataSet: handleAddSecondDataSet,
    selectedGraphType: state.graphType,
    handleChangeGraphType: handleChangeGraphType,
  } : {};

  const barGraphSpecificProps = isABarGraph(state.graphType) ? {
    handleAddMetric: handleAddMetric, // Replace with actual prop name and value
  } : {};

  const pieGraphSpecificProps = isAPieGraph(state.graphType) ? {
    selectedGraphType: state.graphType,
    handleChangeGraphType: handleChangeGraphType,
  } : {};


  return (
    <ThemedView className='flex flex-1 flex-col py-2'>
      <TitleInput
        className='pt-6 px-4'
        title={graphTitle}
        setTitle={setGraphTitle}
      />

      <TouchableOpacity onPress={() => colorBottomSheetRef.current?.expand()} className='flex flex-1 px-4'>
        <Selector

          height={55}
          bgLevel='bgSecondary'
          value="Select Colors"
        />
      </TouchableOpacity>



      <GraphPillButtons
        graphType={state.graphType}
        handleChangeGraphType={handleChangeGraphType}
        className='px-4'
      />


      <View className='px-4'>
        {renderedGraph}
      </View>

      {/* <CommonGraphForm
        graphType={state.graphType}
        renderedGraph={renderedGraph[0]}
        className='px-4'

        {...lineGraphSpecificProps}
        {...barGraphSpecificProps}
        {...pieGraphSpecificProps}

      /> */}


      <ColorBottomSheet
        bottomSheetRef={colorBottomSheetRef}
        snapPoints={snapPoints}
        colors={defaultColors}
        handleColorSelect={handleColorSelect}
        isColorSelected={isColorSelected}
        selectedColors={selectedColors}
      />
    </ThemedView>
  );
};


export default GraphCreate;
