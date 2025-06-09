// import React from 'react';
// import {View, Alert, TouchableOpacity} from 'react-native';
// import {signOut} from 'firebase/auth';
// import ThemedView from '@/components/ThemedView';
// import {ThemedText} from '@/components/ui/ThemedText';
// import {useAuth, useAuthenticatedUser} from '@/app/context/AuthContext';
// import Button from '@/components/Button';
// import {SFSymbol} from 'react-native-sfsymbols';
// import {useTheme} from 'react-native-paper';
// import {useThemeColor} from '@/hooks/useThemeColor';
// import {Feather} from '@expo/vector-icons';
// import {List, Row} from 'react-native-ios-list';
// import {User} from '@/types/user';
// import {format} from 'date-fns';
// // import {auth} from '@/firebase/firebaseConfig'; // or your auth instance path
// // import {Button} from '@/components/ui/Button'; // replace with your button component

// export default function Account() {
//     const user: User = useAuthenticatedUser();
//     const {logout} = useAuth();

//     const userInfo = [
//         {
//             title: 'Name',
//             value: `${user.firstName} ${user.lastName}`,
//         },
//         {
//             title: 'Email',
//             value: user.email,
//         },
//         {
//             title: 'Phone Number',
//             value: user.phoneNumber,
//         },
//         {
//             title: 'Date of Birth',
//             value: user.dateOfBirth ? format(new Date(user.dateOfBirth), 'MMMM dd, yyyy') : '—',
//         },
//     ];

//     const actions = [
//         {
//             title: 'Edit Profile',
//             onPress: () => {
//                 // Handle Edit Profile action
//                 Alert.alert('Edit Profile', 'Edit Profile action triggered');
//             },
//         },
//         {
//             title: 'Change Password',
//             onPress: () => {
//                 // Handle Change Password action
//                 Alert.alert('Change Password', 'Change Password action triggered');
//             },
//         },
//         {
//             title: 'Sign Out',
//             onPress: () => {
//                 logout()
//             },
//         },
//         {
//             title: 'Delete Account',
//             onPress: () => {
//                 // Handle Delete Account action
//                 Alert.alert('Delete Account', 'Delete Account action triggered');
//             },
//         },
//     ];

//     const blue = useThemeColor({}, 'blue');
//     const rowBgColor = useThemeColor({}, 'secondaryFill');


//     return (
//         <ThemedView backGroundLevel="bgPrimary" className="flex flex-col flex-1 p-6">

//             <View className='pt-10'>
//                 <Feather
//                     name='user'

//                     scale='large'
//                     weight="semibold"
//                     style={{alignSelf: 'center'}}
//                     size={60}
//                     color={blue}
//                 />
//             </View>
//             <View className="py-8">
//                 <ThemedText emphasized labelType="primary" type="title2" className="mb-2 pl-2">
//                     Profile Info
//                 </ThemedText>
//                 <View className="gap-3">
//                     {userInfo.map((item, index) => (
//                         <View key={index} className='bg-secondaryFill-light dark:bg-secondaryFill-dark rounded-xl py-4'>

//                             <View className="flex flex-row justify-between px-4">
//                                 <ThemedText emphasized type="body" labelType="primary">
//                                     {item.title}
//                                 </ThemedText>
//                                 <ThemedText type="body" labelType="primary">
//                                     {item.value || '—'}
//                                 </ThemedText>
//                             </View>
//                         </View>
//                     ))}
//                 </View>
//             </View>


//             <View className="py-6">
//                 <ThemedText emphasized labelType="primary" type="title2" className="mb-2 pl-2">
//                     Actions
//                 </ThemedText>
//                 <View className="gap-3">
//                     {actions.map((item, index) => (
//                         <View key={index} className='bg-secondaryFill-light dark:bg-secondaryFill-dark rounded-xl py-4'>

//                             <TouchableOpacity onPress={item.onPress} className="flex flex-row justify-between px-4">
//                                 <ThemedText emphasized type="body" labelType="primary">
//                                     {item.title}
//                                 </ThemedText>
//                                 <SFSymbol

//                                     name='chevron.right'
//                                     scale="medium"
//                                     weight="regular"
//                                     style={{alignSelf: 'center', paddingRight: 10}}
//                                     size={15}
//                                     color={blue}
//                                 />
//                             </TouchableOpacity>
//                         </View>
//                     ))}
//                 </View>
//             </View>

//             <View className="gap-4">

//             </View>
//         </ThemedView>
//     );
// }
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
import {ScrollView} from 'react-native-gesture-handler';
import {deleteUserAccount} from '@/cloudfunctions/deleteFunctions';

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
        {
            title: 'Height',
            value: user.height ? `${user.height} in` : '—',
        },
        {
            title: 'Weight',
            value: user.weight ? `${user.weight} lb` : '—',
        },

    ];

    const handleDeleteAccount = () => {
        Alert.alert('Delete Account', 'Are you sure you want to delete your account?', [
            {text: 'Cancel', style: 'cancel'},
            {
                text: 'Delete',
                style: 'destructive',
                onPress: async () => {
                    const success = await deleteUserAccount(user.uid);
                    if (success) {
                        logout();
                    } else {
                        Alert.alert('Error', 'Failed to delete account');
                    }
                },
            },
        ]);
    };

    const actions = [
        {
            title: 'Edit Profile',
            onPress: () => {
                Alert.alert('Edit Profile', 'Edit Profile action triggered');
            },
        },
        {
            title: 'Change Password',
            onPress: () => {
                Alert.alert('Change Password', 'Change Password action triggered');
            },
        },
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
    const tertiaryFill = useThemeColor({}, 'tertiaryFill');
    const separator = useThemeColor({}, 'systemGray4');

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
                                <View className="px-5 py-4">
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
                                            className="flex-2 text-right"
                                        >
                                            {item.value || '—'}
                                        </ThemedText>
                                    </View>
                                </View>
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