import { FaEye } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

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
                <div key={index} className={`relative rounded-xl ${getGridPositionBottom(index)}`}>
                    <img src={product.pictures[0].url} alt={product.name} className="w-full h-full object-cover rounded-xl" />
                    <div className='absolute inset-0 p-2 m-4 flex flex-col justify-between'>
                        <span className="gap-2 bg-slate-500 bg-opacity-40 rounded-2xl text-white text-center font-bold text-xl">
                            {product.name}
                        </span>
                        <div className='flex justify-between hover:cursor-pointer' onClick={() => navigateProduct(product.id)} >
                            <div className='bg-primary-light p-2 rounded-full'>
                                <FaEye size={35} color='white' />
                            </div>
                            <div onClick={() => dispatch(addItem({ id: product.id, quantity: 1, name: product.name, image: product.pictures[0].url, price: product.price }))}
                                className="self-end p-2 rounded-full bg-secondary hover:cursor-pointer">
                                <LiaShoppingCartSolid size={35} color='black' />
                            </div>
                        </div>
                    </div>

                </div>))}
        </div>
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
