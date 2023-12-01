import React from "react";
import NavMenu from "../layouts/navMenu";

const CategoryModal = ({ toggleDropdown }) => {
  return (
    // TODO add a blur to prevent the user from interacting with the other modals
    <div className="absolute h-fit w-10/12 top-0 left-0 bg-gray-300 p-1 rounded shadow border border-black z-10">
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
  );
};

export default CategoryModal;
