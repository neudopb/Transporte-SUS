import React from 'react';
import { View, Image } from 'react-native';
import Style from './Style';
import { Button } from '../../components/Button';

export function Home({ navigation }){
    return (
        <View style={Style.container}>
            <Image source={require('../../images/logo.png')} style={Style.logo} />

            <View style={Style.viewBtn}>
                <Button texto="Agendar Viagem" color="#14A192" onPress={ ()=> navigation.navigate('Agendar') } />
                <View style={Style.viewSep}></View>
                <Button texto="Meus Agendamentos" color="#E0961D" onPress={ ()=> navigation.navigate('MeusAgend') } />
            </View>
        </View>
    );
};