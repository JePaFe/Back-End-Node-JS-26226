import express from "express";

const app = express();

app.use(express.json());

const tasks = [
  { id: 1, title: "Learn Express", completed: false },
  { id: 2, title: "Learn Node.js", completed: true },
  { id: 3, title: "Learn JavaScript", completed: false },
  { id: 4, title: "Learn SQL", completed: true },
];

app.get("/", (req, res) => {
  res.json({ message: "Task API" });
});

app.get("/api/tasks", (req, res) => {
  const { completed } = req.query;

  if (completed === undefined) {
    return res.json(tasks);
  }

  if (completed !== "true" && completed !== "false") {
    return res.status(400).json({ error: "completed debe ser true o false" });
  }

  const booleanCompleted = completed === "true";

  console.log(booleanCompleted);

  const filteredTasks = tasks.filter(
    (task) => task.completed === booleanCompleted,
  );

  res.json(filteredTasks);
});

app.get("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

app.post("/api/tasks", (req, res) => {
  const { title } = req.body ?? {}; // Si req.body es null o undefined, se asigna un objeto vacío para evitar errores al desestructurar.

  if (!title) {
    return res.status(422).json({ error: "Title is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
