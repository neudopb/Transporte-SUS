import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeAdmin } from '../pages/transports/HomeAdmin';
import { SolicConfirmadas } from '../pages/transports/SolicConfirmadas';
import { SolicPendentes } from '../pages/transports/SolicPendentes';
import MyTheme from '../styles/MyTheme';
import styles from '../styles/StyleAccounts';
import { useAuth } from '../contexts/Auth';

const Stack = createStackNavigator();

export function RoutesTransports() {

    const {logout} = useAuth();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeAdmin"
                component={HomeAdmin}
                options={{
                    title: "Home Motorista", headerTitleStyle: {
                        fontSize: 20,
                        color: MyTheme.colors.white,
                    },
                    headerRight: () => (
                        <TouchableOpacity style={styles.btnlogout} onPress={logout}>
                            <Text style={styles.txtlogout}>Sair</Text>
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: MyTheme.colors.primary_green,
                    },
                }}
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