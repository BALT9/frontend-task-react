import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

export default function ComponentLogin() {

    const { register, handleSubmit } = useForm();

    const { login, isAuthenticated } = useAuth();


    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/dashboard");
    }, [isAuthenticated, navigate]);

    const onSubmit = async (data) => {
        const res = await login(data);

        navigate('/dashboard')
        console.log(res);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            {/* Fondo */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="bg-white border border-gray-100 shadow-2xl shadow-purple-100/50 rounded-3xl p-10 w-full max-w-md">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-block p-3 bg-purple-50 rounded-2xl mb-4">
                        <Link to='/'>
                            <h1 className="text-2xl font-black tracking-tighter text-purple-700">
                                Logo<span className="text-gray-900">.</span>
                            </h1>
                        </Link>
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        ¡Bienvenido!
                    </h2>
                    <p className="text-gray-500 mt-2">Gestiona tus tareas con eficiencia</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Email */}
                    <div className="mb-5">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            placeholder="nombre@ejemplo.com"
                            {...register("email")}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-800 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-2 ml-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Contraseña
                            </label>
                            <a href="#" className="text-xs font-bold text-purple-600 hover:text-purple-700">
                                ¿La olvidaste?
                            </a>
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••"
                            {...register("password")}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-800 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 hover:shadow-purple-300 transform transition-all active:scale-[0.98] cursor-pointer"
                    >
                        Ingresar a mi cuenta
                    </button>
                </form>

                <p className="text-[10px] text-center text-gray-400 mt-10 uppercase tracking-widest">
                    © 2026 Codebalt
                </p>

            </div>
        </div>
    );
}