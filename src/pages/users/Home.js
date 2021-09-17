import React from 'react';
import { View, Image } from 'react-native';
import styles from '../../styles/StyleUsers';
import MyTheme from '../../styles/MyTheme';
import { ButtonLarge } from '../../components/ButtonLarge';

export function Home({ navigation }){
    return (
        <View style={styles.container}>
            <Image source={require('../../images/logo.png')} style={styles.logo} />

            <View style={styles.viewBtn}>
                <ButtonLarge texto="Agendar Viagem" icon="car" color={MyTheme.colors.primary_green} onPress={ ()=> navigation.navigate('Agendar') } />
                <View style={styles.viewSep}></View>
                <ButtonLarge texto="Meus Agendamentos" icon="list-alt" color={MyTheme.colors.primary_orange} onPress={ ()=> navigation.navigate('MeusAgend') } />
            </View>
        </View>
    );
};