import {useAuth} from "@/app/context/AuthContext";
import {deleteUserAccount} from "@/cloudfunctions/deleteFunctions";
import {updateUser} from "@/cloudfunctions/updateFunctions";
import {EditableField, User} from "@/types/user";
import {useState} from "react";
import {Alert} from "react-native";



export const useUserData = (user: User) => {


    const {logout} = useAuth();

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [weight, setWeight] = useState(user.weight ? String(user.weight) : '');
    const [height, setHeight] = useState(user.height ? String(user.height) : '');
    const [dob, setDob] = useState<Date>(user.dateOfBirth ? new Date(user.dateOfBirth) : new Date());




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


    function handleUpdate(field: EditableField) {
        switch (field) {
            case EditableField.Name:

                updateUser({uid: user.uid, firstName, lastName})
                break;
            case EditableField.Email:
                updateUser({uid: user.uid, email})
                break;
            case EditableField.PhoneNumber:

                updateUser({uid: user.uid, phoneNumber})
                break;
            case EditableField.DateOfBirth:
                updateUser({uid: user.uid, dateOfBirth: dob})
                break;
            case EditableField.Height:

                if (!height) {

                }
                updateUser({uid: user.uid, height: parseFloat(height as string)})
                break;
            case EditableField.Weight:

                updateUser({uid: user.uid, weight: parseFloat(weight as string)})
                break;
        }

    }



    return {
        handleDeleteAccount,
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
    }

}