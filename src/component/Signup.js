import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
        alert("Registration successful.");
        navigate("/login");
      } else {
        alert("Unable to register, internal server error.");
      }
    } else {
      alert("Password and Confirm Password is different");
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
