import TicketCard from "./TicketCard";

const issues = [
  {
    title: "Login page not loading",
    status: "Open",
    description: "Users report that the login page hangs on submit.",
    idNum: 101,
    priorityStatus: "High",
    customerName: "Alice Johnson",
    date: "2025-09-25",
  },
  {
    title: "Payment gateway error",
    status: "In Progress",
    description: "Payment gateway returns a 500 error during checkout.",
    idNum: 102,
    priorityStatus: "Low",
    customerName: "David Kim",
    date: "2025-09-24",
  },
  {
    title: "Profile picture upload issue",
    status: "Resolved",
    description: "Profile picture upload fails for images over 5MB.",
    idNum: 103,
    priorityStatus: "Medium",
    customerName: "Sofia Martinez",
    date: "2025-09-23",
  },
];

function Tickets() {
  return (
    <div className="md:col-span-5 grid grid-cols-2 gap-4 px-16 py-10 border-red-400 border">
      {issues.map((issue, index) => (
        <TicketCard issue={issue} key={index} />
      ))}
    </div>
  );
}

export default Tickets;
