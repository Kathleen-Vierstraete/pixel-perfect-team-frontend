import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from 'react'

export const DescriptionProduct = ({text}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex flex-col w-full p-4  border border-black rounded-3xl'>
            <button className='bg-white flex justify-between items-center font-bold text-lg tracking-wider'
                onClick={() => setIsOpen((prev) => !prev)}>
                DESCRIPTION{!isOpen ? <FaAngleDown /> : (<FaAngleUp />)}</button>
            {isOpen && (
                <div className='mt-4'>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}