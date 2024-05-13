import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlSizeFullscreen } from "react-icons/sl";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import ArtModal from "./ArtModal";
import CreateOrder from "../CreateOrder";
import { useSnackbar } from "notistack";

const ArtSingleCard = ({ art }) => {
  // State variables
  const [showModal, setShowModal] = useState(false); // Controls visibility of ArtModal
  const [showCreateOrderModal, setShowCreateOrderModal] = useState(false); // Controls visibility of CreateOrder modal
  const { enqueueSnackbar } = useSnackbar(); // Initialize useSnackbar

  // Toggle ArtModal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Toggle CreateOrder modal visibility
  const toggleCreateOrderModal = () => {
    setShowCreateOrderModal(!showCreateOrderModal);
  };

  // Handle click on disabled "I'm interested" button
  const handleDisabledClick = () => {
    enqueueSnackbar("Please log in to proceed.", { variant: "info" });
  };

  // Check if user is admin or logged in
  const isAdmin = localStorage.getItem("Admin") === "true";
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-md">
      <Link to={`/art/details/${art._id}`}>
        <div className="w-full h-64 overflow-hidden rounded-t-lg">
          <img
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 cursor-pointer"
            src={`https://africartbackend.onrender.com/static/${art.image}`}
            alt={art.title}
          />
        </div>
      </Link>

      <div className="p-5">
        {/* Display artwork details */}
        <div className="mb-4">
          <h5 className="text-xl font-semibold text-gray-800 mb-1">
            {art.title}
          </h5>
          <p className="text-sm text-gray-600">
            by <b className="text-blue-600">{art.artist}</b>
          </p>
          {isAdmin && (
            <p className="text-xs text-gray-500">Art ID: {art._id}</p>
          )}
        </div>

        {/* Actions for logged-in users and admins */}
        <div className="flex justify-between items-center">
          {/* Button for "I'm interested" */}
          <button
            className={`px-4 py-2 text-sm font-semibold ${
              isLoggedIn
                ? "text-white bg-blue-600 hover:bg-blue-700"
                : "text-gray-400 bg-gray-200 cursor-not-allowed"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            onClick={isLoggedIn ? toggleCreateOrderModal : handleDisabledClick}
            // Disable button if not logged in
          >
            I'm interested
          </button>

          {/* Button to show ArtModal */}
          <SlSizeFullscreen
            className="text-3xl text-green-800 hover:text-black cursor-pointer"
            onClick={toggleModal}
          />

          {/* Admin options: edit and delete icons */}
          {isAdmin && (
            <>
              <Link to={`/art/edit/${art._id}`}>
                <AiOutlineEdit className="text-3xl text-yellow-600 hover:text-black" />
              </Link>
              <Link to={`/art/delete/${art._id}`}>
                <AiOutlineDelete className="text-3xl text-red-600 hover:text-black" />
              </Link>
            </>
          )}
        </div>
      </div>

      {/* ArtModal component */}
      {showModal && <ArtModal art={art} onClose={toggleModal} />}
      {/* CreateOrder modal component */}
      {showCreateOrderModal && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"
          onClick={toggleCreateOrderModal}
        >
          <div
            className="relative w-[600px] max-w-full bg-white rounded-lg p-4 border border-black"
            onClick={(event) => event.stopPropagation()}
          >
            <CreateOrder onClose={toggleCreateOrderModal} art={art} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtSingleCard;
