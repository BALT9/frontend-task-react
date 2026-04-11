import axios from "axios";

const URL_Backend = 'https://crud-apirest-nest-task.onrender.com';

const api = axios.create({
    baseURL: URL_Backend,
});

// 🔐 Interceptor de REQUEST (ya lo tienes bien)
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// 🚨 Interceptor de RESPONSE (ESTO TE FALTABA)
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            console.log("Token inválido o expirado");

            // 🔥 limpiar sesión
            localStorage.removeItem("token");

            // opcional: limpiar header global
            delete api.defaults.headers.common['Authorization'];

            // 🔁 redirigir al login
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default api;