import { CiCalendarDate } from "react-icons/ci";
import { FaCircleNotch } from "react-icons/fa";

function TicketCard({ issue }) {
  return (
    <div className="border-green-400 border px-4 py-3">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium">{issue.title}</h2>
        <p className="flex gap-1 items-center px-4 py-2 rounded-3xl bg-green-400">
          <span>
            <FaCircleNotch />
          </span>
          <span>{issue.status}</span>
        </p>
      </div>

      <p className="text-lg text-gray-600 font-normal">{issue.description}</p>

      <div className="flex justify-between items-center">
        <span className="flex gap-2">
          <p className="flex">
            <span>#</span>
            <span>{issue.idNum}</span>
          </p>
          <p>{issue.priorityStatus}</p>
        </span>
        <span className="flex gap-2">
          <p>{issue.customerName}</p>
          <p className="flex gap-1 items-center">
            <span>
              <CiCalendarDate />
            </span>
            <span>{issue.date}</span>
          </p>
        </span>
      </div>
    </div>
  );
}

export default TicketCard;
