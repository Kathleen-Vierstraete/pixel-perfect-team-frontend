import React, { useState } from "react";
import CommentDetail from "./CommentDetail";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CommentProduct = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full p-4  border border-black rounded-3xl">
      <button
        className="bg-white flex justify-between items-center font-bold text-lg tracking-wider"
        onClick={() => setIsOpen((prev) => !prev)}
        >
        COMMENTAIRES{!isOpen ? <FaAngleDown /> : <FaAngleUp />}
      </button>
      {(isOpen && product.comments.length>0) && <CommentDetail product={product} />}
      {(isOpen && !product.comments.length>0) && <div>Aucun commentaire.</div>}
    </div>
  );
};

export default CommentProduct;
