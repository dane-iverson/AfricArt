import React, { useState } from "react";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteArt = () => {
  const [loading, setLoading] = useState(false); // Indicates if data is being processed
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { id } = useParams(); // Get the artwork ID from the URL parameters
  const { enqueueSnackbar } = useSnackbar(); // Snackbar for notifications

  // Handle deletion of artwork
  const handleDeleteArt = () => {
    setLoading(true); // Start loading spinner
    axios
      .delete(`https://africartbackend.onrender.com/art/${id}`) // Send DELETE request to remove artwork
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Artwork deleted.", { variant: "success" }); // Show success message
        navigate("/"); // Navigate back to home page
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" }); // Show error message
        console.log(error); // Log error
      });
  };

  // Render component UI
  return (
    <div className="p-4">
      <BackButton destination={"/"} /> {/* Back button to navigate back */}
      <h1 className="text-3xl my-4">Delete Art</h1>
      {loading ? <Spinner /> : ""} {/* Render spinner while loading */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-md shadow-md p-4 mx-auto">
        {/* Confirmation prompt for deleting artwork */}
        <h3 className="text-2xl text-gray-800 mb-6 text-center">
          Are you sure you want to delete this artwork?
        </h3>

        {/* Button to confirm deletion */}
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md w-full hover:bg-red-700 focus:outline-none focus:bg-red-700"
          onClick={handleDeleteArt}
        >
          Yes, delete artwork
        </button>
      </div>
    </div>
  );
};

export default DeleteArt;
