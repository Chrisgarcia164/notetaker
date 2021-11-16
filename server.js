const { notStrictEqual } = require("assert");
const { json } = require("express");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/notes", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/notes.html"));
});
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./public/index.html"));
// });
app.get("/api/notes", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./db/db.json"));
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});
app.post("/api/notes", (req, res) => {
  res.json(`${req.method} request received to add a note`);
  const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  console.log(notes);
  const newNote = req.body;
  notes.push(newNote);
});
app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);
