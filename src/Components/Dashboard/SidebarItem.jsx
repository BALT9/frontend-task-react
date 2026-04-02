export default function SidebarItem({ icon, label, active, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 group ${
        active 
        ? 'bg-purple-600 text-white shadow-lg shadow-purple-100 scale-105' 
        : 'text-slate-400 hover:bg-purple-50 hover:text-purple-600'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className={`font-bold text-sm hidden lg:block ${active ? 'text-white' : 'text-slate-500'}`}>
        {label}
      </span>
    </div>
  );
}