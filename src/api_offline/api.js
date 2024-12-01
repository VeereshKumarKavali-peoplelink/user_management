import axios from 'axios';
import Cookies from 'js-cookie'

const api_server = "http://localhost:3000";



export const signUpAPI = (body) => {
    return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',

        };
        let url = api_server + "/auth/register";

        axios.post(url, body, { headers })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};





export const loginAPI = (body) => {
    return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',

        };
        let url = api_server + "/auth/login";

        axios.post(url, body, { headers })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};




export const getUserInfoAPI = (email) => {
    return new Promise((resolve, reject) => {

        const jwtToken = Cookies.get("jwt_token")

        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${jwtToken}`,

        };
        const url = `${api_server}/users/userData?email=${email}`

        axios.get(url, { headers })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};



export const createUserAPI = (body) => {
    return new Promise((resolve, reject) => {
        const url = `${api_server}/users/`
        const jwtToken = Cookies.get("jwt_token")
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${jwtToken}`,

        };
       
        axios.post(url, body,{ headers })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};










