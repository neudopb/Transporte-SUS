import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MyTheme from '../styles/MyTheme';
import { FontAwesome } from '@expo/vector-icons'; 

export function ButtonLarge(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.btn, {backgroundColor: props.color}, props.largura ? {width: props.largura}:'']} >
            <FontAwesome name={props.icon} size={30} color="black" />
            <Text style={styles.txt}>{props.texto}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: '70%',
        height: '22%',
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 20,
        color: MyTheme.colors.white,
        marginTop: 10,
    }
});