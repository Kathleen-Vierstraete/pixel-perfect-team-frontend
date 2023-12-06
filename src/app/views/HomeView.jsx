import { useEffect, useState } from "react";
import { URL_BACK_PRODUCT } from "../constants/urls/urlBackEnd";
import ProductList from "../components/Product/ProductList";
import apiBackEnd from "../api/backend/api.Backend";

const HomeView = () => {
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

export default HomeView;
