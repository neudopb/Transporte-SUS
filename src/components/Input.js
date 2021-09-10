import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import MyTheme from '../styles/MyTheme';

import { useForm, Controller } from 'react-hook-form';


export function Input({ altura, label, control, name, error, ...rest }) {
    return (
        <View style={[styles.viewBtn]}>
            <Text style={styles.txt}>{label}</Text>
            <Controller
                control={ control }
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.inp}
                        onBlur={onBlur} {...rest}
                        onChangeText={onChange}
                    />
                )}
                name={name}
            />
            { error && <Text style={styles.error}>{error}</Text> }
        </View>
    );
};

const styles = StyleSheet.create({
    viewBtn: {
        width: '100%',
        marginTop: 10,
    },
    inp: {
        height: 45,
        width: '100%',
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
    error: {
        fontSize: 15,
        paddingLeft: 5,
        color: 'red',
    },
});