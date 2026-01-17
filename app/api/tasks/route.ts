export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [
  { id: crypto.randomUUID(), title: 'Aprender Next.js', completed: false },
  { id: crypto.randomUUID(), title: 'Crear API Routes', completed: false }
];

export async function GET() {
    return Response.json(tasks);
  }

  export async function POST(request: Request) {
    const { title } = await request.json();
    const task: Task = { id: crypto.randomUUID(), title, completed: false };
    tasks.push(task);
    if (task) {
      return Response.json(task);
    }
    return Response.json({ error: 'Task not created' }, { status: 404 });
  }

  export async function PUT(request: Request) {
    const { id, title, completed } = await request.json();  
    const task: Task | undefined = tasks.find((task: Task) => task.id === id); 
    if (task !== undefined) {
      task.title = title;
      task.completed = completed;
      return Response.json(task);
    }
    return Response.json({ error: 'Task not found' }, { status: 404 });
  }

  export async function DELETE(request: Request) {
    const { id } = await request.json();  
    const index = tasks.findIndex((task: Task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);  // ✅ Corregido: sin asignar
      return Response.json({ message: 'Task deleted' });
    }
    return Response.json({ error: 'Task not found' }, { status: 404 });
  }
