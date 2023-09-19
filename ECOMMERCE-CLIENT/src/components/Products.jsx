import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap; /*to wrap the products */
  justify-content: space-between;
`;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTU5MDUxYzBhZTEyYWE5YzQ0YjEzOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjMxODU2OCwiZXhwIjoxNjcyNTc3NzY4fQ.50_bxaez64uZZbbPHExGSBi0_hygP1X-QbjbCqf1QDU";
const Products = ({ cat, filters, sort }) => {
  //cat,filters,sort from pages/ProductList.jsx
  // console.log(cat,filters,sort)
  const [products, setProducts] = useState([]); //to define products
  const [filteredProducts, setFilterProducts] = useState([]); //to define the products when filters are modified

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products?category=men", {
          headers: { token: "BEARER "+token },
        });
        console.log(res);
      } catch (err) {}
    };
    getProducts();
  }, [cat]); //when category changes, run this useEffect hook fucntion by getting api

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
