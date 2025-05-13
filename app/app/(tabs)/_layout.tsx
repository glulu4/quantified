import {Tabs} from 'expo-router';
import React from 'react';
import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].blue,
        headerShown: true,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          //  can hide tabs href: null,
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="graph"
        options={{
          headerShown: false,
          title: 'Graph',
          //  can hide tabs href: null,
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? 'stats-chart' : 'stats-chart-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
          title: 'Explore',
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          href: null,
          title: 'Test',
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? "airplane" : 'airplane-outline'} color={color} />
          ),
        }}
      />



    </Tabs>
  );
}
