import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { URL_BACK_COMMENTS } from "../../constants/urls/urlBackEnd";
import apiBackEnd from "../../api/backend/api.Backend";
import StarCount from "./StarCount";

const CommentDetail = ({ comments, setComments, token }) => {
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
          <StarCount className="text-2xl lg:text-3xl" count={average}/>
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
        {comments.map((comment, index) => (
          <div
            className="flex flex-col lg:w-[48%] h-fit gap-4 p-5 my-4 bg-primary text-white rounded-lg"
            key={index}
          >
            <div className="flex justify-between">
              <StarCount count={comment.rate} />
              <div>{comment.date}</div>
            </div>
            <div className="underline">{comment.title}</div>
            <div className="text-xs lg:text-base">{comment.body}</div>
            <div className="flex justify-between">
              <div className="capitalize">{comment.person.firstName}</div>
              <div className="flex gap-2 items-center">
                <div>{comment.vote}</div>
                <div
                  onClick={() => {
                    voteButton(comment, comment.vote + 1);
                  }}
                >
                  <FiThumbsUp />
                </div>
                <div
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
    </>
  );
};

export default CommentDetail;
