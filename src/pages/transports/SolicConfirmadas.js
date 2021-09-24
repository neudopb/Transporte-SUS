import React, {useState, useEffect} from 'react';
import { View, Alert, FlatList, Animated } from 'react-native';
import styles from '../../styles/StyleUsers';
import { useAuth } from '../../contexts/Auth';
import { ItemConfirm } from '../../components/ItemConfirm';
import api from '../../services/Api';
import moment from 'moment';

export function SolicConfirmadas({ navigation }){

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

            const today = moment().format('YYYY-MM-DD');

            setAgendamentos(
                data.filter(item => {
                    if(item.status.status === 'Confirmado' && item.data >= today ) {
                        return true;
                    } else {
                        return false;
                    }
                })
            );

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
                            170 * index,
                            170 * (index + 2)
                        ],
                        outputRange: [1, 1, 1, 0.5]
                    })

                    return <ItemConfirm data={item.data} hora={item.hora} endereco={item.minha_localizacao} destino={item.destino} descricao={item.descricao} nome={item.usuario.first_name} scale={scale} />
                }}
            />
        </View>
    );
};