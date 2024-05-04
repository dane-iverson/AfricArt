import React from "react"; // Import React library
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = ({ destination }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-1g w-fit"
      >
        <IoMdArrowRoundBack className="text-2x1" />
      </Link>
    </div>
  );
};

export default BackButton;
