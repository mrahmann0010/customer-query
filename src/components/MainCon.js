import Tickets from "./Tickets";
import StatusBar from "./StatusBar";

function MainCon() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-7 bg-gray-100 px-4 pb-10">
      <Tickets />
      <StatusBar />
    </section>
  );
}

export default MainCon;
