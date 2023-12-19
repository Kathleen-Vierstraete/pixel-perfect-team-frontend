import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { URL_PRODUCTS_BY_CATEGORY } from "../constants/urls/urlFrontEnd";

const PaginationArrows = ({
  currentPage,
  setCurrentPage,
  totalPages,
  categoryId,
}) => {
  const handlePageChange = (newPage) => {
      setCurrentPage(newPage)
  };

  return (
    <div>
      <div className="flex items-center gap-4 font-SilkScreen">
        <HashLink to={`${URL_PRODUCTS_BY_CATEGORY(categoryId)}#top`}>
          <FaArrowLeft
            className={currentPage == 1 ? "hidden" : ""}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </HashLink>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className="flex items-center"
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            <HashLink
              to={`${URL_PRODUCTS_BY_CATEGORY(categoryId)}#top`}
              className={
                "rounded-full w-7 aspect-square " +
                (index + 1 == currentPage
                  ? "text-white font-extrabold bg-primary"
                  : "text-primary")
              }
            >
              {index + 1}
            </HashLink>
          </button>
        ))}

        <HashLink to={`${URL_PRODUCTS_BY_CATEGORY(categoryId)}#top`}>
          <FaArrowRight
            className={currentPage == totalPages ? "hidden" : ""}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </HashLink>
      </div>
    </div>
  );
};

export default PaginationArrows;
