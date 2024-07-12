import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      console.log('Attempting to add to cart:', newItem);

      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        console.log('Increased quantity:', existingItem);
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.img
        });
        console.log('Added new item to cart:', newItem);
      }
      state.totalQuantity++;
      console.log('Updated total quantity:', state.totalQuantity);
    },
    removeFromCart(state, action) {
      const { id } = action.payload;  // Expecting an object with an id property
      console.log('Received id for removal:', id);

      const existingItem = state.items.find(item => item.id === id);
      console.log('Found item for removal:', existingItem);

      if (!existingItem) {
        console.error("No item found with id:", id);
        return;
      }

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        console.log('Decreased quantity for item:', existingItem);
      } else {
        state.items = state.items.filter(item => item.id !== id);
        console.log('Removed item from cart as quantity was 1:', existingItem);
      }
      state.totalQuantity--;
      console.log('Decreased total cart quantity:', state.totalQuantity);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
