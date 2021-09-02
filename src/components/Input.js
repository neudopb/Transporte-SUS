import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import MyTheme from '../styles/MyTheme';

export function Input(props) {
    return (
        <View style={[styles.viewBtn, props.altura ? {height: props.altura}:{height: 60}]}>
            <Text style={styles.txt}>{props.label}</Text>
            <TextInput
                 style={styles.inp}
                { ...props }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewBtn: {
        width: '90%',
        height: 60,
        marginTop: 10,
    },
    inp: {
        flex: 1,
        backgroundColor: MyTheme.colors.white,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
    },
    txt: {
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
});