import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import MyTheme from '../styles/MyTheme';
import moment from 'moment';
import api from '../services/Api';

export function ItemList(props) {

    const scale = props.scale;
    // const [statusAgend, setstatusAgend] = useState({});

    // async function status(){
    //     try {
    //         console.log("Entrou");
    //         const responseStatus = await api.get('statusporagendamento/'+ props.id, {
    //             headers: {
    //                 'authorization': 'Bearer ' + props.token,
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //             }
    //         });
    //         console.log("aaaaaaaaaaaaaaaa");
    //         const data = responseStatus.data;
    //         setstatusAgend(data);
            
    //     } catch (error) {
    //         console.error(error);
    //         Alert.alert(error);   
    //     }
    // }
    // useEffect( () => {
    //     status();
    // }, []);

    return (
        <Animated.View style={[styles.viewContainer, {transform: [{scale}]} ]}>
            <View style={styles.viewText}>
                <View style={styles.viewStatus}>
                    <Text style={styles.txt2}>{moment(props.data).format('DD-MM-YYYY')} | {props.hora}</Text>
                    <Text style={styles.status}>Aguardando</Text>
                </View>
                <Text style={styles.txt1}>{props.destino}</Text>
                <Text style={styles.txt3}>Observação:</Text>
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
    viewText:{
        flex: 1,
        paddingLeft: 10,
    },
    txt1: {
        fontSize: 20,
        fontWeight: '700',
    },
    txt2: {
        fontSize: 18,
        opacity: .9,
    },
    txt3: {
        fontSize: 16,
        opacity: .8,
        flexWrap: 'wrap',
    },
    status:{
        width: 100,
        padding: 3,
        marginRight: 10,
        textAlign: 'center',
        fontSize: 16,
        color: MyTheme.colors.white,
        borderRadius: 15,
        backgroundColor: MyTheme.colors.status_yellow
    },
    viewStatus:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
});