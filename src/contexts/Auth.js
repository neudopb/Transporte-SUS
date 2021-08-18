import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const keyAsyncStorage = "@transportesus:login";

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function loadData() {
        const storageUser = await AsyncStorage.getItem(keyAsyncStorage);

        if (storageUser) {
            setUser(JSON.parse(storageUser));
            setLoading(false);
        }

        setLoading(false);
    }

    useEffect( () => {
        loadData();
    }, []);
}