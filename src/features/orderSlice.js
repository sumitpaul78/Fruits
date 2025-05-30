import { createSlice, createAsyncThunk, isPending, isRejected } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

// Async thunk to fetch products
export const fetchOrders = createAsyncThunk("order_details/fetchOrders", async () => {
  const querySnapshot = await getDocs(collection(fireDB, "order_details"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
});

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
     .addCase(fetchOrders.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      // 👇 Use matcher for all pending actions
      .addMatcher(isPending(fetchOrders), (state) => {
        state.loading = true;
        state.error = null;
      })
      // 👇 Use matcher for all rejected actions
      .addMatcher(isRejected(fetchOrders), (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  }
});

export default orderSlice.reducer;
