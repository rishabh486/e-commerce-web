import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./Context/cart-context";
import { ProductDataProvider } from "./Context/product-context";
import { BrowserRouter as Router } from "react-router-dom";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductDataProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductDataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
