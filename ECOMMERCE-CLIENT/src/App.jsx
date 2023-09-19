import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = true; //if the user is already logged in
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} /> {/*if the user is already logged in, then the login page redirects to home page*/}
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />{/*if the user is already logged in, then the register page redirects to home page*/}
      </Routes>
    </Router>
  );
};

export default App;
