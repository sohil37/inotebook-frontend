import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);

  //   fetch notes
  const fetchNotes = async () => {
    try {
      const response = await fetch(`${host}/api/note/fetchAllNotes`, {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      });
      const fetchedNotes = await response.json();
      if (fetchedNotes.success === true) {
        setNotes(fetchedNotes.notes);
        return true;
      } else {
        console.error("error occurred in fetchNotes API call");
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  //   add note
  const addNote = async (title, description, tag) => {
    try {
      await fetch(`${host}/api/note/addNote`, {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem("authToken"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      fetchNotes();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  // delete note
  const deleteNote = async (id) => {
    try {
      await fetch(`${host}/api/note/deleteNote/${id}`, {
        method: "DELETE",
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      });
      fetchNotes();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  // update note
  const updateNote = async (id, title, description, tag) => {
    try {
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
          "auth-token": localStorage.getItem("authToken"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });
      fetchNotes();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        updateNote,
        fetchNotes,
      }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
