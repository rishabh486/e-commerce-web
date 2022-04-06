import "./App.css";
import logo from "./logo.png";
import LoginPage from "./pages/loginPage";
import ProductPages from "./pages/productPages";
import SignupPage from "./pages/signupPage";
import CartPage from "./pages/cartPage";
import { WishlistPage } from "./pages/wishlistPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductPages />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/wishlist-page" element={<WishlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
