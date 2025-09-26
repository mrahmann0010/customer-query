import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resolvedIssues: [],
};

const resolvedSlice = createSlice({
  name: "resolved",
  initialState,
  reducers: {
    addToResolve: (state, action) => {
      state.resolvedIssues.push(action.payload);
    },
  },
});

export const { addToResolve } = resolvedSlice.actions;

export default resolvedSlice.reducer;
