import React from "react";
import NavMenu from "../layouts/navMenu";

const CategoryModal = ({ toggleDropdown }) => {
  return (
    <div className="absolute h-screen w-10/12 top-0 left-0 bg-white p-1 rounded shadow border border-black">
      <button className="mr-10 cursor-pointer" onClick={toggleDropdown}>
        x
      </button>
      <NavMenu/>
    </div>
  );
};

export default CategoryModal;
