import React, { useState, useEffect } from "react";
import { useProduct } from "../Context/product-context";
import { useCart } from "../Context/cart-context";
import { favourite_icon } from "../Assets/index";
import "./product.css";
function ProductCard() {
  const { items } = useProduct();
  const {
    dispatch,
    filterState: { nofilter, categoryName },
  } = useCart();

  const [filteredProducts, setFilteredProducts] = useState(items);
  useEffect(() => {
    updatedProduct();
  }, [categoryName]);
  function updatedProduct() {
    let sortedProducts = items;

    let categoryProducts = [];
    let fProducts = [];

    // if (sort) {
    //   sortedProducts = sortedProducts.sort((a, b) =>
    //     sort === "lowtohigh" ? a.price - b.price : b.price - a.price
    //   );
    //  if (!category.men === false && !category.women === false) {
    //   return
    //    }console.log(nofilter)
    console.log(nofilter);
    if (nofilter) {
      // setFilteredProducts(sortedProducts)
      fProducts = sortedProducts;
    }
    if (categoryName.men) {
      categoryProducts = sortedProducts.filter(
        (item) => "men" === item.categoryName
      );
      //   // return sortedProducts;
      //   // sortedProducts.push(...items)
      //   // setFilteredProducts([...filteredProducts,...categoryProducts])
      fProducts = [...fProducts, ...categoryProducts];
    }
    if (categoryName.women) {
      categoryProducts = sortedProducts.filter(
        (item) => "women" === item.categoryName
      );
      // sortedProducts.push(...items)
      // return sortedProducts;
      fProducts = [...fProducts, ...categoryProducts];
      // setFilteredProducts([...filteredProducts,...categoryProducts])
    }
    if (categoryName.kids) {
      categoryProducts = sortedProducts.filter(
        (item) => "kids" === item.categoryName
      );
      // sortedProducts.push(...items)
      fProducts = [...fProducts, ...categoryProducts];
      // setFilteredProducts([...filteredProducts,...categoryProducts])
      // return sortedProducts;
    }
    setFilteredProducts(fProducts);
  }

  return (
    <div>
      {filteredProducts.map((item) => (
        <div className="product-grid">
          <div class="card-exit ">
            <div class="card-img">
              <img
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16045848/2021/12/13/c42ef067-9fbe-4077-a48c-fca6331796ab1639383810735-Nike-Court-Vision-Low-Mens-Shoes-7251639383810387-1.jpg"
                class="cross-image "
              />
            </div>
            <div class="card-content">
              <p class="card-body">{item.title}</p>
              <span class="price">$50</span>
              <del class="original-price">$120</del>
              <b class="discount-price">24% OFF</b>
            </div>
            <div class="card-button">
              <button
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
                class="button-container-button primary-button cart"
              >
                Add To Cart
              </button>
            </div>
            <button class="exit-button">
              <span>
                <img
                  onClick={() =>
                    dispatch({ type: "ADD_TO_WISHLIST", payload: item })
                  }
                  src={favourite_icon}
                  class="exit-button-cross"
                  alt=""
                />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
