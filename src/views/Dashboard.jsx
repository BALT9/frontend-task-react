import { useState } from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import NotasSection from '../Components/Dashboard/section/NotasSection';
import ProyectosSection from '../Components/Dashboard/section/ProyectosSection';
import ModalTask from '../Components/Dashboard/section/modal/ModalTask';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('notas');
    const [openModal, setOpenModal] = useState(false);

    // Función que se llama al enviar el formulario del modal
    const handleAddTask = (newTask) => {
        console.log("Datos del formulario:", newTask);
        // Aquí puedes enviar a tu API o actualizar tu context
    };

    return (
        <div className="min-h-screen bg-[#FBFBFF] flex font-sans text-slate-900">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="flex-grow p-6 md:p-12 overflow-y-auto">
                <header className="max-w-5xl mx-auto mb-10 flex justify-between items-center">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Mi Espacio</h2>
                        <p className="text-slate-400 text-sm font-medium">Gestiona tus ideas y tareas diarias.</p>
                    </div>

                    {/* Botón para abrir modal */}
                    <button
                        onClick={() => setOpenModal(true)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-purple-100 transition-all active:scale-95 flex items-center gap-2"
                    >
                        <span className="text-xl">+</span>
                        <span className="hidden sm:inline">Nueva Nota</span>
                    </button>
                </header>

                {activeTab === 'notas' && <NotasSection />}

                {activeTab === 'pro' && <ProyectosSection />}

                {/* Modal para crear nueva nota */}
                <ModalTask
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
                    onSubmit={handleAddTask} // recibe { name, description, active } desde React Hook Form
                />
            </main>
        </div>
    );
}