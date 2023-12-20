import { useState } from "react";
import { CharactDetail } from "./CharactDetail";
import CommentDetail from "./CommentDetail";

export const DescriptionDetailProduct = ({ product, token, comments, setComments }) => {
  const [descriptionIsOpen, setDescriptionIsOpen] = useState(true);
  const [charactIsOpen, setCharactIsOpen] = useState(false);
  const [commentIsOpen, setCommentIsOpen] = useState(false);

  function toogle(type) {
    if (type === "description") {
      setDescriptionIsOpen(true);
      setCharactIsOpen(false);
      setCommentIsOpen(false);
    }
    if (type === "charact") {
      setDescriptionIsOpen(false);
      setCharactIsOpen(true);
      setCommentIsOpen(false);
    }
    if (type === "comment") {
      setDescriptionIsOpen(false);
      setCharactIsOpen(false);
      setCommentIsOpen(true);
    }
  }

  return (
    <>
      <div className="p-4 rounded-lg bg-secondary-dark text-white flex gap-x-16 ">
        <button
          className="hover:underline focus:underline"
          onClick={() => toogle("description")}
        >
          Description
        </button>
        <button
          className="hover:underline focus:underline"
          onClick={() => toogle("charact")}
        >
          Caractéristiques
        </button>
        <button
          className="hover:underline focus:underline"
          onClick={() => toogle("comment")}
        >
          Commentaires
        </button>
      </div>

      {descriptionIsOpen && (
        <div className="flex flex-col gap-4">
          <h3 className="underline">Description</h3>
          <div className="bg-secondary-dark text-white rounded-lg p-4">
            {product.description}
          </div>
        </div>
      )}

      {charactIsOpen && (
        <div className="flex flex-col gap-4">
          <h3 className="underline">Caractéristiques</h3>
          <CharactDetail product={product} />
        </div>
      )}

      {commentIsOpen && product.comments.length > 0 && (
        <div className="flex flex-col">
          <h3 className="underline">Commentaires</h3>
          <CommentDetail product={product} comments={comments} setComments={setComments}  token={token} />
        </div>
      )}
      {commentIsOpen && !product.comments.length > 0 && (
        <div className="flex flex-col">
          <h3 className="underline">Commentaires</h3>
          <div className="my-4">Aucun commentaire.</div>
          <div>FORMIK</div>
        </div>
      )}
    </>
  );
};
