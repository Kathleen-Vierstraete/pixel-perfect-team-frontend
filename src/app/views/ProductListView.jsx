import React, { useEffect, useState } from 'react';
import { URL_BACK_PRODUCT } from '../constants/urls/urlBackEnd';
import apiBackEnd from './../api/backend/api.Backend';
import ProductList from '../components/Product/ProductList'; 

const ProductListView = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        apiBackEnd.get(URL_BACK_PRODUCT)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, []);
    

    return (
        <div className='container mx-auto'>
            <ProductList products={products} />
        </div>
    );
};

export default ProductListView;
