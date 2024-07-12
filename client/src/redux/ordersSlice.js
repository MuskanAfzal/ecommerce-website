import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    placeOrder(state, action) {
      state.push(action.payload);
    },
    clearOrders(state) {
      return [];
    }
  }
});

export const { placeOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
