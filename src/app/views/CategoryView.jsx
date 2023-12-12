import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/animation/Spinner";
import PaginationView from "./PaginationView";
import apiBackEnd from "../api/backend/api.Backend";
import ProductCarousel from "../components/carrousel/ProductCarrousel";
import {
  URL_BACK_PRODUCTS_BY_TAGS,
  URL_BACK_PRODUCT_BY_CATEGORY,
} from "../constants/urls/urlBackEnd";

const CategoryView = ({}) => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const productIds = () => {
    let test = products.map((item) => item.id).join(",");
    return test;
  };

  // Getting the products by their category
  useEffect(() => {
    apiBackEnd
      .get(URL_BACK_PRODUCT_BY_CATEGORY(params.id))
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Getting the similar products
  useEffect(() => {
    if (products.length > 0) {
      console.log(productIds());
      apiBackEnd
        .post(URL_BACK_PRODUCTS_BY_TAGS, {
          product_ids: [productIds()],
        })
        .then((response) => {
          setSimilarProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products By tags", error);
        });
    }
  }, [products]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="m-5 flex flex-col gap-5">
      <h1 className="font-SilkScreen underline">
        {products[0].category.label}
      </h1>
      <PaginationView products={products} />

      {/* TODO : les produits similaires sont juste les produits de la catégorie */}

      <div>
        <h4 className="text-2xl font-medium">PRODUITS SIMILAIRES</h4>
        <ProductCarousel products={similarProducts} />
      </div>
    </div>
  );
};

export default CategoryView;
