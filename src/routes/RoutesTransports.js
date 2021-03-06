import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeAdmin } from '../pages/transports/HomeAdmin';
import { SolicConfirmadas } from '../pages/transports/SolicConfirmadas';
import { SolicPendentes } from '../pages/transports/SolicPendentes';
import { Historico } from '../pages/transports/Historico';
import { StatusAgend } from '../pages/transports/StatusAgend';
import { Localization } from '../pages/transports/Localization';
import MyTheme from '../styles/MyTheme';
import styles from '../styles/StyleAccounts';
import { useAuth } from '../contexts/Auth';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

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
                            <MaterialCommunityIcons name="logout" size={24} color="white" />
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

            <Stack.Screen
                name="Historico"
                component={Historico}
                options={{
                    title:"Histórico", headerTitleStyle: {
                        fontSize: 25,
                        color: MyTheme.colors.white,
                    },
                    headerStyle: {
                        backgroundColor: MyTheme.colors.primary_green,
                    },
                }}
            />

            <Stack.Screen
                name="StatusAgend"
                component={StatusAgend}
                options={{
                    title:"Solicitação", headerTitleStyle: {
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