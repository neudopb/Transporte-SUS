import React from 'react';
import { RoutesAccounts } from './RoutesAccounts';
import { RoutesUsers } from './RoutesUsers';
import { RoutesTransports } from './RoutesTransports';
import { useAuth } from '../contexts/Auth';

export function RoutesMain() {

    const {user} = useAuth();

    if (user.nome && user.motorista_ubs) {
        return <RoutesTransports />
    } else if(user.nome && !user.motorista_ubs) {
        return <RoutesUsers />
    } else {
        return <RoutesAccounts />
    }
}