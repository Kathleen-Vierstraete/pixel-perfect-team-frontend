import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux-store/cartSlice';
import { FaCheck } from "react-icons/fa";

function centimesToEuros(centimes) {
    return centimes / 100;
}
function Aside({ product }) {
    const dispatch = useDispatch();
    const prixEnEuros = centimesToEuros(product.price);
    const descriptionCourte = `${product.description.slice(0, 49)}...`;
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const addProduct = () => {
        dispatch(addItem({ id: product.id, quantity: quantity, name: product.name, image: product.pictures[0].url, price: product.price }));
        setIsAdded(true);
    }
    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10));
    }
    useEffect(() => {
        if (isAdded) {
            // Reset isAdded after a delay to show the animation
            const timeoutId = setTimeout(() => {
                setIsAdded(false);
            }, 800); // Adjust the delay as needed
            return () => clearTimeout(timeoutId);
        }
    }, [isAdded])

    return (
        <div className="flex flex-col items-start gap-2 border p-4 border-black rounded-3xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <div>
                <p>
                    {descriptionCourte}
                </p>
                <button className="text-blue-500">
                    Voir plus
                </button>
            </div>
            <div>
                <input
                    className='rounded-3xl w-4/5'
                    type="number"
                    value={quantity}
                    min={1}
                    max={product.stock}
                    onChange={handleQuantityChange} />
            </div>
            <div className="w-full flex items-center justify-start gap-6">
                <p className="text-lg col-span-1 flex items-center justify-center text-blue-600">
                    {prixEnEuros}€
                </p>
                <button
                    className="bg-white col-span-2 text-primary border border-primary px-4 py-2 rounded-md hover:text-white hover:bg-primary"
                    onClick={addProduct} >
                    Ajouter au panier
                </button>
                {
                    isAdded && <FaCheck size={30} className='text-green-700 animate-ping' />
                }
            </div>
        </div>
    )
};

export default Aside