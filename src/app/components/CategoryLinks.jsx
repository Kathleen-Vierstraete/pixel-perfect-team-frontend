import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryLinks = ({}) => {

    //defining the param const to then retreive the info from the url, in this case the id
    const params = useParams();
    
    //setting the const products and setProduct via the useState
    const [products, setProducts] = useState([])
    
    //getting the info/data from the API 
        useEffect(()=> {
            axios.get(`http://localhost:8000/api/categories/${params.id}/products`) //inserting the param id to get the right API
            .then(res => {
                console.log(res)
                setProducts(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }, [params.id])

  return (
    <div>
      <div></div>
      <ul>
        {products.map((product) => (
            <div><li>{product.name}</li>
            <li>{product.category.id}</li></div>
        ))}
      </ul>
    </div>
  );
};

export default CategoryLinks;
