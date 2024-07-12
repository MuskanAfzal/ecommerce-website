import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data;
  }
);

const getStoredProductIds = () => {
  const storedIds = localStorage.getItem('productIds');
  return storedIds ? JSON.parse(storedIds) : {};
};

const storeProductIds = (ids) => {
  localStorage.setItem('productIds', JSON.stringify(ids));
};

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    products: [],
    categories: [],
    status: 'idle',
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const storedProductIds = getStoredProductIds();

        // Assign a UUID to each product or reuse the existing one
        state.products = action.payload.products.map(product => {
          if (!storedProductIds[product.name]) {
            storedProductIds[product.name] = uuidv4();
          }
          return {
            ...product,
            id: storedProductIds[product.name]
          };
        });

        // Store the updated product IDs back to local storage
        storeProductIds(storedProductIds);

        state.categories = action.payload.categories;
        state.status = 'succeeded';
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default dataSlice.reducer;
