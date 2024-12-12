import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: { items: [] },
  reducers: {
    addProduct: (state, action) => {

      // when user is adding same product multiple times
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      if (existingProduct) {
        existingProduct.count += 1
      }
      else {
        state.items.push({ ...action.payload, count: 1 })
      }
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    incrementProduct: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.count += 1
      }
    },
    decrementProduct: (state, action) => {
      const product = state.items.find((item) => item.id = action.payload.id);
      if (product && product.count > 1) {
        product.count -= 1
      }
      else {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      }
    }


  },
});

export const { addProduct, removeProduct, incrementProduct, decrementProduct } = productSlice.actions;
export default productSlice.reducer;
