import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { URL_PRODUCT_BY_ID } from "../../constants/urls/urlFrontEnd";
import { CardProduct } from "./CardProduct";

export const BottomProduct = ({ products }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getRandomProducts = (count) => {
        const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
        return shuffledProducts.slice(0, count);
    };
    const navigateProduct = (id) => {
        navigate(URL_PRODUCT_BY_ID(id));
    }
    const randomProductsBottom = getRandomProducts(5);
    return (
        <div className="grid grid-cols-2 grid-rows-5 gap-2 lg:grid-cols-6 lg:grid-rows-2">
            {randomProductsBottom.map((product, index) => (
                <CardProduct key={index} product={product} position={getGridPositionBottom(index)} />
            ))}
        </div >
    );
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
