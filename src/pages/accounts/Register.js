import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/StyleAccounts';
import MyTheme from '../../styles/MyTheme';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register({ navigation }){
    return (
        <View style={styles.containerRegister}>
            <Text style={styles.title}>Preencha suas Informações</Text>
            <Input label="Nome" />
            <Input label="CPF" keyboardType="numeric" />
            <Input label="Data de Nascimento" keyboardType="numeric" />
            <Input label="E-mail" />
            <Input label="Senha" secureTextEntry={true} />
            <Input label="Confirmar Senha" secureTextEntry={true} />

            <Button texto="Proximo" color={MyTheme.colors.primary_green} onPress={ ()=> navigation.navigate('Register2') } />
        </View>
    );
};