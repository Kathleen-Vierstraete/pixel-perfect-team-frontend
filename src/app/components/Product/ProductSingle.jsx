import React from 'react'
import Aside from '../layouts/Product/Aside'
import AsideMenu from '../layouts/Product/AsideMenu';

const ProductSingle = ({product}) => {
  return (
    <div className='w-full'>
        {product && <Aside key={product.id} product={product} />}
        <AsideMenu />
    </div>
  )
}

export default ProductSingle