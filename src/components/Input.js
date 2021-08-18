import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export function Input(props) {
    return (
        <TextInput
            style={styles.inp}
            placeholder={props.placeholder}
            placeholderTextColor='#B2B2B2'
            { ...props }
        />
    );
};

const styles = StyleSheet.create({
    inp: {
        backgroundColor: '#FFF',
        width: '90%',
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
    },
});