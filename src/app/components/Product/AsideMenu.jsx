import React from 'react'
import { IoCard } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

function AsideMenu() {
    return (
        <div className='flex flex-col mt-5 gap-4'>
            <div className="flex justify-between items-center p-5 border border-black   rounded-3xl  shadow-md">
                <div className='flex items-center gap-6'>
                    <IoCard size={40} />
                    <div className="font-bold col-span-2">Paiement en x4</div>
                </div>
                <button className="text-blue-500 rounded-full">en savoir +</button>
            </div>

            <div className="flex gap-6 items-center p-5 border border-black  rounded-3xl  shadow-md">
                <IoCard size={40} />
                <div className="font-bold text-center">Paiement en plusieurs fois</div>
            </div>

            <div className="flex justify-between items-center gap-10 p-5 border border-black  rounded-3xl  shadow-md">
                <div className='flex items-center gap-6'>
                    <TbTruckDelivery size={40} />
                    <div className="font-bold">Livraison</div>
                </div>
                <button className="text-yellow-500 rounded-full">Options de livraison</button>
            </div>

            <div className="flex items-center gap-6 p-5 border border-black  rounded-3xl shadow-md">
                <IoCard size={40} />
                <p className="font-bold">Bénéficiez jusqu’à -10% de réduction avec la PixelCard !</p>
                <div></div>
            </div>
        </div>
    )
}

export default AsideMenu