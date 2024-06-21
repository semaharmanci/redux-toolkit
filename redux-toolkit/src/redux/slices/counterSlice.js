import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, isDarkTheme: true },
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    toogleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export default counterSlice.reducer;

export const { increase, decrease, setCount, toogleTheme } = counterSlice.actions;
