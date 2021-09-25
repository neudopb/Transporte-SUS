import React, {useState, useEffect, useRef} from 'react';
import { View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapViewDirections from 'react-native-maps-directions';
import config from "../../../config"

export function Localization(){

    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);

    async function local(){
        const { status} = await Location.requestForegroundPermissionsAsync();
        console.log(status);
        if (status === 'granted') {
            let location = await Location.getLastKnownPositionAsync({accuracy: 6,});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,

            })

            setDestination({
                latitude: -6.2791652,
                longitude: -38.6115984,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,

            })
          } else {
            throw new Error('É necessário autorização');
          }

    }

    useEffect(() =>{
        local();
    },[]);


    return(
        <View style={styles.container}>
            {/* <MapView 
                style={styles.map}
                initialRegion ={origin}
                showUserLocation= {true}
                loadingEnabled = {true}
            >    
            </MapView> */}

            <MapView 
                style={styles.map}
                initialRegion ={origin}
                showUserLocation= {true}
                loadingEnabled = {true}
            > 
                {/* {destination && 
                
                    <MapViewDirections
                        origin = {origin}
                        destination = {destination}
                        apikey = {config.google_api}
                        strokeWidth = {3}
                        onReady = {result => {
                            console.log(result);
                        }}
                    
                    />
                } */}
                
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