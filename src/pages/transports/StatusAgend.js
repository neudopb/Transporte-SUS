import React, {useState, useEffect} from 'react';
import MyTheme from '../../styles/MyTheme';
import { View, Alert, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/Api';
import { useAuth } from '../../contexts/Auth';
import { Input } from '../../components/Input';
import {Select} from '../../components/Select';
import { Button } from '../../components/Button';
import { ButtonMap } from '../../components/ButtonMap';

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    observacao: yup.string().required('Informe alguma informação para o paciente'),
    status: yup.string().required('Informe um status'),
});

export function StatusAgend({ navigation, route }){

    const { control, handleSubmit, setValue, value, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const {user} = useAuth();
    const [agendamento, setAgendamento] = useState(route.params ? route.params : {});
    const [nomeStatus, setNomeStatus] = useState([]);

    function dadosStatus() {
        const dados = [
            {
                id: 'Aguardando',
                nome: 'Aguardando'
            },
            {
                id: 'Confirmado',
                nome: 'Confirmado'
            },
            {
                id: 'Cancelado',
                nome: 'Cancelado'
            },
        ];

        setValue('observacao', agendamento.status.observacao);
        setValue('status', agendamento.status.status);

        setNomeStatus(dados);
    }

    async function atualizarStatus(data) {

        // const stt = nomeStatus.filter(item => {
        //     if (item.id == data.status) {
        //         return item.nome;
        //     }
        // })[0].nome

        const body = {
            'status': data.status,
            'observacao': data.observacao, 
        };

        const headers = {
            'authorization': 'Bearer ' + user.token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        try {
            const responseStatus = await api.put('statusagendamento/' + agendamento.status.id + '/', body, { headers });

            navigation.navigate('HomeAdmin');
        } catch (error) {
            console.error(error);
            Alert.alert(error);
        }
    }

    useEffect( () => {
        dadosStatus();
    }, []);

    return(
        <View style={styles.containerP}>
            <View style={styles.viewContainer}>
                <Text style={styles.info}>INFORMAÇÕES:</Text>
                <View style={styles.viewText}>
                    <Text style={styles.txt2}><FontAwesome name="calendar-check-o" size={24} color="black" /> {moment(agendamento.data).format('DD-MM-YYYY')} <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="black" /> {agendamento.hora} </Text>
                    <Text style={styles.txt2}><Text style={styles.titulo}>Paciente: </Text>{agendamento.usuario.first_name}</Text>
                    <Text style={styles.txt2}><Text style={styles.titulo}>E-mail: </Text>{agendamento.usuario.email}</Text>
                    <ButtonMap onPress={() => navigation.navigate('Localization', agendamento.minha_localizacao) } />
                    <Text style={styles.txt2}><Text style={styles.titulo}>Destino: </Text>{agendamento.destino}</Text>
                    <Text style={styles.txt3}><Text style={styles.titulo}>Descrição: </Text>{agendamento.descricao}</Text>
                </View>
            </View>
            <View style={styles.viewForm}>
                <Text style={styles.info}>RESPONDER:</Text>

                <Input label="Observação" largura="90%" name="observacao" control={control} error={ errors.observacao && errors.observacao.message } />
                <Select datas= {nomeStatus} label="Status" largura="90%" name="status" control={control} setValue={setValue} error={ errors.status && errors.status.message } />

                <Button texto="Salvar" color={MyTheme.colors.primary_green} onPress={ handleSubmit(atualizarStatus)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerP:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: MyTheme.colors.background_gray,
    },
    viewContainer: {
        height: 240,
        width: '95%',
        alignItems: 'flex-start',
        padding: 8,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: MyTheme.colors.black,
        shadowOffset: { width: 10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'rgba(255, 255, 255, .1)',
    },
    viewText:{
        flex: 1,
        paddingLeft: 10,
        paddingTop: 7,
        width: '100%',
    },
    viewForm: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    txt2: {
        fontSize: 18,
        opacity: .9,
    },
    txt3: {
        fontSize: 16,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    viewBtn:{
        alignItems: 'center',
    },
    info: {
        width: '100%',
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: MyTheme.colors.gray4,
    },
});
