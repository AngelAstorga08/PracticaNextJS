"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) return;

    setIsLoading(true);

    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title.trim() }),
      });

      if (res.ok) {
        setTitle('');
        router.refresh(); // Refresca los datos del servidor
      }
    } catch (error) {
      console.error('Error al crear la tarea:', error);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe una nueva tarea"
          disabled={isLoading}
          className="flex-1 px-4 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isLoading || !title.trim()}
          className="px-8 py-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-semibold rounded-xl border-2 border-slate-500 hover:border-slate-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(148,163,184,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-slate-600 disabled:hover:to-slate-700"
        >
          {isLoading ? 'Agregando...' : '+ Agregar'}
        </button>
      </div>
    </form>
  );
}
