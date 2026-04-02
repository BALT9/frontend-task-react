import api from "./api/axios";

export const loginRequest  = (user) => api.post('/auth/login', user);