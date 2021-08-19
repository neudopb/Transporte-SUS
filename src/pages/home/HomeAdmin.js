import React from 'react';
import { View, Image } from 'react-native';
import Style from './Style';
import { Button } from '../../components/Button';

export function HomeAdmin({ navigation }){
    return (
        <View style={Style.container}>
            <Image source={require('../../images/logo.png')} style={Style.logo} />

            <View style={Style.viewBtn}>
                <Button texto="Solicitações Confirmadas" color="#14A192" onPress={ ()=> navigation.navigate('SolicConfirmadas') } />
                <View style={Style.viewSep}></View>
                <Button texto="Solicitações Pendentes" color="#E0961D" onPress={ ()=> navigation.navigate('SolicPendentes') } />
                <View style={Style.viewSep}></View>
                <Button texto="Histórico" color="#808080" onPress={ ()=> navigation.navigate('SolicConfirmadas') } />
            </View>
        </View>
    );
};