import React from 'react';
import { View, Text} from 'react-native';
import Style from './Style';
import { MyIntemAdm } from '../../components/MyIntemAdm';

export function SolicConfirmadas({ navigation }){

    return (
        <View style={Style.containerList}>
        <MyIntemAdm nome = "Neudo Paulino" data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó' endereco = "Centro Nº 34" descricao="Exame Medico"/>
        <MyIntemAdm nome = "Neudo Paulino" data= '22/08/2021' hora = '09:00' destino = 'Policlínica Icó' endereco = "Maria do Socorro 33" descricao="Exame Medico"/>
        <MyIntemAdm nome = "Maria Girlene" data= '22/08/2021' hora = '09:00' destino = 'Policlínica Iguatu' endereco = "Centro Nº 34" descricao="Fisioterapia"/>
        <MyIntemAdm nome = "Maria Girlene" data= '22/08/2021' hora = '09:00' destino = 'Policlínica Iguatu' endereco = "Centro Nº 34" descricao="Consulta Medica"/>
        <MyIntemAdm nome = "Maria Girlene" data= '23/08/2021' hora = '09:00' destino = 'Policlínica Icó' endereco = "Centro Nº 34" descricao="Exame Medico"/>
        </View>
    );
};