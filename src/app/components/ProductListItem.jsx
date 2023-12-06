import React from 'react';


const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm mx-4 my-4 bg-white rounded overflow-hidden shadow-lg" key={product.id}>
      <h2 className="text-xl text-center font-bold p-4 bg-gray-800 text-white">{product.name}</h2>
      <div className="px-6 py-4">
        <p className="text-gray-700"><strong>Reference:</strong> {product.reference}</p>
        <p className="text-gray-700"><strong>Price:</strong> {product.price}</p>
        <p className="text-gray-700"><strong>Description:</strong> {product.description}</p>
        <p className="text-gray-700"><strong>Stock:</strong> {product.stock}</p>
        <p className="text-gray-700"><strong>Dimensions:</strong> {product.length} x {product.height} x {product.width}</p>
        <p className="text-gray-700"><strong>Weight:</strong> {product.weight}</p>
        <p className="text-gray-700"><strong>Creation Date:</strong> {product.creation_date}</p>
        <p className="text-gray-700"><strong>Archived:</strong> {product.is_archived ? 'Yes' : 'No'}</p>
        <p className="text-gray-700"><strong>Collector:</strong> {product.is_collector ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default ProductCard;
