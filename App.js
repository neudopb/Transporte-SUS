import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes';
import { RoutesMain } from './src/routes/RoutesMain';
import { AuthProvider } from './src/contexts/Auth';
 
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#14A192" />
        <RoutesMain />
      </AuthProvider>
    </NavigationContainer>
  );
}