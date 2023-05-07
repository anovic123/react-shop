import { createSlice } from "@reduxjs/toolkit";

import { IFavoriteSlice } from "../../../common/types/favorite";

import { toast } from 'react-toastify';


const initialState: IFavoriteSlice = {
  favoriteData: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favoriteData.push(action.payload)
      toast.success('successfully added to favorites')
    },
    removeFavorite(state, action) {
      state.favoriteData = state.favoriteData.filter((elem) => elem.id !== action.payload.id);
      toast.success('successfully removed from favorites')
    },
    clearFavoriteList(state) {
      state.favoriteData = [];
      toast.success('successfully cleared the favorites list')
    }
  } 
})

export const { addFavorite, removeFavorite, clearFavoriteList } = favoriteSlice.actions;

export default favoriteSlice.reducer;