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
    incrementItem: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id)
      if (item) {
        item.quantity++;
      }
     },
    decrementItem: (state, action) => {
     const item = state.productData.find((item) => item._id === action.payload._id)
     if (item && item.quantity > 1) {
      item.quantity--;
    }
    },

    deleteItem: (state, action) => {
      state.productData = state.productData.filter((item) => item._id !== action.payload)
    },
    resetCart: (state) => {
      state.productData = []
    }

  },
});

export const { addToCart, deleteItem, resetCart, decrementItem, incrementItem } = shopperSlice.actions;

export default shopperSlice.reducer;
