import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/StyleUsers';
import MyTheme from '../../styles/MyTheme';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Agendar({ navigation }){
    return (
        <View style={styles.containerAgendar}>
            <Text style={styles.title}>Preencha as Informações</Text>

            <Input label="Data" keyboardType="numeric" />
            <Input label="Horário" keyboardType="numeric" />
            <Input label="Meu Endereço"/>
            <Input label="Destino"/>
            <Input label="Descrição" altura={100}/>

            <Button texto="Agendar" color={MyTheme.colors.primary_green} onPress={ ()=> navigation.navigate('Home') } />
        </View>
    );
};