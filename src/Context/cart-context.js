import { useContext, createContext, useReducer } from "react";
import { useProduct } from "./product-context";
import { cartReducer } from "../reducer/cart-reducer";
import { filterReducer } from "../reducer/filter-reducer";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const { items } = useProduct();
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: 0,
    totalPrice: 0,
    items: items,
    carts: [],
    wishlist: [],
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    categoryName: { men: false, women: false, kids: false },
    nofilter: true,
  });
  return (
    <CartContext.Provider
      value={{ state, dispatch, filterState, filterDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
