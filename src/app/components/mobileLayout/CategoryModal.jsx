import React, { useEffect } from "react";
import NavMenu from "../layouts/navMenu";
import { IoCloseCircle } from "react-icons/io5";

const CategoryModal = ({ toggleDropdown }) => {
  /**
   * Prevents the user from scrolling while the modal is present
   */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <div className="absolute h-full w-full top-0 left-0 backdrop-blur-sm bg-gray-500/50 z-10">
      <div className="h-fit w-3/5 overflow-hidden bg-blue-600 p-1 rounded shadow border border-black">
        <div className="flex flex-col">
          <button
            className="flex justify-end cursor-pointer"
            onClick={toggleDropdown}
          >
            <IoCloseCircle className="text-red-600 bg-white rounded-full" />
          </button>
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
