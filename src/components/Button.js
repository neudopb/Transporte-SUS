import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.btn, {backgroundColor: props.color}]} >
            <Text style={styles.txt}>{props.texto}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 20,
        color: '#FFF',
    }
});