import { useSelector } from "react-redux";

function Hero() {
  const issues = useSelector((state) => state.onGoing.onGoingIssues).length;
  const resolved = useSelector((state) => state.resolved.resolvedIssues).length;

  console.log(issues, resolved);
  return (
    <section className="px-8 py-16 bg-gray-100">
      <div className="grid grid-cols-2 gap-8">
        <ImgBox
          flip="transform scale-x-[-1]"
          gradient="bg-[linear-gradient(90deg,#3F2B96_0%,#A8C0FF_100%)]"
          count={issues}
          title="In-Progress"
        />
        <ImgBox
          flip="transform scale-x-[-1]"
          gradient="bg-[linear-gradient(90deg,#00C9FF_0%,#92FE9D_100%)]"
          count={resolved}
          title="Resolved"
        />
      </div>
    </section>
  );
}

export default Hero;

const ImgBox = ({ gradient, flip, count, title }) => {
  return (
    <div className={`relative w-full h-64 ${gradient} rounded-xl`}>
      <div className={`absolute inset-0 bg-curl-image bg-no-repeat`}></div>
      <div
        className={`absolute inset-0 bg-curl-image bg-no-repeat ${flip}`}
      ></div>

      {/* Centered text */}
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-white text-2xl font-normal">{title}</h2>
        <h3 className="text-white text-4xl font-bold">{count}</h3>
      </div>
    </div>
  );
};
