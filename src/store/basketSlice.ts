import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../types/types";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketPosts: [],
  },
  reducers: {
    addBasketPost(
      state: { basketPosts: ICard[] },
      action: {
        payload: { post: ICard };
        type: string;
      }
    ) {
      state.basketPosts.push(action.payload.post);
      localStorage.setItem("books", JSON.stringify(state.basketPosts));
    },

    removeFavoritePost(state, action: PayloadAction<{ isbn13: string }>) {
      state.basketPosts = state.basketPosts.filter(
        (post: { isbn13: string }) => post.isbn13 !== action.payload.isbn13
      );
      localStorage.setItem("books", JSON.tringify(state.basketPosts));
    },

    removeFromCart(state, action: PayloadAction<{ isbn13: string }>) {
      state.post = state.post.filter(
        (post) => post.isbn13 !== action.payload.isbn13
      );
    },
    clearCart(state) {
      state.post = [];
    },
  },
});

export const { addBasketPost, removeFavoritePost } = basketSlice.actions;
export default basketSlice.reducer;
