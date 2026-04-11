import { useEffect, useState } from "react";
import { useUser } from "../../../context/useUser";
import ModalUser from "./modal/ModalUser";

export default function ProyectosSection() {
    
    const { getUsers, user, deleteUser } = useUser();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleCreate = () => {
        setSelectedUser(null);
        setIsOpen(true);
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsOpen(true);
    };

    async function deleteUserID(x){
        await deleteUser(x.id)
        alert("User eliminado")
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (!user || user.length === 0) {
        return (
            <div className="text-center text-gray-500 mt-10">
                No hay usuarios registrados
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Usuarios del Sistema
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Gestiona la información y roles de los integrantes.
                    </p>
                </div>

                <button
                    onClick={handleCreate}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                    + Nuevo Usuario
                </button>
            </div>

            {/* Tabla */}
            <div className="bg-white rounded-2xl shadow-xs border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="p-4">ID</th>
                                <th className="p-4">Nombre</th>
                                <th className="p-4">Email</th>
                                <th className="p-4 text-center">Estado</th>
                                <th className="p-4 text-right">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {user.map((x, pos) => (
                                <tr key={x.id || pos}>
                                    <td className="p-4">#{x.id}</td>

                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">
                                                {x.name.charAt(0).toUpperCase()}
                                            </div>
                                            {x.name}
                                        </div>
                                    </td>

                                    <td className="p-4">
                                        {x.email}
                                    </td>

                                    <td className="p-4 text-center">
                                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                            Activo
                                        </span>
                                    </td>

                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2">

                                            {/* EDITAR */}
                                            <button
                                                onClick={() => handleEdit(x)}
                                                className="p-2 text-gray-400 hover:text-purple-600"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </button>

                                            {/* ELIMINAR */}
                                            <button onClick={()=>deleteUserID(x)} className="p-2 text-gray-400 hover:text-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>

            {/* MODAL */}
            <ModalUser
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                initialData={selectedUser}
            />
        </div>
    );
}