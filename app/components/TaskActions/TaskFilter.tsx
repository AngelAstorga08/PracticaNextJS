"use client";
import { useState } from "react";

export default function TaskFilter({ ChangeFilter, filterSelected }: { ChangeFilter: (status: boolean | null) => void, filterSelected: boolean | null }) {
    const [isFiltering, setIsFiltering] = useState(false);
    
    const handleFilter = (status: boolean | null) => {
        setIsFiltering(true);
        ChangeFilter(status);
        setIsFiltering(false);
    };

    const buttonBaseClass = "px-6 py-2.5 font-medium rounded-lg border-2 transition-all duration-300 flex items-center justify-center";
    const activeClass = "bg-slate-600 border-slate-500 text-white shadow-[0_0_15px_rgba(148,163,184,0.3)]";
    const inactiveClass = "bg-zinc-800 border-zinc-700 text-gray-400 hover:bg-zinc-750 hover:border-zinc-600 hover:text-gray-300";
    
    return (
        <div className="flex flex-wrap gap-3 justify-center">
            <button 
                disabled={isFiltering} 
                onClick={() => handleFilter(null)}
                className={`${buttonBaseClass} ${filterSelected === null ? activeClass : inactiveClass} disabled:opacity-50 disabled:cursor-not-allowed w-32`}
            >
                Todas
            </button>
            <button 
                disabled={isFiltering} 
                onClick={() => handleFilter(false)}
                className={`${buttonBaseClass} ${filterSelected === false ? activeClass : inactiveClass} disabled:opacity-50 disabled:cursor-not-allowed w-32`}
            >
                Pendientes
            </button>
            <button 
                disabled={isFiltering} 
                onClick={() => handleFilter(true)}
                className={`${buttonBaseClass} ${filterSelected === true ? activeClass : inactiveClass} disabled:opacity-50 disabled:cursor-not-allowed w-32`}
            >            
                Completadas
            </button>
        </div>
    );
}