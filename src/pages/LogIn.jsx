import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

axios.defaults.withCredentials = true;

const Login = () => {
  // State variables
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [userType, setUserType] = useState();
  const [adminKey, setAdminKey] = useState();
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Make POST request to login user
    axios
      .post("https://africartbackend.onrender.com/users/login", {
        email,
        password,
        adminKey,
        userType,
      })
      .then((response) => {
        // Handle successful login
        if (response.status === 200 && userType === "Admin") {
          // Store user information in local storage
          window.localStorage.setItem("email", email); // Set user email in local storage for orders
          window.localStorage.setItem("loggedIn", true);
          window.localStorage.setItem("Admin", true);
          window.localStorage.setItem("name", response.data.user.name); // Set user's name
          enqueueSnackbar("Login successful!", { variant: "success" }); // Show success message
          navigate("/"); // Navigate to home page
          setAdminKey(null); // Reset admin key
        } else if (response.status === 200 && userType === "User") {
          // Store user information in local storage
          window.localStorage.setItem("email", email); // Set user email in local storage for orders
          window.localStorage.setItem("loggedIn", true);
          window.localStorage.setItem("User", true);
          window.localStorage.setItem("Guest", false);
          window.localStorage.setItem("Admin", false);
          window.localStorage.setItem("name", response.data.user.name); // Set user's name
          enqueueSnackbar("Login successful!", { variant: "success" }); // Show success message
          navigate("/"); // Navigate to home page
          setAdminKey(null);
        } else {
          enqueueSnackbar("Login failed. Please check your credentials.", {
            variant: "error", // Show error message
          });
        }
      })
      .catch((err) => {
        setError(err, "Login failed. Please try again later."); // Show error message
      });
  };

  return (
    <div className="d-flex justify-content-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-50">
        {/* Login form */}
        <h2 className="text-4xl font-extrabold dark:text-blue-500">
          Welcome to AfricArt!
        </h2>
        <p className="my-4 text-lg text-gray-500">
          Please login to continue...
        </p>

        {/* Show error message if any */}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Login form */}
          <h2 className="text-2xl font-extrabold dark:text-black">Login as:</h2>
          <br />

          {/* Radio buttons for user type */}
          <div>
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
              <label htmlFor="adminKey">
                <strong>Admin Key</strong>
              </label>
              <input
                type="text"
                id="adminKey"
                placeholder="Admin Key"
                autoComplete="off"
                name="adminKey"
                className="form-control rounded-0"
                onChange={(e) => setAdminKey(e.target.value)}
              />
            </div>
          ) : null}

          {/* Email input field */}
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password input field */}
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login button */}
          <button type="submit" className="btn btn-success w-100 bg-green-700">
            Login
          </button>
        </form>
        <p>Don't have an account?</p>
        {/* Link to register page */}
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
