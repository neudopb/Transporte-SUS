import React, {useState, useEffect} from 'react';
import MyTheme from '../../styles/MyTheme';
import { View, Alert, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function StatusAgend({ navigation, route }){

    const [agendamento, setAgendamento] = useState(route.params ? route.params : {});

    return(
        <View style={styles.containerP}>
            <View style={styles.viewContainer}>
                <Text style={styles.info}>INFORMAÇÕES:</Text>
                <View style={styles.viewText}>
                    <Text style={styles.txt2}><FontAwesome name="calendar-check-o" size={24} color="black" /> {moment(agendamento.data).format('DD-MM-YYYY')} <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="black" /> {agendamento.hora} </Text>
                    <Text style={styles.txt2}><Text style={styles.titulo}>Paciente: </Text>{agendamento.usuario.first_name}</Text>
                    <Text style={styles.txt2}><Text style={styles.titulo}>E-mail: </Text>{agendamento.usuario.email}</Text>
                    <Text style={styles.txt2}><Text style={styles.titulo}>Endereço: </Text>{agendamento.minha_localizacao}</Text>
                    <Text style={styles.txt2}><Text style={styles.titulo}>Destino: </Text>{agendamento.destino}</Text>
                    <Text style={styles.txt2}><Text style={styles.titulo}>Descrição: </Text>{agendamento.descricao}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerP:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: MyTheme.colors.background_gray,
    },
    viewContainer: {
        height: 200,
        width: '95%',
        alignItems: 'flex-start',
        padding: 8,
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
        paddingTop: 10,
    },
    txt2: {
        fontSize: 18,
        opacity: .9,
    },
    titulo: {
        fontWeight: 'bold',
    },
    viewBtn:{
        alignItems: 'center',
    },
    info: {
        width: '100%',
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: MyTheme.colors.gray4,
    },
});
