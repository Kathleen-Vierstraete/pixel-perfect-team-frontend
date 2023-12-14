import React from "react";

const CommentDetail = ({ product }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
      {product.comments.map((comment, index) => (
        <div
          className="flex flex-col lg:w-[48%] gap-4 p-5 my-4 bg-primary text-white rounded-lg"
          key={index}
        >
          <div className="flex justify-between">
            <div>{comment.rate}</div>
            <div>{comment.date}</div>
          </div>

          <div className="underline">{comment.title}</div>

          <div className="text-xs lg:text-base">{comment.body}</div>

          <div className="flex justify-between">
            <div className="capitalize">{comment.person.firstName}</div>
            <div>{comment.vote}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentDetail;
