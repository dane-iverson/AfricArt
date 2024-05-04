import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import ArtCard from "../components/home/ArtCard";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateArt from "../components/home/CreateArt";

axios.defaults.withCredentials = true;

const Home = () => {
  // State variables
  const [art, setArt] = useState([]); // Stores array of artwork data
  const [loading, setLoading] = useState(false); // Indicates if data is being fetched
  const [showCreateModal, setShowCreateModal] = useState(false); // Controls visibility of create artwork modal

  // Check if user is an admin from local storage
  const isAdmin = window.localStorage.getItem("Admin");

  // Fetch artwork data on component mount
  useEffect(() => {
    setLoading(true); // Start loading spinner
    axios
      .get("https://africartbackend.onrender.com/art") // Fetch artwork data from backend API
      .then((response) => {
        setArt(response.data.data); // Set artwork data in state
        setLoading(false); // Stop loading spinner
      })
      .catch((error) => {
        console.error("Error fetching art:", error); // Log error if fetching fails
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect will only run once

  // Open create artwork modal
  const handleOpenCreateModal = () => setShowCreateModal(true);

  // Close create artwork modal
  const handleCloseCreateModal = () => setShowCreateModal(false);

  return (
    <div className="p-4 bg-blue-100 home-bg">
      {/* Container for home page */}
      {isAdmin === "true" && (
        /* Conditionally render CreateArt modal only for admins */
        <>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={handleOpenCreateModal}
          >
            Add Artwork
          </button>
          {showCreateModal && (
            <div
              className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"
              onClick={handleCloseCreateModal}
            >
              <div
                className="relative w-[600px] max-w-full bg-white rounded-lg p-4 border border-black"
                onClick={(event) => event.stopPropagation()}
              >
                <CreateArt onClose={handleCloseCreateModal} art={art} />
                {/* Render CreateArt component */}
              </div>
            </div>
          )}
        </>
      )}
      {loading ? <Spinner /> : <ArtCard art={art} />}
      {/* Render loading spinner or artwork cards based on loading state */}
    </div>
  );
};

export default Home;
