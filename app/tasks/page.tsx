
import TaskForm from '../components/TaskActions/TaskForm';
import TaskItem from '../components/TaskActions/TaskItem';
import TaskFilter from '../components/TaskActions/TaskFilter';
import { Task } from "@/app/api/tasks/route";
import TaskList from '../components/TaskActions/TaskList';

export default async function TasksPage() {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/tasks`);
  const tasks: Task[] = await res.json();

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <main className="max-w-4xl w-full">
        <div className="border-2 border-zinc-700 rounded-3xl p-8 md:p-12 shadow-2xl bg-zinc-900">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-slate-400 via-gray-100 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_0_4px_rgba(255,255,255,0.25)]">
            Mis Tareas
          </h1>
          <p className="text-xl text-center bg-gradient-to-r from-slate-400 via-gray-200 to-slate-400 bg-clip-text text-transparent mb-8 drop-shadow-[0_0_3px_rgba(255,255,255,0.2)]">
            Organiza tu día de manera eficiente
          </p>

          <TaskList tasks={tasks} />


          <div className="mt-8 flex justify-center">
            <TaskForm />
          </div>
        </div>
      </main>
    </div>
  );
}