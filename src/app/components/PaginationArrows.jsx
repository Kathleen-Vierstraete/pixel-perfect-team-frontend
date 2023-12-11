import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PaginationArrows = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="flex items-center gap-4 font-SilkScreen">
        <div>
          <FaArrowLeft
            className={currentPage == 1 ? "hidden" : ""}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </div>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={
              index + 1 == currentPage
                ? "text-white font-extrabold bg-primary rounded-full w-7 aspect-square"
                : "text-secondary"
            }
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <div>
          <FaArrowRight
            className={currentPage == totalPages ? "hidden" : ""}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default PaginationArrows;
