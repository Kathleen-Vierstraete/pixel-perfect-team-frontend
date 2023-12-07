import React from 'react';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { addItem } from '../../redux-store/cartSlice';
import { useDispatch } from 'react-redux';
import ProductCarousel from '../carrousel/ProductCarrousel';
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from 'react-router';
import { URL_BACK_PRODUCT } from '../../constants/urls/urlBackEnd';
import { URL_PRODUCT_BY_ID } from '../../constants/urls/urlFrontEnd';
import { FaEye } from "react-icons/fa";

const ProductList = ({ products }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getRandomProducts = (count) => {
        const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
        return shuffledProducts.slice(0, count);
    };
    const getTop10ExpensiveProducts = (count) => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        const top10ExpensiveProducts = sortedProducts.slice(0, count);
        return top10ExpensiveProducts;
    };
    const navigateProduct = (id) => {
        navigate(URL_PRODUCT_BY_ID(id));
    }


    const expensiveProducts = getTop10ExpensiveProducts(10);
    const randomProducts = getRandomProducts(10);
    const randomProductsBottom = getRandomProducts(5);

    return (
        <div className='flex flex-col gap-4 px-5'>
            <div className="grid grid-cols-2 grid-rows-14 gap-2 lg:grid-cols-6 lg:grid-rows-3">
                {randomProducts.map((product, index) => (
                    <div key={index} className={`relative rounded-xl ${getGridPosition(index)}`}>
                        <img src={product.pictures[0].url} alt={product.name} className="w-full h-full object-cover rounded-xl" />
                        <div className='absolute inset-0 p-2 m-4 flex flex-col justify-between'>
                            <span className="gap-2 bg-slate-500 bg-opacity-40 rounded-2xl text-white text-center font-bold text-xl">
                                {product.name}
                            </span>
                            <div className='flex justify-between hover:cursor-pointer' onClick={() => navigateProduct(product.id)} >
                                <div className='bg-primary-light p-2 rounded-full'>
                                    <FaEye size={35} color='white'  />
                                </div>
                                <div onClick={() => dispatch(addItem({ id: product.id, quantity: 1, name: product.name, image: product.pictures[0].url, price: product.price }))}
                                    className="self-end p-2 rounded-full bg-secondary hover:cursor-pointer">
                                    <LiaShoppingCartSolid size={35} color='black' />
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <div>
                <h4 className="text-2xl font-medium">NOS PRODUIT PHARE</h4>
                <ProductCarousel products={expensiveProducts} />
            </div>

            <div className='flex flex-col gap-4'>
                <h4 className="text-2xl font-medium uppercase">Profitez des services pixel perfect</h4>
                <div className='flex flex-col gap-4 lg:flex-row'>
                    <div className='flex gap-4 bg-secondary p-4 rounded-3xl'>
                        <TbTruckDelivery size={100} />
                        <div>
                            <h5 className='text-xl font-semibold'>Paiement 4X sans frais</h5>
                            <p className='text-lg font-semibold'>Profitez du règlement en plusieurs fois sur des milliers d’articles.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 bg-secondary p-4 rounded-3xl'>
                        <TbTruckDelivery size={100} />
                        <div>
                            <h5 className='text-xl font-semibold'>Paiement 4X sans frais</h5>
                            <p className='text-lg font-semibold'>Profitez du règlement en plusieurs fois sur des milliers d’articles.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 bg-secondary p-4 rounded-3xl'>
                        <TbTruckDelivery size={100} />
                        <div>
                            <h5 className='text-xl font-semibold'>Paiement 4X sans frais</h5>
                            <p className='text-lg font-semibold'>Profitez du règlement en plusieurs fois sur des milliers d’articles.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-5 gap-2 lg:grid-cols-6 lg:grid-rows-2">
                {randomProductsBottom.map((product, index) => (
                    <div key={index} className={`relative rounded-xl ${getGridPositionBottom(index)}`}>
                        <img src={product.pictures[0].url} alt={product.name} className="w-full h-full object-cover rounded-xl" />
                        <div className='absolute inset-0 p-2 m-4 flex flex-col justify-between'>
                            <span className="gap-2 bg-slate-500 bg-opacity-40 rounded-2xl text-white text-center font-bold text-xl">
                                {product.name}
                            </span>
                            <div className='flex justify-between hover:cursor-pointer' onClick={() => navigateProduct(product.id)} >
                                <div className='bg-primary-light p-2 rounded-full'>
                                    <FaEye size={35} color='white'  />
                                </div>
                                <div onClick={() => dispatch(addItem({ id: product.id, quantity: 1, name: product.name, image: product.pictures[0].url, price: product.price }))}
                                    className="self-end p-2 rounded-full bg-secondary hover:cursor-pointer">
                                    <LiaShoppingCartSolid size={35} color='black' />
                                </div>
                            </div>
                        </div>

                    </div>))}
            </div>
        </div >
    );
};

const getGridPosition = (index) => {
    switch (index) {
        case 0:
            return "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2";
        case 1:
            return "row-start-3 lg:row-start-auto lg:col-span-2 lg:col-start-3";
        case 2:
            return "row-span-2 col-start-1 row-start-4 lg:row-span-1 lg:col-span-2 lg:col-start-3 lg:row-start-2";
        case 3:
            return "row-span-3 col-start-2 row-start-3 lg:row-span-2 lg:col-start-5 lg:row-start-1";
        case 4:
            return "col-span-2 row-span-2 row-start-6 lg:col-span-auto lg:row-span-1 lg:col-start-6 lg:row-start-1";
        case 5:
            return "col-span-2 row-span-2 row-start-8 lg:col-span-auto lg:row-span-1 lg:col-start-6 lg:row-start-2";
        case 6:
            return "col-span-2 row-span-2 row-start-10 lg:row-span-1  lg:row-start-3";
        case 7:
            return "row-start-12 lg:col-start-3 lg:row-start-3";
        case 8:
            return "row-span-3 col-start-2 lg:row-span-1 lg:col-start-4 lg:row-start-3";
        case 9:
            return "row-span-2 col-start-1 row-start-13 lg:row-span-1 lg:col-span-2 lg:col-start-5 lg:row-start-3";
        default:
            return "";
    }
};


const getGridPositionBottom = (index) => {
    switch (index) {
        case 0:
            return "col-span-2 lg:col-span-3 lg:row-span-3";
        case 1:
            return "col-span-2 row-start-2 lg:col-start-4 lg:row-start-1";
        case 2:
            return "row-start-3 lg:row-span-2 lg:col-start-4 lg:row-start-2";
        case 3:
            return "row-start-3 lg:row-span-2 lg:col-start-5 lg:row-start-2";
        case 4:
            return "col-span-2 row-start-4 lg:col-span-1 lg:row-span-3 lg:col-start-6 lg:row-start-1";
        default:
            return "";
    }
};

export default ProductList;
