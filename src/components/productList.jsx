import React from "react";
import ProductCard from "./productCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "D'usse",
      price: 19.99,
      image: "/assets/images/p1.jpg",
    },
    {
      id: 2,
      name: "Alison",
      price: 29.99,
      image: "/assets/images/P2.jpg",
    },
    {
      id: 3,
      name: "L'cosmetics",
      price: 39.99,
      image: "/assets/images/P3.jpg",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;