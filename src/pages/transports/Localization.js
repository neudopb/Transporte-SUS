import React, {useState, useEffect, useRef} from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import config from "../../../config";

export function Localization({navigation, route}){
    
    const mapEl = useRef(null);
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);

    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState('');

    const loc = useState(route.params ? route.params.split('|') : {});
    const latitud = parseFloat(loc[0][0]);
    const longitud = parseFloat(loc[0][1]);

    async function checkIfLocationEnabled() {
        let enabled = await Location.hasServicesEnabledAsync();

        if(!enabled) {
            Alert.alert(
                'O serviço de localização está desativado',
                'Por favor, ative para continuar',
                [{text: 'OK'}],
                {cancelable: false}
            );
        } else {
            setLocationServiceEnabled(enabled);
        }
    };

    async function getCurrentLocation(){
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status === 'granted') {
            let { coords } = await Location.getLastKnownPositionAsync({accuracy: Location.Accuracy.Balanced,});
            
            if(coords) {

                const { latitude, longitude } = coords;

                setOrigin({
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421,
    
                });

                setDestination({
                    latitude: latitud,
                    longitude: longitud,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421,
    
                });
    
                let response = await Location.reverseGeocodeAsync({
                    latitude, 
                    longitude
                });


                for (let item of response) {
                    let address = `${item.street}, ${item.district} - ${item.subregion}`;

                    setDisplayCurrentAddress(address);
                }
            }

          } else {
            Alert.alert(
                'Permissão Negada',
                'Permita que o aplicativo use o serviço de localização',
                [{text: 'OK'}],
                {cancelable: false}
            );
          }

    }

    useEffect(() =>{
        checkIfLocationEnabled();
        getCurrentLocation();
    },[]);


    return(
        <View style={styles.container}>
            <View style={styles.end}>
                <Text style={styles.txtEnd}>Endereço: {displayCurrentAddress}</Text>
            </View>
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
    },
    end: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtEnd: {
        fontSize: 16,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },

});