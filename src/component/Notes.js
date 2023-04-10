import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
function Notes() {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row">
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} />;
      })}
    </div>
  );
}

export default Notes;