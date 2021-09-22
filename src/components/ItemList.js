import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import MyTheme from '../styles/MyTheme';

export function ItemList(props) {

    const scale = props.scale;

    return (
        <Animated.View style={[styles.viewContainer, {transform: [{scale}]} ]}>
            <View style={styles.icon}></View>
            <View>
                <Text style={styles.txt1}>{props.texto}</Text>
                <Text style={styles.txt2}>{props.texto}</Text>
                <Text style={styles.txt3}>{props.texto}</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: MyTheme.colors.black,
        shadowOffset: { width: 10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'rgba(255, 255, 255, .1)',
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
        backgroundColor: 'red',
    },
    txt1: {
        fontSize: 22,
        fontWeight: '700',
    },
    txt2: {
        fontSize: 18,
        opacity: .7,
    },
    txt3: {
        fontSize: 14,
        opacity: .8,
    },
});