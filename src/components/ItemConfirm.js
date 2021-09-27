import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import MyTheme from '../styles/MyTheme';
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonMap } from './ButtonMap';

export function ItemConfirm(props) {

    const scale = props.scale;

    return (
        <Animated.View style={[styles.viewContainer, {transform: [{scale}]} ]}>
            <View style={styles.viewText}>
                <Text style={styles.txt2}><FontAwesome name="calendar-check-o" size={24} color="black" /> {moment(props.data).format('DD-MM-YYYY')} <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="black" /> {props.hora}</Text>
                <Text style={styles.txt2}><Text style={styles.titulo}>Paciente: </Text>{props.nome}</Text>
                <ButtonMap onPress={() => props.navigation.navigate('Localization', props.endereco) } />
                <Text style={styles.txt2}><Text style={styles.titulo}>Destino: </Text>{props.destino}</Text>
                <Text style={styles.txt3}><Text style={styles.titulo}>Descrição: </Text>{props.descricao}</Text>
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
        fontSize: 18,
        fontWeight: 'bold',
    },
});