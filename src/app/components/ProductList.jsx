import React from 'react';
import ProductListItem from './ProductListItem';


const ProductList = ({ products }) => {
    return (
        <div className='grid lg:grid-cols-4'>
            {products.map((product) => (
                <ProductListItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
