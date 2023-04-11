import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

function NoteItem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { setAlertData, setShowAlert } = props;

  const onClickDeleteNote = async (id) => {
    const success = await deleteNote(id);
    if (success) {
      setAlertData({
        type: "success",
        title: "Success",
        message: "Note deleted successfully.",
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      setAlertData({
        type: "danger",
        title: "Error",
        message: "Unable to delete note.",
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <p className="card-text">{props.note.description}</p>
          <div className="icons">
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                onClickDeleteNote(props.note._id);
              }}></i>
            <i
              className="fa-sharp fa-solid fa-pen-to-square mx-2"
              onClick={() => {
                props.handleEdit(props.note);
              }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
