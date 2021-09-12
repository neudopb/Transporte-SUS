import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MyTheme from '../styles/MyTheme';

export function Button(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.btn, {backgroundColor: props.color}, props.largura ? {width: props.largura}:'']} >
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
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 20,
        color: MyTheme.colors.white,
    }
});