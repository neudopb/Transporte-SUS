import React from 'react';
import { View, Image } from 'react-native';
import styles from '../../styles/StyleTransports';
import MyTheme from '../../styles/MyTheme';
import { ButtonLarge } from '../../components/ButtonLarge';

export function HomeAdmin({ navigation }){
    return (
        <View style={styles.container}>
            <Image source={require('../../images/logo.png')} style={styles.logo} />

            <View style={styles.viewBtn}>
                <ButtonLarge texto="Solicitações Confirmadas" icon="check-square-o" color={MyTheme.colors.primary_green} onPress={ ()=> navigation.navigate('SolicConfirmadas') } />
                <ButtonLarge texto="Solicitações Pendentes" icon="hourglass-half" color={MyTheme.colors.primary_orange} onPress={ ()=> navigation.navigate('SolicPendentes') } />
                <ButtonLarge texto="Histórico" icon="folder-open" color={MyTheme.colors.gray2} onPress={ ()=> navigation.navigate('SolicConfirmadas') } />
            </View>
        </View>
    );
};