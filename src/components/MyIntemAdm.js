import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function MyIntemAdm(props) {

    return (
        <View style={styles.viewCont}>
            <Text style={styles.txt}>
                {props.nome} (End: {props.endereco}) {"\n"}
                Destino: {props.destino} ({props.descricao}){"\n"}
                {props.data} - {props.hora} {"\n"}
            </Text>
        </View>
    );
};
 
const styles = StyleSheet.create({
    viewCont: {
        width: '90%',
        height: '10%',
        marginTop: 10,
        backgroundColor:'#c0c0c0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 5,
    },
    txt: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 15,
    }

});