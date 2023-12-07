import React from 'react'
import Aside from './Aside'
import AsideMenu from './AsideMenu';

const ProductSingle = ({product}) => {
  return (
    <div className='w-full'>
        {product && <Aside key={product.id} product={product} />}
        <AsideMenu />
    </div>
  )
}

export default ProductSingle