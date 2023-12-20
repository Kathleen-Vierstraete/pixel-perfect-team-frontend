import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { URL_PRODUCT_BY_ID } from "../constants/urls/urlFrontEnd";
import { addItem } from "../redux-store/cartSlice";

const ProductByCategory = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateProduct = (id) => {
    navigate(URL_PRODUCT_BY_ID(id));
  };

  return (
    <div className="flex flex-col gap-4 px-5">
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div key={index} className={`relative rounded-xl w-full h-72`}>
            <img 
              loading="lazy"
              src={product.pictures[0].url}
              alt={product.name}
              className="select-none w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 p-2 m-4 flex flex-col justify-between">
              <span className="gap-2 bg-slate-500 bg-opacity-40 rounded-2xl text-white text-center font-bold text-xl">
                {product.name}
              </span>
              <div
                className="flex justify-between hover:cursor-pointer"

              >
                <div className="bg-primary-light p-2 rounded-full"
                  onClick={() => navigateProduct(product.id)}>
                  <FaEye size={35} color="white" />
                </div>
                <div
                  onClick={() =>
                    dispatch(
                      addItem({
                        id: product.id,
                        quantity: 1,
                        name: product.name,
                        image: product.pictures[0].url,
                        price: product.price,
                      })
                    )
                  }
                  className="self-end p-2 rounded-full bg-secondary hover:cursor-pointer"
                >
                  <LiaShoppingCartSolid size={35} color="black" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductByCategory;
