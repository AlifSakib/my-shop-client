import React from "react";

const Products = ({ product }) => {
  const {
    title,
    price,
    image,
    category,
    rating: { rate },
  } = product;
  return (
    <div>
      <div class="">
        <a class="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            class="object-cover object-center w-full h-full block"
            src={image}
          />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 class="text-gray-900 title-font text-lg font-medium font-Montserrot">
            {title}
          </h2>
          <p class="mt-1">${price}</p>
        </div>
        <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Products;
