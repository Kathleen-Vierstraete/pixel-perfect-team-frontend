import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { CharactDetail } from "./CharactDetail";

export const CharactProduct = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full p-4  border border-black rounded-3xl">
      <button
        className="bg-white flex justify-between items-center font-bold text-lg tracking-wider"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        CARACTÉRISTIQUES{!isOpen ? <FaAngleDown /> : <FaAngleUp />}
      </button>
      {isOpen && <CharactDetail product={product} />}
    </div>
  );
};
