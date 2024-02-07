import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productData: [],
  userInfo: null,
};

const shopperSlice = createSlice({
  name: 'shopper',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.productData.findIndex((item) => item._id === action.payload._id);
      if (itemIndex !== -1) {
        // If item already exists in the cart, update its quantity
        state.productData[itemIndex].quantity += action.payload.quantity;
      } else {
        // If item is not in the cart, add it
        state.productData.push(action.payload);
      }
    },
  },
});

export const { addToCart } = shopperSlice.actions;

export default shopperSlice.reducer;
