import { createSlice } from '@reduxjs/toolkit';

import { IProductsSlice } from '../../../common/types/products';
import { getProductsData, getSingleProductData } from '../../thunks/products';

const initialState: IProductsSlice = {
  data: [],
  singleData: {
    id: 0,
    title: '',
    description: '',
    images: [],
    creationAt: '',
    price: 0,
    updatedAt: '',
  },
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
    builder.addCase(getSingleProductData.pending, (state, action) => {
      state.isLoading = true;   
    })
    builder.addCase(getSingleProductData.fulfilled, (state, action) => {
      state.isLoading = false;   
      state.singleData = action.payload;
    })
  }
})
export default productsSlice.reducer;