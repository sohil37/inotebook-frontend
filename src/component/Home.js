import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

function Home(props) {
  return (
    <div>
      <AddNote
        setAlertData={props.setAlertData}
        setShowAlert={props.setShowAlert}
      />
      <Notes
        setAlertData={props.setAlertData}
        setShowAlert={props.setShowAlert}
      />
    </div>
  );
}

export default Home;
