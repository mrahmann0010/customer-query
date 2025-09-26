import { useSelector, useDispatch } from "react-redux";
import { removeFromOngoing } from "../redux/onGoingSlice";
import { addToResolve } from "../redux/resolvedSlice";

const tasks = [
  {
    title: "Ongoing Task",
    subTitle: "Select a task that is currently in progress",
    id: "ongoing",
  },
  {
    title: "Resolved Task",
    subTitle: "Select a task to mark as resolved",
    id: "resolved",
  },
];

function StatusBar() {
  return (
    <div className="col-span-2 flex flex-col gap-2 py-6 px-4">
      <OngoingStatus />
      <ResolvedStatus />
    </div>
  );
}

export default StatusBar;

const OngoingStatus = ({ title, subTitle }) => {
  const onGoingIssues = useSelector((state) => state.onGoing.onGoingIssues);
  if (onGoingIssues.length !== 0) console.log("OngoingIssues", onGoingIssues);

  return (
    <div className="">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-gray-600 font-semibold">
          {tasks[0].title}
        </h3>
        <p className="text-sm text-gray-600 font-light">{tasks[0].subTitle}</p>
      </div>
      <div className="flex flex-col gap-4">
        {onGoingIssues.length === 0 ? (
          <NoItemCard des="No ongoing Task Now" />
        ) : (
          onGoingIssues.map((issue, index) => (
            <OngoingCard issue={issue} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

const ResolvedStatus = ({ title, subTitle }) => {
  const resolvedIssues = useSelector((state) => state.resolved.resolvedIssues);
  if (resolvedIssues.length !== 0)
    console.log("ResolvedIssues", resolvedIssues);

  return (
    <div className="">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-gray-600 font-semibold">
          {tasks[1].title}
        </h3>
        <p className="text-sm text-gray-600 font-light">{tasks[1].subTitle}</p>
      </div>
      <div className="flex flex-col gap-4">
        {resolvedIssues.length === 0 ? (
          <NoItemCard des="No ongoing Task Now" />
        ) : (
          resolvedIssues.map((issue, index) => (
            <ResolvedCard issue={issue} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

const OngoingCard = ({ issue }) => {
  const dispatch = useDispatch();
  const handleRemove = (issue) => {
    dispatch(removeFromOngoing(issue));
    // Also, add it to Resolved Lists
    dispatch(addToResolve(issue));
  };
  return (
    <span className="flex flex-col gap-2 px-4 py-2 bg-white rounded-md items-center">
      <p className="text-black text-md font-normal">{issue.title}</p>
      <button
        className="px-6 py-2 bg-green-500 rounded-md w-full mb-2"
        onClick={() => handleRemove(issue)}
      >
        Complete
      </button>
    </span>
  );
};

const ResolvedCard = ({ issue }) => {
  return (
    <span className="flex flex-col gap-2 px-4 py-2 bg-red-400 rounded-md items-center">
      <p className="text-black text-md font-normal">{issue.title}</p>
    </span>
  );
};

const NoItemCard = ({ des }) => {
  return <p>{des}</p>;
};
