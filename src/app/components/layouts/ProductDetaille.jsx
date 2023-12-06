import React from 'react'
import MenuDetaille from './MenuDetaille'

function ProductDetaille(props) {
  // const { product } = props.product || {};
  return (
    <div className='flex md:flex-col flex-row items-center justify-center'>
      {<MenuDetaille key={props.product.id} product={props.product}/>   } 
    </div>
  )
}

export default ProductDetaille