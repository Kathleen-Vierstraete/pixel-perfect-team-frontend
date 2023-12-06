import React from 'react'
import { IoCard } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

function AsideMenu() {
    return (
        <div className='grid grid-rows-4'>
            <div className="grid grid-cols-4 border-2 p-4 h-20 items-center justify-center border-gray-300 mx-auto mt-5 mr-5 ml-5 max-w-md rounded-md shadow-md">
                <IoCard className="col-span-1" />
                <div className="font-bold col-span-2">Paiement en x4</div>
                <button className="col-span-1 text-blue-500 rounded-full">en savoir +</button>
            </div>
            <div className="grid grid-cols-4 border-2 p-4 h-20 items-center justify-center border-gray-300 mx-auto mt-5 mr-5 ml-5 max-w-md rounded-md shadow-md">
                <IoCard className="col-span-1" />
                <div className="col-span-3 font-bold text-center">Paiement en plusieurs fois</div>
            </div>

            <div className="grid grid-cols-5 gap-2 grid-rows-1 border-2 p-4 h-20 items-center justify-center border-gray-300 mx-auto mt-5 mr-5 ml-5 max-w-md rounded-md shadow-md">
                <TbTruckDelivery className="col-span-1"/>
                <div className="font-bold col-span-1">Livraison</div>
                <button className="col-span-3 text-yellow-500 rounded-full">Options de livraison</button>
            </div>
            <div className="border-2 border-gray-300 mx-auto p-4 items-center justify-center h-20 mt-5 mr-5 ml-5 max-w-md rounded-md shadow-md">
                <div className="font-bold">Bénéficiez jusqu’à -10% de réduction avec la PixelCard !</div>
            </div>
        </div>
    )
}

export default AsideMenu