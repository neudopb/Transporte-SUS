import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/users/Home';
import { Agendar } from '../pages/users/Agendar';
import { MeusAgend } from '../pages/users/MeusAgend';
import MyTheme from '../styles/MyTheme';

const Stack = createStackNavigator();

export function RoutesUsers() {
    return (
        <Stack.Navigator>
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
        </Stack.Navigator>
    );
};