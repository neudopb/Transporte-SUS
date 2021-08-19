import React from 'react';
import { View, Text } from 'react-native';
import Style from './Style';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register2({ navigation }){
    return (
        <View style={Style.container}>
            <Text style={Style.title}>Informações de Endereço</Text>
            <Input label="Estado" />
            <Input label="Cidade" />
            <Input label="UBS" />
            <Input label="Minha Localização" />

            <Button texto="Cadastrar" color="#14A192" onPress={ ()=> navigation.navigate('Login') } />
        </View>
    );
};