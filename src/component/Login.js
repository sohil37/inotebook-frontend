import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setAlertData, setShowAlert } = props;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const responseJSON = await response.json();
      if (responseJSON.success === true) {
        localStorage.setItem("authToken", responseJSON.authToken);
        setAlertData({
          type: "success",
          title: "Success",
          message: "Logged in successful.",
        });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        navigate("/");
      } else {
        setAlertData({
          type: "danger",
          title: "Error",
          message:
            "Unable to login, internal server error or invalid credentials.",
        });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    } catch (err) {
      setAlertData({
        type: "danger",
        title: "Error",
        message: "Unable to login, Please try after sometime.",
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="my-3">Login</h1>
      <form className="my-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handleOnChange}
            name="password"
            minLength={8}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
