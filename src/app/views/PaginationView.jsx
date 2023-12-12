import { useState, useEffect } from "react";
import PaginationArrows from "../components/PaginationArrows";
import ProductByCategory from "./../components/ProductByCategory";

const PaginationView = ({ products }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let currentProducts = products.slice(startIndex, endIndex);
  const pathname = window.location.pathname;

  useEffect(() => {
    setCurrentPage(1);
  }, [pathname]);

  return (
    <div className="m-5 flex flex-col gap-5">
      <PaginationArrows
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        categoryId={products[0].category.id}
      />
      <ProductByCategory products={currentProducts} />
      <PaginationArrows
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        categoryId={products[0].category.id}
      />
    </div>
  );
};

export default PaginationView;
