import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Dash from '../app/dash';
import Profile from '../app/profile';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#0891b2',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color, size }) => {
                        let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';
                        if (route.name === 'Index') {
                            iconName = 'home-outline';
                        } else if (route.name === 'Dash') {
                            iconName = 'speedometer-outline';
                        } else if (route.name === 'Profile') {
                            iconName = 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                
                <Tab.Screen name="Dash" component={Dash} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
