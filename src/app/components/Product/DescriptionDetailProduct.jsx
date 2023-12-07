import { useState } from "react";
import { CharactDetail } from "./CharactDetail";

export const DescriptionDetailProduct = ({ product }) => {
    const [descriptionIsOpen, setDescriptionIsOpen] = useState(false);
    const [charactIsOpen, setCharactIsOpen] = useState(false);

    function toogle(type) {
        if (type === "description") {
            setCharactIsOpen(false)
            setDescriptionIsOpen(true)
        }
        if (type === "charact") {
            setDescriptionIsOpen(false)
            setCharactIsOpen(true)
        }
    }

    return (
        <>
            <div className='p-4 rounded-lg bg-secondary-dark text-white flex gap-x-16 '>
                <button className='hover:underline focus:underline' onClick={() => toogle("description")}>Description</button>
                <button className='hover:underline focus:underline' onClick={() => toogle("charact")}>Caractéristiques</button>
            </div>

            {descriptionIsOpen &&
                <div className='flex flex-col gap-4'>
                    <h3 className='underline'>Description</h3>
                    <div className='bg-secondary-dark text-white rounded-lg p-4'>
                        {product.description}
                    </div>
                </div>}

            {charactIsOpen &&
                <div className='flex flex-col gap-4'>
                    <h3 className='underline'>Caractéristiques</h3>
                    <CharactDetail product={product} />
                </div>}
        </>
    );
}