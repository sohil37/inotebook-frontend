import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialState = {
    name: "Sohil",
    class: "5b",
  };

  const [state, setState] = useState(initialState);

  const update = () => {
    setTimeout(() => {
      setState({ name: "Mohil", class: "10b" });
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
