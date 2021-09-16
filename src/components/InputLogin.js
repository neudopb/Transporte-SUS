import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MyTheme from '../styles/MyTheme';

import { useForm, Controller } from 'react-hook-form';

export function InputLogin({ placeholder, control, name, error, ...rest }) {
    return (
        <View style={styles.vw}>
            <Controller
                control={ control }
                render={({ field: { onChange, onBlur, value } }) =>(
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        style={styles.inp}
                        placeholder={placeholder}
                        placeholderTextColor= {MyTheme.colors.gray3}
                        { ...rest }
                    />
                )}
                name={name}
            />
            { error && <Text style={styles.erro}>{error}</Text> }
        </View>
    );
};

const styles = StyleSheet.create({
    vw: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inp: {
        backgroundColor: MyTheme.colors.white,
        width: '90%',
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
    },
    erro: {
        fontSize: 15,
        paddingLeft: 5,
        color: 'red',
    }
});