import {
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import {ThemedText} from '@/components/ui/ThemedText';
import React, {useState} from 'react';
import {useAuth, useAuthenticatedUser} from '@/app/context/AuthContext';
import * as Sentry from '@sentry/react-native';
// import {ThemedView} from '@/components/ThemedView';
import {useUserFormDefs} from '@/hooks/useUserFormDefs';
import {useHomeScreenLogic} from './useHomeScreenLogic';
import UserHeader from './components/UserHeader';
import TopForms from './components/TopForms';
import {useThemeColor} from '@/hooks/useThemeColor';
import {SFSymbol} from 'react-native-sfsymbols';
import FavoriteCard from './components/FavoriteCard';
import ThemedView from '@/components/ThemedView';
import {remapProps, verifyInstallation, } from 'nativewind';


export default function HomeScreen() {
    Sentry.captureMessage("This is an info message", "info");

    const {logout} = useAuth();
    const user = useAuthenticatedUser();
    const {formDefinitions, topFormDefinitions, loading, error} = useUserFormDefs(user.uid);
    const {goToAddForm, goToFormSubmission, deleteForm, viewAllForms, openAccountScreen} = useHomeScreenLogic();
    const iconPlusColor = useThemeColor({}, "blue");

    const ScrollViewTW = remapProps(ScrollView, {
        contentContainerClassName: "contentContainerStyle",
        // labelClass: "labelStyle",
    });
    return (
        <ThemedView backGroundLevel='bgPrimary' className='p-safe flex flex-col flex-1' >


            <View className='py-10'>
                <UserHeader user={user} onPress={openAccountScreen} />
            </View>

            <TouchableOpacity className='absolute top-[60] right-[30]' testID="plus-icon-button" onPress={goToAddForm}>
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
            {/* Scrollable Content */}



            <View className='flex-1 flex-col flex'>


                <ScrollViewTW
                    contentContainerClassName="pb-20 "
                >

                    <View className='flex-1 pt-10 px-4' >

                        {/* Recents Section */}
                        <View
                            className='flex-row justify-between items-end px-4'
                        >
                            <ThemedText labelType='primary' type='title3' emphasized>Recents</ThemedText>
                            <TouchableOpacity onPress={() => viewAllForms(formDefinitions)}>
                                <ThemedText labelType='primary' type='subhead'>View All</ThemedText>
                            </TouchableOpacity>
                        </View>

                        <TopForms
                            topForms={topFormDefinitions}
                            loading={loading}
                            onPress={goToFormSubmission}
                            onDelete={deleteForm}
                            error={error}
                        />

                        {/* Favorites Section */}
                        {/* <View className='pt-8 px-6'>
                            <ThemedText
                                labelType='primary'
                                className='mb-6 pl-2'
                                emphasized
                                type='title3'
                            >
                                Favorites
                            </ThemedText>

                            <FavoriteCard
                                onPress={goToAddForm} // You can change this if needed
                            />
                        </View> */}

                    </View>

                </ScrollViewTW>

            </View>

        </ThemedView>
    );
}

