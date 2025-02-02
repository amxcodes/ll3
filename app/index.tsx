import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme } from '@react-navigation/native';
import { AuthProvider } from '../utils/AuthProvider';
import RootNavigator from '../navigation/RootNavigator';  // Make sure RootNavigator does not contain NavigationContainer

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer theme={MyTheme}>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
