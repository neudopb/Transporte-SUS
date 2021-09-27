import React, {useState, useEffect, useRef} from 'react';
import { View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapViewDirections from 'react-native-maps-directions';
import config from "../../../config"

export function Localization(){

    const mapEl = useRef(null);
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);

    async function local(){
        const { status} = await Location.requestForegroundPermissionsAsync();

        if (status === 'granted') {
            let location = await Location.getLastKnownPositionAsync({accuracy: Location.Accuracy.Balanced,});
            console.log(location);
            console.log("aquiiiiiii");
            console.log(location.coords.latitude);
            console.log(location.coords.longitude);

            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,

            });

            setDestination({
                latitude: -6.400637,
                longitude: -38.857329,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,

            });

            console.log("Destination");
            console.log(destination);
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
                            console.log(result);
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