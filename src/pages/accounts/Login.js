import React, {useState} from 'react';
import { View, Image, TouchableOpacity, Text, Keyboard, Alert, ActivityIndicator } from 'react-native';
import styles from '../../styles/StyleAccounts';
import MyTheme from '../../styles/MyTheme';
import { InputLogin } from '../../components/InputLogin';
import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/Auth';

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    email: yup.string().email().required("Informe um E-mail"),
    senha: yup.string().required("Informe a senha"),
});

export function Login({ navigation }){

    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const {loginUser, isLoading, setIsLoading} = useAuth();

    async function logi(data) {

        Keyboard.dismiss();

        try {
            setIsLoading(true);
            return await loginUser(data.email, data.senha);
        } catch(error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    if (isLoading) {
        return (
            <View style={styles.actInd}>
                <ActivityIndicator size="large" color={MyTheme.colors.primary_orange} />
            </View>
        )
    }

    return (
        <View style={styles.containerLogin}>
            <Image source={require('../../images/logo.png')} style={styles.logo} />

            <InputLogin placeholder="E-mail" name="email" control={control} error={ errors.email && errors.email.message } />
            <InputLogin placeholder="Senha" name="senha" control={control} error={ errors.senha && errors.senha.message } secureTextEntry={true} />

            <Button texto="Login" color={MyTheme.colors.primary_green} onPress={ handleSubmit(logi) } />

            <Button texto="Cadastre-se" color={MyTheme.colors.primary_orange} onPress={ ()=> navigation.navigate('Register') } />
            
        </View>
    );
};