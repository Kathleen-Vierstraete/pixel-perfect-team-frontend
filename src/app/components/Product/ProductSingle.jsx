import React from 'react'
import Aside from '../layouts/Aside'


const ProductSingle = ( props ) => {
  const { product } = props.product || {};

  return (
    <div className='grid lg:grid-cols-4 mt-10'>
      {product && <Aside key={product.id} product={product} />}
    </div>

    )
}


export default ProductSingle