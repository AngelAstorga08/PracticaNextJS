"use client";
import { Task } from "@/app/api/tasks/route";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import { useState } from "react";
export default function TaskList({ tasks }: { tasks: Task[] }) {

  const [filter, setFilter] = useState<boolean | null>(null);
  const filteredTasks = filter === null 
    ? tasks  
    : tasks.filter((task: Task) => task.completed === filter);

  const handleFilter = (status: boolean | null) => {
    setFilter(status);
  }

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="border-2 border-zinc-700 rounded-3xl p-8 md:p-12 shadow-2xl bg-zinc-900">

        <div className="space-y-4 mt-8">
          <TaskFilter ChangeFilter={handleFilter} filterSelected={filter} />
        </div>
        <div className="space-y-4 mt-8">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">No hay tareas todavía</p>
              <p className="text-sm text-gray-500 mt-2">Crea tu primera tarea para comenzar</p>
            </div>
          ) : (
            filteredTasks.map((task: Task) => (
              <TaskItem key={task.id} task={task} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}