import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export function MyItem(props) {

    const [visualizar, setVisualizar] = useState(false);

    function hideShow(){
        setVisualizar(!visualizar);
    }

    return (
        <View style={styles.viewT}>
            <View style={styles.viewC}>
                <View>
                    <Text style={styles.txt}>
                        {props.data} - {props.hora} {"\n"}
                        {props.destino}
                    </Text>
                    
                </View>
                {
                    visualizar? <Text style={[styles.status, {backgroundColor:props.cor}]}>{props.status}</Text> : null
                }
                <View>
                    <TouchableOpacity style={styles.btn} onPress = {() => hideShow()}>
                        <Ionicons name="ios-eye-outline" size={25} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            {
                visualizar? <View style={styles.viewStatus}><Text style={styles.info}>{props.observacao}</Text></View> : null
            }
        </View>
    );
};
 
const styles = StyleSheet.create({
    viewCont: {
        width: '90%',
        height: '10%',
        marginTop: 10,
        backgroundColor:'#c0c0c0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    viewC: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewT: {
        width: '90%',
        height: '10%',
        marginTop: 15,
        marginBottom: 15,
        backgroundColor:'#c0c0c0',
        borderRadius: 5,
    },
    txt: {
        fontSize: 18,
        paddingLeft: 15,
    },
    btn:{
        padding: 15,
        marginRight: 5,

    },
    viewStatus:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c0c0c0',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderWidth: 1,
        borderColor: '#E0961D',
        transform: [{translateY:-7}],
    },
    info:{
        fontSize: 16,
    },

    status:{
        fontSize: 16,
        marginLeft: 15,
        color: '#fff',
        borderRadius: 15,
        padding: 4,
    }

});