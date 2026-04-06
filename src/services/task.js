import api from "./api/axios";

export const getTaskRequest  = () => api.get('/task');

export const postTaskRequest  = (datos) => api.post('/task', datos);

export const deleteTaskRequest = (id) => api.delete('/task/'+id);