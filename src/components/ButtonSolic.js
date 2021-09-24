import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MyTheme from '../styles/MyTheme';
import { MaterialIcons } from '@expo/vector-icons';

export function ButtonSolic(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.btn, {backgroundColor: props.cor}]} >
            <MaterialIcons name="question-answer" size={20} color="white" />
            <Text style={styles.txt}>{props.texto}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: '35%',
        height: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        flexDirection:'row',
    },
    txt: {
        fontSize: 16,
        color: MyTheme.colors.white,
        paddingLeft: 3,
    }
});