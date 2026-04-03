import api from "./api/axios";

export const getTaskRequest  = () => api.get('/task');