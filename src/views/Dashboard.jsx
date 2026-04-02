import { useState } from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import NotasSection from '../Components/Dashboard/section/NotasSection';
// import SidebarItem from '../Components/Dashboard/SidebarItem';
// import CalendarioSection from './CalendarioSection';
import ProyectosSection from '../Components/Dashboard/section/ProyectosSection';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('notas');
    const [tasks, setTasks] = useState([
        { id: 1, text: "Diseñar interfaz del Login", completed: true, tag: "UI" },
        { id: 2, text: "Configurar API de autenticación", completed: false, tag: "Dev" },
        { id: 3, text: "Revisar paleta de morados", completed: false, tag: "Design" },
    ]);

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
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
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-purple-100 transition-all active:scale-95 flex items-center gap-2">
                        <span className="text-xl">+</span> <span className="hidden sm:inline">Nueva Nota</span>
                    </button>
                </header>

                {activeTab === 'notas' && <NotasSection tasks={tasks} toggleTask={toggleTask} />}
                {/* {activeTab === 'cal' && <CalendarioSection />} */}
                {activeTab === 'pro' && <ProyectosSection />}
            </main>
        </div>
    );
}