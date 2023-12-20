import { LiaShoppingCartSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux-store/cartSlice";
import { useNavigate } from "react-router";
import { URL_PRODUCT_BY_ID } from "../../constants/urls/urlFrontEnd";

const ProductForCarrousel = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let picture = "";

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const navigateProduct = (id) => {
        navigate(URL_PRODUCT_BY_ID(id));
        scrollToTop();
    }

    if (product.pictures && product.pictures.length > 0) {
        picture = product.pictures[0].url;
    } else if (product.url) {
        picture = product.url;
    }

    return (
        <div className="p-4 flex flex-col gap-4">
            <div className="drop-shadow-lg rounded-xl  h-80 w-full flex items-baseline justify-center  hover:cursor-pointer" onClick={() => navigateProduct(product.id)}>
                <img loading="lazy" src={picture} alt={product.name} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col hover:cursor-pointer" onClick={() => navigateProduct(product.id)}>
                    <span className="text-xl font-medium">{product.price / 100}€</span>
                    <span className="text-xl">{product.name}</span>
                </div>
                <div onClick={() => dispatch(addItem({ id: product.id, quantity: 1, name: product.name, image: picture, price: product.price }))}
                    className="p-2 rounded-full bg-secondary hover:cursor-pointer">
                    <LiaShoppingCartSolid size={35} />
                </div>
            </div>
        </div>

    );
}

export default ProductForCarrousel;