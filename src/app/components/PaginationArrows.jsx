import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PaginationArrows = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="flex items-center gap-4 font-SilkScreen">
        <button>
          <FaArrowLeft
            className={currentPage == 1 ? "hidden" : ""}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className="flex items-center"
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            <span
              className={ "rounded-full w-7 aspect-square " +
                (
                    index + 1 == currentPage
                  ? "text-white font-extrabold bg-primary"
                  : "text-primary"
                  )
              }
            >
              {index + 1}
            </span>
          </button>
        ))}

        <button>
          <FaArrowRight
            className={currentPage == totalPages ? "hidden" : ""}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </button>
      </div>
    </div>
  );
};

export default PaginationArrows;
