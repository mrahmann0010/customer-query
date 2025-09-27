import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TicketCard from "./TicketCard";
import { renderTickets, setIsError, setIsLoading } from "../redux/ticketSlice";

// const issues = [
//   {
//     title: "Login page not loading",
//     status: "Open",
//     description: "Users report that the login page hangs on submit.",
//     idNum: 101,
//     priorityStatus: "High",
//     customerName: "Alice Johnson",
//     date: "2025-09-25",
//   },
//   {
//     title: "Payment gateway error",
//     status: "In Progress",
//     description: "Payment gateway returns a 500 error during checkout.",
//     idNum: 102,
//     priorityStatus: "Low",
//     customerName: "David Kim",
//     date: "2025-09-24",
//   },
//   {
//     title: "Profile picture upload issue",
//     status: "Resolved",
//     description: "Profile picture upload fails for images over 5MB.",
//     idNum: 103,
//     priorityStatus: "Medium",
//     customerName: "Sofia Martinez",
//     date: "2025-09-23",
//   },
// ];

function Tickets() {
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.tickets.ticketItems);

  useEffect(() => {
    const fetchTickets = async () => {
      dispatch(setIsLoading(true));
      try {
        const response = await fetch("./data.json");

        if (!response.ok) return new Error("Data could not be fetched ❌");
        const data = await response.json();
        dispatch(renderTickets(data));
        // console.log(data);
      } catch (error) {
        dispatch(setIsError(error.message));
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="col-span-1 md:col-span-5 px-4">
      <h2 className="pb-4 text-xl font-semibold">Tourist-Issues</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {issues.map((issue, index) => (
          <TicketCard issue={issue} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Tickets;
