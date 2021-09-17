import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/users/Home';
import { Agendar } from '../pages/users/Agendar';
import { MeusAgend } from '../pages/users/MeusAgend';
import MyTheme from '../styles/MyTheme';
import styles from '../styles/StyleAccounts';
import { useAuth } from '../contexts/Auth';

const Stack = createStackNavigator();

export function RoutesUsers() {

    const {logout} = useAuth();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home", headerTitleStyle: {
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