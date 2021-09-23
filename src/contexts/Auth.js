import React, { useState, useContext, createContext, useEffect } from 'react';
import { Alert } from 'react-native';
import api from '../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext({});

function AuthProvider({ children }) {

    const keyAsyncStorage = "@transportesus:user";

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    async function loginUser(email, senha) {
        
        setIsLoading(true);

        var params = new URLSearchParams();
        params.append('email', email);
        params.append('password', senha);

        try {
            const {data} = await api.post('token/', params);
            const token = data.access;
            const refresh = data.refresh;

            const responseUser = await api.get('usuariodados/', {
                headers: {
                    'authorization': 'Bearer ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            const { id, first_name, email, motorista_ubs, localizacao, estado, cidade, ubs } = responseUser.data[0];

            const userLogged = {
                id : id,
                nome : first_name,
                email : email,
                motorista_ubs : motorista_ubs,
                localizacao : localizacao,
                estado : estado,
                cidade : cidade,
                ubs : ubs,
                token : token,
                refresh : refresh
            }

            setUser(userLogged);
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(userLogged));

            setIsLoading(false);
        } catch {
            setIsLoading(false);
            Alert.alert("Login e/ou senha incorretos!");
        }

    }

    async function refreshToken() {

        if (JSON.stringify(user) != JSON.stringify({})) {
            var success = true;

            try {
                const responseUser = await api.get('usuariodados/', {
                    headers: {
                        'authorization': 'Bearer ' + user.token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                });
                
            } catch {
                success = false;
                console.log('errorToken');
            }

            if (!success){
                try {
                    var params = new URLSearchParams();
                    params.append('refresh', user.refresh);
                    
                    const {data} = await api.post('token/refresh/', params);
                    
                    console.log(data);
    
                    const userLogged = {
                        id : user.id,
                        nome : user.first_name,
                        email : user.email,
                        motorista_ubs : user.motorista_ubs,
                        localizacao : user.localizacao,
                        estado : user.estado,
                        cidade : user.cidade,
                        ubs : user.ubs,
                        token : data.access,
                        refresh : user.refresh
                    } 
    
                    setUser(userLogged);
                    await AsyncStorage.removeItem(keyAsyncStorage);
                    await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(userLogged));
    
                    console.log(user);
    
                } catch {
                    console.log('errorRefresh')
                    logout();
                }
            }
        }
    }

    async function logout(){
        setUser({});
        await AsyncStorage.removeItem(keyAsyncStorage);
    }

    async function loadData() {
        setIsLoading(true);
        const storageUser = await AsyncStorage.getItem(keyAsyncStorage);
        
        if (storageUser) {
            setUser(JSON.parse(storageUser));
        }

        setIsLoading(false);
    }

    useEffect( () => {
        loadData();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading, setIsLoading, loginUser, logout, refreshToken }}>
            { children }
        </AuthContext.Provider>
    );
};

function useAuth() {

    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }