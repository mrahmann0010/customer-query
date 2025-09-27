import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticketItems: [],
  isLoading: false,
  isError: false,
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    renderTickets: (state, action) => {
      state.ticketItems = action.payload;
    },
    removeTicket: (state, action) => {
      state.ticketItems = state.ticketItems.filter(
        (item) => item.idNum !== action.payload.idNum
      );
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { renderTickets, removeTicket, setIsLoading, setIsError } =
  ticketSlice.actions;

export default ticketSlice.reducer;
