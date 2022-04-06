import { v4 as uuid } from "uuid";
import { nike_shoes } from "../../Assets/index";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "men",
    imageSrc: nike_shoes,
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "men",
    imageSrc: nike_shoes,
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "women",
    imageSrc: nike_shoes,
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "women",
    imageSrc: nike_shoes,
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "kids",
    imageSrc: nike_shoes,
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "kids",
    imageSrc: nike_shoes,
  },
  {
    _id: uuid(),
    title: "women category",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "women",
    imageSrc: nike_shoes,
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "kids",
    imageSrc: nike_shoes,
  },
];
