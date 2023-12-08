import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/animation/Spinner";
import ProductList from "../components/Product/ProductList";

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

  // TODO : gérer l'erreur en cas d'ID non trouvé en BDD

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <div className="text-2xl underline">{products[0].category.label}</div>
        <ProductList products={products} />
    </div>
  );
};

export default CategoryView;
