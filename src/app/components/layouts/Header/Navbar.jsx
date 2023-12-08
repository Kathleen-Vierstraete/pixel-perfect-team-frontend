import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaSearch, FaRegUser, FaRegBell } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { URL_CONNEXION, URL_HOME, URL_LIST, URL_PICK } from "../../../constants/urls/urlFrontEnd";
import MenuModal from "../../mobileLayout/MenuModal";

import apiBackEnd from "../../../api/backend/api.Backend";
import NavMenu from "./navMenu";
import { useSelector } from "react-redux";
import { selectIsLogged, selectUser } from "../../../redux-store/authenticationSlice";

const Navbar = () => {
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const toggleMenuDropdown = () => {
    setShowMenuDropdown(!showMenuDropdown);
  };

  const isAuthenticated = useSelector(selectIsLogged);

  const user = useSelector(selectUser);

  console.log(isAuthenticated);
  console.log(selectUser);
  console.log(selectUser.id);
  console.log(selectUser.username);

  /**
   * Get categories from the api endpoint categories
   */
  useEffect(() => {
    apiBackEnd
      .get("/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <nav className="bg-primary">
      <div className="max-w-screen-xl flex flex-wrap lg:flex-nowrap items-center justify-evenly gap-2 mx-auto p-4">
        <div className="flex items-center space-x-3 text-white rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-menu"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-gray-900/25"
            aria-controls="navbar-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div className="lg:hidden flex items-center">
              <span className="cursor-pointer" onClick={toggleMenuDropdown}>
                <FaBars />
              </span>
            </div>
            {showMenuDropdown && (
              <MenuModal
                toggleMenuDropdown={toggleMenuDropdown}
                categories={categories}
              />
            )}
          </button>
          <Link to={URL_HOME}>
            <span className="font-SilkScreen self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pixel Perfect
            </span>
          </Link>
        </div>
        <div className="flex lg:order-2 align-middle justify-center">
          <div className="flex align-middle justify-center">
            <button
              onClick={() => navigate(URL_CONNEXION)}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="text-white hover:bg-gray-900/25 rounded-lg text-sm p-2.5 me-1 flex flex-row justify-end cursor-pointer w-fit"
            >
              <span className="h-full flex items-center justify-center me-2">
                <FaRegUser />
              </span>
              {!isAuthenticated ? 
              <span className="text-left w-fit hidden lg:inline">
                Bonjour
                <br />
                Se connecter / S'inscrire
              </span>
              :
              <span className="text-left w-fit hidden lg:inline">
              Se déconnecter
              </span>
              
            }
            </button>
          </div>
          <div className="flex align-middle justify-center">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="hover:bg-gray-900/25 text-white rounded-lg text-sm p-2.5 me-1 flex flex-row justify-end cursor-pointer w-fit"
            >
              <span className="h-full flex items-center justify-center me-2">
                <FiShoppingCart />
              </span>
              <span onClick={() => navigate(URL_PICK)} className="text-left w-fit h-full hidden lg:flex items-center">
                Panier
              </span>
            </button>
          </div>
          <div className="flex align-middle justify-center">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="text-white hover:bg-gray-900/25 rounded-lg text-sm p-2.5 me-1 flex flex-row justify-end cursor-pointer w-fit"
            >
              <span className="h-full flex items-center justify-center me-2">
                <FaRegBell />
              </span>
            </button>
          </div>
        </div>
        <div
          className="items-center justify-between w-full flex lg:w-1/2 lg:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 w-full mx-auto">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="text-primary text-sm p-2.5 me-1"
              >
                <FaSearch />
                <span className="sr-only">Search</span>
              </button>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block py-auto w-full p-2 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-secondary focus:border-secondary"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:bg-primary-light">
        <NavMenu categories={categories} />
      </div>
    </nav>
  );
};

export default Navbar;