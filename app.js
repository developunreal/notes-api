const express = require("express");

const app = express();

app.use(express.json());

let notes = [];

/*
GET /
Home route
*/
app.get("/", (req, res) => {
  res.send("Notes API Running");
});

/*
GET /notes
Get all notes
*/
app.get("/notes", (req, res) => {
  res.json(notes);
});

/*
POST /notes
Add a new note
*/
app.post("/notes", (req, res) => {
  const note = req.body.note;

  if (!note) {
    return res.status(400).json({
      error: "Note is required"
    });
  }

  notes.push(note);

  res.json({
    message: "Note added successfully",
    notes
  });
});

/*
DELETE /notes/:id
Delete note
*/
app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;

  notes.splice(id, 1);

  res.json({
    message: "Note deleted",
    notes
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
