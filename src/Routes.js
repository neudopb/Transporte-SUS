import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Register2 } from './pages/register/Register2';
import { Home } from './pages/home/Home';
import { HomeAdmin } from './pages/home/HomeAdmin';
import { Agendar } from './pages/agendamento/Agendar';
import { MeusAgend } from './pages/agendamento/MeusAgend';
import { SolicConfirmadas } from './pages/atendimento/SolicConfirmadas';
import { SolicPendentes } from './pages/atendimento/SolicPendentes';

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

            <Stack.Screen
                name="HomeAdmin"
                component={HomeAdmin}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Agendar"
                component={Agendar}
                options={{
                    title:"Agendar Viagem", headerTitleStyle: {
                        fontSize: 25,
                        color: '#FFF',
                    },
                    headerStyle: {
                        backgroundColor: '#14A192',
                    },
                }}
            />

            <Stack.Screen
                name="MeusAgend"
                component={MeusAgend}
                options={{
                    title:"Meus Agendamentos", headerTitleStyle: {
                        fontSize: 25,
                        color: '#FFF',
                    },
                    headerStyle: {
                        backgroundColor: '#14A192',
                    },
                }}
            />

            <Stack.Screen
                name="SolicConfirmadas"
                component={SolicConfirmadas}
                options={{
                    title:"Solicitações Confirmadas", headerTitleStyle: {
                        fontSize: 25,
                        color: '#FFF',
                    },
                    headerStyle: {
                        backgroundColor: '#14A192',
                    },
                }}
            />

            <Stack.Screen
                name="SolicPendentes"
                component={SolicPendentes}
                options={{
                    title:"Solicitações Pendentes", headerTitleStyle: {
                        fontSize: 25,
                        color: '#FFF',
                    },
                    headerStyle: {
                        backgroundColor: '#14A192',
                    },
                }}
            />

        </Stack.Navigator>
    );
};