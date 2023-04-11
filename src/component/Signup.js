import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const { setAlertData, setShowAlert } = props;

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { name, email, password, cpassword } = credentials;
      if (password === cpassword) {
        const response = await fetch(
          `http://localhost:5000/api/auth/createUser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
          }
        );
        const responseJSON = await response.json();
        if (responseJSON.success === true) {
          navigate("/login");
          setAlertData({
            type: "success",
            title: "Success",
            message: "Registered successfully.",
          });
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        } else {
          setAlertData({
            type: "danger",
            title: "Error",
            message: "Unable to register, internal server error.",
          });
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        }
      } else {
        setAlertData({
          type: "danger",
          title: "Error",
          message: "Password and Confirm Password is different.",
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
        message: "Unable to register. Please try after sometime.",
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <>
      <h1 className="my-3">New User?</h1>
      <form className="my-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            onChange={handleOnChange}
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
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
            minLength={8}
            onChange={handleOnChange}
            name="password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            minLength={8}
            onChange={handleOnChange}
            name="cpassword"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </>
  );
}

export default Signup;
