import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/accounts/Login';
import { Register } from '../pages/accounts/Register';
import { Localization } from '../pages/accounts/Localization';
import MyTheme from '../styles/MyTheme';

const Stack = createStackNavigator();

export function RoutesAccounts() {
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
                        color: MyTheme.colors.white,
                    },
                    headerStyle: {
                        backgroundColor: MyTheme.colors.primary_green,
                    },
                }}
            />

            <Stack.Screen
                name="Localization"
                component={Localization}
                options={{
                    title:"Localização", headerTitleStyle: {
                        fontSize: 25,
                        color: MyTheme.colors.white,
                    },
                    headerStyle: {
                        backgroundColor: MyTheme.colors.primary_green,
                    },
                }}
            />

        </Stack.Navigator>
    );
};