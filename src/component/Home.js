import React from "react";

function Home() {
  return (
    <div>
      <h1 className="my-3">Add Note</h1>
      <form>
        <div class="mb-3">
          <label for="title-field" class="form-label">
            Title
          </label>
          <input type="text" class="form-control" id="title-field" />
        </div>
        <div class="mb-3">
          <label for="description-field" class="form-label">
            Description
          </label>
          <textarea class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Add note
        </button>
      </form>
      <h1 className="my-3">Your Notes</h1>
    </div>
  );
}

export default Home;
