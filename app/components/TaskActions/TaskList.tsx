"use client";
import { Task } from "@/app/api/tasks/route";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import { useState } from "react";
export default function TaskList({ tasks }: { tasks: Task[] }) {

  const [filter, setFilter] = useState<boolean | null>(null);
  const [searchTitle, setSearchTitle] = useState('');
  
  const filteredTasks = tasks
    .filter((task: Task) => {
      // Filtrar por estado (completada/pendiente/todas)
      if (filter !== null && task.completed !== filter) {
        return false;
      }
      // Filtrar por búsqueda de título
      if (searchTitle && !task.title.toLowerCase().includes(searchTitle.toLowerCase())) {
        return false;
      }
      return true;
    });

  const handleFilter = (status: boolean | null) => {
    setFilter(status);
  }
  const handleSearch = (searchTitle: string) => {
    setSearchTitle(searchTitle);
  }

  return (
    <>
      <div className="space-y-3">
        <TaskFilter onFilterChange={handleFilter} currentFilter={filter} onSearch={handleSearch} />
      </div>
      <div className="space-y-3 mt-4">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg text-gray-400">No hay tareas todavía</p>
            <p className="text-sm text-gray-500 mt-2">Crea tu primera tarea para comenzar</p>
          </div>
        ) : (
          filteredTasks.map((task: Task) => (
            <TaskItem key={task.id} task={task} />
          ))
        )}
      </div>
    </>
  );
}