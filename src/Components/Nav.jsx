import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between px-10 py-5 bg-white border-b border-gray-100 shadow-sm">
            {/* Sección del Logo */}
            <div className="flex items-center">
                <h1 className="text-2xl font-black tracking-tighter text-purple-700">
                    Logo<span className="text-gray-900">.</span>
                </h1>
            </div>

            {/* Navegación y Acciones */}
            <div className="flex items-center gap-10">
                {/* Enlaces principales */}
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-500">
                    <Link to="/" className="hover:text-purple-600 transition-colors">Inicio</Link>
                    <Link to="" className="hover:text-purple-600 transition-colors">Sobre Nosotros</Link>
                    <Link to="" className="hover:text-purple-600 transition-colors">Contacto</Link>
                </div>

                {/* Botón de Login Estilo Outline o Sólido */}
                <Link
                    to="/login"
                    className="px-5 py-2.5 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-xl font-bold transition-all duration-200 active:scale-95"
                >
                    Iniciar Sesión
                </Link>
            </div>
        </nav>
    );
}