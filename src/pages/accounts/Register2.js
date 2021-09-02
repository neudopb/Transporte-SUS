import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/StyleAccounts';
import MyTheme from '../../styles/MyTheme';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register2({ navigation }){
    return (
        <View style={styles.containerRegister}>
            <Text style={styles.title}>Informações de Endereço</Text>
            <Input label="Estado" />
            <Input label="Cidade" />
            <Input label="UBS" />
            <Input label="Minha Localização" />

            <Button texto="Cadastrar" color={MyTheme.colors.primary_green} onPress={ ()=> navigation.navigate('Login') } />
        </View>
    );
};