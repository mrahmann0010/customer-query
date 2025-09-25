import { CiCalendarDate } from "react-icons/ci";
import { FaCircleNotch } from "react-icons/fa";

function TicketCard({ issue }) {
  return (
    <div className="px-5 py-3 bg-white flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-normal">{issue.title}</h2>
        <p className="flex gap-1 items-center px-4 py-1.5 rounded-3xl bg-green-300 text-gray-700">
          <span>
            <FaCircleNotch />
          </span>
          <span>{issue.status}</span>
        </p>
      </div>

      <p className="text-lg text-gray-600 font-normal">{issue.description}</p>

      <div className="flex justify-between items-center">
        <span className="flex gap-2 text-gray-700 text-md font-medium">
          <p className="flex">
            <span>#</span>
            <span>{issue.idNum}</span>
          </p>

          {/* Based on priority */}
          <p
            className={`${
              issue.priorityStatus === "High"
                ? "text-red-500"
                : issue.priorityStatus === "Medium"
                ? "text-yellow-400"
                : "text-green-400"
            } text-md font-light`}
          >
            {issue.priorityStatus}
          </p>
        </span>
        <span className="flex gap-2 ">
          <p className="text-gray-600 text-md font-light">
            {issue.customerName}
          </p>

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
