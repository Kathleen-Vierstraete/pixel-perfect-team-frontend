import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductByCategory from '../components/ProductByCategory';

const PaginationView = ({products}) => {
    console.log(products);
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <ProductByCategory products={currentProducts} />
            <div className='flex items-center gap-4'>
                <div>
                    <FaArrowLeft onClick={() => handlePageChange(currentPage - 1)} />
                </div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <div>
                    <FaArrowRight onClick={() => handlePageChange(currentPage + 1)} />
                </div>
            </div>
        </div>
    );
};

export default PaginationView;
