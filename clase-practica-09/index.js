import express from "express";

const app = express();

const courses = [
  { id: 1, title: "Node desde cero", level: "inicial", featured: true },
  { id: 2, title: "JavaScript práctico", level: "inicial", featured: false },
  { id: 3, title: "APIs con Express", level: "intermedio", featured: true },
];

const schedule = [
  { day: "martes", course: "Node desde cero" },
  { day: "jueves", course: "APIs con Express" },
];

app.get("/", (req, res) => {
  res.json({ message: "Cartelera de cursos" });
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/courses/featured", (req, res) => {
  const featuredCourses = courses.filter((curso) => curso.featured);
  res.json(featuredCourses);
});

app.get('/api/schedule', (req, res) => {
  res.json(schedule);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API disponible en http://localhost:${PORT}`);
});
