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
app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);
