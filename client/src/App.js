import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import SignupPage from "./pages/signupPage/SignupPage"; 
import LoginPage from './pages/loginPage/LoginPage';
import CartPage from './pages/cartPage/CartPage';
import ProductDetails from './pages/productDetails/ProductDetails';
import AdminProducts from './pages/adminProducts/AdminProducts';
import AdminCategoriesPage from './pages/adminCategoriesPage/AdminCategoriesPage';
import AdminOrders from './pages/adminOrders/AdminOrders';
import PrivateRoute from './components/PrivateRoute';
import AdminPanel from './pages/adminPanel/AdminPanel'; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/adminproducts" element={<PrivateRoute><AdminProducts /></PrivateRoute>} />
          <Route path="/admincategories" element={<PrivateRoute><AdminCategoriesPage /></PrivateRoute>} />
          <Route path="/adminorders" element={<PrivateRoute><AdminOrders /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
