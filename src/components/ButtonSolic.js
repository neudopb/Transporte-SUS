import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function ButtonSolic(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.btn, {backgroundColor: props.cor}]} >
            <Text style={styles.txt}>{props.texto}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: '20%',
        height: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
    },
    txt: {
        fontSize: 15,
        color: '#FFF',
    }
});