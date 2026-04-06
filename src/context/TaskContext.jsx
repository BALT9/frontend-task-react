import { createContext, useState } from "react";
import { deleteTaskRequest, getTaskRequest, postTaskRequest } from "../services/task";

export const TaskContext = createContext();

// Provider Task
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getTasks = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getTaskRequest();
            setTasks(res.data);
        } catch (err) {
            setError("No se pudieron cargar las tareas");
        } finally {
            setLoading(false);
        }
    };

    const createTask = async (datos) => {
        setLoading(true);
        setError(null);
        try {
            const res = await postTaskRequest(datos);
            setTasks((prev) => [...prev, res.data]);
        } catch (err) {
            setError("No se pudo crear la tarea");
        } finally {
            setLoading(false);
        }
    };

    const deleteTask = async (id) => {
        try {
            await deleteTaskRequest(id);
            setTasks((prev) => prev.filter(t => t.id !== id)); // 👈 mejora
        } catch (error) {
            setError("No se pudo eliminar la tarea")
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, getTasks, createTask, deleteTask, loading, error }}>
            {children}
        </TaskContext.Provider>
    );
};