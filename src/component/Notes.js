import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";
function Notes() {
  const context = useContext(noteContext);
  const { notes, updateNote, fetchNotes } = context;
  const navigate = useNavigate();
  const [editNoteState, setEditNoteState] = useState({
    title: "",
    description: "",
    tag: "",
    id: "",
  });

  const handleOnChange = (e) => {
    setEditNoteState({ ...editNoteState, [e.target.name]: e.target.value });
  };

  const editNoteModal = useRef();
  const closeNoteModal = useRef();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      fetchNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const handleEdit = (note) => {
    editNoteModal.current.click();
    setEditNoteState({
      title: note.title,
      description: note.description,
      tag: note.tag,
      id: note._id,
    });
  };

  const handleUpdate = () => {
    updateNote(
      editNoteState.id,
      editNoteState.title,
      editNoteState.description,
      editNoteState.tag
    );
    closeNoteModal.current.click();
  };

  return (
    <>
      <h1 className="my-3">Your Notes</h1>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#editNoteModal"
        ref={editNoteModal}>
        Edit note modal
      </button>

      <div
        className="modal fade"
        id="editNoteModal"
        tabIndex="-1"
        aria-labelledby="editNoteModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editNoteModalLabel">
                Edit note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
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
                    value={editNoteState.title}
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
                    value={editNoteState.description}
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
                    value={editNoteState.tag}
                    placeholder="Enter tag here"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={closeNoteModal}>
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {notes.length > 0
          ? notes.map((note) => {
              return (
                <NoteItem key={note._id} note={note} handleEdit={handleEdit} />
              );
            })
          : ""}
      </div>
    </>
  );
}

export default Notes;
