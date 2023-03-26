import { createSlice } from '@reduxjs/toolkit';
import { IProductsSlice } from '../../../common/types/products';
import { getProductsData } from '../../thunks/products';

const initialState: IProductsSlice = {
  data: [],
  isLoading: false,
}


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsData.pending, (state) => {
      state.data = [];
      state.isLoading = true;
    })
    builder.addCase(getProductsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
  }
})
export default productsSlice.reducer;