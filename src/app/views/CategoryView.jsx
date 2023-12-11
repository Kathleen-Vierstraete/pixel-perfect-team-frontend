import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/animation/Spinner";
import PaginationView from "./PaginationView";

const CategoryView = ({}) => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/categories/${params.id}/products`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="m-5 flex flex-col gap-5">
      <h1 className="font-SilkScreen underline">
        {products[0].category.label}
      </h1>
      <PaginationView products={products} />
    </div>
  );
};

export default CategoryView;
