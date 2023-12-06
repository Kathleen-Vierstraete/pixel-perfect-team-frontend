import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductSingle from './../components/Product/ProductSingle';
import apiBackEnd from './../api/backend/api.Backend';
import { URL_PRODUCT_BY_ID } from '../constants/urls/urlBackEnd';
import ProductDetaille from '../components/layouts/ProductDetaille';

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
        <div className=''>
            <div className='justify-around items-center mt-10 flex flex-col lg:flex-row'>
                <div className='bg-red-600 h-60 w-5/6'></div>
                <ProductSingle product={product} />
            </div>
            <div className='lg:hidden'>
                <br />
                <hr />
                <br />
            </div>
            <ProductDetaille product={product}/>


        </div>
    );
};

export default ProductSingleView;