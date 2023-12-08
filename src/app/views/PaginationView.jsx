import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PaginationView = () => {
    const productList = Array.from({ length: 50 }, (_, index) => ({ id: index + 1, name: `Produit ${index + 1}` }));
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(productList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = productList.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <h1>Liste de Produits</h1>
            <ul>
                {currentProducts.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

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
