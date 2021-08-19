import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import Style from './Style';
import { InputLogin } from '../../components/InputLogin';
import { Button } from '../../components/Button';

export function Login({ navigation }){
    return (
        <View style={Style.container}>
            <Image source={require('../../images/logo.png')} style={Style.logo} />

            <InputLogin placeholder="E-mail" />
            <InputLogin placeholder="Senha" secureTextEntry={true} />

            <Button texto="Login" color="#14A192" onPress={ ()=> navigation.navigate('Home') } />

            <Button texto="Cadastre-se" color="#E0961D" onPress={ ()=> navigation.navigate('Register') } />

            <TouchableOpacity style={Style.btnAdm} onPress={ ()=> navigation.navigate('HomeAdmin') }>
                <Text style={Style.txtAdm}>ADMIN</Text>
            </TouchableOpacity>

        </View>
    );
};