import React from 'react';
import { View, Text } from 'react-native';
import Style from './Style';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Agendar({ navigation }){
    return (
        <View style={Style.container}>
            <Text style={Style.title}>Preencha as Informações</Text>

            <Input label="Data" keyboardType="numeric" />
            <Input label="Horário" keyboardType="numeric" />
            <Input label="Meu Endereço"/>
            <Input label="Destino"/>
            <Input label="Descrição" altura={100}/>

            <Button texto="Agendar" color="#14A192" onPress={ ()=> navigation.navigate('Home') } />
        </View>
    );
};