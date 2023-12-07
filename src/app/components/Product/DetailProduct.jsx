import { CharactProduct } from './CharactProduct';
import { DescriptionDetailProduct } from './DescriptionDetailProduct';
import { DescriptionProduct } from './DescriptionProduct';

function DetailProduct({ product }) {

  return (
    <div>
      <div className='flex flex-col gap-6 lg:hidden'>
        <DescriptionProduct text={product.description} />
        <CharactProduct product={product} />
      </div>

      <div className='hidden lg:block'>
        <DescriptionDetailProduct product={product}/>
      </div>

    </div>
  )
}

export default DetailProduct;