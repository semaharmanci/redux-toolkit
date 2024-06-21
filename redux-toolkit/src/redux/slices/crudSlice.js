import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      title: "title",
      author: "yazar",
      assigned_to: "sema",
      end_date: "2024-05-25",
      id: "72732848326491",
    },
  ],
};
const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      action.payload.id = v4(); //essiz id
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex((i) => i.id === action.payload.id);
      state.tasks.splice(index, 1, action.payload);
    },
    deleteTask: (state, action) => {
      const filtred = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = filtred;
    },
  },
});
export default crudSlice.reducer;

export const { addTask, editTask, deleteTask } = crudSlice.actions;
