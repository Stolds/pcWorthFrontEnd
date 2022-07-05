import axios from "axios";

function getApi() 
{
    const api = axios.create({
        baseURL: "http://localhost:5001"
    });
    api.interceptors.request.use((config:any) => {
        return config;
    });
    return api;
}

export const suaMae = getApi();