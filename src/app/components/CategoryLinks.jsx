import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryLinks = ({}) => {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/categories/${params.id}/products`)
            .then(res => {
                // console.log(res.data)
                setProducts(res.data)
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err)
            })
    }, [params.id])

    return (
        isLoading ? (
            <p>Loading...</p>
        ) : (
            <div>
              <div className="text-2xl underline">{products[0].category.label}</div>
                <ul>
                    {products.map((product) => (
                        <div key={product.id}>
                            <li>{product.name}</li>
                        </div>
                    ))}
                </ul>
            </div>
        )
    );
};

export default CategoryLinks;
