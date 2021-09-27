import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import MyTheme from '../styles/MyTheme';
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonSolic } from './ButtonSolic';
import { ButtonMap } from './ButtonMap';

export function ItemPend(props) {

    const scale = props.scale;

    return (
        <Animated.View style={[styles.viewContainer, {transform: [{scale}]} ]}>
            <View style={styles.viewText}>
                <Text style={styles.txt2}><FontAwesome name="calendar-check-o" size={24} color="black" /> {moment(props.dados.data).format('DD-MM-YYYY')} <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="black" /> {props.dados.hora}</Text>
                <Text style={styles.txt2}><Text style={styles.titulo}>Paciente: </Text>{props.dados.usuario.first_name}</Text>
                <ButtonMap onPress={() => props.navigation.navigate('Localization', props.dados.minha_localizacao) } />
                <Text style={styles.txt2}><Text style={styles.titulo}>Destino: </Text>{props.dados.destino}</Text>
                <Text style={styles.txt3}><Text style={styles.titulo}>Descrição: </Text>{props.dados.descricao}</Text>
                <View style={styles.viewBtn}>
                <ButtonSolic texto = "Responder" cor={MyTheme.colors.blue} onPress={() => props.navigation.navigate('StatusAgend', props.dados) }/>
                </View>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        height: 180,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: MyTheme.colors.black,
        shadowOffset: { width: 10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'rgba(255, 255, 255, .1)',
    },
    viewText:{
        flex: 1,
        paddingLeft: 10,
    },
    txt2: {
        fontSize: 18,
        opacity: .9,
    },
    txt3: {
        fontSize: 17,
        opacity: .8,
        flexWrap: 'wrap',
    },
    titulo: {
        fontWeight: 'bold',
    },
    viewBtn:{
        alignItems: 'center',
    }
});