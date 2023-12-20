import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { URL_BACK_COMMENTS } from "../../constants/urls/urlBackEnd";
import apiBackEnd from "../../api/backend/api.Backend";
import StarCount from "./StarCount";
import { convertDate } from "../../services/stringifyService";
import { useState } from "react";

const CommentDetail = ({ comments, setComments, token }) => {

  const [paginationSize, setPaginationSize] = useState(6);
  const [visibleComments, setVisibleComments] = useState(paginationSize);
  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(comments.length / paginationSize);

  const loadCommentsForPage = (page) => {
    const start = (page - 1) * paginationSize;
    const end = start + paginationSize;
    return comments.slice(start, end);
  };

  const loadNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const loadPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const changePaginationSize = (newSize) => {
    setPaginationSize(newSize);
    setCurrentPage(1); // Reset to the first page when changing pagination size
  };
  const average =
    Math.round(
      (comments.map((comment) => comment.rate).reduce((a, b) => a + b) /
        comments.length) *
      2
    ) / 2;
  const voteButton = (com, val) => {
    apiBackEnd
      .patch(
        `${URL_BACK_COMMENTS}/${com.id}/vote`,
        { vote: val },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        if (response.status === 200) {
          const updatedComments = comments.map((comment) => {
            if (comment.id === response.data.id) {
              return { ...comment, vote: response.data.vote };
            }
            return comment;
          });
          setComments(updatedComments);
        }
      })
      .catch((error) => {
        console.error("Vote patch error:", error);
      });
  };
  let starArray = [0, 0, 0, 0, 0];
  comments.map((comment) => (starArray[comment.rate - 1] += 1));

  return (
    <>
      <div className="flex justify-between my-4 p-2">
        <div className="flex flex-col gap-3 w-[45%]">
          <div>Moyenne :</div>
          <div className="text-4xl lg:text-5xl font-bold text-primary">
            {average}/5
          </div>
          <StarCount className="text-2xl lg:text-3xl" count={average} />
        </div>
        <div className="flex flex-col gap-3  w-[45%]">
          <div>Details :</div>
          <div className="flex flex-col">
            {starArray.map((star, i) => (
              <div className="flex justify-between items-center" key={i}>
                <span className="flex items-center">
                  <span className="text-center">{i + 1}</span>
                  <FaStar className="text-secondary" />
                </span>
                <span className="text-primary text-center">{star}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
        {loadCommentsForPage(currentPage).map((comment, index) => (
          <div
            className="flex flex-col lg:w-[48%] h-fit gap-4 p-5 my-4 bg-primary text-white rounded-lg"
            key={index}
          >
            <div className="flex justify-between">
              <StarCount count={comment.rate} />
              <div>{convertDate(comment.date)}</div>
            </div>
            <div className="underline">{comment.title}</div>
            <div className="text-xs lg:text-base">{comment.body}</div>
            <div className="flex justify-between">
              <div className="capitalize">{comment.person.firstName}</div>
              <div className="flex gap-2 items-center">
                <div>{comment.vote}</div>
                <div
                  className="rounded-full cursor-pointer"
                  onClick={() => {
                    voteButton(comment, comment.vote + 1);
                  }}
                >
                  <FiThumbsUp />
                </div>
                <div
                  className="rounded-full cursor-pointer"
                  onClick={() => {
                    voteButton(comment, comment.vote - 1);
                  }}
                >
                  <FiThumbsDown />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
          <div className="flex justify-center my-4">
            
            <button
              className={currentPage == 1? "hidden": "bg-secondary text-white p-2 rounded-md mx-2"}
              onClick={loadPreviousPage}
            >
              <FaArrowLeft
            className={currentPage == 1 ? "hidden" : ""}
          />
            </button>

            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber}
                className={`bg-secondary text-white p-2 rounded-md mx-2 ${pageNumber + 1 === currentPage ? 'font-bold' : ''
                  }`}
                onClick={() => setCurrentPage(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            ))}

            <button
              className={currentPage == totalPages ? "hidden": "bg-secondary text-white p-2 rounded-md mx-2"}
              onClick={loadNextPage}
            >
              <FaArrowRight
            className={currentPage == totalPages ? "hidden" : ""} ></FaArrowRight>
            </button>

          </div>
        )}
    </>
  );
};

export default CommentDetail;
