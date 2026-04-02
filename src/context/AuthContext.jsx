import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest } from "../services/auth";
import { setAuthHeader } from "../services/authHeader";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth debe estar dentro del contexto');
    return context;
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    setAuthHeader(token);
                    setIsAuthenticated(true)
                } catch (error) {
                    localStorage.removeItem('token');
                    setIsAuthenticated(false)
                }
            } else {
                setIsAuthenticated(false)
            }

            setLoading(false);
        }

        checkAuth()

    }, [])

    const login = async (userData) => {
        try {
            const res = await loginRequest(userData);
            const token = res.data.access_token;

            localStorage.setItem('token', token);

            console.log(res.data);
            console.log("Token: ", token);

            setAuthHeader(token);

            setIsAuthenticated(true);
            setErrors([]);


        } catch (error) {
            setIsAuthenticated(false);
            console.error("Error al iniciar sesión:", error.response?.data || error.message);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            loading,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )

}