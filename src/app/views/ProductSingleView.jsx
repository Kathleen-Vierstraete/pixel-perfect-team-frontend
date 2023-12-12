import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductSingle from './../components/Product/ProductSingle';
import apiBackEnd from './../api/backend/api.Backend';
import { URL_PRODUCT_BY_ID } from '../constants/urls/urlBackEnd';
import DetailProduct from '../components/Product/DetailProduct';
import ProductCarousel from '../components/carrousel/ProductCarrousel';
import { Spinner } from '../components/animation/Spinner';

const ProductSingleView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let picture = "";
    
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

    if (product.product && product.product.pictures.length > 0) {
        picture = product.product.pictures[0].url;
    } else if (product.url) {
        picture = product.product.url;
    }

    return (
        <div className=''>
            {isLoading ? (
                <Spinner message="Cet article n'existe pas" redirect404={false}/>
            ) : (
                <div className='relative'>
                    <div className="grid grid-cols-1 grid-rows-3 gap-6 px-10 items-start lg:grid-cols-3 lg:grid-rows-2 px">
                        <img className='self-center w-full border rounded-3xl lg:col-span-2' src={picture} alt={product.product.name} />
                        <div className="lg:col-start-3 lg:row-start-1 lg:sticky lg:top-40 xl:top-36">
                            <ProductSingle product={product.product} />
                        </div>
                        <div className=" lg:col-span-2 lg:col-start-1 lg:row-start-2">
                            <DetailProduct product={product.product} />
                        </div>
                    </div>
                    <div className='px-10'>
                        <h4 className="text-2xl font-medium">ARTICLES SIMILAIRES</h4>
                        <ProductCarousel products={product.similarProduct} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductSingleView;