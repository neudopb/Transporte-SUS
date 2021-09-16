import React, { useState, useContext, createContext, useEffect } from 'react';
import { Alert } from 'react-native';
import api from '../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext({});

function AuthProvider({ children }) {

    const keyAsyncStorage = "@transportesus:user";

    const [user, setUser] = useState({});
    const [userLoading, setUserLoading] = useState(true);

    async function LoginUser(email, senha) {

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
            
        } catch {
            Alert.alert("Erro na Autenticação.");
        }

    }

    async function logout(){
        setUser();
        await AsyncStorage.removeItem(keyAsyncStorage);
    }

    async function loadData() {
        const storageUser = await AsyncStorage.getItem(keyAsyncStorage);

        if (storageUser) {
            setUser(JSON.parse(storageUser));
            setUserLoading(false);
        }

        setUserLoading(false);
    }

    useEffect( () => {
        loadData();
    }, []);

    return (
        <AuthContext.Provider value={{ user, userLoading, LoginUser, logout }}>
            { children }
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }