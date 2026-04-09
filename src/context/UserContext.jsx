import { createContext, useState } from "react";
import { deleteUserRequest, getUserRequest, postUserRequest, updateUserRequest } from "../services/user";

export const UserContext = createContext();

// Provider Task
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getUserRequest();
            console.log(res.data)
            setUser(res.data);
        } catch (err) {
            setError("No se pudieron cargar los usuarios");
        } finally {
            setLoading(false);
        }
    };

    const createUser = async (datos) => {
        setLoading(true);
        setError(null);
        try {
            const res = await postUserRequest(datos);
            setUser((prev) => [...prev, res.data]);
        } catch (err) {
            setError("No se pudo crear el usuario");
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (id) => {
        try {
            await deleteUserRequest(id);
            setUser((prev) => prev.filter(t => t.id !== id)); // 👈 mejora
        } catch (error) {
            setError("No se pudo eliminar el usuario")
        }
    };

    const updateUser = async (id, data) => {
        try {
            const res = await updateUserRequest(id, data);
            console.log(res.data);

            setUser((prev) =>
                prev.map((user) =>
                    user.id === id ? res.data : user
                )
            );
        } catch (error) {
            console.error("Error al actualizar", error);
        }
    };

    return (
        <UserContext.Provider value={{
            user,
            getUsers,
            createUser,
            deleteUser,
            updateUser,
            loading,
            error
        }}>
            {children}
        </UserContext.Provider>
    );
};