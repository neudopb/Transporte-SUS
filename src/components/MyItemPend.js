import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonSolic } from './ButtonSolic';

export function MyItemPend(props) {

    return (
        <View style={styles.viewCont}>
            <Text style={styles.txt}>
                {props.nome} {"\n"}
                {props.data} - {props.hora} {"\n"}
                Destino: {props.destino}{"\n"}
            </Text>
            <ButtonSolic texto="Cancelar" cor="#c21807" />
            <ButtonSolic texto="Confirmar" cor="#307268" />
        </View>
    );
};
 
const styles = StyleSheet.create({
    viewCont: {
        width: '90%',
        height: '12%',
        marginTop: 10,
        padding: 15,
        backgroundColor:'#c0c0c0',
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