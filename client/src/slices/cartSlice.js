import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    grandTotal: 0,
    showAlert: false,
  },
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    setGrandTotal: (state, action) => {
      state.grandTotal = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.grandTotal = 0;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    setShowAlert: (state, action) => {
      state.showAlert = action.payload;
    },
  },
});

export const {
  setCartItems,
  setGrandTotal,
  clearCart,
  removeFromCart,
  setShowAlert,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectGrandTotal = (state) => state.cart.grandTotal;
export const selectShowAlert = (state) => state.cart.showAlert;

export default cartSlice.reducer;
