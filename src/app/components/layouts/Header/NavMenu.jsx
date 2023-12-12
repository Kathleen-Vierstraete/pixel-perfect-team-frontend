import React from "react";
import { useNavigate } from "react-router-dom";
import { URL_PRODUCTS_BY_CATEGORY } from "../../../constants/urls/urlFrontEnd";

const NavMenu = ({ categories, toggleMenuDropdown }) => {
  const navigate = useNavigate();

  const navigateCategory = (id) => {
    navigate(URL_PRODUCTS_BY_CATEGORY(id));
    toggleMenuDropdown();
  }

  return (
    <ul className="text-white text-xl lg:text-base p-2 flex flex-col w-full lg:flex-row justify-evenly">
      {categories.map((category) => (
        <li key={category.id} className="flex flex-col gap-2 mt-2 hover:cursor-pointer" onClick={() => navigateCategory(category.id)}>
          <div className="flex items-center gap-4">
            <img className="w-5 h-5" src={category.logoUrl} />
            <p>{category.label.replace(" ", String.fromCharCode(160))}</p>
          </div>
          <hr className="lg:hidden" />
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
