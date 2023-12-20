import { LiaShoppingCartSolid } from "react-icons/lia";
import { URL_PRODUCT_BY_ID } from "../../constants/urls/urlFrontEnd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import{ addItem } from "../../redux-store/cartSlice"

export const CardProduct = ({ product, position }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let picture = "";
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    const navigateProduct = (id) => {
        navigate(URL_PRODUCT_BY_ID(id));
        scrollToTop()
    }

    if (product.pictures && product.pictures.length > 0) {
        picture = product.pictures[0].url;
    } else if (product.url) {
        picture = product.url;
    }

    return (
        <div className={`relative rounded-xl ${position}`}>
            <img src={picture} alt={product.name} className="select-none w-full h-full object-cover rounded-xl min-h-[13vh]" />
            <div className='absolute inset-0 p-2 m-4 flex flex-col justify-between'>
                <span className="gap-2 bg-slate-500 bg-opacity-40 rounded-2xl text-white text-center font-bold text-xl">
                    {product.name}
                </span>
                <div className='flex justify-between hover:cursor-pointer'  >
                    <div className='bg-primary-light p-2 rounded-full' onClick={() => navigateProduct(product.id)}>
                        <FaEye size={35} color='white' />
                    </div>
                    <div onClick={() => dispatch(addItem({ id: product.id, quantity: 1, name: product.name, image: picture, price: product.price }))}
                        className="self-end p-2 rounded-full bg-secondary hover:cursor-pointer">
                        <LiaShoppingCartSolid size={35} color='black' />
                    </div>
                </div>
            </div>

        </div>
    );
}