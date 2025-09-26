import { createSlice } from "@reduxjs/toolkit";
import stat from "daisyui/components/stat";

const initialState = {
  onGoingIssues: [],
};

const onGoingSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    addToOngoing: (state, action) => {
      // Checking for existing ones
      const exists = state.onGoingIssues.find(
        (item) => item.idNum === action.payload.idNum
      );
      if (exists) console.log("It already Exists my boy");
      if (!exists) state.onGoingIssues.push(action.payload);
    },
    removeFromOngoing: (state, action) => {
      state.onGoingIssues = state.onGoingIssues.filter(
        (item) => item.idNum !== action.payload.idNum
      );
      console.log("Removed From the Store!");
    },
  },
});

export const { addToOngoing, removeFromOngoing } = onGoingSlice.actions;

export default onGoingSlice.reducer;
