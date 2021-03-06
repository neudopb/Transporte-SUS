import React, {useState, useEffect} from 'react';
import { View, Alert, FlatList, Animated } from 'react-native';
import styles from '../../styles/StyleUsers';
import { useAuth } from '../../contexts/Auth';
import { ItemHistorico } from '../../components/ItemHistorico';
import api from '../../services/Api';

export function Historico({ navigation }){

    const {user} = useAuth();
    const [agendamentos, setAgendamentos] = useState([]);

    const scrollY = React.useRef(new Animated.Value(0)).current;

    async function agendamentosUbs() {
        try {
            const responseMotorista = await api.get('ubsdetailmotorista/', {
                headers: {
                    'authorization': 'Bearer ' + user.token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            const dataMot = responseMotorista.data[0];

            const responseAgend = await api.get('agendamentoubs/' + dataMot.id, {
                headers: {
                    'authorization': 'Bearer ' + user.token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            const data = responseAgend.data;

            setAgendamentos(data.sort((a,b) => (a.data < b.data ? 1 : b.data < a.data ? -1 : 0)));
        } catch (error) {
            console.error(error);
            Alert.alert(error);
        }
    }

    useEffect( () => {
        agendamentosUbs();
    }, []);


    return (
        <View style={styles.containerList}>

            <Animated.FlatList  
                data={agendamentos}
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
                            170 * index,
                            170 * (index + 2)
                        ],
                        outputRange: [1, 1, 1, 0.5]
                    })

                    return <ItemHistorico data={item.data} hora={item.hora} destino={item.destino} descricao={item.descricao} nome={item.usuario.first_name} status={item.status.status} scale={scale} />
                }}
            />
        </View>
    );

}