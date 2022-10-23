import React from "react";
import { useLoaderData } from "react-router-dom";
import Products from "./Products";

const Shop = () => {
  const products = useLoaderData();
  return (
    <section class="text-gray-600 body-font grid grid-cols-3 w-9/12 mx-auto gap-6">
      {products.map((product) => (
        <Products key={product.id} product={product}></Products>
      ))}
    </section>
  );
};

export default Shop;
