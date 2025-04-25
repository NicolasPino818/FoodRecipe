import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};


const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      // Extract the recipe object from the dispatched action payload
      const recipe = action.payload;
  
      // Find the index of the recipe in the current favoriterecipes array by comparing idFood
      const existingIndex = state.favoriterecipes.findIndex(
        (fav) => fav.idFood === recipe.idFood
      );
  
      // If the recipe already exists in the favorites list
      if (existingIndex !== -1) {
        // Remove it from the array using its index
        state.favoriterecipes.splice(existingIndex, 1);
      } else {
        // If it doesn't exist, add the recipe to the favorites list
        state.favoriterecipes.push(recipe);
      }
    },
    removeFavoriteById: (state, action) => {
      const idToRemove = action.payload;
      state.favoriterecipes = state.favoriterecipes.filter(
        (fav) => fav.idFood !== idToRemove
      );
    },
    
  },
});

export const { toggleFavorite, removeFavoriteById } = favoritesSlice.actions;
export default favoritesSlice.reducer;
