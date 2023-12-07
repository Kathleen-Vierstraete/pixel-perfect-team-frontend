import { useEffect, useState } from "react";
import { URL_BACK_PRODUCT } from "../constants/urls/urlBackEnd";
import ProductList from "../components/Product/ProductList";
import apiBackEnd from "../api/backend/api.Backend";
import { Spinner } from "../components/animation/Spinner";

const HomeView = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiBackEnd.get(URL_BACK_PRODUCT)
            .then(response => {
                setProducts(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, []);


    return (
        isLoading ? (
            <Spinner />
        ) : (
            <div className='container mx-auto'>
                <ProductList products={products} />
            </div>
        ));
};

export default HomeView;
