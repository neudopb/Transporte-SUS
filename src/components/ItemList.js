import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import MyTheme from '../styles/MyTheme';
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function ItemList(props) {

    const scale = props.scale;

    const [cor, setCor] = useState(MyTheme.colors.status_yellow);

    function corStatus(){

        if(props.status == 'Confirmado'){
            setCor(MyTheme.colors.status_green);
        } else if(props.status == 'Cancelado'){
            setCor(MyTheme.colors.status_red);
        }
    }

    useEffect( () => {
        corStatus();
    }, []);


    return (
        <Animated.View style={[styles.viewContainer, {transform: [{scale}]} ]}>
            <View style={styles.viewText}>
                <View style={styles.viewStatus}>
                    <Text style={styles.txt2}><FontAwesome name="calendar-check-o" size={24} color="black" /> {moment(props.data).format('DD-MM-YYYY')} <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="black" /> {props.hora} </Text>
                    <Text style={[styles.status, {backgroundColor: cor}]}>{props.status}</Text>
                </View>
                <Text style={styles.txt1}>{props.destino}</Text>
                <Text style={styles.txt3}>Observação: {props.observacao}</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        height: 150,
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
    txt1: {
        fontSize: 20,
        fontWeight: '700',
    },
    txt2: {
        fontSize: 18,
        opacity: .9,
    },
    txt3: {
        fontSize: 16,
        opacity: .8,
        flexWrap: 'wrap',
    },
    status:{
        width: 100,
        padding: 3,
        marginRight: 10,
        textAlign: 'center',
        fontSize: 16,
        color: MyTheme.colors.white,
        borderRadius: 15,
    },
    viewStatus:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
});