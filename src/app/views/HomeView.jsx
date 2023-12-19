import { useEffect, useState } from "react";
import { URL_BACK_PRODUCT } from "../constants/urls/urlBackEnd";
import apiBackEnd from "../api/backend/api.Backend";
import { Spinner } from "../components/animation/Spinner";
import { FirstProduct } from "../components/Product/FirstProduct";
import ProductCarousel from "../components/carrousel/ProductCarrousel";
import { AvantagePP } from "../components/Product/AvantagePP";
import { BottomProduct } from "../components/Product/BottomProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setProduct } from "../redux-store/productSlice";

const HomeView = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getTop10ExpensiveProducts = (count) => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        const top10ExpensiveProducts = sortedProducts.slice(0, count);
        return top10ExpensiveProducts;
    };
    const expensiveProducts = getTop10ExpensiveProducts(10);

    useEffect(() => {
        apiBackEnd.get(URL_BACK_PRODUCT)
            .then(response => {
                setProducts(response.data);
                setIsLoading(false);
                dispatch(setProduct(response.data))
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, []);

    return (
        isLoading ? (
            <Spinner message="Aucun produits" />
        ) : (
            <div className='container mx-auto'>
                <div className='flex flex-col gap-4 px-5'>
                <FirstProduct products={products} />
                <div>
                    <h4 className="text-2xl font-medium">NOS PRODUIT PHARE</h4>
                    <ProductCarousel products={expensiveProducts} />
                </div>
                <AvantagePP />
                <BottomProduct products={products} />
            </div >
            </div>
        ));
};

export default HomeView;
