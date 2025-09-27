import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticketItems: [],
  isLoading: false,
  isError: false,
  selectedTicket: null,
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
    // Optional - Extra Feature -> Marking Ticket Status
    updateTicketStatus: (state, action) => {
      const ticket = state.ticketItems.find(
        (ticket) => ticket.idNum === action.payload.idNum
      );
      if (ticket) {
        ticket.status = "Ongoing";
        console.log("This is it", ticket);
        state.selectedTicket = ticket.idNum;
      }
    },
  },
});

export const {
  renderTickets,
  removeTicket,
  setIsLoading,
  setIsError,
  updateTicketStatus,
} = ticketSlice.actions;

export default ticketSlice.reducer;
