import React from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import ThemedView from '@/components/ThemedView';
import {ThemedText} from '@/components/ui/ThemedText';
import {useAuth, useAuthenticatedUser} from '@/app/context/AuthContext';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import {Feather} from '@expo/vector-icons';
import {User} from '@/types/user';
import {format} from 'date-fns';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from 'expo-router';
import {HomeStackNavigationType} from '../_layout';
import {EditableField} from '@/types/user';
import {AccountModalStackNavigationType} from './_layout';
import {useUserData} from './hooks/useUserData';
import {useLiveUser} from '@/hooks/useLiveUser';

export default function Account() {
    const baseUser: User = useAuthenticatedUser();
    const {user: liveUser} = useLiveUser(baseUser.uid);
    const user: User = liveUser ?? baseUser;
    const {logout} = useAuth();


    const {handleDeleteAccount} = useUserData(user);



    const userInfo = [
        {
            title: 'Name',
            value: `${user.firstName} ${user.lastName}`,
            field: EditableField.Name,
        },
        {
            title: 'Email',
            value: user.email,
            field: EditableField.Email,
        },
        {
            title: 'Phone Number',
            value: user.phoneNumber,
            field: EditableField.PhoneNumber,
        },
        {
            title: 'Date of Birth',
            value: user.dateOfBirth ? format(new Date(user.dateOfBirth), 'MMMM dd, yyyy') : '—',
            field: EditableField.DateOfBirth,
        },
        {
            title: 'Height',
            value: user.height ? `${user.height} in` : '—',
            field: EditableField.Height,
        },
        {
            title: 'Weight',
            value: user.weight ? `${user.weight} lb` : '—',
            field: EditableField.Weight,
        },

    ];


    const actions = [
        // {
        //     title: 'Edit Profile',
        //     onPress: () => {
        //         Alert.alert('Edit Profile', 'Edit Profile action triggered');
        //     },
        // },
        // {
        //     title: 'Change Password',
        //     onPress: () => {
        //         Alert.alert('Change Password', 'Change Password action triggered');
        //     },
        // },
        {
            title: 'Sign Out',
            onPress: () => {
                logout()
            },
            isDestructive: false,
        },
        {
            title: 'Delete Account',
            onPress: handleDeleteAccount,
            isDestructive: true,
        },
    ];

    const blue = useThemeColor({}, 'blue');
    const red = useThemeColor({}, 'red');
    // const tertiaryFill = useThemeColor({}, 'tertiaryFill');
    const separator = useThemeColor({}, 'systemGray4');
    const navigation = useNavigation<AccountModalStackNavigationType>();


    function handleEditProfile(index: number) {

        // this is the title of the user info item to edit
        const fieldToEdit: EditableField = userInfo[index].field;

        navigation.navigate('EditAccount', {
            fieldToEdit,
        })
    }

    return (
        <ThemedView backGroundLevel="bgPrimary" className="flex-1">
            {/* Header with Profile Icon */}
            <View className="pt-16 pb-8 px-6">
                <View className="w-20 h-20 rounded-full bg-blue-500/10 dark:bg-blue-400/10 mx-auto mb-4 items-center justify-center">
                    <Feather
                        name="user"
                        size={36}
                        color={blue}
                    />
                </View>
                <ThemedText
                    type="title1"
                    labelType="primary"
                    emphasized
                    className="text-center"
                >
                    {user.firstName} {user.lastName}
                </ThemedText>
                <ThemedText
                    type="body"
                    labelType="secondary"
                    className="text-center mt-1"
                >
                    {user.email}
                </ThemedText>
            </View>

            {/* Content */}
            <ScrollView
                contentContainerStyle={{paddingHorizontal: 16}}
                className="flex-1 px-6">
                {/* Profile Info Section */}
                <View className="mb-8">
                    <ThemedText
                        emphasized
                        labelType="primary"
                        type="title3"
                        className="mb-4 px-1"
                    >
                        Profile Information
                    </ThemedText>

                    <View className="bg-secondaryFill-light dark:bg-secondaryFill-dark rounded-2xl overflow-hidden">
                        {userInfo.map((item, index) => (
                            <View key={index}>
                                <TouchableOpacity
                                    onPress={() => handleEditProfile(index)}
                                    className="px-5 py-4 active:bg-tertiaryFill-light active:dark:bg-tertiaryFill-dark"
                                >

                                    <View className="flex-row justify-between items-center">
                                        <ThemedText
                                            type="body"
                                            labelType="secondary"
                                            className="flex-1"
                                        >
                                            {item.title}
                                        </ThemedText>
                                        <ThemedText
                                            type="body"
                                            labelType="primary"
                                            emphasized
                                            className="flex-2 text-right pr-8"
                                        >
                                            {item.value || '—'}
                                        </ThemedText>

                                        <SFSymbol
                                            name="chevron.right"
                                            scale="small"
                                            weight="medium"
                                            size={14}
                                            color={blue}
                                        />
                                    </View>
                                </TouchableOpacity>

                                {index < userInfo.length - 1 && (
                                    <View
                                        className="h-px mx-5"
                                        style={{backgroundColor: separator}}
                                    />
                                )}
                            </View>
                        ))}
                    </View>
                </View>

                {/* Actions Section */}
                <View className="mb-8">
                    <ThemedText
                        emphasized
                        labelType="primary"
                        type="title3"
                        className="mb-4 px-1"
                    >
                        Account Settings
                    </ThemedText>

                    <View className="bg-secondaryFill-light dark:bg-secondaryFill-dark rounded-2xl overflow-hidden">
                        {actions.map((item, index) => (
                            <View key={index}>
                                <TouchableOpacity
                                    onPress={item.onPress}
                                    className="px-5 py-4 active:bg-tertiaryFill-light active:dark:bg-tertiaryFill-dark"
                                >
                                    <View className="flex-row justify-between items-center">
                                        <ThemedText
                                            type="body"
                                            labelType={item.isDestructive ? "tertiary" : "primary"}
                                            emphasized
                                            style={item.isDestructive ? {color: red} : undefined}
                                        >
                                            {item.title}
                                        </ThemedText>
                                        <SFSymbol
                                            name="chevron.right"
                                            scale="small"
                                            weight="medium"
                                            size={14}
                                            color={item.isDestructive ? red : blue}
                                        />
                                    </View>
                                </TouchableOpacity>
                                {index < actions.length - 1 && (
                                    <View
                                        className="h-px mx-5"
                                        style={{backgroundColor: separator}}
                                    />
                                )}
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </ThemedView>
    );
}