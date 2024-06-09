import { configureStore } from "@reduxjs/toolkit";

import favoritesSlice from "./favoritesSlice";
import basketSlice from "./basketSlice";

export default configureStore({
  reducer: {
    favorites: favoritesSlice,
    basket: basketSlice,
  },
});
