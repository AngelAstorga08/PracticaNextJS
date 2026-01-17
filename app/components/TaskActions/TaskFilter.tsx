"use client";

interface TaskFilterProps {
    onFilterChange: (status: boolean | null) => void;
    currentFilter: boolean | null;
    onSearch: (searchTitle: string) => void;
}

const FILTERS = [
    { label: 'Todas', value: null },
    { label: 'Pendientes', value: false },
    { label: 'Completadas', value: true }
] as const;

export default function TaskFilter({ onFilterChange, currentFilter, onSearch }: TaskFilterProps) {
    const getButtonClass = (isActive: boolean) => {
        const base = "px-6 py-2.5 font-medium rounded-lg border-2 transition-all duration-300 flex items-center justify-center w-32";
        const active = "bg-slate-600 border-slate-500 text-white shadow-[0_0_15px_rgba(148,163,184,0.3)]";
        const inactive = "bg-zinc-800 border-zinc-700 text-gray-400 hover:bg-zinc-750 hover:border-zinc-600 hover:text-gray-300";

        return `${base} ${isActive ? active : inactive}`;
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-center">
                <input 
                    type="text" 
                    placeholder="Buscar tarea..." 
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full max-w-md px-4 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 transition-all duration-300"
                />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
                {FILTERS.map(({ label, value }) => (
                    <button
                        key={label}
                        onClick={() => onFilterChange(value)}
                        className={getButtonClass(currentFilter === value)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}