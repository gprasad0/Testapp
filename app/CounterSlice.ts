// app/CounterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export actions to use in components
export const { increment, decrement } = counterSlice.actions;

// Export reducer to add to the store
export default counterSlice.reducer;
