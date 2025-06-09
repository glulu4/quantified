// app/modal-stack/_layout.tsx
import {EditableField} from '@/types/user';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Stack} from 'expo-router/stack';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: 'account-modal',
};

export type AccountModalStackNavigationType = NativeStackNavigationProp<AccountModalStackParamList>;


export type AccountModalStackParamList = {

    Account: {

    },

    EditAccount: {
        fieldToEdit: EditableField;
    }
}


export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="Account" />
            <Stack.Screen name="EditAccount" />
        </Stack>
    );
}