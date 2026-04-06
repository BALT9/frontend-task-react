import { useEffect, useState } from "react";
import { useTask } from "../../../context/useTask";
import ModalTask from "./modal/ModalTask";

export default function NotasSection({ toggleTask }) {

    const { tasks, getTasks, deleteTask, updateTask } = useTask();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        getTasks();
    }, []);

    async function deleteTaskById(id) {
        try {
            await deleteTask(id);
            alert("Tarea eliminada");
        } catch (error) {
            console.log(error);
        }
    }

    function handleEdit(task) {
        setSelectedTask(task);
        setIsOpen(true);
    }

    async function handleSubmit(data) {
        try {
            if (selectedTask) {
                await updateTask(selectedTask.id, data);
                alert(`Tarea editada`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (tasks.length === 0) {
        return (
            <div className="text-center text-gray-500 mt-10">
                No hay tareas disponibles
            </div>
        );
    }

    return (
        <>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

                {tasks.map((x) => (
                    <div
                        key={x.id}
                        className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md transition-all border border-gray-100 flex flex-col justify-between"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-lg text-gray-800">
                                {x.name}
                            </h3>
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-6">
                            {x.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                            <label className="text-sm text-gray-500">
                                Activo
                            </label>

                            <input
                                type="checkbox"
                                className="w-5 h-5 accent-purple-600 cursor-pointer"
                                checked={x.isActive}
                                onChange={() => toggleTask?.(x.id)}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-2 mt-6">
                            <button
                                onClick={() => handleEdit(x)}
                                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold shadow-md hover:scale-[1.03] transition cursor-pointer"
                            >
                                Editar
                            </button>

                            <button
                                onClick={() => deleteTaskById(x.id)}
                                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-md hover:scale-[1.03] transition cursor-pointer"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            <ModalTask
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                    setSelectedTask(null);
                }}
                onSubmit={handleSubmit}
                initialData={selectedTask}
            />
        </>
    );
}