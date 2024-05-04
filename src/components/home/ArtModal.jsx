import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ArtModal = ({ art, onClose }) => {
  // State variables
  const [imageLoaded, setImageLoaded] = useState(false); // Indicates if the image is loaded
  const [showDescription, setShowDescription] = useState(false); // Controls visibility of artist description

  // Preload the artwork image and set the imageLoaded state
  useEffect(() => {
    const img = new Image();
    img.src = `https://africartbackend.onrender.com/static/${art.image}`;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [art.image]);

  // Toggle the visibility of the artist description
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()} // Prevent modal from closing when content is clicked
        className="max-w-md w-full bg-white rounded-lg p-6 flex flex-col relative"
      >
        {/* Close button */}
        <AiOutlineClose
          className="absolute top-2 right-2 text-gray-500 cursor-pointer"
          onClick={onClose}
        />
        {/* Display artwork size */}
        <h2 className="text-lg font-bold text-blue-600 bg-blue-200 px-4 py-1 rounded text-center">
          {art.size}
        </h2>
        {/* Display artwork image if loaded */}
        {imageLoaded && (
          <div className="w-full h-64 overflow-hidden my-4">
            <img
              src={`http://localhost:5555/static/${art.image}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {/* Display artwork title, artist, and medium */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {art.title}
        </h2>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          {art.artist}
        </h3>
        <p className="text-base text-gray-600 mb-2">{art.medium}</p>
        {/* Button to toggle artist description visibility */}
        <button
          className="text-blue-500 hover:underline mb-2"
          onClick={toggleDescription}
        >
          {showDescription
            ? "Hide Artist Description"
            : "Show Artist Description"}
        </button>
        {/* Display artist description if visible */}
        {showDescription && (
          <div className="rounded-lg bg-gray-100 p-4 mb-2">
            <p className="text-base text-gray-700">{art.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtModal;
