import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './pages/accounts/Login';
import { Register } from './pages/accounts/Register';
import { Register2 } from './pages/accounts/Register2';

import { Home } from './pages/users/Home';
import { Agendar } from './pages/users/Agendar';
import { MeusAgend } from './pages/users/MeusAgend';

import { HomeAdmin } from './pages/transports/HomeAdmin';
import { SolicConfirmadas } from './pages/transports/SolicConfirmadas';
import { SolicPendentes } from './pages/transports/SolicPendentes';

import MyTheme from './styles/MyTheme';

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
                        color: MyTheme.colors.white,
                    },
                    headerStyle: {
                        backgroundColor: MyTheme.colors.primary_green,
                    },
                }}
            />

            <Stack.Screen
                name="Register2"
                component={Register2}
                options={{
                    title:"Cadastro Endereço", headerTitleStyle: {
                        fontSize: 25,
                        color: MyTheme.colors.white,
                    },
                    headerStyle: {
                        backgroundColor: MyTheme.colors.primary_green,
                    },
                }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Agendar"
                component={Agendar}
                options={{
                    title:"Agendar Viagem", headerTitleStyle: {
                        fontSize: 25,
                        color: MyTheme.colors.white,
                    },
                    headerStyle: {
                        backgroundColor: MyTheme.colors.primary_green,
                    },
                }}
            />

            <Stack.Screen
                name="MeusAgend"
                component={MeusAgend}
                options={{
                    title:"Meus Agendamentos", headerTitleStyle: {
                        fontSize: 25,
                        color: MyTheme.colors.white,
                    },
                    headerStyle: {
                        backgroundColor: MyTheme.colors.primary_green,
                    },
                }}
            />

            <Stack.Screen
                name="HomeAdmin"
                component={HomeAdmin}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SolicConfirmadas"
                component={SolicConfirmadas}
                options={{
                    title:"Solicitações Confirmadas", headerTitleStyle: {
                        fontSize: 25,
                        color: MyTheme.colors.white,
                    },
                    headerStyle: {
                        backgroundColor: MyTheme.colors.primary_green,
                    },
                }}
            />

            <Stack.Screen
                name="SolicPendentes"
                component={SolicPendentes}
                options={{
                    title:"Solicitações Pendentes", headerTitleStyle: {
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