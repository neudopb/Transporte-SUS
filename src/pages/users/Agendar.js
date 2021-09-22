import React, {useState, useEffect}  from 'react';
import { View, Text, Keyboard, Alert } from 'react-native';
import styles from '../../styles/StyleUsers';
import MyTheme from '../../styles/MyTheme';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {Select} from '../../components/Select';
import { PickerDate } from '../../components/PickerDate';
import { PickerTime } from '../../components/PickerTime';
import api from '../../services/Api';
import { useAuth } from '../../contexts/Auth';

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    destino: yup.string().required("Informe o destino de sua viagem"),
    data: yup.string().required("Data é obrigatório"),
    hora: yup.string().required("Data é obrigatório"),
    ubs: yup.number().integer().positive("Escolha uma opção válida").required("Informe a Ubs"),
    localizacao: yup.string().required("Informe a sua localização"),
    descricao: yup.string().required("Informe o motivo"),
});

export function Agendar({ navigation }){

    const { control, handleSubmit, setValue, value, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const {user} = useAuth();

    const [ubsList, setUbsList] = useState([]);

    async function listUbs(){
        try {
            const {data} = await api.get('ubslist/');
            setUbsList(data);
        } catch(error) {
            console.log(error);
        }
    }

    async function createAgendamento(dados){

        const headers = {
            'authorization': 'Bearer ' + user.token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        const body = {
            'usuario': user.id,
            'destino': dados.destino,
            'data': dados.data,
            'hora': dados.hora,
            'ubs': dados.ubs,
            'minha_localizacao': dados.localizacao,
            'descricao': dados.descricao,
        };

        try {
            const responseAgend = await api.post('agendamento/', body, {headers});
            
            const id = JSON.stringify(responseAgend.data.id);

            const bodyStatus = {
                'status': 2,
                'agendamento': id,
                'observacao': 'Aguardando',
            };

            try {
                const responseStatus = await api.post('statusagendamento/', bodyStatus, {headers});
            } catch (error) {
                console.log(error);
                Alert.alert(error);
            }

            navigation.navigate('Home');

        } catch(error) {
            console.log(error);
            Alert.alert(error);
        }
        
    }

    useEffect( () =>{
        listUbs();
    },[]); 

    return (
        <View style={styles.containerAgendar}>
            <Text style={styles.title}>Preencha as Informações</Text>

            <Select datas= {ubsList} label="UBS" largura="90%" name="ubs" value={user.ubs} control={control} setValue={setValue} error={ errors.ubs && errors.ubs.message } />
            <Input label="Minha Localização" largura="90%" name="localizacao" control={control} error={ errors.localizacao && errors.localizacao.message } />
            <Input label="Destino" largura="90%" name="destino" control={control} error={ errors.destino && errors.destino.message } />
            <PickerDate label="Data" largura="90%" name="data" value={user.data} control={control} setValue={setValue} error={ errors.data && errors.data.message } />
            <PickerTime label="Hora" largura="90%" name="hora" value={user.hora} control={control} setValue={setValue} error={ errors.hora && errors.hora.message } />
            <Input label="Descrição" largura="90%" name="descricao" control={control} error={ errors.descricao && errors.descricao.message } />
            
            <Button texto="Agendar" color={MyTheme.colors.primary_green} onPress={ handleSubmit(createAgendamento)} />
        </View>

    );
};