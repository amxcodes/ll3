import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../utils/AuthProvider';

// Screens
import Auth from '../app/Auth';
import TabNavigator from './TabNavigator';

type RootStackParamList = {
  MainTabs: undefined;
  Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { user } = useAuth();

  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }}
      initialRouteName={user ? "MainTabs" : "Auth"}
    >
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
}
