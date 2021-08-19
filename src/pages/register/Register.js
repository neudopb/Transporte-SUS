import React from 'react';
import { View, Image } from 'react-native';
import Style from './Style';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register({ navigation }){
    return (
        <View style={Style.container}>
            <Input label="Nome" />
            <Input label="CPF" keyboardType="numeric" />
            <Input label="Data de Nascimento" keyboardType="numeric" />
            <Input label="E-mail" />
            <Input label="Senha" secureTextEntry={true} />
            <Input label="Confirmar Senha" secureTextEntry={true} />

            <Button texto="Proximo" color="#14A192" onPress={ ()=> navigation.navigate('Register2') } />
        </View>
    );
};