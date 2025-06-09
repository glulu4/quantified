
// import React, {useState} from 'react';
// import {View, Alert, TouchableOpacity} from 'react-native';
// import ThemedView from '@/components/ThemedView';
// import {ThemedText} from '@/components/ui/ThemedText';
// import {useAuth, useAuthenticatedUser} from '@/app/context/AuthContext';
// import {SFSymbol} from 'react-native-sfsymbols';
// import {useThemeColor} from '@/hooks/useThemeColor';
// import {Feather} from '@expo/vector-icons';
// import {User} from '@/types/user';
// import {format} from 'date-fns';
// import {ScrollView} from 'react-native-gesture-handler';
// import {deleteUserAccount} from '@/cloudfunctions/deleteFunctions';
// import {router, useNavigation} from 'expo-router';
// import EditableProfileField from '@/components/EditableProfileField';
// import DateInputWithLabel from '@/components/DateInputWithLabel';
// import Button from '@/components/Button';

// export default function Account() {
//     const user: User = useAuthenticatedUser();
//     const {logout} = useAuth();

//     const [editing, setEditing] = useState(false);
// const [firstName, setFirstName] = useState(user.firstName);
// const [lastName, setLastName] = useState(user.lastName);
// const [email, setEmail] = useState(user.email);
// const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
// const [weight, setWeight] = useState(user.weight ? String(user.weight) : '');
// const [height, setHeight] = useState(user.height ? String(user.height) : '');
// const [dob, setDob] = useState<Date>(user.dateOfBirth ? new Date(user.dateOfBirth) : new Date());

//     const handleDeleteAccount = () => {
//         Alert.alert('Delete Account', 'Are you sure you want to delete your account?', [
//             {text: 'Cancel', style: 'cancel'},
//             {
//                 text: 'Delete',
//                 style: 'destructive',
//                 onPress: async () => {
//                     const success = await deleteUserAccount(user.uid);
//                     if (success) {
//                         logout();
//                     } else {
//                         Alert.alert('Error', 'Failed to delete account');
//                     }
//                 },
//             },
//         ]);
//     };

//     const handleSave = () => {
//         setEditing(false);
//         router.navigate('Account/Loading', {
//             updatedUser: {
//                 uid: user.uid,
//                 firstName,
//                 lastName,
//                 email,
//                 phoneNumber,
//                 weight: parseInt(weight),
//                 height: parseInt(height),
//                 dateOfBirth: dob,
//             },
//         });
//     };

//     const handleCancel = () => {
//         setFirstName(user.firstName);
//         setLastName(user.lastName);
//         setEmail(user.email);
//         setPhoneNumber(user.phoneNumber);
//         setWeight(user.weight ? String(user.weight) : '');
//         setHeight(user.height ? String(user.height) : '');
//         setDob(user.dateOfBirth ? new Date(user.dateOfBirth) : new Date());
//         setEditing(false);
//     };

//     const actions = [
//         {
//             title: 'Edit Profile',
//             onPress: () => {
//                 setEditing(true);
//             },
//         },
//         {
//             title: 'Change Password',
//             onPress: () => {
//                 Alert.alert('Change Password', 'Change Password action triggered');
//             },
//         },
//         {
//             title: 'Sign Out',
//             onPress: () => {
//                 logout()
//             },
//             isDestructive: false,
//         },
//         {
//             title: 'Delete Account',
//             onPress: handleDeleteAccount,
//             isDestructive: true,
//         },
//     ];

//     const blue = useThemeColor({}, 'blue');
//     const red = useThemeColor({}, 'red');
//     const tertiaryFill = useThemeColor({}, 'tertiaryFill');
//     const separator = useThemeColor({}, 'systemGray4');


//     return (
//         <ThemedView backGroundLevel="bgPrimary" className="flex-1">
//             {/* Header with Profile Icon */}


//             <View className="pt-16 pb-8 px-6">
//                 <View className="w-20 h-20 rounded-full bg-blue-500/10 dark:bg-blue-400/10 mx-auto mb-4 items-center justify-center">
//                     <Feather
//                         name="user"
//                         size={36}
//                         color={blue}
//                     />
//                 </View>
//                 <ThemedText
//                     type="title1"
//                     labelType="primary"
//                     emphasized
//                     className="text-center"
//                 >
//                     {user.firstName} {user.lastName}
//                 </ThemedText>
//                 <ThemedText
//                     type="body"
//                     labelType="secondary"
//                     className="text-center mt-1"
//                 >
//                     {user.email}
//                 </ThemedText>
//             </View>

