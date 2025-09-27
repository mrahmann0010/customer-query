import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
      if (exists) {
        toast.error("Already working into it 👨‍💻");
        // console.log("It already Exists my boy");
      }
      if (!exists) {
        state.onGoingIssues.push(action.payload);
        toast.success("Added to Ongoing ⚙️");
      }
    },
    removeFromOngoing: (state, action) => {
      state.onGoingIssues = state.onGoingIssues.filter(
        (item) => item.idNum !== action.payload.idNum
      );
      toast.success("Issue has been resolved ☑️");
      // console.log("Removed From the Store!");
    },
  },
});

export const { addToOngoing, removeFromOngoing } = onGoingSlice.actions;

export default onGoingSlice.reducer;
