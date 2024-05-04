import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const OrderInbox = () => {
  // State variables
  const [orders, setOrders] = useState([]); // Stores list of orders
  const [loading, setLoading] = useState(false); // Indicates if data is being fetched
  const [expandedDescription, setExpandedDescription] = useState({}); // Tracks which descriptions are expanded

  // Fetch orders data on component mount
  useEffect(() => {
    setLoading(true); // Start loading spinner
    axios
      .get("https://africartbackend.onrender.com/orders") // Fetch orders data from backend API
      .then((response) => {
        setOrders(response.data.data); // Set orders data in state
        setLoading(false); // Stop loading spinner
      })
      .catch((error) => {
        console.error("Error fetching orders:", error); // Log error if fetching fails
        setLoading(false);
      });
  }, []); // Empty dependency array to fetch data only once

  // Function to toggle description expansion
  const toggleDescriptionExpansion = (orderId) => {
    // Toggle the expanded state of the specified order's description
    setExpandedDescription((prevState) => ({
      ...prevState,
      [orderId]: !prevState[orderId],
    }));
  };

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table to display orders */}
            <thead>
              <tr className="bg-blue-100 text-left">
                {/* Table headers */}
                <th className="px-6 py-3 text-sm font-semibold text-gray-600 uppercase">
                  Art ID
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600 uppercase">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Map through orders and display each one */}
              {orders.map((item) => (
                <tr key={item._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.artId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4">
                    <div className="whitespace-pre-wrap">
                      {/* Show more or less of the description based on the expanded state */}
                      {expandedDescription[item._id] ? (
                        <>
                          {item.description}{" "}
                          <button
                            className="text-blue-500 hover:underline focus:outline-none"
                            onClick={() => toggleDescriptionExpansion(item._id)}
                          >
                            (less)
                          </button>
                        </>
                      ) : (
                        <>
                          {item.description.length > 50 ? (
                            <>
                              {item.description.slice(0, 50)}{" "}
                              <button
                                className="text-blue-500 hover:underline focus:outline-none"
                                onClick={() =>
                                  toggleDescriptionExpansion(item._id)
                                }
                              >
                                (more)
                              </button>
                            </>
                          ) : (
                            item.description
                          )}
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderInbox;
