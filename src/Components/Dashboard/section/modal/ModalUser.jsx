import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../../../../context/useUser";

export default function ModalUser({ isOpen, onClose, initialData }) {

    const { createUser } = useUser();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    // Reset cuando cambia initialData o se abre
    useEffect(() => {
        reset({
            name: initialData?.name || "",
            email: initialData?.email || "",
            password: ""
        });
    }, [initialData, reset, isOpen]);

    if (!isOpen) return null;

    const onSubmit = async(data) => {
        console.log("Datos del usuario:", data);
        // const res = await 
        createUser(data);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">

                {/* Cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
                >
                    ✖
                </button>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {initialData ? "Editar usuario" : "Nuevo usuario"}
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    {/* Name */}
                    <input
                        type="text"
                        placeholder="Nombre"
                        {...register("name", { required: "El nombre es obligatorio" })}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                            errors.name ? "border-red-500" : "border-gray-200"
                        }`}
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">{errors.name.message}</span>
                    )}

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        {...register("email", {
                            required: "El email es obligatorio",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Email inválido"
                            }
                        })}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                            errors.email ? "border-red-500" : "border-gray-200"
                        }`}
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">{errors.email.message}</span>
                    )}

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Contraseña"
                        {...register("password", {
                            required: "La contraseña es obligatoria",
                            minLength: {
                                value: 6,
                                message: "Mínimo 6 caracteres"
                            }
                        })}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                            errors.password ? "border-red-500" : "border-gray-200"
                        }`}
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm">{errors.password.message}</span>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                        <button
                            type="submit"
                            className="flex-1 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                        >
                            {initialData ? "Actualizar" : "Guardar"}
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-2 rounded-lg bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}