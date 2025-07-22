import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstant = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxios = () => {

    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstant.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error Caught in iterceptor', error);

            if(error.status === 401 || error.status === 403) {
                console.log('User is invalid, Latti die ber kore de');
                logOut()
                .then(() => {
                    console.log('Logged Out.');
                    navigate('/login')
                })
                .catch(error => console.log(error))
            }

            return Promise.reject(error)
        })
    }, [ logOut, navigate])

    return axiosInstant;
};

export default useAxios;