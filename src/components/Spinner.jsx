import React from "react";

// Spinner component
const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Container for spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      {/* Animated spinner */}
      <div className="mt-4 text-gray-900 text-lg font-semibold">Loading...</div>
      {/* Loading text */}
    </div>
  );
};

export default Spinner;
