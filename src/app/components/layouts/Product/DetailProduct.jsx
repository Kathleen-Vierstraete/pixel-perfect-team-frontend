import { CharactProduct } from './CharactProduct';
import { DescriptionProduct } from './DescriptionProduct';

function DetailProduct({ product }) {
 
  return (
    <div className='flex mx-10 flex-col gap-6 lg:flex-row'>
        <DescriptionProduct text={product.description} />
        <CharactProduct product={product} />
        
    </div>
  )
}

export default DetailProduct;