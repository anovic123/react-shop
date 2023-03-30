import { createSlice } from "@reduxjs/toolkit";

import { IFavoriteSlice } from "../../../common/types/favorite";

const initialState: IFavoriteSlice = {
  favoriteData: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favoriteData.push(action.payload)
    },
    removeFavorite(state, action) {
      state.favoriteData = state.favoriteData.filter((elem) => elem.id !== action.payload.id);
    },
    clearFavoriteList(state) {
      state.favoriteData = [];
    }
  } 
})

export const { addFavorite, removeFavorite, clearFavoriteList } = favoriteSlice.actions;

export default favoriteSlice.reducer;