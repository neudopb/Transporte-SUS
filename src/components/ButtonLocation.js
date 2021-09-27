import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MyTheme from '../styles/MyTheme';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../contexts/Auth';


export function ButtonLocation({ largura, label, control, setValue, value, name, error, ...rest }) {

    const {myLocalization} = useAuth();

    async function handleLocation(){
        const loc = await myLocalization();
        setValue(name, loc);
    }

    return (
        <View style={[styles.viewBtn, largura ? {width: largura}:'']}>
            <Text style={styles.txt}>{label}</Text>
            <Controller
                control={ control }
                render={({ field: { onChange, onBlur, value } }) => (
                    <TouchableOpacity style = {styles.inp} onPress={handleLocation}>
                        <Text style={styles.txtPicker}>{value && value}</Text>
                    </TouchableOpacity>
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
    txtPicker: {
        fontSize: 18,
    }
});