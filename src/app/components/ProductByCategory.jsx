import React from "react";

const ProductByCategory = ({products}) => {
  return (
    <div className='grid lg:grid-cols-4'>
      <ul>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductByCategory;
