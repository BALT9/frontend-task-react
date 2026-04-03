import { createContext, useContext, useEffect, useState } from "react";

import { getTaskRequest } from "../services/task";

const TaskContext = createContext();

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error('useTask debe estar dentro del contexto');
    return context;
}

export const TaskProvider = ({ children }) => {

    const [task, setTask] = useState([]);

    useEffect(() => {
        getTask();
    }, [])

    const getTask = async () => {
        try {
            const res = await getTaskRequest()
            console.log(res.data)
            setTask(res.data)

        } catch (error) {
            console.log("Error al pedir tareas")
        }
    }

    return (
        <TaskContext.Provider value={{
           task,
           getTask
        }}>
            {children}
        </TaskContext.Provider>
    )

}