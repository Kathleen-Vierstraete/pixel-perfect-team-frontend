import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductSingle from './../components/Product/ProductSingle';
import apiBackEnd from './../api/backend/api.Backend';
import { URL_PRODUCT_BY_ID } from '../constants/urls/urlBackEnd';

const ProductSingleView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        apiBackEnd.get(URL_PRODUCT_BY_ID(id))
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, [id]);

    return (
        <div className='container mx-auto'>
            <ProductSingle product={product} />
        </div>
    );
};

export default ProductSingleView;