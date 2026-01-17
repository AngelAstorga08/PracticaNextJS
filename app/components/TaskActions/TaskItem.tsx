"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Task } from "@/app/api/tasks/route";
import TaskDelete from "./TaskDelete";

export default function TaskItem({ task }: { task: Task }) {
    const router = useRouter();
    const [isCompleted, setIsCompleted] = useState(task.completed);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleCheckboxChange = async () => {

        const newCompletedState = !isCompleted;
        setIsCompleted(newCompletedState);
        setIsUpdating(true);

        try {
            const res = await fetch('/api/tasks', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: task.id,
                    title: task.title,
                    completed: newCompletedState,
                }),
            });

            if (res.ok) {
                router.refresh();
            } else {
                setIsCompleted(!newCompletedState);
            }
        } catch (error) {
            console.error('Error al actualizar la tarea:', error);
            setIsCompleted(!newCompletedState);
        } finally {
            setIsUpdating(false);
        }
    };


    return (
        <div
            className="border-2 border-zinc-700 rounded-xl p-5 bg-zinc-800 hover:bg-zinc-750 hover:border-zinc-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(148,163,184,0.2)] max-w-md mx-auto"
        >
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={handleCheckboxChange}
                        disabled={isUpdating}
                        className="w-5 h-5 rounded border-2 border-slate-500 bg-zinc-700 checked:bg-slate-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    />
                    <span className={`text-lg transition-all ${isCompleted ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                        {task.title}
                    </span>
                </div>
                <TaskDelete id={task.id} />
            </div>
        </div>
    );
}