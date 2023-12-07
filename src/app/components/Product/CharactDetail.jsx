export const CharactDetail = ({product}) => {

    const haveMultipleCreators = product.creators.length === 1;

    return (
        <div className='text-white rounded-lg'>
            <div className="text-lg font-semibold flex flex-col gap-4">
                {product.editor.name === "none" ? (<></>) : (
                    <div className="bg-secondary-dark p-4 rounded-xl flex justify-between">
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
                <div className="bg-secondary-dark p-4 rounded-xl flex justify-between">
                    <span >DATE DE SORTIE</span>
                    <span >{product.creationDate}</span>
                </div>
                <div className="bg-secondary-light p-4 rounded-xl flex justify-between">
                    <span >REFERENCE</span>
                    <span >{product.reference}</span>
                </div>
            </div>
        </div>
    );
}