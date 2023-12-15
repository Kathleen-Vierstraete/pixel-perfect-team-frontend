import React, { useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const CommentDetail = ({ product }) => {
  const average = Math.round((product.comments.map(comment => comment.rate).reduce((a, b) => a + b) / product.comments.length) * 2) / 2;
  let starArray = [0, 0, 0, 0, 0];
  product.comments.map(comment =>
    starArray[comment.rate - 1] += 1
  );

  return (
    <>
      <div className="flex justify-between my-4 p-2">
        <div className="flex flex-col gap-3 w-[45%]">
          <div>Moyenne :</div>
          <div className="text-4xl lg:text-5xl font-bold text-primary">{average}/5</div>
          <div className="flex items-center text-2xl lg:text-3xl text-secondary">
            {[...Array(5)].map((x, i) =>
              i + 1 <= average ? <FaStar key={i} /> : i + 0.5 <= average ? <FaStarHalfAlt key={i} /> : <FaRegStar key={i} />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3  w-[45%]">
          <div>Details :</div>
          <div className="flex flex-col">
            {starArray.map((star, i) => (
              <div className="flex justify-between items-center" key={i}>
                <span className="flex items-center"><span className="text-center">{i+1}</span><FaStar className="text-secondary" /></span><span className="text-primary text-center">{star}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
        {product.comments.map((comment, index) => (
          <div
            className="flex flex-col lg:w-[48%] h-fit gap-4 p-5 my-4 bg-primary text-white rounded-lg"
            key={index}
          >
            <div className="flex justify-between">
              <div className="flex items-center text-secondary">
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
