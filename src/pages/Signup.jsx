import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const SignUp = () => {
  // State variables
  const [name, setName] = useState(); // Stores user's name
  const [email, setEmail] = useState(); // Stores user's email
  const [password, setPassword] = useState(); // Stores user's password
  const [userType, setUserType] = useState(); // Stores user's type (User or Admin)
  const [adminKey, setAdminKey] = useState(); // Stores admin key

  const navigate = useNavigate(); // Hook for programmatic navigation

  // Handle guest login
  const GuestLogin = () => {
    window.localStorage.setItem("loggedIn", false); // Set loggedIn status to false
    window.localStorage.setItem("Guest", true); // Set Guest status to true
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Make POST request to register user
    axios
      .post("https://africartbackend.onrender.com/users/register", {
        name,
        email,
        password,
        userType,
        adminKey,
      })
      .then((result) => {
        console.log(result); // Log successful registration result
        setAdminKey(null); // Reset admin key
        navigate("/login"); // Navigate to login page
        enqueueSnackbar("Registration successful!", { variant: "success" }); // Show success message
      })
      .catch((err) => {
        console.log(err); // Log registration error
        enqueueSnackbar(`Registration unsuccessful.${err.message}`, {
          variant: "error", // Show error message
        });
      });
  };

  return (
    <div className="d-flex justify-content-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-50">
        <h2 className="text-4xl font-extrabold dark:text-blue-500">
          Welcome to AfricArt!
        </h2>
        <p className="my-4 text-lg text-gray-500">
          Please register an account to continue...
        </p>
        <form onSubmit={handleSubmit}>
          {/* Sign up form */}
          <h2 className="text-2xl font-extrabold dark:text-black">
            Register as:
          </h2>
          <br />
          <div>
            {/* Radio buttons for user type */}
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
          {userType == "Admin" /* Admin key input field */ ? (
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Admin Key</strong>
              </label>
              <input
                type="text"
                placeholder="Admin Key"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setAdminKey(e.target.value)}
              />
            </div>
          ) : null}
          <div className="mb-3">
            {/* Username input field */}
            <label htmlFor="email">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            {/* Email input field */}
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            {/* Password input field */}
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 bg-green-700">
            {/* Register button */}
            Register
          </button>
        </form>
        {/* Login option if user already has account */}
        <p>Already have an account?</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0"
        >
          Login
        </Link>
        <br></br>
        <br></br>
        {/* Guest option for browsing the website */}
        <Link
          to="/"
          className="btn btn-default border w-100 bg-light rounded-0"
          onClick={GuestLogin}
        >
          I'm just browsing...
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
