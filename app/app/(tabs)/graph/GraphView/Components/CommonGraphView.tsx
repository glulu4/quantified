import {Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View} from 'react-native'
import React, {ForwardedRef, useState} from 'react'

import {Feather, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import MyModal from '@/components/MyModal'
import {Colors} from '@/constants/Colors'
import {useGraph} from '@/app/context/GraphContext'
import {LineGraphState} from '@/reducers/lineGraphReducer'
import {filterByEnum, GraphData, GraphHandle, GraphSettings, xAxisLabelTypes} from '@/types/graph'
import {subDays, subMonths, isWithinInterval} from 'date-fns';
import {isALineGraph} from '@/app/(tabs)/graph/_layout'
import {handleError} from '@/utils/util'
import Toast from 'react-native-toast-message'
import {useThemeColor} from '@/hooks/useThemeColor'

import {ThemedText} from '@/components/ui/ThemedText'
import {Collapsible} from '@/components/Collapsible'
import EditButton from '@/components/EditButton'
import TrashButton from '@/components/TrashButton'
import ThemedView from '@/components/ThemedView'

interface GraphViewProps<T extends GraphSettings> {
    graphId: string;
    renderedGraph: React.JSX.Element;
    handleDeleteGraph: () => Promise<void>;
    graphRef?: ForwardedRef<GraphHandle<T>>;
    editGraph: () => void;
}


const CommonGraphView = <T extends GraphSettings>(
    {
        renderedGraph,
        handleDeleteGraph,
        graphRef,
        editGraph,
    }:
        GraphViewProps<T>) => {

    // const navigation = useNavigation<GraphStackNavigationType>();
    console.log("T: ", typeof graphRef);


    const iconColor = useThemeColor({}, "labelPrimary")
    // const {width} = Dimensions.get("screen")
    const [visible, setVisible] = useState<boolean>(false)
    // const sectionBackgroundColor = useThemeColor({}, "primaryFill")
    const [dateRange, setDateRange] = useState<string>(filterByEnum.ALL_TIME)
    const iconBackgroundColor = useThemeColor({}, "labelPrimary")

    // const {state, dispatch} = useGraph();
    const [modalContent, setModalContent] = useState<JSX.Element>(<></>)
    // const xAxisLabels: xAxisLabelTypes[] = [
    //     xAxisLabelTypes.Index,
    //     xAxisLabelTypes.None,
    //     xAxisLabelTypes.Date,
    //     xAxisLabelTypes.Week,
    // ];

    // const filterByOptions: string[] = [filterByEnum.MONTH, filterByEnum.PAST_WEEK, filterByEnum.ALL_TIME]

    const closeModalAndDelete = () => {
        setVisible(false);
        handleDeleteGraph();
    }


    // /**
    //  * 
    //  * @param graphData data to be filtered
    //  * @param pastWeek boolean to filter for submissions within the last week
    //  * @param pastMonth boolean to filter for submissions within the last month
    //  * @returns filtered GraphData[]
    //  */
    // function filterGraphData(
    //     graphData: GraphData[],
    //     pastWeek: boolean,
    //     pastMonth: boolean
    // ): GraphData[] {

    //     const graphDataStored = graphData;
    //     const now = new Date();


    //     const isWithinPastWeek = (date: Date): boolean => {
    //         return isWithinInterval(date, {
    //             start: subDays(now, 7),
    //             end: now,
    //         });
    //     };

    //     const isWithinPastMonth = (date: Date): boolean => {
    //         return isWithinInterval(date, {
    //             start: subMonths(now, 1),
    //             end: now,
    //         });
    //     };

    //     const filteredGraphData: GraphData[] = graphData.map((data) => {
    //         const filteredSubmissions = data.metricSubmissions.filter((submission) => {

    //             const submissionDate: Date | undefined = convertTimeStampToDate(submission.createdAt)

    //             if (submissionDate !== undefined && submissionDate instanceof Date) {
    //                 if (pastWeek) {
    //                     return isWithinPastWeek(submissionDate);

    //                 }

    //                 if (pastMonth) {
    //                     return isWithinPastMonth(submissionDate);
    //                 }
    //             }


    //             return true;
    //         });


    //         return {
    //             ...data,
    //             metricSubmissions: filteredSubmissions,
    //         };
    //     });

    //     // If no filtered data is found, show a toast and return original data


    //     console.log("filteredGraphData: ", filteredGraphData);
    //     const hasData = filteredGraphData.some(data => data.metricSubmissions.length > 0);

    //     if (filteredGraphData.length <= 0 || !hasData) {
    //         console.log("hereghjvbkjl");

    //         Toast.show({
    //             type: 'error',
    //             text1: 'Error',
    //             text2: 'No data',
    //             position: 'top',
    //             visibilityTime: 3000,
    //             swipeable: true,
    //         });

    //         return graphDataStored
    //     }

    //     if (pastWeek) {
    //         setXAxisLabel(xAxisLabelTypes.Week)
    //         setDateRange(filterByEnum.PAST_WEEK)

    //     }

    //     return filteredGraphData;
    // }


    const settingsModalContent: React.ReactNode = (

        <View style={[styles.settingsModalContent,]}>
            <EditButton
                pressFn={() => {
                    setVisible(false);
                    editGraph()
                }}
            />

            <TrashButton pressFn={closeModalAndDelete} />
        </View>




    )


    // const filterData = (option: string) => {
    //     let filteredData: GraphData[] = [];
    //     let filteredSecondaryData: GraphData[] = [];

    //     switch (option) {
    //         case filterByEnum.MONTH:
    //             setDateRange(filterByEnum.MONTH)
    //             // Filter for the past month
    //             filteredData = filterGraphData(state.originalGraphData, false, true);

    //             filteredSecondaryData = state.originalSecondaryGraphData
    //                 ? filterGraphData(state.secondaryGraphData, false, true)
    //                 : [];
    //             break;

    //         case filterByEnum.PAST_WEEK:
    //             // Filter for the past week

    //             filteredData = filterGraphData(state.originalGraphData, true, false);

    //             filteredSecondaryData = state.originalSecondaryGraphData
    //                 ? filterGraphData(state.originalSecondaryGraphData, true, false)
    //                 : [];

    //             // sets the x axis labels to be weekdays

    //             break;

    //         case filterByEnum.ALL_TIME:
    //             setDateRange(filterByEnum.ALL_TIME)

    //             filteredData = state.originalGraphData;
    //             filteredSecondaryData = state.originalSecondaryGraphData || [];

    //         default:
    //             // No filtering, return original data
    //             filteredData = state.originalGraphData;
    //             filteredSecondaryData = state.originalSecondaryGraphData || [];
    //             break;
    //     }

    //     // Dispatch both filtered data sets in a single call
    //     dispatch({
    //         type: 'SET_SECONDARY_AND_PRIMARY_DATA',
    //         payload: {
    //             primary: filteredData,
    //             secondary: filteredSecondaryData
    //         }
    //     });
    // };

    // const setXAxisLabel = async (label: string) => {

    //     try {
    //         if (graphRef && typeof graphRef !== 'function' && graphRef.current) {
    //             graphRef.current?.dispatch({type: 'SET_X_AXIS_LABEL', payload: label});
    //         }
    //         setVisible(false)

    //     } catch (error) {

    //         handleError({
    //             error,
    //             fileName: "CommonGraphView",
    //             functionName: "setXAxisLabel",
    //             msg: "Error setting x axis label"
    //         })

    //     }



    // }
    // const filterModalContent = (
    //     <>


    //         <Collapsible title='Filter By'>

    //             {filterByOptions.map((option, index) => (
    //                 <TouchableOpacity key={index} onPress={() => {
    //                     filterData(option)
    //                     setVisible(false)
    //                 }
    //                 }>
    //                     <ThemedText type='subhead'>{option}</ThemedText>
    //                 </TouchableOpacity>
    //             ))}
    //         </Collapsible>


    //         {isALineGraph(state.graphType) && <Collapsible title='Set X-Axis'>
    //             {xAxisLabels.map((label, index) => (
    //                 <TouchableOpacity key={index} onPress={() => setXAxisLabel(label)}>
    //                     <ThemedText>{label}</ThemedText>
    //                 </TouchableOpacity>
    //             ))}
    //         </Collapsible>}



    //     </>
    // )
    const renderSettingsModal = () => {

        setModalContent(settingsModalContent)
        setVisible(true);
    }



    // const renderFilterModal = () => {
    //     setModalContent(filterModalContent)
    //     setVisible(true);
    // }

    return (
        <View className='flex'>
            {renderedGraph}
        </View>
    )
    return (
        <>
            <View style={styles.topView}>



                <TouchableOpacity onPress={renderSettingsModal}>
                    <Ionicons name='settings-outline' size={30} color={iconColor} />
                </TouchableOpacity>
            </View>

            <View style={{paddingVertical: 20}}>
                <View style={styles.graphHeaderView}>
                    <ThemedText type='subhead'>{dateRange}</ThemedText>

                    <TouchableOpacity style={{backgroundColor: iconBackgroundColor, padding: 5, borderRadius: 20}}>
                        <MaterialCommunityIcons name='tune-variant' size={20} color={iconColor} />
                    </TouchableOpacity>

                </View>

                <ThemedView>
                    {renderedGraph}

                </ThemedView>
            </View>


            {visible &&
                <MyModal
                    isVisible={visible}
                    onClose={() => setVisible(false)}
                    content={modalContent}
                />

            }
        </>
    )
}

export default CommonGraphView;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // justifyContent: "space-around",
    },
    GraphContainer: {
        marginTop: 50,
        flex: 1,


        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    graphHeaderView: {
        display: 'flex',

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 100

    },
    statCard: {
        padding: 15,
        borderRadius: 10,
        paddingHorizontal: 20

    },
    statContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    topView: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        zIndex: 9,
        paddingTop: 50
    },
    settingsModalContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20, // Add padding to give space around buttons
    },


});
