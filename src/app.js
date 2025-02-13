import React from "react";
import ProductList from "./components/productList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      <ProductList />
    </div>
  );
};

export default App;
