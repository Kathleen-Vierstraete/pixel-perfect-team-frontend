import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux-store/cartSlice';

function centimesToEuros(centimes) {
    return centimes / 100;
}
function Aside({ product }) {
    const dispatch = useDispatch();
    const prixEnEuros = centimesToEuros(product.price);
    const descriptionCourte = `${product.description.slice(0, 49)}...`;
    return (
        <div className="border p-4 border-black rounded-3xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <div>
                <p className="mb-4">
                    {descriptionCourte}
                </p>
                <button className="text-blue-500">
                    Voir plus
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4">
                <p className="text-lg col-span-1 flex items-center justify-center text-blue-600">
                    {prixEnEuros}€
                </p>
                <button onClick={() => dispatch(addItem({ id: product.id, quantity: 1, name: product.name, image: product.pictures[0].url, price: product.price }))} className="bg-blue-500 col-span-2 text-white px-4 py-2 rounded">
                    Ajouter au panier
                </button>
            </div>
        </div>
    )
};




export default Aside