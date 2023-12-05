import { LiaShoppingCartSolid } from "react-icons/lia";

const ProductForCarrousel = ({ name, price }) => {
    return (
        <div className="p-4 w-full flex flex-col gap-2">
            <div className="bg-gray-200 h-36 flex items-center justify-center">
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-xl font-medium">{price / 100}€</span>
                    <span className="text-xl">{name}</span>
                </div>
                <div className="p-2 rounded-full bg-secondary">
                    <LiaShoppingCartSolid size={35} />
                </div>
            </div>
        </div>
    );
}

export default ProductForCarrousel;