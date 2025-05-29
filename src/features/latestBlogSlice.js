import { createSlice, createAsyncThunk, isPending, isRejected } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

// Async thunk to fetch products
export const fetchBlogs = createAsyncThunk("Blogs/fetchProducts", async () => {
  const querySnapshot = await getDocs(collection(fireDB, "Blogs"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
});

const blogSlice = createSlice({
  name: "Blogs",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
     .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      // 👇 Use matcher for all pending actions
      .addMatcher(isPending(fetchBlogs), (state) => {
        state.loading = true;
        state.error = null;
      })
      // 👇 Use matcher for all rejected actions
      .addMatcher(isRejected(fetchBlogs), (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  }
});

export default blogSlice.reducer;
