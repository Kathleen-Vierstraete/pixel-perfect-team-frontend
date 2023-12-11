import React, { useEffect } from "react";
import NavMenu from "../layouts/Header/navMenu";
import { IoCloseCircle } from "react-icons/io5";

const MenuModal = ({ toggleMenuDropdown, categories }) => {
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
    <div className="fixed h-full w-full top-0 left-0 backdrop-blur-sm bg-gray-500/50 z-20">
      <div className="h-full w-4/5 overflow-hidden bg-primary p-1 rounded shadow border border-black">
        <div className="flex flex-col">
          <span
            className="flex justify-end cursor-pointer"
            onClick={toggleMenuDropdown}
          >
            <IoCloseCircle size={40} className="text-red-600 bg-white rounded-full" />
          </span>
          <NavMenu categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
