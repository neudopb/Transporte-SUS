import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apitransportesus.herokuapp.com/'
});

export default api;