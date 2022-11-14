import { createSlice } from "@reduxjs/toolkit";

const testInitialState = {
  value: 0,
};

const test = createSlice({
  name: "ttt",
  initialState: testInitialState,
  reducers: {
    increment() {},
    decrement() {},
    increase() {},
  },
});

export const testActions = test.actions;
export default test.reducer;
