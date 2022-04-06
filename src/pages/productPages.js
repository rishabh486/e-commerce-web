import React from "react";
import ProductCard from "../components/productCard";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import "./productpage.css";
function ProductPages() {
  return (
    <div className="">
      <Navbar />
      <Sidebar />
      <ProductCard />
    </div>
  );
}

export default ProductPages;
