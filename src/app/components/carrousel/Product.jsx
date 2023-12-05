import { LiaShoppingCartSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux-store/cartSlice";

const ProductForCarrousel = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div className="p-4 w-full flex flex-col gap-4">
            <div className="drop-shadow-lg  rounded-xl h-36 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full" />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-xl font-medium">{product.price / 100}€</span>
                    <span className="text-xl">{product.name}</span>
                </div>
                <div onClick={() => dispatch(addItem({ id: product.id, quantity: 1, name: product.name, image: product.image, price:product.price }))} 
                className="p-2 rounded-full bg-secondary hover:cursor-pointer">
                    <LiaShoppingCartSolid size={35} />
                </div>
            </div>
        </div>
    );
}

export default ProductForCarrousel;