export default function Hero() {
    return (
        <header className="relative bg-white pt-6 sm:pt-10 md:pt-10 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-10 left-1/4 w-40 sm:w-72 h-40 sm:h-72 bg-purple-400 rounded-full blur-[100px] sm:blur-[120px]"></div>
                <div className="absolute bottom-10 right-1/4 w-40 sm:w-72 h-40 sm:h-72 bg-indigo-400 rounded-full blur-[100px] sm:blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl lg:max-w-4xl mx-auto">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-50 border border-purple-100 mb-6 sm:mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-purple-700 tracking-wide uppercase">
                            Organización Inteligente
                        </span>
                    </div>

                    {/* Título */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 sm:mb-8 leading-tight">
                        Gestionar tus tareas ahora <br className="hidden sm:block" />
                        <span className="text-purple-600">
                            más simple que nunca.
                        </span>
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-xl sm:max-w-2xl mx-auto">
                        La herramienta definitiva para equipos que buscan productividad sin complicaciones.
                        Planifica, ejecuta y celebra tus logros en un solo lugar.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                        <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-bold rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl shadow-purple-100 transition-all transform hover:-translate-y-1 active:scale-95">
                            Crear mi primera tarea
                        </button>
                        <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white border-2 border-gray-100 text-gray-700 text-sm sm:text-base font-bold rounded-xl sm:rounded-2xl hover:border-purple-200 hover:bg-gray-50 transition-all active:scale-95">
                            Ver Demo
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
}