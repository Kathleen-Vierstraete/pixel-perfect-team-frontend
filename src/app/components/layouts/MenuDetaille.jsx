import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function DropDownDetaille(props) {
    const { product } = props.product || {};
    const [isOpen, setIsOpen] = useState(false);
    // const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    return (
        
        <div className='relative flex flex-col w-[340px] h-[340px]'>
            <button onClick={() => setIsOpen((prev) => !prev)} className='bg-white border-2 border-gray-300 p-4 w-full flex items-center justify-center font-bold text-lg rounded-lg tracking-wider'>Description{!isOpen ? <FaAngleDown /> : (<FaAngleUp />)}</button>
            {isOpen && (
                <div className='border-2 border-gray-300 rounded-lg'>
                    <p>{product.description}</p>
                </div>

            )}
        </div>





    )
}

export default DropDownDetaille