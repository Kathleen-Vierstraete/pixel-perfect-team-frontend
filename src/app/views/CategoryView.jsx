import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/animation/Spinner";
import ProductByCategory from "../components/ProductByCategory";
import { useDispatch } from "react-redux";
import { setProduct } from "../redux-store/productSlice";

const CategoryView = ({ }) => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/categories/${params.id}/products`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
        dispatch(setProduct(res.data))
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <div className="text-2xl underline">{products[0].category.label}</div>
      <ProductByCategory products={products} />
    </div>
  );
};

export default CategoryView;
