import React from 'react';
import { View, Text} from 'react-native';
import Style from './Style';
import { MyItem } from '../../components/MyItem';

export function MeusAgend({ navigation }){

    return (
        <View style={Style.containerList}>
            <MyItem data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó' motivo = "Confirmado" status = "Agendado" cor = "#307268"/>
            <MyItem data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó' motivo = "..." status = "Aguardando" cor = "#E0961D"/>
            <MyItem data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó' motivo = "Confirmado" status = "Agendado" cor = "#307268"/>
            <MyItem data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó' motivo = "Carro ocupado" status = "Cancelado" cor = "#c21807"/>
            <MyItem data= '21/08/2021' hora = '09:00' destino = 'Policlínica Icó' motivo = "Carro na oficina" status = "Cancelado" cor = "#c21807"/>
        </View>
    );
};