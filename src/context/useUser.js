import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser debe estar dentro del UserProvider");
    return context;
};