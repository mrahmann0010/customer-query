import { useSelector } from "react-redux";

function Hero() {
  const issues = useSelector((state) => state.onGoing.onGoingIssues).length;
  const resolved = useSelector((state) => state.resolved.resolvedIssues).length;

  console.log(issues, resolved);
  return (
    <section className="grid grid-cols-2">
      {/* <div
        className="w-full h-64 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/resources/vector1.png')" }}
      >
        <div className="absolute inset-0 bg-purple-700 bg-opacity-50"></div>
        <div className="relative z-10 text-white p-4">
          <h2 className="text-2xl font-bold">Banner Title</h2>
        </div>
      </div> */}
      <p className="text-4xl">Ongoing: {issues}</p>
      <p className="text-4xl">resolved: {resolved}</p>
    </section>
  );
}

export default Hero;
