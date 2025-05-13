import React from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import {signOut} from 'firebase/auth';
import ThemedView from '@/components/ThemedView';
import {ThemedText} from '@/components/ui/ThemedText';
import {useAuth, useAuthenticatedUser} from '@/app/context/AuthContext';
import Button from '@/components/Button';
import {SFSymbol} from 'react-native-sfsymbols';
import {useTheme} from 'react-native-paper';
import {useThemeColor} from '@/hooks/useThemeColor';
import {Feather} from '@expo/vector-icons';
import {List, Row} from 'react-native-ios-list';
import {User} from '@/types/user';
import {format} from 'date-fns';
// import {auth} from '@/firebase/firebaseConfig'; // or your auth instance path
// import {Button} from '@/components/ui/Button'; // replace with your button component

export default function Account() {
    const user: User = useAuthenticatedUser();
    const {logout} = useAuth();

    const userInfo = [
        {
            title: 'Name',
            value: `${user.firstName} ${user.lastName}`,
        },
        {
            title: 'Email',
            value: user.email,
        },
        {
            title: 'Phone Number',
            value: user.phoneNumber,
        },
        {
            title: 'Date of Birth',
            value: user.dateOfBirth ? format(new Date(user.dateOfBirth), 'MMMM dd, yyyy') : '—',
        },
    ];

    const actions = [
        {
            title: 'Edit Profile',
            onPress: () => {
                // Handle Edit Profile action
                Alert.alert('Edit Profile', 'Edit Profile action triggered');
            },
        },
        {
            title: 'Change Password',
            onPress: () => {
                // Handle Change Password action
                Alert.alert('Change Password', 'Change Password action triggered');
            },
        },
        {
            title: 'Sign Out',
            onPress: () => {
                logout()
            },
        },
        {
            title: 'Delete Account',
            onPress: () => {
                // Handle Delete Account action
                Alert.alert('Delete Account', 'Delete Account action triggered');
            },
        },
    ];

    const blue = useThemeColor({}, 'blue');
    const rowBgColor = useThemeColor({}, 'secondaryFill');


    return (
        <ThemedView backGroundLevel="bgPrimary" className="flex flex-col flex-1 p-6">

            <View className='pt-10'>
                <Feather
                    name='user'

                    scale='large'
                    weight="semibold"
                    style={{alignSelf: 'center'}}
                    size={60}
                    color={blue}
                />
            </View>
            <View className="py-8">
                <ThemedText emphasized labelType="primary" type="title2" className="mb-2 pl-2">
                    Profile Info
                </ThemedText>
                <View className="gap-3">
                    {userInfo.map((item, index) => (
                        <View key={index} className='bg-secondaryFill-light dark:bg-secondaryFill-dark rounded-xl py-4'>

                            <View className="flex flex-row justify-between px-4">
                                <ThemedText emphasized type="body" labelType="primary">
                                    {item.title}
                                </ThemedText>
                                <ThemedText type="body" labelType="primary">
                                    {item.value || '—'}
                                </ThemedText>
                            </View>
                        </View>
                    ))}
                </View>
            </View>


            <View className="py-6">
                <ThemedText emphasized labelType="primary" type="title2" className="mb-2 pl-2">
                    Actions
                </ThemedText>
                <View className="gap-3">
                    {actions.map((item, index) => (
                        <View key={index} className='bg-secondaryFill-light dark:bg-secondaryFill-dark rounded-xl py-4'>

                            <TouchableOpacity onPress={item.onPress} className="flex flex-row justify-between px-4">
                                <ThemedText emphasized type="body" labelType="primary">
                                    {item.title}
                                </ThemedText>
                                <SFSymbol

                                    name='chevron.right'
                                    scale="medium"
                                    weight="regular"
                                    style={{alignSelf: 'center', paddingRight: 10}}
                                    size={15}
                                    color={blue}
                                />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>

            <View className="gap-4">

            </View>
        </ThemedView>
    );
}
