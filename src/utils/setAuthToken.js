import apiClient from './api-client'

//만약 토큰이 있으면 axios 설정에 추가됨
const setAuthToken = (token) => {
    if(token){
        apiClient.defaults.headers.common["x-auth-token"] = token;
    }else{
        delete apiClient.defaults.headers.common["x-auth-token"];
    }
};

export default setAuthToken