import { createSlice } from '@reduxjs/toolkit';
import { ICartSlice } from '../../../common/types/cart';
import { calcTotalPrice } from '../../../utils/calcTotalPrice';

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
    },
    clearItems(state) {
      state.cartData = [];
      state.totalPrice = 0;
      state.count = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
