import {useAuth} from "@/app/context/AuthContext";
import {deleteUserAccount} from "@/cloudfunctions/deleteFunctions";
import {updateUser} from "@/cloudfunctions/updateFunctions";
import {getUser} from "@/cloudfunctions/getFunctions";
import {EditableField, User} from "@/types/user";
import {useState} from "react";
import {Alert} from "react-native";
import {updateEmail} from "firebase/auth";
import {auth} from "@/firebaseConfig";



export const useUserData = (user: User) => {


    const {logout, loginWithUser} = useAuth();

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [weight, setWeight] = useState(user.weight ? String(user.weight) : '');
    const [height, setHeight] = useState(user.height ? String(user.height) : '');
    const [dob, setDob] = useState<Date>(user.dateOfBirth ? new Date(user.dateOfBirth) : new Date());
    const [loading, setLoading] = useState(false);




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


    async function handleUpdate(field: EditableField) {
        setLoading(true);
        try {
            switch (field) {
                case EditableField.Name:
                    await updateUser({uid: user.uid, firstName, lastName});
                    break;
                case EditableField.Email:
                    if (auth.currentUser) {
                        await updateEmail(auth.currentUser, email);
                    }
                    await updateUser({uid: user.uid, email});
                    break;
                case EditableField.PhoneNumber:
                    await updateUser({uid: user.uid, phoneNumber});
                    break;
                case EditableField.DateOfBirth:
                    await updateUser({uid: user.uid, dateOfBirth: dob});
                    break;
                case EditableField.Height:
                    await updateUser({uid: user.uid, height: parseFloat(height as string)});
                    break;
                case EditableField.Weight:
                    await updateUser({uid: user.uid, weight: parseFloat(weight as string)});
                    break;
            }

            const updatedUser = await getUser(user.uid);
            if (updatedUser) {
                await loginWithUser(updatedUser);
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to update account');
        } finally {
            setLoading(false);
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
        handleUpdate,
        loading
    }

}