import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4001/api/products";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <h3>Available Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
