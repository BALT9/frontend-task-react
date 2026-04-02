import axios from "axios";

const URL_Backend = 'http://localhost:3000/'

const api = axios.create({
    baseURL: URL_Backend,
});

export default api;