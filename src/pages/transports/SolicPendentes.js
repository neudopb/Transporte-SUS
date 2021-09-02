import React from 'react';
import { View, Text} from 'react-native';
import styles from '../../styles/StyleTransports';
import { MyItemPend } from '../../components/MyItemPend';

export function SolicPendentes({ navigation }){

    return (
        <View style={styles.container}>
            <MyItemPend nome = "Neudo Paulino" data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó'/>
            <MyItemPend nome = "Maria Girlene" data= '21/08/2021' hora = '10:00' destino = 'Hospital Icó'/>
            <MyItemPend nome = "Neudo Paulino" data= '21/08/2021' hora = '11:00' destino = 'Hospicio Icó'/>
            <MyItemPend nome = "Maria Girlene" data= '21/08/2021' hora = '07:00' destino = 'Policlínica Iguatu'/>
            <MyItemPend nome = "Maria Girlene" data= '21/08/2021' hora = '09:00' destino = 'Consulta no CAPS'/>
        </View>
    );
};