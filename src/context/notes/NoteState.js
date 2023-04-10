import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);

  //   fetch notes
  const fetchNotes = async () => {
    const response = await fetch(`${host}/api/note/fetchAllNotes`, {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMTUyYWFiNzA3YjU1ZTg3ODJkMjA3In0sImlhdCI6MTY4MDk1NDAzMX0.3XjnH-4UZrAJpK_IO3dhhqEQDmNEPzDL3tQUDdUkX5s",
      },
    });
    const fetchedNotes = await response.json();
    setNotes(fetchedNotes);
  };

  //   add note
  const addNote = async (title, description, tag) => {
    await fetch(`${host}/api/note/addNote`, {
      method: "POST",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMTUyYWFiNzA3YjU1ZTg3ODJkMjA3In0sImlhdCI6MTY4MDk1NDAzMX0.3XjnH-4UZrAJpK_IO3dhhqEQDmNEPzDL3tQUDdUkX5s",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    fetchNotes();
  };

  // delete note
  const deleteNote = async (id) => {
    await fetch(`${host}/api/note/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMTUyYWFiNzA3YjU1ZTg3ODJkMjA3In0sImlhdCI6MTY4MDk1NDAzMX0.3XjnH-4UZrAJpK_IO3dhhqEQDmNEPzDL3tQUDdUkX5s",
      },
    });
    fetchNotes();
  };

  // update note
  const updateNote = async (id, title, description, tag) => {
    let newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    await fetch(`${host}/api/note/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMTUyYWFiNzA3YjU1ZTg3ODJkMjA3In0sImlhdCI6MTY4MDk1NDAzMX0.3XjnH-4UZrAJpK_IO3dhhqEQDmNEPzDL3tQUDdUkX5s",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });
    fetchNotes();
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, fetchNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
