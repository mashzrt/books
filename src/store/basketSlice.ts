import { createSlice } from "@reduxjs/toolkit";
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
    },
  },
});
export const { addBasketPost } = basketSlice.actions;
export default basketSlice.reducer;