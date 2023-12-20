import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaRegBell } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { URL_HOME, URL_PICK, URL_PRODUCT_BY_ID } from "../../../constants/urls/urlFrontEnd";
import MenuModal from "../../mobileLayout/MenuModal";
import apiBackEnd from "../../../api/backend/api.Backend";
import NavMenu from "./navMenu";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQuantity } from "../../../redux-store/cartSlice";
import { ConnectionButton } from "./Button/Connection";
import { SearchBar } from "./SearchBar";
import { getProducts, setProduct } from "../../../redux-store/productSlice";
import { URL_BACK_PRODUCT } from "../../../constants/urls/urlBackEnd";

const Navbar = () => {
  const dispatch = useDispatch();
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const allItemPick = useSelector(selectTotalQuantity);
  const toggleMenuDropdown = () => {
    setShowMenuDropdown(!showMenuDropdown);
  };
  const products = useSelector(getProducts);

  if (window.location.pathname.startsWith("/product/") && !products) {
    apiBackEnd.get(URL_BACK_PRODUCT)
      .then(response => {
        dispatch(setProduct(response.data))
        console.log("product Ajouter")
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }

  const picture = (product) => {
    if (product.pictures && product.pictures.length > 0) {
      return product.pictures[0].url;
    } else if (product.url) {
      return product.url;
    }
  }

  const filterProducts = (text) => {
    if (!text) {
      setSearchResults([]);
      return;
    }

    const filteredResults = products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    filterProducts(searchText);
  }, [searchText]);


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

  const handleNavigateSearchBar = (id) => {
    navigate(URL_PRODUCT_BY_ID(id));
    setSearchText("")
  }

  return (
    <div className="sticky top-0 z-10">
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

            </button>
            <Link to={URL_HOME}>
              <span className="font-SilkScreen self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Pixel Perfect
              </span>
            </Link>
          </div>
          <div className="flex lg:order-2 align-middle justify-center">
            <ConnectionButton />
            <div className="flex align-middle justify-center">
              <button
                onClick={() => navigate(URL_PICK)}
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="flex items-center gap-2 text-white rounded-lg text-sm p-2.5  cursor-pointer hover:bg-gray-900/25"
              >
                <FiShoppingCart />
                <span className="hidden text-left w-fit h-full lg:flex items-center">
                  Panier
                </span>
                {allItemPick === 0 ? <></> : (
                  <span className="bg-secondary-dark py-1 px-2 rounded-full">
                    {allItemPick}
                  </span>)}

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
            className="relative flex-col items-center justify-between w-full  lg:w-1/2 lg:order-1"
            id="navbar-search"
          >
            {products &&
              <SearchBar text={searchText} setText={setSearchText} categoryName={products[0].category.label} />
            }
            {
              searchText && <>
                {
                  searchResults.length === 0 ? (
                    <div className="absolute right-0 left-0  rounded-lg overflow-y-auto  max-h-80 bg-red-500 text-white px-4 py-2">
                      <p className="text-center"> Aucun resultat trouvé</p>
                    </div>
                  ) : (
                    <div  className="absolute right-0 left-0  rounded-lg overflow-y-auto  max-h-80 bg-secondary text-dark">
                      <ul>
                        {searchResults.map((product) => (
                          <div key={product.id} className="" onClick={() => handleNavigateSearchBar(product.id)}>
                            <li className="px-4 py-2 flex items-center gap-4 hover:bg-primary-light" key={product.id}>
                              <img loading="lazy" className="h-8" src={picture(product)} alt="" />
                              <span>{product.name}</span>
                            </li>
                            <hr className="border-black" />
                          </div>
                        ))}
                      </ul>
                    </div>
                  )
                }
              </>
            }


          </div>

        </div>
        <div className="hidden lg:flex lg:bg-primary-light">
          <NavMenu categories={categories} />
        </div>
      </nav>
      <div>
        {showMenuDropdown && (
          <MenuModal
            toggleMenuDropdown={toggleMenuDropdown}
            categories={categories}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
