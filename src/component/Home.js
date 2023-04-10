import React from "react";
import Notes from "./Notes";

function Home() {
  return (
    <div>
      <h1 className="my-3">Add Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title-field" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title-field" />
        </div>
        <div className="mb-3">
          <label htmlFor="description-field" className="form-label">
            Description
          </label>
          <textarea className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add note
        </button>
      </form>
      <h1 className="my-3">Your Notes</h1>
      <Notes />
    </div>
  );
}

export default Home;
