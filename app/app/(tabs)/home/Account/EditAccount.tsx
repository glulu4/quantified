import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect} from 'react'
import {useNavigation, useRouter} from 'expo-router';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../_layout';
import ThemedView from '@/components/ThemedView';
import {AccountModalStackNavigationType, AccountModalStackParamList} from './_layout';
import {EditableField} from '@/types/user';
import TextInputWithLabel from '@/components/TextInputLabeled';
import {useAuthenticatedUser} from '@/app/context/AuthContext';
import {useUserData} from './hooks/useUserData';
import DateInputWithLabel from '@/components/DateInputWithLabel';
import {ThemedText} from '@/components/ui/ThemedText';


type EditAccountRouteProp = RouteProp<AccountModalStackParamList, "EditAccount">;


export default function EditAccount() {


    const user = useAuthenticatedUser();

    const navigation = useNavigation<AccountModalStackNavigationType>();
    const route = useRoute<EditAccountRouteProp>();
    const fieldToEdit = route.params.fieldToEdit;


    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        weight,
        setWeight,
        height,
        setHeight,
        dob,
        setDob,
        handleUpdate
    } = useUserData(user);

    useEffect(() => {


        navigation.setOptions({
            headerTitle: fieldToEdit,

            headerRight: () => (
                <View className='flex-row items-center justify-between gap-[60]'>
                    <TouchableOpacity onPress={() => handleUpdate(fieldToEdit)}>
                        <ThemedText type="headline" className=' text-blue-light dark:text-blue-dark'>
                            Done
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            ),
        });





    }, [fieldToEdit, firstName, lastName, email, phoneNumber, weight, height, dob]);



    function renderFieldToEdit() {
        switch (fieldToEdit) {

            case EditableField.Name:
                return (
                    <View
                        className='flex flex-col gap-10 w-full'
                    >

                        <TextInputWithLabel
                            value={firstName}
                            setValue={setFirstName}
                            label="First Name"
                            placeholder="First Name"
                        />

                        <TextInputWithLabel
                            value={lastName}
                            setValue={setLastName}
                            label="Last Name"
                            placeholder="Last Name"

                        />

                    </View>
                )
            case EditableField.Email:
                return (

                    <View className=' w-full'>
                        <TextInputWithLabel
                            value={email}
                            setValue={setEmail}
                            label="Email"
                            placeholder="Email"

                        />
                    </View>


                )
            case EditableField.PhoneNumber:
                return (
                    <View className=' w-full'>
                        <TextInputWithLabel
                            value={phoneNumber}
                            setValue={setPhoneNumber}
                            label="Phone Number"
                            placeholder="Phone Number"
                        />
                    </View>
                )
            case EditableField.DateOfBirth:
                return (
                    <DateInputWithLabel
                        label="Date of Birth"
                        value={dob}
                        setValue={setDob}

                    // className="mb-6"

                    />
                )
            case EditableField.Height:
                return (
                    <View className=' w-full'>
                        <TextInputWithLabel
                            value={height}
                            setValue={setHeight}
                            label="Height (in)"
                            placeholder="Height (in)"
                            keyboardType="numeric"
                        />
                    </View>
                )
            case EditableField.Weight:
                return (
                    <View className=' w-full'>
                        <TextInputWithLabel
                            value={weight}
                            setValue={setWeight}
                            label="Weight (lbs)"
                            placeholder="Weight (lbs)"
                            keyboardType="numeric"
                        />
                    </View>
                )
            default:
                return (
                    <View className='flex-1 items-center justify-center'>
                        <ThemedText labelType='primary' className='text-lg text-gray-500'>No field to edit</ThemedText>
                    </View>
                )


        }
    }



    return (
        <ThemedView className='flex-1 items-center justify-start p-safe '>


            <View className='px-8 w-full'>
                {renderFieldToEdit()}
            </View>
        </ThemedView>
    )
}