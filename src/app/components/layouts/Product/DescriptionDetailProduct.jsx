export const DescriptionDetailProduct = ({product}) => {

    const haveMultipleCreators = product.creators.length === 1;

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
                <div className='text-white rounded-lg'>
                    <div className="text-lg font-semibold flex flex-col gap-4">
                        {product.editor.name === "none" ? (<></>) : (
                            <div className="bg-secondary p-4 rounded-xl flex justify-between">
                                <span >ÉDITEUR</span>
                                <span >test</span>
                            </div>
                        )}
                        <div className="bg-secondary-light p-4 rounded-xl flex justify-between">
                            <span >CRÉATEUR</span>
                            {haveMultipleCreators ? (
                                <span >{product.creators[0].name}</span>
                            ) : <div>{
                                product.creators.map(creator => (
                                    <span key={creator.id}>{creator.name} | </span>
                                ))
                            }</div>}

                        </div>

                        <div className="bg-secondary p-4 rounded-xl flex justify-between">
                            <span >DATE DE SORTIE</span>
                            <span >{product.creationDate}</span>
                        </div>

                        <div className="bg-secondary-light p-4 rounded-xl flex justify-between">
                            <span >REFERENCE</span>
                            <span >{product.reference}</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}