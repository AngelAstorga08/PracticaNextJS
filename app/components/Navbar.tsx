import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur shadow-lg border-b-2 border-zinc-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-slate-400 via-gray-100 to-slate-400 bg-clip-text text-transparent hover:from-slate-300 hover:via-white hover:to-slate-300 transition-all drop-shadow-[0_0_3px_rgba(255,255,255,0.2)]">
            ToDo App
          </Link>
          <Link
            href="/tasks"
            className="px-6 h-full flex items-center bg-zinc-800 bg-gradient-to-r from-slate-400 via-gray-100 to-slate-400 bg-clip-text text-transparent text-lg font-semibold hover:bg-slate-600 hover:shadow-[0_0_15px_rgba(148,163,184,0.4)] transition-all duration-300 border-l-2 border-r-2 border-gray-400 hover:border-slate-300 drop-shadow-[0_0_2px_rgba(255,255,255,0.15)]"
          >
            Ver Tareas
          </Link>
        </div>
      </div>
    </nav>
  );
}
