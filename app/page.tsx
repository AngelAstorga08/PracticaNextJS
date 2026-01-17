export default function Home() {
    return (
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
            <main className="max-w-5xl mx-auto p-8 text-center">
                <div className="border-2 border-zinc-700 rounded-3xl p-20 shadow-2xl bg-zinc-900">
                    <h1 className="text-8xl font-bold mb-8 bg-gradient-to-r from-slate-400 via-gray-100 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_0_4px_rgba(255,255,255,0.25)]">
                        Practica de Next.js Fullstack
                    </h1>
                    <p className="text-3xl bg-gradient-to-r from-slate-400 via-gray-200 to-slate-400 bg-clip-text text-transparent mb-10 drop-shadow-[0_0_3px_rgba(255,255,255,0.2)]">
                        Estoy aprendiendo Next.js construyendo una ToDo App
                    </p>
                </div>
            </main>
        </div>
    );
}