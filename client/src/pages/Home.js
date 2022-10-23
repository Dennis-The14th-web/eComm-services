import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/Category";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
