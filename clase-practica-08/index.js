import express from "express";

const app = express();

const books = [
  { id: 1, title: "El principito", available: true },
  { id: 2, title: "Ficciones", available: false },
  { id: 3, title: "Rayuela", available: true },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/", (req, res) => {
  res.send("Bienvenido a la clase práctica 08");
});

app.get("/status", (req, res) => {
  res.json({ service: "library", online: true });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
