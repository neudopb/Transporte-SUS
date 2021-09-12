import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from '../../styles/StyleAccounts';
import MyTheme from '../../styles/MyTheme';
import { InputLogin } from '../../components/InputLogin';
import { Button } from '../../components/Button';
import api from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    email: yup.string().email().required("Informe um E-mail valido"),
    senha: yup.string().min(8, "Senha deve conter pelo menos 8 caracteres").required("Informe a senha"),
});

export function Login({ navigation }){

    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const keyAsyncStorage = "@transportesus:user";

    async function LoginUser(data) {

        var params = new URLSearchParams();
        params.append('email', data.email);
        params.append('password', data.senha);

        try {
            const {data} = await api.post('token/', params);
            const token = data.access;
            const refresh = data.refresh;

            const responseUser = await api.get('dadosusuario/', {
                headers: {
                    'Autorization': 'Bearer ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            const {id, first_name, email, motorista_ubs, localizacao, estado, cidade, ubs} = responseUser.data[0];

            const userLogged = {
                id : id,
                first_name : first_name,
                email : email,
                motorista_ubs : motorista_ubs,
                localizacao : localizacao,
                estado : estado,
                cidade : cidade,
                ubs : ubs,
                token : token,
                refresh : refresh
            }

            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(userLogged));

            console.log(userLogged);
            Keyboard.dismiss();
            
        } catch(error) {
            console.log(error);
            Alert.alert(error);
        }

        console.log(data);
        navigation.navigate('Home');
    }

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