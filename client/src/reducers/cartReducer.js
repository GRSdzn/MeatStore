import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItemsCount: 0,
  },
  reducers: {
    setCartItemsCount: (state, action) => {
      state.cartItemsCount = action.payload;
    },
  },
});

export const { setCartItemsCount } = cartSlice.actions;
export default cartSlice.reducer;
