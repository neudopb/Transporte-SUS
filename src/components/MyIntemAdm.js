import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyTheme from '../styles/MyTheme';

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
        backgroundColor: MyTheme.colors.gray4,
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