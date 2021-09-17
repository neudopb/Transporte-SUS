import React, {useState, useEffect}  from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/StyleUsers';
import MyTheme from '../../styles/MyTheme';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {Select} from '../../components/Select';
import api from '../../services/Api';
import { useAuth } from '../../contexts/Auth';

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

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

    const [visibleDate, setVisibleDate] = useState(false)
    const [visibleTime, setVisibleTime] = useState(false)

    const [dat, setDat] = useState('');
    const [hor, setHor] = useState('');

    async function listUbs(){
        try {
            const {data} = await api.get('ubslist/');
            setUbsList(data);
        } catch(error) {
            console.log(error);
        }
    }

    function agendamento(data){
        navigation.navigate('Home');
    }

    handlePickerDate = (datetime) => {
        setVisibleDate(false);
        setDat(moment(datetime).format('YYYY-MM-DD'));
    }

    hidePickerDate = () => {
        setVisibleDate(false);
    }

    showPickerDate = () => {
        setVisibleDate(true);
    }

    handlePickerTime = (datetime) => {
        setVisibleTime(false);
        setHor(moment(datetime).format('HH:mm'));
    }

    showPickerTime = () => {
        setVisibleTime(true);
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
            <Input label="Data" largura="90%" name="data" control={control} error={ errors.data && errors.data.message } />

            <TouchableOpacity style={{height: 50, width: 200, backgroundColor: '#fff'}} onPress={showPickerDate}>
                <Text>{dat}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: 50, width: 200, backgroundColor: '#aaa'}} onPress={showPickerTime}>
                <Text>{hor}</Text>
            </TouchableOpacity>

            <Input label="Hora" largura="90%" name="hora" control={control} error={ errors.hora && errors.hora.message } />
            <Input label="Descrição" largura="90%" name="descricao" control={control} error={ errors.descricao && errors.descricao.message } />
            <Button texto="Agendar" color={MyTheme.colors.primary_green} onPress={ handleSubmit(agendamento)} />


            <DateTimePicker
                isVisible={visibleDate}
                onConfirm={handlePickerDate}
                onCancel={hidePickerDate}
                mode={'date'}
            />

            <DateTimePicker
                isVisible={visibleTime}
                onConfirm={handlePickerTime}
                onCancel={handlePickerTime}
                mode={'time'}
            />

        </View>

    );
};