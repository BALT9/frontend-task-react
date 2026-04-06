import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ModalTask({ isOpen, onClose, onSubmit, initialData }) {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: initialData?.name || "",
            description: initialData?.description || "",
            active: initialData?.active || false
        }
    });

    // Reset del formulario al abrir/cerrar
    useEffect(() => {
        reset({
            name: initialData?.name || "",
            description: initialData?.description || "",
            active: initialData?.active || false
        });
    }, [initialData, reset, isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">

            {/* Modal */}
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative animate-fadeIn">

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
                >
                    ✖
                </button>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {initialData ? "Editar tarea" : "Nueva tarea"}
                </h2>

                {/* Form */}
                <form
                    onSubmit={handleSubmit((data) => {
                        onSubmit(data);
                        onClose();
                    })}
                    className="flex flex-col gap-4"
                >
                    {/* Name */}
                    <input
                        type="text"
                        placeholder="Nombre de la tarea"
                        {...register("name", { required: "El nombre es obligatorio" })}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.name ? "border-red-500" : "border-gray-200"
                            }`}
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">{errors.name.message}</span>
                    )}

                    {/* Description */}
                    <textarea
                        placeholder="Descripción"
                        {...register("description")}
                        rows={3}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    {/* Active */}
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            {...register("isActive")}
                            className="w-4 h-4 accent-purple-600"
                        />
                        Activa
                    </label>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                        <button
                            type="submit"
                            className="flex-1 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                        >
                            Guardar
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