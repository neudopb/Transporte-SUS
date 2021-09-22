import React from 'react';
import { View, Text, StyleSheet, FlatList, Animated, SafeAreaViewBase, SafeAreaView } from 'react-native';
import styles from '../../styles/StyleUsers';
import MyTheme from '../../styles/MyTheme';
import { MyItem } from '../../components/MyItem';
import { ItemList } from '../../components/ItemList';

export function MeusAgend({ navigation }){

    const dados = [
        {
            id: 1,
            text: "Teste 1",
        },
        {
            id: 2,
            text: "Teste 2",
        },
        {
            id: 3,
            text: "Teste 3",
        },
        {
            id: 4,
            text: "Teste 4",
        },
        {
            id: 5,
            text: "Teste 5",
        },
        {
            id: 6,
            text: "Teste 6",
        },
        {
            id: 7,
            text: "Teste 7",
        },
        {
            id: 8,
            text: "Teste 8",
        },
        {
            id: 9,
            text: "Teste 9",
        },
        {
            id: 10,
            text: "Teste 10",
        },
        {
            id: 11,
            text: "Teste 11",
        },
        {
            id: 12,
            text: "Teste 12",
        },
    ];

    const scrollY = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.containerList}>

            <Animated.FlatList  
                data={dados}
                onScroll={Animated.event(
                    [{ nativeEvent: {contentOffset: {y: scrollY}}}],
                    {useNativeDriver: true}
                )}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.flat}
                renderItem={ ({item, index}) => {

                    const scale = scrollY.interpolate({ 
                        inputRange : [
                            -1, 0,
                            100 * index,
                            100 * (index + 2)
                        ],
                        outputRange: [1, 1, 1, 0.5]
                    })

                    return <Animated.View style={[styles2.viewContainer, {transform: [{scale}]} ]}>
                                <View style={styles2.icon}></View>
                                <View>
                                    <Text style={styles2.txt1}>{item.text}</Text>
                                    <Text style={styles2.txt2}>{item.text}</Text>
                                    <Text style={styles2.txt3}>{item.text}</Text>
                                </View>
                            </Animated.View>
                }}
            />
        </View>
    );
};

const styles2 = StyleSheet.create({
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