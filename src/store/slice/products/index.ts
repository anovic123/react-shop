import { createSlice } from '@reduxjs/toolkit';
import { IProductsSlice } from '../../../common/types/products';
import { getProductsData } from '../../thunks/products';

const initialState: IProductsSlice = {
  data: [],
}


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsData.fulfilled, (state, action) => {
      state.data = action.payload;
    })
  }
})
export default productsSlice.reducer;