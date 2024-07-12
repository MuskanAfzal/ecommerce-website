import { cartSlice, categoriesSlice, productsSlice, ordersSlice } from './reducers';

// Export the auto-generated action creators
export const { addToCart, removeFromCart } = cartSlice.actions;
export const { fetchCategories } = categoriesSlice.actions;
export const { receiveProducts } = productsSlice.actions;
export const { placeOrder } = ordersSlice.actions;
