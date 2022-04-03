import "./App.css";
import logo from "./logo.png";
import LoginPage from "./pages/loginPage";
import ProductPages from "./pages/productPages";
import SignupPage from "./pages/signupPage";

function App() {
  return (
    <div className="App">
      <LoginPage />
      <SignupPage />
      <ProductPages />
    </div>
  );
}

export default App;
