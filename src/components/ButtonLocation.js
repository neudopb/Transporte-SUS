import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MyTheme from '../styles/MyTheme';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../contexts/Auth';
import * as Location from 'expo-location';


export function ButtonLocation({ largura, label, control, setValue, value, name, error, ...rest }) {

    const {myLocalization} = useAuth();

    const [endereco, setEndereco] = useState('Clique Para Obter Sua Localização!!!');

    async function handleLocation(){
        const loc = await myLocalization();
        setValue(name, loc);

        const coords = loc.split('|');
        
        const latitude = parseFloat(coords[0]);
        const longitude = parseFloat(coords[1]);

        let response = await Location.reverseGeocodeAsync({
            latitude, 
            longitude
        });

        for (let item of response) {
            let address = `${item.street}, ${item.district} - ${item.subregion}`;

            setEndereco(address);
        }
    };

    return (
        <View style={[styles.viewBtn, largura ? {width: largura}:'']}>
            <Text style={styles.txt}>{label}</Text>
            <Controller
                control={ control }
                render={({ field: { onChange, onBlur, value } }) => (
                    <TouchableOpacity style = {styles.inp} onPress={handleLocation}>
                        <Text style={styles.txtPicker}>{endereco}</Text>
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
        padding: 5,
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
        fontSize: 16,
    }
});