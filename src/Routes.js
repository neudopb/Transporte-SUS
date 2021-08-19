import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Register2 } from './pages/register/Register2';
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
                        color: '#FFF',
                    },
                    headerStyle: {
                        backgroundColor: '#14A192',
                    },
                }}
            />

            <Stack.Screen
                name="Register2"
                component={Register2}
                options={{
                    title:"Cadastro Endereço", headerTitleStyle: {
                        fontSize: 25,
                        color: '#FFF',
                    },
                    headerStyle: {
                        backgroundColor: '#14A192',
                    },
                }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};