import { createContext, useContext, useState } from "react";
import { getTaskRequest, postTaskRequest } from "../services/task";

const TaskContext = createContext();

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTask debe estar dentro del TaskProvider");
    return context;
};

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
            console.log(res)
            console.log("Tareas obtenidas:", res.data);
            setTasks(res.data);
        } catch (err) {
            console.error("Error al pedir tareas:", err);
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
            console.log("Tarea creada:", res.data);
            setTasks((prev) => [...prev, res.data]); // Actualiza automáticamente el state
        } catch (err) {
            console.error("Error al crear tarea:", err);
            setError("No se pudo crear la tarea");
        } finally {
            setLoading(false);
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, getTasks, createTask, loading, error }}>
            {children}
        </TaskContext.Provider>
    );
};