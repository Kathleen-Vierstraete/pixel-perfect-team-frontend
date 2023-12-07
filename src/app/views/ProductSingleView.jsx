import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductSingle from './../components/Product/ProductSingle';
import apiBackEnd from './../api/backend/api.Backend';
import { URL_PRODUCT_BY_ID } from '../constants/urls/urlBackEnd';
import DetailProduct from '../components/Product/DetailProduct';
import Aside from '../components/Product/Aside';
import AsideMenu from '../components/Product/AsideMenu';

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
                <div className='relative'>
                    <div className=" grid grid-cols-1 grid-rows-3 gap-6 px-10 lg:grid-cols-3 lg:grid-rows-2 px">
                        <img className='self-center w-full border rounded-3xl lg:col-span-2' src={product.product.pictures[0].url} alt={product.product.name} />
                        <div className="lg:col-start-3 lg:row-start-1 lg:sticky lg:top-10">
                            <ProductSingle product={product.product} />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2">
                            <DetailProduct product={product.product} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductSingleView;