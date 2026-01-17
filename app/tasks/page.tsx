
import TaskForm from '../components/TaskActions/TaskForm';
import { Task } from "@/app/api/tasks/route";
import TaskList from '../components/TaskActions/TaskList';

export default async function TasksPage() {
  const res = await fetch(`http://localhost:3000/api/tasks`);
  const tasks: Task[] = await res.json();

  return (
    <div className="flex items-start justify-center pt-24 px-4 min-h-screen">
      <main className="max-w-xl w-full">
        <div className="border-2 border-zinc-700 rounded-2xl p-8 md:p-10 shadow-2xl bg-zinc-900">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-slate-400 via-gray-100 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_0_4px_rgba(255,255,255,0.25)]">
            Mis Tareas
          </h1>
          <p className="text-lg text-center bg-gradient-to-r from-slate-400 via-gray-200 to-slate-400 bg-clip-text text-transparent mb-7 drop-shadow-[0_0_3px_rgba(255,255,255,0.2)]">
            Organiza tu día de manera eficiente
          </p>

          <TaskList tasks={tasks} />

          <div className="mt-7 flex justify-center">
            <TaskForm />
          </div>
        </div>
      </main>
    </div>
  );
}