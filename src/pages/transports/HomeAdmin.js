import React from 'react';
import { View, Image } from 'react-native';
import styles from '../../styles/StyleTransports';
import MyTheme from '../../styles/MyTheme';
import { Button } from '../../components/Button';

export function HomeAdmin({ navigation }){
    return (
        <View style={styles.container}>
            <Image source={require('../../images/logo.png')} style={styles.logo} />

            <View style={styles.viewBtn}>
                <Button texto="Solicitações Confirmadas" color={MyTheme.colors.primary_green} onPress={ ()=> navigation.navigate('SolicConfirmadas') } />
                <View style={styles.viewSep}></View>
                <Button texto="Solicitações Pendentes" color={MyTheme.colors.primary_orange} onPress={ ()=> navigation.navigate('SolicPendentes') } />
                <View style={styles.viewSep}></View>
                <Button texto="Histórico" color={MyTheme.colors.gray2} onPress={ ()=> navigation.navigate('SolicConfirmadas') } />
            </View>
        </View>
    );
};