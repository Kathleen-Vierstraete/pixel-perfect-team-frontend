import { CharactDetail } from "./CharactDetail";

export const DescriptionDetailProduct = ({ product }) => {

    return (
        <>
            <div className='p-4 rounded-lg bg-secondary text-white flex gap-x-16 '>
                <span className='hover:underline'>Description</span>
                <span className='hover:underline'>Caractéristiques</span>
                <span className='hover:underline'>Avis Client</span>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className='underline'>Description</h3>
                <div className='bg-secondary text-white rounded-lg p-4'>
                    {product.description}
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className='underline'>Caractéristiques</h3>
                <CharactDetail product={product} />
            </div>
        </>
    );
}