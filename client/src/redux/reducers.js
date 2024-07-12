// src/redux/reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import categoriesReducer from './categoriesSlice';
import productsReducer from './productsSlice';
import ordersReducer from './ordersSlice';
import dataReducer from './dataSlice'; 

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  orders: ordersReducer,
  data: dataReducer 
});

export default rootReducer;
