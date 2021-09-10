import React from 'react';
import { View, Text, ScrollView, Alert, Keyboard } from 'react-native';
import styles from '../../styles/StyleAccounts';
import MyTheme from '../../styles/MyTheme';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/Api';

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    nome: yup.string().required("Informe o nome"),
    estado: yup.number().required("Informe o Estado"),
    cidade: yup.number().required("Informe a cidade"),
    ubs: yup.number().required("Informe a Ubs"),
    localizacao: yup.string().required("Informe a sua localização"),
    email: yup.string().email().required("Informe um E-mail valido"),
    senha: yup.string().min(8, "Senha deve conter pelo menos 8 caracteres").required("Informe a senha"),
    confirmarSenha: yup.string().oneOf([yup.ref('senha'), null], "Senhas não conferem").required("Confirme a senha")
});

export function Register({ navigation }){

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function createUser(data) {

        var params = new URLSearchParams();
        params.append('email', data.email);
        params.append('username', data.email);
        params.append('password', data.senha);
        params.append('first_name', data.nome);
        params.append('motorista_ubs', false);
        params.append('estado', data.estado);
        params.append('cidade', data.cidade);
        params.append('ubs', data.ubs);
        params.append('localizacao', data.localizacao);
        params.append('is_active', true);
        params.append('is_staff', true);

        try {
            const response = await api.post('usuario/', params);
            console.log(response);
            Keyboard.dismiss();
        } catch(error) {
            console.log(error);
            Alert.alert(error);
        }

        console.log(data);
        navigation.navigate('Login');
    }

    return (
        <View style={styles.containerRegister}>
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                <Text style={styles.title}>Preencha suas Informações</Text>
                <Input label="Nome" name="nome" control={control} error={ errors.nome && errors.nome.message } />
                <Input label="Estado" name="estado" control={control} error={ errors.estado && errors.estado.message } />
                <Input label="Cidade" name="cidade" control={control} error={ errors.cidade && errors.cidade.message } />
                <Input label="UBS" name="ubs" control={control} error={ errors.ubs && errors.ubs.message } />
                <Input label="Minha Localização" name="localizacao" control={control} error={ errors.localizacao && errors.localizacao.message } />
                <Input label="E-mail" name="email" control={control} error={ errors.email && errors.email.message } />
                <Input label="Senha" name="senha" control={control} error={ errors.senha && errors.senha.message } secureTextEntry={true} />
                <Input label="Confirmar Senha" name="confirmarSenha" control={control} error={ errors.confirmarSenha && errors.confirmarSenha.message } secureTextEntry={true} />

                <Button texto="Cadastrar" color={MyTheme.colors.primary_green} onPress={ handleSubmit(createUser) } />
            </ScrollView>
        </View>
    );
};