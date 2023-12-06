import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductSingle from './../components/Product/ProductSingle';
import apiBackEnd from './../api/backend/api.Backend';
import { URL_PRODUCT_BY_ID } from '../constants/urls/urlBackEnd';
import DetailProduct from '../components/layouts/Product/DetailProduct';

const ProductSingleView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiBackEnd.get(URL_PRODUCT_BY_ID(id))
            .then(response => {
                setProduct(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, [id]);

    return (
        <div className=''>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className='justify-around items-center mt-10 px-10 flex flex-col lg:flex-row'>
                        <img className='w-full  border rounded-3xl' src={product.product.pictures[0].url} alt={product.product.name} />
                        <ProductSingle product={product.product} />
                    </div>
                    <div className='lg:hidden'>
                        <br />
                        <hr />
                        <br />
                    </div>
                    <DetailProduct product={product.product} />
                </div>
            )}
        </div>
    );
};

export default ProductSingleView;