//             {/* Content */}
//             <ScrollView
//                 contentContainerStyle={{paddingHorizontal: 16}}
//                 className="flex-1 px-6">
//                 {/* Profile Info Section */}
//                 <View className="mb-8">
//                     <ThemedText
//                         emphasized
//                         labelType="primary"
//                         type="title3"
//                         className="mb-4 px-1"
//                     >
//                         Profile Information
//                     </ThemedText>

//                     {editing ? (
//                         <></>
//                         // <View>
//                         //     <EditableProfileField label="First Name" value={firstName} onChange={setFirstName} className="mb-4" />
//                         //     <EditableProfileField label="Last Name" value={lastName} onChange={setLastName} className="mb-4" />
//                         //     <DateInputWithLabel label="Date of Birth" value={dob} setValue={setDob} className="mb-4" />
//                         //     <EditableProfileField label="Email" value={email} onChange={setEmail} keyboardType="email-address" className="mb-4" />
//                         //     <EditableProfileField label="Phone Number" value={phoneNumber} onChange={setPhoneNumber} keyboardType="phone-pad" className="mb-4" />
//                         //     <EditableProfileField label="Weight (lb)" value={weight} onChange={setWeight} keyboardType="numeric" className="mb-4" />
//                         //     <EditableProfileField label="Height (in)" value={height} onChange={setHeight} keyboardType="numeric" />
//                         // </View>
//                     ) : (
//                         <View className="bg-secondaryFill-light dark:bg-secondaryFill-dark rounded-2xl overflow-hidden">
//                             {
//                                 [{title: 'Name', value: `${user.firstName} ${user.lastName}`},
//                                 {title: 'Email', value: user.email},
//                                 {title: 'Phone Number', value: user.phoneNumber},
//                                 {title: 'Date of Birth', value: user.dateOfBirth ? format(new Date(user.dateOfBirth), 'MMMM dd, yyyy') : '—'},
//                                 {title: 'Height', value: user.height ? `${user.height} in` : '—'},
//                                 {title: 'Weight', value: user.weight ? `${user.weight} lb` : '—'}].map((item, index, arr) => (
//                                     <View key={index}>
//                                         <View className="px-5 py-4">
//                                             <View className="flex-row justify-between items-center">
//                                                 <ThemedText
//                                                     type="body"
//                                                     labelType="secondary"
//                                                     className="flex-1"
//                                                 >
//                                                     {item.title}
//                                                 </ThemedText>
//                                                 <ThemedText
//                                                     type="body"
//                                                     labelType="primary"
//                                                     emphasized
//                                                     className="flex-2 text-right"
//                                                 >
//                                                     {item.value || '—'}
//                                                 </ThemedText>
//                                             </View>
//                                         </View>
//                                         {index < arr.length - 1 && (
//                                             <View
//                                                 className="h-px mx-5"
//                                                 style={{backgroundColor: separator}}
//                                             />
//                                         )}
//                                     </View>
//                                 ))}
//                         </View>
//                     )}
//                 </View>

//                 {editing && (
//                     <View className="flex-row justify-around mb-8">
//                         <Button text="Save" onPress={handleSave} />
//                         <Button text="Cancel" onPress={handleCancel} />
//                     </View>
//                 )}

//                 {!editing && (
//                     <View className="mb-8">
//                         <ThemedText
//                             emphasized
//                             labelType="primary"
//                             type="title3"
//                             className="mb-4 px-1"
//                         >
//                             Account Settings
//                         </ThemedText>

//                         <View className="bg-secondaryFill-light dark:bg-secondaryFill-dark rounded-2xl overflow-hidden">
//                             {actions.map((item, index) => (
//                                 <View key={index}>
//                                     <TouchableOpacity
//                                         onPress={item.onPress}
//                                         className="px-5 py-4 active:bg-tertiaryFill-light active:dark:bg-tertiaryFill-dark"
//                                     >
//                                         <View className="flex-row justify-between items-center">
//                                             <ThemedText
//                                                 type="body"
//                                                 labelType={item.isDestructive ? 'tertiary' : 'primary'}
//                                                 emphasized
//                                                 style={item.isDestructive ? {color: red} : undefined}
//                                             >
//                                                 {item.title}
//                                             </ThemedText>
//                                             <SFSymbol
//                                                 name="chevron.right"
//                                                 scale="small"
//                                                 weight="medium"
//                                                 size={14}
//                                                 color={item.isDestructive ? red : blue}
//                                             />
//                                         </View>
//                                     </TouchableOpacity>
//                                     {index < actions.length - 1 && (
//                                         <View
//                                             className="h-px mx-5"
//                                             style={{backgroundColor: separator}}
//                                         />
//                                     )}
//                                 </View>
//                             ))}
//                         </View>
//                     </View>
//                 )}
//             </ScrollView>
//         </ThemedView >
//     );
// }




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