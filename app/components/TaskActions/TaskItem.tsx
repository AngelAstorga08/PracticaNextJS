"use client";

import { useRouter } from "next/navigation";

export default function TaskItem({ task }: { task: any }) {
    const router = useRouter();
    const handleClick = (id: string) => {
        router.push(`/tasks?id=${task.id}`);
    };
    return (
        <div
            key={task.id}
            className="border-2 border-zinc-700 rounded-xl p-5 bg-zinc-800 hover:bg-zinc-750 hover:border-zinc-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(148,163,184,0.2)]"
            onClick={() => handleClick(task.id)}
        >
            <div className="flex items-center gap-4">
                <input
                    type="checkbox"
                    checked={task.completed}
                    readOnly
                    className="w-5 h-5 rounded border-2 border-slate-500 bg-zinc-700 checked:bg-slate-500 cursor-pointer"
                />
                <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                    {task.title}
                </span>
            </div>
        </div>
    );
}