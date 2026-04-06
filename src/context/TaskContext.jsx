import { createContext, useContext, useEffect, useState } from "react";

import { getTaskRequest, postTaskRequest } from "../services/task";

const TaskContext = createContext();

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error('useTask debe estar dentro del contexto');
    return context;
}

export const TaskProvider = ({ children }) => {

    const [task, setTask] = useState([]);

    // useEffect(() => {
    //     getTask();
    // }, [])

    const getTask = async () => {
        try {
            const res = await getTaskRequest()
            console.log(res.data)
            setTask(res.data)

        } catch (error) {
            console.log("Error al pedir tareas")
        }
    }

    const createTask = async (datos) => {
        try {
            const res = await postTaskRequest(datos);
            console.log(res.data);

        } catch (error) {
            console.log("Error al crear tarea", error)
        }
    }

    return (
        <TaskContext.Provider value={{
            task,
            getTask,
            createTask
        }}>
            {children}
        </TaskContext.Provider>
    )

}