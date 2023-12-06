import React from 'react'
import Aside from '../layouts/Aside'
import AsideMenu from '../layouts/AsideMenu';


const ProductSingle = (props) => {
  const { product } = props.product || {};

  return (
    <div className=''>
        {product && <Aside key={product.id} product={product} />}
        <AsideMenu />
    </div>


  )
}


export default ProductSingle