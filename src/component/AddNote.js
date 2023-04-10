import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

function AddNote() {
  const context = useContext(noteContext);

  const { addNote } = context;
  const [state, setState] = useState({
    title: "",
    description: "",
    tag: "Default",
  });

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(state.title, state.description, state.tag);
  };
  return (
    <>
      <h1 className="my-3">Add Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title-field" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title-field"
            name="title"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description-field" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="decription-field"
            name="description"
            onChange={handleOnChange}></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}>
          Add note
        </button>
      </form>
    </>
  );
}

export default AddNote;
