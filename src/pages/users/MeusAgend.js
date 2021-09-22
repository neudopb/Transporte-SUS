import React, {useState, useEffect} from 'react';
import { View, Alert, FlatList, Animated } from 'react-native';
import styles from '../../styles/StyleUsers';
import { ItemList } from '../../components/ItemList';
import { useAuth } from '../../contexts/Auth';


export function MeusAgend({ navigation }){

    const {user} = useAuth();
    const [agendamentos, setAgendamentos] = useState([]);
    
    async function meusAgendamentos() {
        try {
            console.log('aaaaaaaaaaaaaa');
            
            const responseAgend = await api.get('agendamentouser/', {
                headers: {
                    'authorization': 'Bearer ' + user.token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            console.log(responseAgend);
    
            const data = responseAgend.data;
            setAgendamentos(data);
            console.log('aquiiii');
            console.log(agendamentos);
        } catch (error) {
            console.log(error);
            Alert.alert(error);
        }
    }

    useEffect( () => {
        meusAgendamentos();
    }, []);

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

                    return <ItemList texto={item.text} scale={scale} />
                }}
            />
        </View>
    );
};