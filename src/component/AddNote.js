import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

function AddNote() {
  const context = useContext(noteContext);

  const { addNote } = context;
  const [state, setState] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(state.title, state.description, state.tag);
    setState({ title: "", description: "", tag: "" });
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
            value={state.title}
            placeholder="Enter title here"
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
            onChange={handleOnChange}
            value={state.description}
            placeholder="Enter description here"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag-field" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag-field"
            name="tag"
            onChange={handleOnChange}
            value={state.tag}
            placeholder="Enter tag here"
          />
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
