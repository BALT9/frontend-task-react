import SidebarItem from './SidebarItem';

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-20 lg:w-64 bg-white border-r border-slate-100 flex flex-col items-center lg:items-start py-8 px-4 lg:px-6 sticky top-0 h-screen transition-all">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
          <span className="text-white font-black text-xl italic">T</span>
        </div>
        <h1 className="text-xl font-black tracking-tight hidden lg:block">Task<span className="text-purple-600">ly</span></h1>
      </div>

      <nav className="flex-grow w-full space-y-2">
        <SidebarItem icon="📝" label="Mis Notas" active={activeTab === 'notas'} onClick={() => setActiveTab('notas')} />
        {/* <SidebarItem icon="📅" label="Calendario" active={activeTab === 'cal'} onClick={() => setActiveTab('cal')} /> */}
        <SidebarItem icon="📁" label="Proyectos" active={activeTab === 'pro'} onClick={() => setActiveTab('pro')} />
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-50 w-full">
        <div className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600 shrink-0">W</div>
          <div className="hidden lg:block overflow-hidden">
            <p className="text-xs font-bold truncate">Willy Admin</p>
            <p className="text-[10px] text-slate-400 font-medium italic">Plan Free</p>
          </div>
        </div>
      </div>
    </aside>
  );
}