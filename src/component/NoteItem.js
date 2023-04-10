import React from "react";

function NoteItem(props) {
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <p className="card-text">{props.note.description}</p>
          <div className="icons">
            <i className="fa-solid fa-trash mx-2"></i>
            <i className="fa-sharp fa-solid fa-pen-to-square mx-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
