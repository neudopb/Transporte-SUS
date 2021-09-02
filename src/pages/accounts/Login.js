import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from '../../styles/StyleAccounts';
import MyTheme from '../../styles/MyTheme';
import { InputLogin } from '../../components/InputLogin';
import { Button } from '../../components/Button';

export function Login({ navigation }){
    return (
        <View style={styles.containerLogin}>
            <Image source={require('../../images/logo.png')} style={styles.logo} />

            <InputLogin placeholder="E-mail" />
            <InputLogin placeholder="Senha" secureTextEntry={true} />

            <Button texto="Login" color={MyTheme.colors.primary_green} onPress={ ()=> navigation.navigate('Home') } />

            <Button texto="Cadastre-se" color={MyTheme.colors.primary_orange} onPress={ ()=> navigation.navigate('Register') } />

            <TouchableOpacity style={styles.btnAdm} onPress={ ()=> navigation.navigate('HomeAdmin') }>
                <Text style={styles.txtAdm}>ADMIN</Text>
            </TouchableOpacity>

        </View>
    );
};