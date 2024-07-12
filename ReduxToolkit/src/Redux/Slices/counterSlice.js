import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const IncrementBy10 = createAsyncThunk(
  "counter/incrementBy10",
  async (amount) => {
    console.log("amount", amount);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    // incrementByAmount: (state, action) => state + action.payload,
  },
  extraReducers: (builder) => {
    builder
      .addCase(IncrementBy10.pending, (state, action) =>
        console.log("pending ", state.value, action)
      )
      .addCase(IncrementBy10.fulfilled, (state, action) => {
        console.log("fulfilled ", action.payload);
        state.value += action.payload;
      })
      .addCase(IncrementBy10.rejected, (state, action) => {
        console.log("rejected ", action.error.message);
      });
  },
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
