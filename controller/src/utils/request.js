/* eslint-disable no-console */
import axios from "axios";
// axios.defaults.withCredentials = true;
export const toolsbox = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // baseURL: 'http://localhost:80',
    // timeout: 5000
});
toolsbox.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

toolsbox.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.error(error);
        return Promise.reject();
    }
);
