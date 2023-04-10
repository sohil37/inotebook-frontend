import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "6433b0ddaa7264d9c051f4ff",
      user: "643152aab707b55e8782d207",
      title: "title-1",
      description: "description-1",
      tag: "Personal",
      date: "2023-04-10T06:46:53.074Z",
      __v: 0,
    },
    {
      _id: "6433b0ddaa7264d9c051f4f2f",
      user: "643152aab707b55e8782d207",
      title: "title-1",
      description: "description-1",
      tag: "Personal",
      date: "2023-04-10T06:46:53.074Z",
      __v: 0,
    },
    {
      _id: "6433b0ddaa7264d9c051f34ff",
      user: "643152aab707b55e8782d207",
      title: "title-1",
      description: "description-1",
      tag: "Personal",
      date: "2023-04-10T06:46:53.074Z",
      __v: 0,
    },
    {
      _id: "6433b0ddaa7264d9c0514f4ff",
      user: "643152aab707b55e8782d207",
      title: "title-1",
      description: "description-1",
      tag: "Personal",
      date: "2023-04-10T06:46:53.074Z",
      __v: 0,
    },
    {
      _id: "6433b0ddaa7264d9c051f54ff",
      user: "643152aab707b55e8782d207",
      title: "title-1",
      description: "description-1",
      tag: "Personal",
      date: "2023-04-10T06:46:53.074Z",
      __v: 0,
    },
    {
      _id: "6433b0ddaa7264d9c0516f4ff",
      user: "643152aab707b55e8782d207",
      title: "title-1",
      description: "description-1",
      tag: "Personal",
      date: "2023-04-10T06:46:53.074Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  //   add note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "6433b0ddaa7264d9c0516f4ff",
      user: "643152aab707b55e8782d207",
      title: title,
      description: description,
      tag: tag,
      date: "2023-04-10T06:46:53.074Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // delete note
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // update note
  const updateNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
