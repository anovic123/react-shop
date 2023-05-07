import { createSlice } from '@reduxjs/toolkit';

import { calcTotalPrice } from '../../../utils/calcTotalPrice';

import { ICartSlice } from '../../../common/types/cart';

import { toast } from 'react-toastify';

const initialState: ICartSlice = {
  cartData: [],
  totalPrice: 0,
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.cartData.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.cartData.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.cartData);
      toast.success('Successfully added to cart');
    },
    minusItem(state, action) {
      const findItem = state.cartData.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.cartData);
    },
    removeItem(state, action) {
      state.cartData = state.cartData.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = calcTotalPrice(state.cartData);
      toast.success('Product removed successfully');
    },
    clearItems(state) {
      state.cartData = [];
      state.totalPrice = 0;
      state.count = 0;
      toast.success('Cart was successfully emptied');
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
