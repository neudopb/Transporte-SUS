import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes';
 
export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}