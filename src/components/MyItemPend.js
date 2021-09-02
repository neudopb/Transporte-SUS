import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonSolic } from './ButtonSolic';
import MyTheme from '../styles/MyTheme';

export function MyItemPend(props) {

    return (
        <View style={styles.viewCont}>
            <Text style={styles.txt}>
                {props.nome} {"\n"}
                {props.data} - {props.hora} {"\n"}
                Destino: {props.destino}{"\n"}
            </Text>
            <ButtonSolic texto="Cancelar" cor={MyTheme.colors.status_red} />
            <ButtonSolic texto="Confirmar" cor={MyTheme.colors.status_green} />
        </View>
    );
};
 
const styles = StyleSheet.create({
    viewCont: {
        width: '90%',
        height: '12%',
        marginTop: 10,
        padding: 15,
        backgroundColor: MyTheme.colors.gray4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    txt: {
        fontSize: 18,
        paddingTop: 10,
        flex: 1,
        flexWrap: 'wrap',
    },

});