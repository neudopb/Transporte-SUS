import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import MyTheme from '../styles/MyTheme';

export function InputLogin(props) {
    return (
        <TextInput
            style={styles.inp}
            placeholder={props.placeholder}
            placeholderTextColor= {MyTheme.colors.gray3}
            { ...props }
        />
    );
};

const styles = StyleSheet.create({
    inp: {
        backgroundColor: MyTheme.colors.white,
        width: '90%',
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
    },
});