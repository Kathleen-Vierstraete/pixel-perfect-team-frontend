import { useState } from "react";
import PaginationArrows from "../components/PaginationArrows";
import ProductByCategory from "./../components/ProductByCategory";

const PaginationView = ({ products }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <PaginationArrows
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <ProductByCategory products={currentProducts} />
      <PaginationArrows
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default PaginationView;
