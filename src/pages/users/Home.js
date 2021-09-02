import React from 'react';
import { View, Image } from 'react-native';
import styles from '../../styles/StyleUsers';
import MyTheme from '../../styles/MyTheme';
import { Button } from '../../components/Button';

export function Home({ navigation }){
    return (
        <View style={styles.container}>
            <Image source={require('../../images/logo.png')} style={styles.logo} />

            <View style={styles.viewBtn}>
                <Button texto="Agendar Viagem" color={MyTheme.colors.primary_green} onPress={ ()=> navigation.navigate('Agendar') } />
                <View style={styles.viewSep}></View>
                <Button texto="Meus Agendamentos" color={MyTheme.colors.primary_orange} onPress={ ()=> navigation.navigate('MeusAgend') } />
            </View>
        </View>
    );
};