// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getBooks = createAsyncThunk(
//   "books/getBooks",
//   async (_, { rejectWithValue }) => {
//     try {
//       const responce = await fetch("https://api.itbook.store/1.0/new");
//       if (!responce.ok) {
//         throw new Error("Error fetching books");
//       }

//       const data = await responce.json();
//       return data.Search;
//     } catch (error) {
//       return rejectWithValue((error as Error).message);
//     }
//   }
// );

// export const getBooksInfo = createAsyncThunk(
//   "books/getBooks",
//   async (isbn13: string, { rejectWithValue }) => {
//     try {
//       const responce = await fetch(
//         `https://api.itbook.store/1.0/books/${isbn13}`
//       );
//       if (!responce.ok) {
//         throw new Error("Error fetching book information");
//       }

//       const data = await responce.json();
//       console.log(data);
//       return data;
//     } catch (error) {
//       return rejectWithValue((error as Error).message);
//     }
//   }
// );

// const booksSlice = createSlice({
//   name: "books",
//   initialState: {
//     books: [],
//     bookInfo: {} | Array<{}>,
//     bookInfos: [],
//     status: null as null | "loading" | "fulfilled" | "rejected",
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getBooks.fulfilled, (state, action) => {
//         state.status = "fulfilled";
//         state.books = action.payload;
//       })
//       .addCase(getBooksInfo.fulfilled, (state, action) => {
//         state.bookInfo = action.payload;
//         state.bookInfos.push(action.payload);
//       });
//   },
// });

// export default booksSlice.reducer;
