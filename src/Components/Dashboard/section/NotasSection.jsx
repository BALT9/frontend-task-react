export default function NotasSection({ tasks, toggleTask }) {
    return (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Nota 1: Checklist Interactiva */}
            <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:border-purple-200 transition-all flex flex-col">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    Pendientes <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                </h3>
                <ul className="space-y-4 flex-grow">
                    {tasks.map(task => (
                        <li key={task.id} className="flex items-center gap-3 group cursor-pointer" onClick={() => toggleTask(task.id)}>
                            <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${task.completed ? 'bg-purple-600 border-purple-600' : 'border-slate-200 group-hover:border-purple-400'}`}>
                                {task.completed && <span className="text-white text-[10px]">✓</span>}
                            </div>
                            <span className={`text-sm font-medium ${task.completed ? 'text-slate-300 line-through' : 'text-slate-700'}`}>
                                {task.text}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Checklist</span>
                    <span className="text-[10px] font-bold text-purple-600 italic">80% hecho</span>
                </div>
            </div>

            {/* Nota 2: Idea de Branding */}
            <div className="bg-purple-50 border-2 border-transparent rounded-[2.5rem] p-8 shadow-sm hover:border-purple-200 transition-all flex flex-col group">
                <div className="mb-4 text-2xl group-hover:rotate-12 transition-transform inline-block">💡</div>
                <h3 className="font-bold text-lg mb-3">Idea de Branding</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                    "El morado representa creatividad y ambición. Usar variantes lavanda para fondos y morado eléctrico para botones."
                </p>
                <div className="mt-auto">
                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">#Inspiración</span>
                </div>
            </div>

        </div>
    );
}