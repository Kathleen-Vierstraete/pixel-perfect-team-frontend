import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from 'react'

export const CharactProduct = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);
    const haveMultipleCreators = product.creators.length === 1;

    console.log(product);

    return (
        <div className='flex flex-col w-full p-4  border border-black rounded-3xl'>
            <button className='bg-white flex justify-between items-center font-bold text-lg tracking-wider'
                onClick={() => setIsOpen((prev) => !prev)}>
                CARACTÉRISTIQUES{!isOpen ? <FaAngleDown /> : (<FaAngleUp />)}</button>
            {isOpen && (
                <div className="text-lg font-semibold flex flex-col gap-4">
                    {product.editor.name === "none" ? (<></>) : (
                        <div className="bg-slate-300 p-4 rounded-xl flex justify-between">
                            <span >ÉDITEUR</span>
                            <span >test</span>
                        </div>
                    )}
                    <div className="bg-slate-100 p-4 rounded-xl flex justify-between">
                        <span >CRÉATEUR</span>
                        {haveMultipleCreators ? (
                            <span >{product.creators[0].name}</span>
                        ) : <div>{
                            product.creators.map(creator => (
                                <span key={creator.id}>{creator.name} | </span>
                            ))
                        }</div>}

                    </div>

                    <div className="bg-slate-300 p-4 rounded-xl flex justify-between">
                        <span >DATE DE SORTIE</span>
                        <span >{product.creationDate}</span>
                    </div>

                    <div className="bg-slate-100 p-4 rounded-xl flex justify-between">
                        <span >REFERENCE</span>
                        <span >{product.reference}</span>
                    </div>

                </div>
            )}
        </div>
    );
}