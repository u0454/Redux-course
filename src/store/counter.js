import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload.value;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
console.log(counterSlice);

export const counterActions = counterSlice.actions;
console.log(counterActions);
export default counterSlice.reducer; // get counterSlice.reducers
console.log(counterSlice.reducer);
