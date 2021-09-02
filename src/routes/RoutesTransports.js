import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeAdmin } from '../pages/transports/HomeAdmin';
import { SolicConfirmadas } from '../pages/transports/SolicConfirmadas';
import { SolicPendentes } from '../pages/transports/SolicPendentes';
import MyTheme from '../styles/MyTheme';

const Stack = createStackNavigator();

export function RoutesTransports() {
    return (
        <Stack.Navigator>
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