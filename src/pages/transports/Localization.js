import React, {useState, useEffect, useRef} from 'react';
import { View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import config from "../../../config";
import { useAuth } from '../../contexts/Auth';


export function Localization({navigation, route}){
    
    const mapEl = useRef(null);
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);

    const {user} = useAuth();

    const locUser = user.localizacao.split('|');
    const latitudUser = parseFloat(locUser[0]);
    const longitudUser = parseFloat(locUser[1]);

    const loc = useState(route.params ? route.params.split('|') : {});
    const latitud = parseFloat(loc[0][0]);
    const longitud = parseFloat(loc[0][1]);


    async function local(){
        const { status} = await Location.requestForegroundPermissionsAsync();

        if (status === 'granted') {
            // let location = await Location.getLastKnownPositionAsync({accuracy: Location.Accuracy.Balanced,});

            // setOrigin({
            //     latitude: location.coords.latitude,
            //     longitude: location.coords.longitude,
            //     latitudeDelta: 0.00922,
            //     longitudeDelta: 0.00421,

            // });

            setOrigin({
                latitude: latitudUser,
                longitude: longitudUser,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,

            });

            setDestination({
                latitude: latitud,
                longitude: longitud,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,

            });

          } else {
            throw new Error('É necessário autorização');
          }

    }

    useEffect(() =>{
        local();
    },[]);


    return(
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                initialRegion ={origin}
                showUserLocation= {true}
                loadingEnabled = {true}
                ref = {mapEl}
            > 
                {destination && 
                
                    <MapViewDirections
                        lineDashPattern={[0]}
                        origin = {origin}
                        destination = {destination}
                        apikey = {config.google_api}
                        strokeWidth = {3}
                        onReady = {result => {
                                mapEl.current.fitToCoordinates(
                                    result.coordinates,{
                                        edgePadding:{
                                            top:50,
                                            bottom: 50,
                                            left:50,
                                            right:50
                                        }
                                    }
                                )
                            }
                        }
                    
                    />
                }
                
            </MapView>

        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    map:{
        flex: 1,
    }

});