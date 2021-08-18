import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './pages/Login/Login';
import { Register } from './pages/register/Register';
import { Home } from './pages/home/Home';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title:"Cadastro", headerTitleStyle: {
                        fontSize: 25,
                    },
                }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title:"Transporte SUS", headerTitleStyle: {
                        fontSize: 25,
                    },
                }}
            />

        </Stack.Navigator>
    );
};