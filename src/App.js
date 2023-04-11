import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./component/Alert";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { useState } from "react";
function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({});

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          {showAlert ? <Alert alertData={alertData} /> : <></>}
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    setAlertData={setAlertData}
                    setShowAlert={setShowAlert}
                  />
                }></Route>
              <Route
                exact
                path="/about"
                element={
                  <About
                    setAlertData={setAlertData}
                    setShowAlert={setShowAlert}
                  />
                }></Route>
              <Route
                exact
                path="/login"
                element={
                  <Login
                    setAlertData={setAlertData}
                    setShowAlert={setShowAlert}
                  />
                }></Route>
              <Route
                exact
                path="/signup"
                element={
                  <Signup
                    setAlertData={setAlertData}
                    setShowAlert={setShowAlert}
                  />
                }></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
