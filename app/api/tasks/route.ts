let tasks = [
  { id: crypto.randomUUID(), title: 'Aprender Next.js', completed: false },
  { id: crypto.randomUUID(), title: 'Crear API Routes', completed: false }
];

export async function GET() {
    return Response.json(tasks);
  }

  export async function POST(request: Request) {
    const { title } = await request.json();
    const task = { id: crypto.randomUUID(), title, completed: false };
    tasks.push(task);
    if (task) {
      return Response.json(task);
    }
    return Response.json({ error: 'Task not created' }, { status: 404 });
  }

  export async function PUT(request: Request) {
    const { id, title, completed } = await request.json();  
    const task = tasks.find((task: any) => task.id === id); 
    if (task) {
      task.title = title;
      task.completed = completed;
      return Response.json(task);
    }
    return Response.json({ error: 'Task not found' }, { status: 404 });
  }

  export async function DELETE(request: Request) {
    const { id } = await request.json();  
    const index = tasks.findIndex((task: any) => task.id === id);
    if (index !== -1) {
      tasks = tasks.splice(index, 1);
      return Response.json({ message: 'Task deleted' });
    }
    return Response.json({ error: 'Task not found' }, { status: 404 });
  }