import api from "./api/axios";

export const getUserRequest = () => api.get('/user');

export const postUserRequest = (datos) => api.post('/user', datos);

export const updateUserRequest = (id, datos) =>
    api.patch('/user/' + id, datos);

export const deleteUserRequest = (id) => api.delete('/user/' + id);