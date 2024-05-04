import React, { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { useSnackbar } from "notistack";

const CreateOrder = ({ art }) => {
  // Get user email from local storage
  const email = window.localStorage.getItem("email");
  const artId = art._id; // Get the ID of the artwork being ordered
  const [description, setDescription] = useState(""); // Store the user's reason for interest in the artwork
  const [loading, setLoading] = useState(false); // Indicates if data is being processed
  const { enqueueSnackbar } = useSnackbar(); // Snackbar for notifications

  // Handle saving the order
  const handleSaveOrder = () => {
    setLoading(true); // Start loading spinner
    axios
      .post("https://africartbackend.onrender.com/orders", {
        email,
        description,
        artId,
      }) // Send POST request to save order
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Request sent.", { variant: "success" }); // Show success message
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" }); // Show error message
        console.log(error); // Log error
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Post Order Request</h1>
      {loading ? <Spinner /> : ""} {/* Render spinner while loading */}
      <div className="flex flex-col border-gray-300 rounded-xl w-auto p-8 mx-auto">
        {/* Display email and order request form */}
        <div className="my-4">
          <label
            // htmlFor="email"
            className="text-xl mr-4 text-gray-700 font-semibold"
          >
            Email
          </label>
          <textarea
            type="text"
            id="email"
            defaultValue={email}
            className="border-2 border-gray-500 px-4 py-2 w-full bg-gray-100 rounded-md"
            readOnly
          />
        </div>
        <div className="my-4">
          <label
            htmlFor="description"
            className="text-xl mr-4 text-gray-700 font-semibold"
          >
            Why are you interested in this artwork?
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full h-24 bg-gray-100 rounded-md resize-none"
          />
        </div>
        {/* Button to save order request */}
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          onClick={handleSaveOrder}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateOrder;
