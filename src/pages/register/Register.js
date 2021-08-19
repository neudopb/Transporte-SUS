import React from 'react';
import { View, Image } from 'react-native';
import Style from './Style';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register({ navigation }){
    return (
        <View style={Style.container}>
            <Input placeholder="Nome" />
            <Input placeholder="CPF" keyboardType="numeric" />
            <Input placeholder="Data de Nascimento" keyboardType="numeric" />
            <Input placeholder="Estado" />
            <Input placeholder="Cidade" />
            <Input placeholder="UBS" />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" secureTextEntry={true} />
            <Input placeholder="Confirmar Senha" secureTextEntry={true} />

            <Button texto="Cadastrar" color="#14A192" onPress={ ()=> navigation.navigate('Login') } />
        </View>
    );
};