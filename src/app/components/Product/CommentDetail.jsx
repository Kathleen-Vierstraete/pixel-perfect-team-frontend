import React from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";

const CommentDetail = ({ product }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
      {product.comments.map((comment, index) => (
        <div
          className="flex flex-col lg:w-[48%] gap-4 p-5 my-4 bg-primary text-white rounded-lg"
          key={index}
        >
          <div className="flex justify-between">
            <div className="flex items-center">
              {[...Array(comment.rate)].map((x, i) =>
                <FaStar key={i} />
              )}
              {[...Array(5-comment.rate)].map((x, i) =>
                <FaRegStar key={i} />
              )}
            </div>
            {/* <div>{<FiThumbsUp />.repeat(comment.rate)+"b".repeat(5-comment.rate)}</div> */}
            <div>{comment.date}</div>
          </div>

          <div className="underline">{comment.title}</div>

          <div className="text-xs lg:text-base">{comment.body}</div>

          <div className="flex justify-between">
            <div className="capitalize">{comment.person.firstName}</div>
            <div className="flex gap-2 items-center">
              <div>{comment.vote}</div>
              <div><FiThumbsUp /></div>
              <div><FiThumbsDown /></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentDetail;
