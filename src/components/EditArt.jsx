import React, { useState, useEffect } from "react";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditArt = () => {
  // State variables
  const [title, setTitle] = useState(""); // Stores the title of the artwork
  const [artist, setArtist] = useState(""); // Stores the artist's name
  const [size, setSize] = useState(""); // Stores the size of the artwork
  const [medium, setMedium] = useState(""); // Stores the medium of the artwork
  const [description, setDescription] = useState(""); // Stores the artwork description
  const [loading, setLoading] = useState(false); // Indicates if data is being fetched
  const { id } = useParams(); // Get the artwork ID from the URL parameters
  const { enqueueSnackbar } = useSnackbar(); // Snackbar for notifications (3rd party)

  // Fetch artwork data on component mount
  useEffect(() => {
    setLoading(true); // Start loading spinner
    axios
      .get(`https://africartbackend.onrender.com/art/${id}`) // Fetch artwork data from backend API
      .then((response) => {
        setArtist(response.data.artist); // Set artist's name
        setTitle(response.data.title); // Set artwork title
        setSize(response.data.size); // Set artwork size
        setMedium(response.data.medium); // Set artwork medium
        setDescription(response.data.description); // Set artwork description
        setLoading(false); // Stop loading spinner
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occurred. Please check console.", {
          variant: "error", // Show error message
        });
        console.log(error); // Log error
      });
  }, []); // Empty dependency array means this effect will only run once

  const navigate = useNavigate(); // Hook for programmatic navigation

  // Handle editing of the artwork
  const handleEditArt = () => {
    // Store new artwrok information
    const data = {
      title,
      artist,
      size,
      medium,
      description,
    };
    setLoading(true); // Start loading spinner
    axios
      .put(`http://localhost:5555/art/${id}`, data) // Send PUT request to update artwork
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Artwork edited!", { variant: "success" }); // Show success message
        navigate("/"); // Navigate back to home page
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" }); // Show error message
        console.log(error); // Log error
      });
  };

  return (
    <div className="p-4">
      <BackButton destination={"/"} /> {/* Back button to navigate back */}
      {loading ? <Spinner /> : ""} {/* Render spinner while loading */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-md shadow-md p-4 mx-auto">
        {/* Form fields for editing artwork */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Artist
          </label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Size
          </label>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Medium
          </label>
          <input
            type="text"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-300 rounded-md px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Save button to update artwork */}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleEditArt}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditArt;
