import React, {useState, useEffect} from 'react';
import { View, Alert, FlatList, Animated } from 'react-native';
import styles from '../../styles/StyleUsers';
import { ItemList } from '../../components/ItemList';
import { useAuth } from '../../contexts/Auth';
import api from '../../services/Api';


export function MeusAgend({ navigation }){

    const {user} = useAuth();
    const [agendamentos, setAgendamentos] = useState([]);
    
    async function meusAgendamentos() {
        try {
            const responseAgend = await api.get('agendamentouser/', {
                headers: {
                    'authorization': 'Bearer ' + user.token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            const data = responseAgend.data;
            setAgendamentos(data);
        } catch (error) {
            console.error(error);
            Alert.alert(error);
        }
    }

    useEffect( () => {
        meusAgendamentos();
    }, []);

    const scrollY = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.containerList}>

            <Animated.FlatList  
                data={agendamentos.sort((a,b) => (a.data < b.data ? 1 : b.data < a.data ? -1 : 0))}
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

                    return <ItemList token={user.token} id={item.id} data={item.data} hora={item.hora} destino={item.destino} observacao={item.status.observacao} status={item.status.status} scale={scale} />
                }}
            />
        </View>
    );
};