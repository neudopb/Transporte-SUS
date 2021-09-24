import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Alert, Keyboard} from 'react-native';
import styles from '../../styles/StyleAccounts';
import MyTheme from '../../styles/MyTheme';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {Select} from '../../components/Select';
import api from '../../services/Api';

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    nome: yup.string().required("Informe o nome"),
    cidade: yup.number().integer().positive("Escolha uma opção válida").required("Informe a cidade"),
    localizacao: yup.string().required("Informe a sua localização"),
    email: yup.string().email().required("Informe um E-mail valido"),
    senha: yup.string().min(8, "Senha deve conter pelo menos 8 caracteres").required("Informe a senha"),
    confirmarSenha: yup.string().oneOf([yup.ref('senha'), null], "Senhas não conferem").required("Confirme a senha")
});

export function Register({ navigation }){

    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [cidadeList, setCidadeList] = useState([]);


    async function listCidade(){
        try {
            const {data} = await api.get('cidadelist/');
            setCidadeList(data);
        } catch(error) {
            console.log(error);
        }
    }

    async function createUser(data) {

        var params = new URLSearchParams();
        params.append('email', data.email);
        params.append('username', data.email);
        params.append('password', data.senha);
        params.append('first_name', data.nome);
        params.append('motorista_ubs', false);
        params.append('cidade', data.cidade);
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

    useEffect( () =>{
        listCidade();
    },[]); 

    return (
        <View style={styles.containerRegister}>
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                <Text style={styles.title}>Preencha suas Informações</Text>
                
                <Input label="Nome" name="nome" control={control} error={ errors.nome && errors.nome.message } />
                <Select datas= {cidadeList} label="Cidade" name="cidade" control={control} setValue={setValue} error={ errors.cidade && errors.cidade.message } />
                <Input label="Minha Localização" name="localizacao" control={control} error={ errors.localizacao && errors.localizacao.message } />
                <Input label="E-mail" name="email" control={control} error={ errors.email && errors.email.message } />
                <Input label="Senha" name="senha" control={control} error={ errors.senha && errors.senha.message } secureTextEntry={true} />
                <Input label="Confirmar Senha" name="confirmarSenha" control={control} error={ errors.confirmarSenha && errors.confirmarSenha.message } secureTextEntry={true} />

                <Button texto="Cadastrar" color={MyTheme.colors.primary_green} largura = '100%' onPress={ handleSubmit(createUser) } />
            </ScrollView>
        </View>
    );
};