// ProductListView.jsx
import React, { useEffect, useState } from 'react';

import apiBackEnd from './../api/backend/api.Backend';
import ProductList from '../components/productList'; 

const ProductListView = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        apiBackEnd.get('/products/')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);
    

    return (
        <div>
            <h2>Product List</h2>
            <ProductList products={products} />
        </div>
    );
};

export default ProductListView;
