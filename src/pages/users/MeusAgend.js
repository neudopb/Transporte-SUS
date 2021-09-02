import React from 'react';
import { View } from 'react-native';
import styles from '../../styles/StyleUsers';
import MyTheme from '../../styles/MyTheme';
import { MyItem } from '../../components/MyItem';

export function MeusAgend({ navigation }){

    return (
        <View style={styles.container}>
            <MyItem data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó' observacao = "Confirmado" status = "Agendado" cor = {MyTheme.colors.status_green}/>
            <MyItem data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó' observacao = "..." status = "Aguardando" cor = {MyTheme.colors.status_yellow}/>
            <MyItem data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó' observacao = "Confirmado" status = "Agendado" cor = {MyTheme.colors.status_green}/>
            <MyItem data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó' observacao = "Carro ocupado" status = "Cancelado" cor = {MyTheme.colors.status_red}/>
            <MyItem data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó' observacao = "Carro na oficina" status = "Cancelado" cor = {MyTheme.colors.status_red}/>
        </View>
    );
};