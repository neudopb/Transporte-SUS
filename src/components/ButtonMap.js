import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import MyTheme from '../styles/MyTheme';
import { FontAwesome5 } from '@expo/vector-icons';

export function ButtonMap(props) {

    return (
        <View style={styles.viewEnde}>
            <Text style={styles.titulo}>Endereço: </Text>
            <TouchableOpacity style={styles.btn} onPress={props.onPress}>
                <FontAwesome5 name="map-marked-alt" size={18} color="rgba(0, 0, 0, 0.8)" />
                <Text style={[styles.txt2, {color: 'black'}]}> Ver Endereço</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewEnde: {
        fontSize: 18,
        opacity: .9,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    btn: {
        width: '45%',
        height: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        fontSize: 18,
        borderWidth: 1,
        backgroundColor: MyTheme.colors.blueMap,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    txt2: {
        fontSize: 18,
        opacity: .9,
    },
});