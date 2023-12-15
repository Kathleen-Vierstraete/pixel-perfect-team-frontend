import React, { useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const CommentDetail = ({ product }) => {
  const average = Math.round((product.comments.map(comment => comment.rate).reduce((a, b) => a + b) / 10) * 2) / 2;
  console.log(average, product.comments.length);

  return (
    <>
      <div className="flex justify-between">
        <div>
          <div>Moyenne :</div>
          <div className= "text-xl lg:text-4xl font-bold text-primary">{average}/5</div>
          <div className="flex items-center text-lg lg:text-2xl text-secondary">
            {[...Array(5)].map((x, i) =>
              i + 1 <= average ? <FaStar key={i} /> : i + 0.5 <= average ? <FaStarHalfAlt key={i} /> : <FaRegStar key={i} />
            )}
          </div>
        </div>
        <div>
          Detail
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
        {product.comments.map((comment, index) => (
          <div
            className="flex flex-col lg:w-[48%] gap-4 p-5 my-4 bg-primary text-white rounded-lg"
            key={index}
          >
            <div className="flex justify-between">
              <div className="flex items-center">
                {[...Array(5)].map((x, i) =>
                  i + 1 <= comment.rate ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>
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
    </>
  );
};

export default CommentDetail;
