import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import Spinner from "./Spinner";

// ShowArt component (fullscreen of artwork)
const ShowArt = () => {
  // State variables
  const [art, setArt] = useState({}); // Stores artwork data
  const [loading, setLoading] = useState(false); // Indicates if data is being fetched
  const { id } = useParams(); // Extracts id parameter from URL

  // Fetch artwork data on component mount
  useEffect(() => {
    setLoading(true); // Start loading spinner
    axios
      .get(`https://africartbackend.onrender.com/art/${id}`) // Fetch artwork data from backend API
      .then((response) => {
        setArt(response.data); // Set artwork data in state
        setLoading(false); // Stop loading spinner
      })
      .catch((error) => {
        console.log(error); // Log error if fetching fails
        setLoading(false); // Stop loading spinner
      });
  }, []); // Empty dependency array means this effect will only run once

  // Render component UI
  return (
    <div className="p-4 bg-blue-100">
      <BackButton destination={"/"} /> {/* Back button to navigate back */}
      {loading /* Render spinner while loading */ ? (
        <Spinner />
      ) : (
        <div className="h-screen flex justify-center items-center">
          {/* Display artwork details */}
          <div className="max-w-3xl mx-auto">
            {/* Artwork container */}
            <img
              src={`https://africartbackend.onrender.com/static/${art.image}`}
              className="w-full rounded-lg shadow-lg" // Display artwork image
              alt=""
            />
            <h2 className="mt-4 text-center text-2xl font-bold text-blue-600">
              {art.title} {/* Display artwork title */}
            </h2>
            <p className="text-center text-gray-700">by {art.artist}</p>
            {/* Display artist name */}
            <p className="text-center text-gray-600">Medium: {art.medium}</p>
            {/* Display artwork medium */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowArt;
