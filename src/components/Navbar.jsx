import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State variables
  const [showModal, setShowModal] = useState(false); // Controls visibility of logout modal
  const isAdmin = window.localStorage.getItem("Admin"); // Check if user is admin
  const isLoggedIn = window.localStorage.getItem("loggedIn"); // Check if user is logged in
  const name = window.localStorage.getItem("name"); // Get user name from local storage

  // Handle logout action
  const logout = () => {
    window.localStorage.clear(); // Clear local storage
    setShowModal(false); // Close the modal after logout
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-2 bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
          {/* Logo and homepage link */}
          <div className="flex items-center">
            <Link to={"/"}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-blue-500">
                Afric<span className="text-white">Art</span>
              </h1>
            </Link>
          </div>

          {/* User information and profile picture */}
          <div className="flex flex-col items-center md:flex-row md:items-center md:order-2 space-y-3 md:space-y-0 md:space-x-3 rtl:space-x-reverse">
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-black">
              {name} {/* Display user name */}
            </span>
            {/* Stock profile image */}
            {isLoggedIn && (
              <img
                className="w-12 h-12 rounded-full md:order-1"
                src="https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
                alt="user photo"
              />
            )}
          </div>

          {/* Navigation links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/faq"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
              {/* Display Order Inbox link only for admins */}
              {isAdmin === "true" && (
                <Link
                  to={"/orderInbox"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                >
                  Order inbox
                </Link>
              )}
              {/* Display Log Out option for logged-in users */}
              {isLoggedIn === "true" ? (
                <>
                  <li>
                    <Link
                      onClick={() => setShowModal(true)}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                    >
                      Log Out
                    </Link>
                  </li>
                </>
              ) : (
                // Display Log In option for not logged-in users
                <li>
                  <Link to={"/register"}>
                    <button className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300">
                      Log In
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal for logout confirmation */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-end">
              {/* Button to cancel logout */}
              <button
                onClick={() => setShowModal(false)}
                className="mr-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors duration-300"
              >
                Cancel
              </button>
              {/* Button to confirm logout */}
              <Link
                to={"/"}
                onClick={logout}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
              >
                Log Out
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
