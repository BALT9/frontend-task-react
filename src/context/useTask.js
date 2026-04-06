import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTask debe estar dentro del TaskProvider");
    return context;
};