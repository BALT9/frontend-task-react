import { useEffect } from "react";
import { useUser } from "../../../context/useUser"

export default function ProyectosSection() {

    const { getUsers, user } = useUser();

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <div className="text-center text-purple-600 font-bold">Aquí van los Usuarios</div>
            <div>
                {
                    user.map((x, pos) => (
                        <div key={pos}>
                            <h2>{x.id}</h2>
                            <h2>{x.name}</h2>
                            <p>{x.email}</p>

                        </div>
                    ))
                }
            </div>
        </>
    )
}