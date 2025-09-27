import toast from "react-hot-toast";
import { CiCalendarDate } from "react-icons/ci";
import { FaCircleNotch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToOngoing } from "../redux/onGoingSlice";
import { updateTicketStatus } from "../redux/ticketSlice";

function TicketCard({ issue }) {
  const dispatch = useDispatch();

  const addIssueToStore = () => {
    dispatch(addToOngoing(issue));
    dispatch(updateTicketStatus(issue));
  };

  return (
    <div
      className="px-5 py-4 bg-white flex flex-col gap-1 cursor-pointer rounded-lg"
      onClick={addIssueToStore}
    >
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-lg font-semibold">{issue.title}</h2>
        <p
          className={`flex gap-1 items-center px-4 py-1.5 rounded-3xl text-gray-700 ${
            issue.status === "Open" ? "bg-green-300" : "bg-yellow-300"
          }`}
        >
          <span>
            <FaCircleNotch />
          </span>
          <span>{issue.status}</span>
        </p>
      </div>

      <p className="text-lg text-gray-600 font-normal">{issue.description}</p>

      <div className="flex justify-between items-center">
        <span className="flex gap-2 text-gray-500 text-md font-normal">
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
                ? "text-yellow-500"
                : "text-green-400"
            } text-md font-normal`}
          >
            {issue.priorityStatus}
          </p>
        </span>
        <span className="flex gap-2 ">
          <p className="text-gray-600 text-md font-light">
            {issue.customerName}
          </p>

          <p className="flex gap-1 items-center text-md text-gray-500">
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
