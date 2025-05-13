import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {ThemedText} from '@/components/ui/ThemedText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useThemeColor} from '@/hooks/useThemeColor';
import {User} from '@/types/user';

interface UserHeaderProps {
    user: User;
    onPress: () => void;
    // logout: () => Promise<void>
}

const UserHeader = ({user, onPress}: UserHeaderProps) => {


    const userIconColor = useThemeColor({}, "blue");
    const ICON_SIZE = 50;

    const formattedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    return (
        <View className='flex flex-row items-start justify-around gap-6 pt-10'>
            <View>
                <ThemedText
                    emphasized
                    type='title1'
                    labelType='primary'
                    className='mb-4 text-left'
                >
                    Hi, {user?.firstName}!
                </ThemedText>
                <ThemedText labelType="secondary" type='subhead'>
                    {formattedDate}
                </ThemedText>
            </View>
            <TouchableOpacity testID='user-header-logout' onPress={onPress}>
                <MaterialCommunityIcons name='account-circle-outline' size={ICON_SIZE} color={userIconColor} />
            </TouchableOpacity>
        </View>
    )
};
export default UserHeader
