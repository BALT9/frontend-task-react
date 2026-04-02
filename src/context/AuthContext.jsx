import { createContext, useContext, useState } from "react";
import { loginRequest } from "../services/auth";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth debe estar dentro del contexto');
    return context;
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = async (userData) => {
        try {
            const res = await loginRequest(userData);
            console.log(res);
        } catch (error) {
            console.error("Error al iniciar sesión:", error.response?.data || error.message);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )

}