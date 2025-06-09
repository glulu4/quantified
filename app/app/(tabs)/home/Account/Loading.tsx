import React, { useEffect, useState } from 'react';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { CheckMark } from '@/components/CheckMark';
import CenteredSpinner from '@/components/CenteredSpinner';
import ThemedView from '@/components/ThemedView';
import { updateUser, UserUpdate } from '@/services/userService';
import { useAuth } from '@/app/context/AuthContext';
import { HomeStackNavigationType, HomeStackParamList } from '../_layout';

export type LoadingRouteProp = RouteProp<HomeStackParamList, 'Account/Loading'>;

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const route = useRoute<LoadingRouteProp>();
  const navigation = useNavigation<HomeStackNavigationType>();
  const { loginWithUser } = useAuth();

  useEffect(() => {
    const update = async () => {
      const data = route.params.updatedUser as UserUpdate;
      const success = await updateUser(data);
      if (success) {
        await loginWithUser({ ...(data as any) });
      }
      setLoading(false);
      setTimeout(() => navigation.pop(2), 1500);
    };
    update();
  }, []);

  if (loading) {
    return <CenteredSpinner />;
  }

  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 100 }}>
      <CheckMark />
    </ThemedView>
  );
}
