import React, { useState } from "react";
import Spinner from "../Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateArt = () => {
  // State variables
  const [title, setTitle] = useState(""); // Stores the title of the artwork
  const [artist, setArtist] = useState(""); // Stores the artist's name
  const [size, setSize] = useState(""); // Stores the size of the artwork
  const [medium, setMedium] = useState(""); // Stores the medium of the artwork
  const [description, setDescription] = useState(""); // Stores the artwork description
  const [file, setFile] = useState(); // Stores the artwork image file
  const [loading, setLoading] = useState(false); // Indicates if data is being processed
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { enqueueSnackbar } = useSnackbar(); // Snackbar for notifications

  // Handle saving the artwork
  const handleSaveArt = () => {
    // Create a FormData object to hold artwork data
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("artist", artist);
    formdata.append("size", size);
    formdata.append("medium", medium);
    formdata.append("description", description);
    formdata.append("file", file);

    setLoading(true); // Start loading spinner
    // Send POST request to save artwork
    axios
      .post("https://africartbackend.onrender.com/art", formdata)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Artwork posted!", { variant: "success" }); // Show success message
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
      <h1 className="text-3xl my-4">Post Artwork</h1>
      {loading ? <Spinner /> : ""} {/* Render spinner while loading */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-md shadow-md p-4 mx-auto">
        {/* Form fields for creating artwork */}
        <div className="my-4">
          <label className="text-lg font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="my-4">
          <label className="text-lg font-medium text-gray-700 mb-1">
            Artist
          </label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="my-4">
          <label className="text-lg font-medium text-gray-700 mb-1">Size</label>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="my-4">
          <label className="text-lg font-medium text-gray-700 mb-1">
            Medium
          </label>
          <input
            type="text"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="my-4">
          <label className="text-lg font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Input field for artwork image */}
        <div className="my-4">
          <label className="text-lg font-medium text-gray-700 mb-1">
            Image
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Button to save artwork */}
        <button
          className="p-2 bg-blue-500 text-white rounded-md m-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleSaveArt}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateArt;
