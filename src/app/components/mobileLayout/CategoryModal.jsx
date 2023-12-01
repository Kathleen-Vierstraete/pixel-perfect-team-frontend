import React from "react";
import NavMenu from "../layouts/navMenu";

const CategoryModal = ({ toggleDropdown }) => {
  return (
    <div className="absolute h-full w-full top-0 left-0 backdrop-blur-sm bg-gray-500/50 z-10">
      <div className="h-fit w-10/12 bg-gray-300 p-1 rounded shadow border border-black">
        <div className="flex flex-col">
          <button
            className="flex justify-end cursor-pointer"
            onClick={toggleDropdown}
          >
            x
          </button>
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
