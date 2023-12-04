import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { URL_LIST } from "../../constants/urls/urlFrontEnd";
import CategoryModal from "../mobileLayout/CategoryModal";
import NavMenu from "./navMenu";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-blue-600 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 text-white rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div className="md:hidden flex items-center">
              <button className="cursor-pointer" onClick={toggleDropdown}>
                <FaBars />
              </button>
            </div>
            {showDropdown && <CategoryModal toggleDropdown={toggleDropdown} />}
          </button>
          <Link to={URL_LIST}>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pixel Perfect
            </span>
          </Link>
        </div>
        <div className="flex md:order-2">
          <div className="flex align-middle justify-center">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="text-white dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1 flex flex-row justify-end cursor-pointer w-fit"
            >
              {" "}
              <span className="h-full flex items-center justify-center me-2">
                <FaSearch className="" />
              </span>
              <span className="text-left w-fit hidden md:inline">
                Bonjour
                <br />
                Se connecter/S'inscrire
              </span>
            </button>
          </div>
          <div className="flex align-middle justify-center">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="text-white dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1 flex flex-row justify-end cursor-pointer w-fit"
            >
              {" "}
              <span className="h-full flex items-center justify-center me-2">
                <FiShoppingCart />
              </span>
              <span className="text-left w-fit hidden md:inline">
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
              className="text-white dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1 flex flex-row justify-end cursor-pointer w-fit"
            >
              {" "}
              <span className="h-full flex items-center justify-center me-2">
                <FaBell />
              </span>
            </button>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-white dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
              >
                {" "}
                <FaSearch />
                <span className="sr-only">Search</span>
              </button>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
